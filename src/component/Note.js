import { MdDelete } from "react-icons/md";

export default function Note(props) {

    function DeleteItem() {
        props.deleteItem(props.id);
    }
    return (
        <>

            <div className="noteContainer">
                <h6 style={{ color: "blue" }}>{props.title}</h6>
                <p style={{ color: "purple" }}>{props.content}</p>
                <span onClick={DeleteItem} style={{ color: "red" }}><MdDelete /></span>
            </div>


        </>
    )
}