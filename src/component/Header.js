
import { MdOutlineMenuBook } from "react-icons/md";



export default function Header(props) {

    return (
        <>
            <nav>
                <div className="container-fluid d-flex justify-content-between hello">
                    <span style={{ color: "white", fontSize: "20px" }}><span style={{ color: "yellow" }}><MdOutlineMenuBook/> </span>{props.heading}</span>

                </div>
            </nav>
        </>
    )

}

