import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextMode } from "../../context/Context-mode.component";
const Sidebar = () => {
const { mode } = useContext(ContextMode)

    return (
        <nav className="sidebar" style={{border:mode.colorBorder}}>
            <Link to="/"><button>HOME</button></Link>
            <Link to="/User"><button>USER</button></Link>
        </nav>
    )
}
export default Sidebar;