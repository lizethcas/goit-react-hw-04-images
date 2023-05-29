import PropTypes from "prop-types";

const Button = ({ handleLoadMore }) => {
  return (
    <>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};
Button.propTypes = {
  handleLoadMore: PropTypes.func,
};
export default Button;
