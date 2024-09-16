import React, { useState } from "react";

const Modal = (imageSrc) => {
  //Untuk set gambar apakah terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false);

  //Set modal ketika terbuka
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={imageSrc} alt='' onClick={openModal} />
    </div>
  );
};

export default Modal;
