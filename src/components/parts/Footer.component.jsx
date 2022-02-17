import { useContext } from "react";
import { ContextMode } from "../../context/Context-mode.component";
const Footer = () => {
const { mode } = useContext(ContextMode)

    return (
        <footer className="footer" style={{border:mode.colorBorder}}>
             <h1>Footer</h1>
        </footer>
    )
}
export default Footer;