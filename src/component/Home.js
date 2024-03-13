import Cards from "./Cards";
import { MdTextSnippet } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="heading">
                <h3>Welcome to Google keep Website</h3>
            </div>
            <div className="para">
                <p>Keep organised. Capture inspiration and to-dos effortlessly.</p>
                <p>Everything syncs across your devices, so what's important is always within reach.</p>
            </div>
            <div className="cards">
                <Cards list="Notes List" pathName="CreateNote" icon={<MdTextSnippet />} />
                <Cards list="ToDo List" pathName="ToDo" icon={<FaListAlt />} />
            </div>
        </>
    )
}

export default Home;
