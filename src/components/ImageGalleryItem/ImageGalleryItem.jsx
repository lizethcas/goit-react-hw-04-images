import ImageGallery from "../ImageGallery/ImageGallery";
import { Oval } from "react-loader-spinner";

import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
const ImageGalleryItem = ({ data, isLoading, selectedImage  }) => {
  return (
    <ImageGallery>
      {data &&
        data.map((image) => (
          <li key={image.id}>
            {isLoading ? (
              <div>
                <Oval type="Oval" color="#00BFFF" height={100} width={100} />
              </div>
            ) : (
              <img
                className={styles.img}
                src={image.webformatURL}
                alt="foto"
                onClick={() => selectedImage (image.largeImageURL)}
              />
            )}
          </li>
        ))}
    </ImageGallery>
  );
};
ImageGalleryItem.propTypes = {
  data: PropTypes.array.isRequired,
  selectedImage : PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};
export default ImageGalleryItem;
