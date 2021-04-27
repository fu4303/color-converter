import React, { useState } from "react";

const App = () => {
  const [red, setRed] = useState("ff");
  const [green, setGreen] = useState("ff");
  const [blue, setBlue] = useState("ff");

  const [color, setColor] = useState("#ffffff");

  const [colorInRgb, setColorInRgb] = useState("(255, 255, 255)");
  const [colorInBin, setColorInBin] = useState(
    "(11111111, 11111111, 11111111)"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(`#${red}${green}${blue}`);

    let rgbRed = parseInt(red, 16).toString();
    let rgbGreen = parseInt(green, 16).toString();
    let rgbBlue = parseInt(blue, 16).toString();

    setColorInRgb(`(${rgbRed}, ${rgbGreen}, ${rgbBlue})`);

    let binRed = parseInt(red, 16).toString(2);
    let binGreen = parseInt(green, 16).toString(2);
    let binBlue = parseInt(blue, 16).toString(2);

    setColorInBin(`(${binRed}, ${binGreen}, ${binBlue})`);
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        COLOR CONVERTER - HEX TO RGB
      </h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h1>HEX</h1>
          <div className="colorBox" style={{ backgroundColor: color }}>
            {color}
          </div>
        </div>
        <div>
          <h1>RGB</h1>
          <div className="colorBox" style={{ backgroundColor: color }}>
            {colorInRgb}
          </div>
        </div>
        <div>
          <h1>BIN</h1>
          <div className="colorBox" style={{ backgroundColor: color }}>
            {colorInBin}
          </div>
        </div>
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>🔴 Red: </label>
            <input
              type="text"
              id="hex-color"
              name="hex-color"
              value={red}
              onChange={(e) => setRed(e.target.value)}
            />
            <label>🟢 Green: </label>
            <input
              type="text"
              id="hex-color"
              name="hex-color"
              value={green}
              onChange={(e) => setGreen(e.target.value)}
            />
            <label>🔵 Blue: </label>
            <input
              type="text"
              id="hex-color"
              name="hex-color"
              value={blue}
              onChange={(e) => setBlue(e.target.value)}
            />
            <button type="submit">Convert</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
