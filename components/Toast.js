import React from "react";

export default function Toast(props) {
  return (
    <p className="toast">
      Generated {props.generated} colours based on {props.seed}
    </p>
  );
}
