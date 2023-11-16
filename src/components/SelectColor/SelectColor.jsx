import PropTypes from "prop-types";
const SelectColor = ({
  backgroundColor,
  color = "",
  item = "",
  defaultColor = "",
}) => {
  return (
    <div
      style={{
        width: "330px",
        height: "330px",
        margin: "auto",
        marginTop: "2%",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: `${
          (!color && backgroundColor) ||
          (color && color) ||
          (!(item && color) && defaultColor)
        }`,
      }}
    ></div>
  );
};
SelectColor.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  item:PropTypes.string,
  defaultColor:PropTypes.string,
};
export default SelectColor;
