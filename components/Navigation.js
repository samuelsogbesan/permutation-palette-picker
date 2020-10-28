import React from "react";

export default function Navigation(props) {
  const bases = ["200", "120", "212"];
  return (
    <>
      <nav className="navigation">
        <span className="brand">Permutation Palette Picker</span>
        <ul className="base-list">
          {bases.map(base => <li><button onClick={() => props.onChange(base)}>{base}</button></li>)}
        </ul>
        <input type="number" placeholder="0 - 255" min="0" max="255"
          onChange={(event) => props.onChange(event.target.value)}
        />
      </nav>
    </>
  );
}
