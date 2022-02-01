import logoAdalab from "../images/logo-adalab.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__text'>Team Undefined &copy; 2021</p>
        <a
          className='footer__link'
          href='https://adalab.es/'
          target='_blank'
          rel='noreferrer'
          title='Adalab'
        >
          <img className='footer__img' src={logoAdalab} alt='Logo Adalab' />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
