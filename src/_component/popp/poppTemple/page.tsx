import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  Temple: {
    id: number;        // Change 0 to number
    name: string;      // Change "" to string
    img: string;       // Change "" to string
    info: string;      // Change "" to string
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, Temple }) => {
  if (!isOpen || !Temple) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center mt-10" 
      onClick={onClose}
    >
      <div className="bg-blue-950 rounded-2xl p-6 relative mx-5">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400 cursor-pointer"
        >
          &times; 
        </button>
        <div className='md:flex justify-center items-center pt-8'>
            <div className='h-48 md:h-auto overflow-hidden'>
          <img 
            src={Temple.img} 
            alt={Temple.name} // Use Temple.name for better accessibility
            className="rounded-lg w-72 lg:max-w-60 m-auto" 
            />
            </div>
          <div className='gap-y-5 mt-4 md:mt-0'>
            <h2 className="text-xl font-semibold text-center">{Temple.name}</h2>
            <p className="text-white text-lg max-w-lg lg:p-8 p-2">{Temple.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;