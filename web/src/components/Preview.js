import defaultImg from "../images/profile-image.svg";

const Preview = (props) => {
  return (
    <div className="cards__container">
      <button
        onClick={props.handlerReset}
        className="cards__button--reset js-resetBtn"
        type="reset"
      >
        <i className="far fa-trash-alt"></i>Reset
      </button>
      <article className="cards__article">
        <div className={`js-borderPalette cards__wrapper${props.paletteClass}`}>
          <h1
            className={`cards__title js-cardName cards__title${props.paletteClass}`}
          >
            {props.name || "Nombre Apellidos"}
          </h1>
          <h2 className="cards__subtitle js-cardOccupation">
            {props.job || "Front End Developer"}
          </h2>
        </div>
        <div
          className="cards__image js__profile-image"
          style={
            props.imgInfo === ""  
              ? { backgroundImage: `url(${defaultImg})` }
              : { backgroundImage: `url(${props.imgInfo})` }
          }
        ></div>
        <ul className="cards__contact">
          <li className="cards__item">
            <a
              className={`cards__link cards__link--phone js-phonePreview js-linksIcons cards__link${props.paletteClass}`}
              title="Teléfono"
              href={`tel:${props.phone}`}
            >
              <i className="fas fa-mobile-alt"></i>
            </a>
          </li>
          <li className="cards__item">
            <a
              className={`cards__link cards__link--email js-previewEmail js-linksIcons cards__link${props.paletteClass}`}
              title="Email"
              href={`mailto:${props.email}`}
            >
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li className="cards__item">
            <a
              className={`cards__link cards__link--linkedin js-cardLinkedin js-linksIcons cards__link${props.paletteClass}`}
              href={`https://www.linkedin.com/in/${props.linkedin}`}
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="cards__item">
            <a
              className={`cards__link cards__link--github js-cardGitHub js-linksIcons cards__link${props.paletteClass}`}
              title="GitHub"
              href={`https://github.com/${props.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Preview;
