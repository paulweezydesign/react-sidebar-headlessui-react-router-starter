import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaBars } from 'react-icons/fa';
export default function Sidebar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md   px-4 py-2 text-sm font-medium text-[#242424] text-4xl  "
        >
          <FaBars />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="-translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-[300px] h-screen absolute top-0 right-0 transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="  px-4 py-2 text-3xl text-[#242424] "
                      onClick={closeModal}
                    >
                      &times;
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Menu
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
