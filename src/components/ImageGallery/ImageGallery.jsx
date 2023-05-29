import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ children }) => {
  return (
    <>
      <div className={styles.gallery__container}>
        <ul className={styles.gallery}>{children}</ul>
      </div>
    </>
  );
};
ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ImageGallery;
