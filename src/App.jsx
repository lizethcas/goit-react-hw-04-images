import { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import { getImage } from "./services/api";
import { useToggle } from "./hooks/useToggle";
import "./App.css";

function App() {
  const [searchUser, setSearchUser] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [total, setTotal] = useState("");
  const [data, setTData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, open, close } = useToggle(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const user = e.target.children[1].value;
    const perPageValue = 12;
    setSearchUser(user);
    setPerPage(perPageValue);

    handleSearchSubmit(user, perPageValue);
  };

  const handleSearchSubmit = async (searchUser, perPage) => {
    setIsLoading(true);
    getImage(searchUser, perPage).then((response) => {
      if (response.data.total === 0) {
        setTotal(response.data.total);
      }
      const newData = response.data.hits.map((item) => ({
        id: item.id,
        webformatURL: item.webformatURL,
        largeImageURL: item.largeImageURL,
      }));
      setTData(newData);
      setTotal(response.data.total);
      setIsLoading(false);
    });
  };

  const handleLoadMore = () => {
    console.log(perPage + " " + total);
    if (perPage > total) {
      alert("No se encontraron mas resultados");
    } else {
      setIsLoading(true);
      setPerPage((prevPerPage) => {
        const newPerPage = prevPerPage + 12;
        handleSearchSubmit(searchUser, newPerPage);
        return newPerPage;
      });
    }
  };

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL);
    open();
  };
  return (
    <>
      <Searchbar handleSearchSubmit={handleSearch} />
      {total === 0 ? (
        <h2>No se encontraron resultados de la busqueda</h2>
      ) : (
        <ImageGalleryItem
          data={data}
          isLoading={isLoading}
          selectedImage={handleImageClick}
        />
      )}

      {data.length != 0 && <Button handleLoadMore={handleLoadMore} />}

      {isOpen && <Modal selectedImage={selectedImage} handleModal={close} />}
    </>
  );
}

export default App;
