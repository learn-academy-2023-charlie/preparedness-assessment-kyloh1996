import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
const [open, setOpen] = useState(false);
const [name, setName] =useState("")

  const handleClick = () => {
    setOpen(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleReset = ()=> {
    setName("");
    setOpen(false);
  };

  return (
    <div className="entire-content">
      <h1 className="head">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
        <Label className="label" for="userName">Enter your name: </Label>
          <Input className="input-field" onChange={handleName}/>
        </div>
        <div className="btnCont">
        <Button className="btn" onClick = {handleClick}>Click Me</Button>
        <Button  className="btn" onClick = {handleReset}>Reset</Button>
        </div>
        </div>
        {open && <ModalComponent userName={name} onClose={() => setOpen(false)} />}
    </div>
  );
};
// modal needs an onClick to be rendered, otherwise hidden
export default App
