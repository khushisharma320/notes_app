import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField, Alert } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



export default function ToDo() {
  const [value, setValue] = useState("");
  const [addV, setAddV] = useState([]);
  const [err, setErr] = useState(false);





  const inputChange = (event) => {
    setValue(event.target.value);
  }


  const addValue = (event) => {
    if (value.replace(/\s/g, "").length <= 0) {
      setErr(true);
    }
    else {

      setAddV([...addV, value]);
      setValue("");

    }

    setTimeout(() => {
      setErr(false);
    }, 3000);


  }


  const keyPress = (event) => {
    if (event.key === "Enter") {
      addValue();
    }
  }


  const deleteValue = (i) => {
    const updatedvalue = addV.filter((elem, index) => index !== i);
    setAddV(updatedvalue);

  }


  return (
    <>
      <Header heading="ToDo List" />
      <div className='todoMain'>
        <div className='todoContainer'>
          {err ? <Alert variant="filled" severity="error">
            This is an error alert — check it out!
          </Alert> : null}
          <>
            <h3>ToDo List</h3>
            <div>
              <TextField id="standard-basic" label="Type Here......." variant="standard" value={value} onChange={inputChange} onKeyPress={keyPress} />
              <Button variant="contained" onClick={addValue}><AddIcon /></Button>
            </div>

            {
              addV.map((element, index) => {
                return (
                  <>
                    <div className='listItems' key={index}>
                      <span style={{ color: "green" }}>{index + 1}</span>
                      <span style={{ overflow: "hidden" }}>{element}</span>
                      <span style={{ color: "red" }} onClick={() => deleteValue(index)}><DeleteIcon /></span>
                    </div>

                  </>
                )
              })
            }</>
        </div>
      </div>

      <Footer />
    </>
  )
}
