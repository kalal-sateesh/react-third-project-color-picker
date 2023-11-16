import PropTypes from "prop-types";
const Button = ({
  className = "",
  children = "",
  onClickHandler,
  disabled = false,
}) => {
  return (
    <button className={className} onClick={onClickHandler} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
export default Button;
