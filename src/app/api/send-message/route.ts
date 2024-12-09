import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Email to business
    const emailContent = `
      New Message from Creative Hub Website Contact Form

      From:
      - Name: ${data.name}
      - Email: ${data.email}

      Message:
      ${data.message}
    `;

    // Send email to business
    await sgMail.send({
      to: process.env.BUSINESS_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Creative Hub Contact Form'
      },
      subject: 'New Contact Form Message - Creative Hub',
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Send confirmation email to user
    const confirmationContent = `
      Dear ${data.name},

      Thank you for contacting Creative Hub. We have received your message and will get back to you shortly.

      Your message:
      "${data.message}"

      Best regards,
      The Creative Hub Team
    `;

    await sgMail.send({
      to: data.email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Creative Hub'
      },
      subject: 'Message Received - Creative Hub',
      text: confirmationContent,
      html: confirmationContent.replace(/\n/g, '<br>'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
