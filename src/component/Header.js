
import MenuBookIcon from '@mui/icons-material/MenuBook';



export default function Header(props) {

    return (
        <>
            <nav>
                <div className="container-fluid d-flex justify-content-between hello">
                    <span style={{ color: "white", fontSize: "20px" }}><span style={{ color: "yellow" }}><MenuBookIcon /> </span>{props.heading}</span>

                </div>
            </nav>
        </>
    )

}

