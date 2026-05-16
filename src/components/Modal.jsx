import * as Dialog from '@radix-ui/react-dialog';

function Modal({ isOpen, onClose, children }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-full max-w-[27%] rounded-0 focus:outline-none md:max-w-[87%] md:my-[14%]">
          <div className="relative">
            <Dialog.Close asChild>
                <button className="absolute right-0 top-0 opacity-100 z-10 border-0 bg-transparent cursor-pointer p-[10px]" aria-label="Close">
                    <img src="/images/close_icon.svg" alt="close" className="w-[1.25vw] h-[1.25vw] md:w-[4vw] md:h-[4vw]" />
                </button>
            </Dialog.Close>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
