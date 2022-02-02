import Preview from "./Preview";
import ImageReader from "./ImageReader";

const Form = (props) => {
  const handleImage = (imageData) => {
    props.handleImage(imageData);
  };

  return (
    <section className="profile-cards">
      <form className="form" action="" onSubmit={props.handlerSubmit}>
        <section className="cards">
          <Preview
            handlerReset={props.handlerReset}
            paletteClass={props.paletteClass}
            name={props.name}
            job={props.job}
            phone={props.phone}
            email={props.email}
            linkedin={props.linkedin}
            github={props.github}
            imgInfo={props.imgInfo}
          />
        </section>

        <div className="form__fieldsets">
          <fieldset className="box design">
            <legend
              className="js-legendDesign box__header"
              onClick={props.handleCollapsable}
              id="desing"
            >
              <div className="box__wrapper">
                <i className="far fa-object-ungroup box__icon"></i>
                <h2 className="box__title">Diseña</h2>
              </div>
              <i
                className={`js-iconDesign fas fa-chevron-${
                  props.desingArrow ? "down" : "up"
                } box__arrow`}
              ></i>
            </legend>

            <section
              className={`js-sectionDesign box__main design__section ${
                props.desingClass ? "hidden" : null
              }`}
            >
              <p className="design__text">Colores</p>

              <div className="design__wrapper">
                <div className="design__option">
                  <input
                    onChange={props.handleInput}
                    type="radio"
                    id="palette1"
                    name="palette"
                    checked={props.palette === "1"}
                    value="1"
                    className="js-labelPalette design__input"
                  />

                  <label htmlFor="palette1" className="design__label">
                    <ul className="design__list">
                      <li className="design__color palette1--color1"></li>
                      <li className="design__color palette1--color2"></li>
                      <li className="design__color palette1--color3"></li>
                    </ul>
                  </label>
                </div>

                <div className="design__option">
                  <input
                    onChange={props.handleInput}
                    type="radio"
                    id="palette2"
                    name="palette"
                    value="2"
                    className="js-labelPalette design__input"
                    checked={props.palette === "2"}
                  />

                  <label htmlFor="palette2" className="design__label">
                    <ul className="design__list">
                      <li className="design__color palette2--color1"></li>
                      <li className="design__color palette2--color2"></li>
                      <li className="design__color palette2--color3"></li>
                    </ul>
                  </label>
                </div>

                <div className="design__option">
                  <input
                    onChange={props.handleInput}
                    type="radio"
                    id="palette3"
                    name="palette"
                    className="js-labelPalette design__input"
                    value="3"
                    checked={props.palette === "3"}
                  />

                  <label htmlFor="palette3" className="design__label">
                    <ul className="design__list">
                      <li className="design__color palette3--color1"></li>
                      <li className="design__color palette3--color2"></li>
                      <li className="design__color palette3--color3"></li>
                    </ul>
                  </label>
                </div>
              </div>
            </section>
          </fieldset>
          <fieldset className="box fill">
            <legend
              className="box__header js-legendFill"
              onClick={props.handleCollapsable}
              id="form"
            >
              <div className="box__wrapper">
                <i className="far fa-keyboard box__icon"></i>
                <h2 className="box__title">Rellena</h2>
              </div>
              <i
                className={`fas fa-chevron-${
                  props.formArrow ? "down" : "up"
                } box__arrow js-iconFill`}
              ></i>
            </legend>

            <section
              className={`box__main fill__section js-sectionFill ${
                props.formClass ? "hidden" : null
              }`}
            >
              <label className="fill__label" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="fill__input js-name sizeFont"
                type="text"
                name="name"
                id="name"
                placeholder="Ej: Sally Jill"
                onChange={props.handleInput}
                value={props.name}
              />

              <label className="fill__label" htmlFor="job">
                Puesto
              </label>
              <input
                className="fill__input js-occupation sizeFont"
                type="text"
                name="job"
                id="job"
                placeholder="Ej: Front-end unicorn"
                onChange={props.handleInput}
                value={props.job}
              />

              <label className="fill__label">Imagen de perfil</label>
              <div className="fill__container">
                <ImageReader handleImage={handleImage} />{" "}
                <div
                  className="fill__image js__profile-preview"
                  style={{ backgroundImage: `url(${props.imgInfo})` }}
                ></div>
              </div>

              <label className="fill__label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="js-fill_phone fill__input"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ej: 555-55-55-55"
                onChange={props.handleInput}
                value={props.phone}
              />

              <label className="fill__label" htmlFor="email">
                Email
              </label>
              <input
                className="fill__input js-inputEmail"
                type="email"
                name="email"
                id="email"
                placeholder="Ej: sally-hill@gmail.com"
                onChange={props.handleInput}
                value={props.email}
              />

              <label className="fill__label" htmlFor="linkedin">
                LinkedIn
              </label>
              <input
                className="fill__input js-inputLinkedin"
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="Ej: sally.hill"
                onChange={props.handleInput}
                value={props.linkedin}
              />

              <label className="fill__label" htmlFor="github">
                GitHub
              </label>
              <input
                className="fill__input js-inputGitHub"
                type="text"
                name="github"
                id="github"
                placeholder="Ej: sally-hill"
                onChange={props.handleInput}
                value={props.github}
              />
            </section>
          </fieldset>
          <fieldset className="box share">
            <legend
              className="box__header js-legendShare"
              onClick={props.handleCollapsable}
              id="share"
            >
              <div className="box__wrapper">
                <i className="fas fa-share-alt box__icon"></i>
                <h2 className="box__title">Comparte</h2>
              </div>
              <i
                className={`fas fa-chevron-${
                  props.shareArrow ? "down" : "up"
                } box__arrow js-iconShare`}
              ></i>
            </legend>

            <section
              className={`box__main share__section js-sectionShare ${
                props.shareClass ? "hidden" : null
              }`}
            >
              <div className="share__main">
                <button
                  className={`js-shareBtn share__button ${
                    props.data.name === "" ||
                    props.data.job === "" ||
                    props.data.email === "" ||
                    props.data.linkedin === "" ||
                    props.data.github === "" ||
                    props.data.photo === ""
                      ? "share__button--disabled"
                      : null
                  }`}
                  type="submit"
                  onClick={props.handlerClickShare}
                  disabled={
                    props.data.name === "" ||
                    props.data.job === "" ||
                    props.data.email === "" ||
                    props.data.linkedin === "" ||
                    props.data.github === "" ||
                    props.data.photo === ""
                      ? true
                      : false
                  }
                >
                  <i className="far fa-address-card"></i>Crear tarjeta
                </button>
              </div>

              <div className="js-shareDone share__done hidden">
                <p className="share__text">La tarjeta ha sido creada:</p>
                <a
                  className="js-shareLink share__link"
                  href="./#"
                  target="_blank"
                >
                  Your URL will be placed here!
                </a>
                <a
                  className="share__button share__button--twitter js-shareTwitter"
                  href="./#"
                >
                  <i className="fab fa-twitter"></i>Compartir en twitter
                </a>
              </div>

              <div className="js-shareError share__done hidden">
                <p className="share__error">
                  ERROR, te faltan campos por rellenar
                </p>
              </div>
            </section>
          </fieldset>
        </div>
      </form>
    </section>
  );
};

export default Form;
