import * as Dialog from '@radix-ui/react-dialog'
import './Modal.css'

function Modal({ isOpen, onClose, children }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => {
        if (!open) onClose();
    }}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        
        <Dialog.Content 
            className="modal-dialog-wrapper"
            style={{ pointerEvents: 'auto' }} // Թույլ ենք տալիս սեղմել wrapper-ի վրա
            onClick={(e) => {
                // Եթե սեղմել ենք հենց wrapper-ին (այսինքն՝ պատուհանից դուրս), փակում ենք
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <Dialog.Close asChild>
                <button className="close close_btn" aria-label="Close">
                  <span aria-hidden="true" className="close_icon"></span>
                </button>
              </Dialog.Close>
              {children}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
