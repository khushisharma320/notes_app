import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {

    function DeleteItem() {
        props.deleteItem(props.id);
    }
    return (
        <>

            <div className="noteContainer">
                <h6 style={{ color: "blue" }}>{props.title}</h6>
                <p style={{ color: "purple" }}>{props.content}</p>
                <span onClick={DeleteItem} style={{ color: "red" }}><DeleteIcon /></span>
            </div>


        </>
    )
}