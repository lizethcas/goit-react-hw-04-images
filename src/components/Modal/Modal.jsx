import styles from "./Modal.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ selectedImage, handleModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModal]);
  return (
    <div className={styles.overlay} onClick={handleModal}>
      <div className={styles.modal}>
        <img src={selectedImage} alt="imagen" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  handleModal: PropTypes.func,
  selectedImage: PropTypes.string,
};
export default Modal;
