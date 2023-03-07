import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IModal {
  children: React.ReactNode;
  onClose(): void;
  actionBar: React.ReactNode;
}

const Modal = ({ children, onClose, actionBar }: IModal) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 rounded-md bg-white p-10">
        <div className="flex h-full flex-col justify-between">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container') as HTMLDivElement
  );
};

export default Modal;
