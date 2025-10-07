import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    img: string;
    name: string;
    discrption: string;
    fullDiscrption: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mt-10 " onClick={onClose}>
      <div className="bg-blue-950 rounded-2xl p-6 relative mx-5">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400 cursor-pointer"
        >
          &times; 
        </button>
        <div className='md:flex justify-center items-center pt-8 '>
        <img src={service.img} alt="" className="rounded-lg w-72 lg:max-w-60 m-auto" />
        <div className='gap-y-5 mt-4 md:mt-0'>
        <h2 className="text-xl font-semibold text-center">{service.name}</h2>
        <p className="text-white text-lg max-w-lg lg:p-8 p-2">{service.fullDiscrption}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;