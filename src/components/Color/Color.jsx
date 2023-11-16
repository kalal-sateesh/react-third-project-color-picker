import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import SelectColor from "../SelectColor/SelectColor";
import styles from "./Color.module.css";

const colorPaletteRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const namedColorRegex =
  /^(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellowgreen)$/i;

const Color = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [color, setColor] = useState("");

  const lastColor = list[list.length - 1];
  const defaultColor = "lightBlue";

  const onChangeHandler = (data) => {
    setItem(data);
  };

  const dublicate = list.includes(item);

  const onClickHandler = () => {
    if (
      item.trim().length &&
      ((colorPaletteRegex.test(item) && !dublicate) ||
        (namedColorRegex.test(item) && !dublicate))
    ) {
      setList([...list, item]);
      setItem("");
      setColor("");
    } else {
      setItem("");
      setColor(item);
    }
  };

  const listClickHandler = (color) => {
    setColor(color);
  };

  return (
    <div className="mt-4">
      <Input
        className={styles.input}
        placeholder="Enter color Name"
        onChangeHandler={onChangeHandler}
        enterKeyHandler={onClickHandler}
        value={item}
      ></Input>
      <Button
        disabled={!item.trim().length}
        className={
          item.trim().length ? `${styles.buttonEnabled}` : `${styles.button}`
        }
        onClickHandler={onClickHandler}
      >
        Add Color
      </Button>
      <SelectColor
        backgroundColor={lastColor}
        color={color}
        item={item}
        defaultColor={defaultColor}
      ></SelectColor>
      <List list={list} listClickHandler={listClickHandler}></List>
    </div>
  );
};

export default Color;
