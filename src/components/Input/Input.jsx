import PropTypes from "prop-types";
const Input = ({
  className = "",
  placeholder = "",
  onChangeHandler,
  value = "",
  enterKeyHandler = "",
}) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={(e) => {
        onChangeHandler(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          enterKeyHandler();
        }
      }}
      value={value}
    ></input>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
  enterKeyHandler: PropTypes.func.isRequired,
};

export default Input;
