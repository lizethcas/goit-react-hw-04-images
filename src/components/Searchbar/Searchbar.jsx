import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ handleSearchSubmit, search }) => {
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSearchSubmit}>
          <button type="submit" className={styles.button}>
            <span>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={search}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  handleSearchSubmit: PropTypes.func,
  search: PropTypes.func,
};
export default Searchbar;
