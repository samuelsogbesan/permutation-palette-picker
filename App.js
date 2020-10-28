import React, {useState} from "react";
import Navigation from "./components/Navigation";
import Palette from "./components/Palette";
import Toast from "./components/Toast";

export default function App() {
  const [base, setBase] = React.useState(0);
  const [generated, setGenerated] = React.useState(0);
  return (
    <>
      <Navigation onChange={setBase}/>
      <Toast generated={generated} seed={base}/>
      <Palette base={base} setGenerated={setGenerated}/>
    </>
  );
}
