import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

interface ServiceImageModalProps {
  isOpen: boolean
  closeModal: () => void
  image: string
  title: string
}

export default function ServiceImageModal({ isOpen, closeModal, image, title }: ServiceImageModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform rounded-2xl bg-white p-6 shadow-xl transition-all">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 hover:bg-white"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
                
                <Dialog.Title className="mt-4 text-center text-lg font-semibold">
                  {title}
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
