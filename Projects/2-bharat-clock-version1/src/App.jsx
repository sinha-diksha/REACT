import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockHeading from "./Components/ClockHeading";

import ClockSlogan from "./Components/ClockSlogan";

import CurrentTime from "./Components/CurrentTime";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
