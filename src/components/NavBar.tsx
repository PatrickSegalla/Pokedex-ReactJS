import "./NavBar.css";
import { Link } from "react-router-dom";

type NavBarProps = {
    hasGoBack?: boolean;
}

function NavBar (props: NavBarProps) {
    return (
        <nav className="nav">
            <Link to="/" className="brand">
                Pokédex
            </Link>

            {props.hasGoBack && (
            <Link to="/" className="btn-goBack">
                Voltar
            </Link>)}
        </nav>
    )
}

export default NavBar;