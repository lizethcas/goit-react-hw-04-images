import axios from "axios";

export const getImage = (searchTerm, perPage) =>
  axios
    .get(
      `https://pixabay.com/api/?q=${searchTerm}&page=1&key=35615904-ca34482b054904da89b2bc800&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .catch((error) => {
      console.log(error);
    });
