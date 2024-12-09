import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Email to business
    const businessEmailContent = `
      New Order Request from Creative Hub Website

      Service Details:
      - Selected Service: ${data.selectedService}

      Size & Quantity:
      - Size: ${data.measurements.size}
      - Quantity: ${data.measurements.quantity}
      - Additional Notes: ${data.measurements.additionalNotes || 'None'}

      Client Details:
      - Name: ${data.clientDetails.name}
      - Email: ${data.clientDetails.email}
      - Phone: ${data.clientDetails.phone}
      - Country: ${data.clientDetails.country}
    `;

    // Email to client
    const clientEmailContent = `
      Dear ${data.clientDetails.name},

      Thank you for your interest in Creative Hub's services. We have received your quotation request for:

      Service: ${data.selectedService}
      Quantity: ${data.measurements.quantity}

      We will review your request and get back to you with a detailed quotation within 24-48 business hours.

      Order Details for Your Reference:
      - Size: ${data.measurements.size}
      - Additional Notes: ${data.measurements.additionalNotes || 'None'}

      If you have any questions in the meantime, please don't hesitate to contact us.

      Best regards,
      The Creative Hub Team
    `;

    // Send email to business
    await sgMail.send({
      to: process.env.BUSINESS_EMAIL,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Creative Hub Orders'
      },
      subject: 'New Order Request - Creative Hub',
      text: businessEmailContent,
      html: businessEmailContent.replace(/\n/g, '<br>'),
    });

    // Send confirmation email to client
    await sgMail.send({
      to: data.clientDetails.email,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER!,
        name: 'Creative Hub'
      },
      subject: 'Order Request Received - Creative Hub',
      text: clientEmailContent,
      html: clientEmailContent.replace(/\n/g, '<br>'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    );
  }
}
