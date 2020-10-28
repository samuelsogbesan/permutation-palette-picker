import React, { useEffect } from "react";
import {permute} from "./PermuteLib";

const Swatch = (props) => {
  const rgbString = `rgb(${props.colour})`;

  return (
    <span 
      className="swatch" 
      style={{background:rgbString}}
      onClick={()=>navigator.clipboard.writeText(rgbString)}
      >
        {props.colour}
    </span>
  );
}

export default function Palette(props) {
  const base = props.base.toString();
  const permutationsOfBase = [];
  const swatchColours = [];

  permute("", base.split(""), 3, (permutation) => permutationsOfBase.push(permutation));
  permute([], permutationsOfBase, 3, (permutation) => swatchColours.push(permutation.slice(0,3)+permutation.slice(3,6)+permutation.slice(6,9)));
  props.setGenerated(swatchColours.length);

  return (
    <div className="palette">
      {swatchColours.map((colour, idx) => <Swatch key={idx} colour={colour} delay={idx}/>)}
    </div>
  );
}
