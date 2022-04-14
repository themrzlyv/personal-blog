import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';

interface iProps {
  show: boolean;
  onClose: () => void;
  backDropStyles?: React.CSSProperties;
  modalStyles?: React.CSSProperties;
  children: React.ReactNode;
  innerClose?: boolean;
}

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  initial: {
    opacity: 0,
    scale: 0.25,
  },
  current: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const Modal: React.FC<iProps> = (props) => {
  const { show, onClose, backDropStyles, modalStyles, children, innerClose } = props;

  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClick = React.useCallback(
    (e) => {
      if (modalRef?.current?.contains(e.target)) {
        return;
      }
      onClose();
    },
    [onClose],
  );

  React.useEffect(() => {
    if (show) {
      if (!innerClose) {
        document.addEventListener('mousedown', handleClick);
      }
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [show, innerClose, handleClick]);

  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-full h-full bg-black bg-opacity-70 fixed top-0 left-0 bottom-0 right-0 z-50"
          style={{ ...backDropStyles }}
        >
          <motion.div
            className="w-2/4 fixed top-40 left-0 right-0 mx-auto bg-white border-none rounded-xl p-3"
            ref={modalRef}
            style={{ ...modalStyles }}
            variants={modal}
            initial="initial"
            animate="current"
            exit="exit"
          >
            <div className="relative w-full h-full flex justify-end items-center mb-3">
              {innerClose && (
                <button className="text-black p-2 hover:bg-gray-100 rounded-full" onClick={onClose}>
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <div className="relative w-full h-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
