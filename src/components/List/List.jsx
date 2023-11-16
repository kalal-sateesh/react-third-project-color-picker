import styles from "./List.module.css";
import PropTypes from "prop-types";

const List = ({ list, listClickHandler }) => {
  const listItems = list.map((ele, index) => (
    <li
      key={index}
      style={{
        backgroundColor: `${ele}`,
        listStyle: "none",
        height: "2.5rem",
        width: "2.5rem",
        margin: "0.34rem 0.3rem",
        borderRadius: "50%",
        cursor: "pointer",
        border: "1px solid rgb(255, 254, 254)",
      }}
      onClick={() => {
        listClickHandler(ele);
      }}
    ></li>
  ));

  return (
    <ul className={styles.list}>
      <li
        style={{
          backgroundColor: "pink",
          listStyle: "none",
          height: "2.5rem",
          width: "2.5rem",
          margin: "0.34rem 0.3rem",
          borderRadius: "50%",
          cursor: "pointer",
          border: "1px solid rgb(255, 254, 254)",
        }}
        onClick={() => {
          listClickHandler("pink");
        }}
      ></li>
      <li
        style={{
          backgroundColor: "yellow",
          listStyle: "none",
          height: "2.5rem",
          width: "2.5rem",
          margin: "0.34rem 0.3rem",
          borderRadius: "50%",
          cursor: "pointer",
          border: "1px solid rgb(255, 254, 254)",
        }}
        onClick={() => {
          listClickHandler("yellow");
        }}
      ></li>
      <li
        style={{
          backgroundColor: "lightgreen",
          listStyle: "none",
          height: "2.5rem",
          width: "2.5rem",
          margin: "0.34rem 0.3rem",
          borderRadius: "50%",
          cursor: "pointer",
          border: "1px solid rgb(255, 254, 254)",
        }}
        onClick={() => {
          listClickHandler("lightgreen");
        }}
      ></li>
      <li
        style={{
          backgroundColor: "lightblue",
          listStyle: "none",
          height: "2.5rem",
          width: "2.5rem",
          margin: "0.34rem 0.3rem",
          borderRadius: "50%",
          cursor: "pointer",
          border: "1px solid rgb(255, 254, 254)",
        }}
        onClick={() => {
          listClickHandler("lightblue");
        }}
      ></li>
      {listItems}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array,
  listClickHandler: PropTypes.func.isRequired,
};

export default List;
