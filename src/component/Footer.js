import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>

                <div className="container-fluid">
                    <span style={{ color: "white", textAlign: "center" }} className="navbar-brand mb-0 h1">@copyright {year}</span>
                </div>

            </footer>
        </>
    )

}