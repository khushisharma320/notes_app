import { useState } from "react";
import Note from "./Note";
import { Button, TextField } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Alert } from "react-bootstrap";


export default function CreateNote() {
    const [note, setNote] = useState({ title: "", content: "" });
    const [expand, setExpand] = useState(false);
    const [additem, setAdditem] = useState([]);
    const [err, setErr] = useState(false);


    function expandItem() {
        setExpand(true);
    }

    function backToNormal() {
        setExpand(false);
    }

    function InputEvent(event) {

        const { name, value } = event.target;

        setNote({ ...note, [name]: value, });


    }
    function addNote(event) {
        event.preventDefault();
        if (note.content.replace(/\s/g, "").length <= 0 || note.title.replace(/\s/g, "").length <= 0) {
            setErr(true);
        } else {
            setAdditem((prevData) => {
                return [...prevData, note];
            });
            setNote(
                { title: "", content: "" }
            )
        }

        setTimeout(() => {
            setErr(false);
        }, 2000);
    }

    const onDelete = (id) => {
        const updateData = additem.filter((elem, index) => index !== id);
        setAdditem(updateData);


    }



    return (
        <>
            <Header heading="Create Notes" />
            <div className="noteCardMain">

                <div className="noteCardContainer" onDoubleClick={backToNormal}>
                    {err ? <Alert key="danger" variant="danger">
                        Please Enter Valid Title and Note
                    </Alert> : null}
                    <form>
                        {expand ?
                            <TextField id="standard-basic" label="Title..." variant="standard" focused autoComplete="off" value={note.title} onChange={InputEvent} name="title" /> : null}<br />

                        <TextField className="writeNote" id="outlined-basic" variant="outlined" focused color="secondary" placeholder="Write a note....." value={note.content} onChange={InputEvent} name="content" onClick={expandItem} /><br />
                        {expand ?
                            <Button variant="contained" color="success" onClick={addNote}>
                                Add
                            </Button> : null}
                    </form>

                    <div className="noteMain">
                        {
                            additem.map((val, index) => {
                                return (<Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />);
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}