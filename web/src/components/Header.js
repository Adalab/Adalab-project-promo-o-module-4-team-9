import logoTeam from "../images/logo-team-undefined.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
        <div className="header__wrapper">
          <Link className="header__link" to="/" title="Team Undefined">
            <img className="header__img" src={logoTeam} alt="Team Undefined" />
          </Link>
        </div>
      </header>
    )
};

export default Header;