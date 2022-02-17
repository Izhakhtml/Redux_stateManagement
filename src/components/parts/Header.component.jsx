import { useContext } from "react";
import { ContextMode } from "../../context/Context-mode.component";
const Header = () => {
const { mode } = useContext(ContextMode)

    return (
        <header className="header"style={{border:mode.colorBorder}}>
             <h1>Header</h1>
        </header>
    )
}
export default Header;