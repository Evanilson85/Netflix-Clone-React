import "./buttonOpen.css";
import React, { useState } from "react";

import Menu from "../Menu";
const Button = () => {
  const [open, setOpen] = useState("");
  const [check, setCheck] = useState(false);

  function menu(e) {
    //! setOpen(open ? "" : "open");
    // console.log(e.target);
    // let check = e.target.checked;
    if (open === "") {
      setOpen("open");
      setCheck(true);
    } else {
      setOpen("");
      setCheck(false);
      //console.log(check, "fechado");
    }
  }

  return (
    <div className="bt">
      <Menu open={open} eventos={menu} />
      <input
        type="checkbox"
        checked={check}
        name=""
        id="click"
        onChange={() => {}}
      />
      <label htmlFor="click" className="open">
        <div className="menu" onClick={menu}>
          <span className="burgur"></span>
        </div>
      </label>
    </div>
  );
};

export default Button;
