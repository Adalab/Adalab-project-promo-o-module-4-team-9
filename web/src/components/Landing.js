import logoTeam from "../images/logo-team-undefined.svg";
import {Link} from "react-router-dom";
const Landing = (props) => {
return  (

<main className="mainIndex">

    <img src={logoTeam} alt="Team Undefined" title="Team Undefined" className="mainIndex__img"/>
    <section className="mainIndex__section1">
        <h1 className="mainIndex__section1--title">Crea tu tarjeta de visita</h1>
        <p className="mainIndex__section1--text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
    </section>
    <section className="mainIndex__section2">
        <article className="mainIndex__section2--article">
            <i className="far fa-object-ungroup mainIndex__section2--articleIcon"></i>
            <p className="mainIndex__section2--articleText">Diseña</p>
        </article>
        <article className="mainIndex__section2--article">
            <i className="far fa-keyboard mainIndex__section2--articleIcon"></i>
            <p className="mainIndex__section2--articleText">Rellena</p>
        </article>
        <article className="mainIndex__section2--article">
            <i className="fas fa-share-alt mainIndex__section2--articleIcon"></i>
            <p className="mainIndex__section2--articleText">Comparte</p>
        </article>
    </section>
    <Link to="/create-preview-card" className="mainIndex__button">Comenzar</Link>

</main>
)
}

export default Landing;