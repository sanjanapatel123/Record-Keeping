import Header from "./components/Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Button";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Fields from "./components/Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function handleData() {
    setData([
      ...data,
      {
        name,
        email,
      },
    ]);
    setName("");
    setEmail("");
  }

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="form">
        <Stack spacing={2} direction="row" className="stack">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            onClick={handleData}
            color="success"
            variant="contained"
            className="btn"
          >
            <FaPlus />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Fields
              key={index}
              name={element.name}
              email={element.email}
              index={index}
              removeItem={removeItem}
            ></Fields>
          );
        })}
      </div>
    </div>
  );
}

export default App;
