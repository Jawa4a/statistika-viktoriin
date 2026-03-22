import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

export default function Footer() {
  return (
    <footer className="contact-footer">
      <div className="contact-footer__pattern" aria-hidden="true" />

      <div className="contact-footer__inner">
        <div className="contact-footer__group">
          <span className="contact-footer__title">Kontaktid</span>

          <span className="contact-footer__item">
            <img src={phone} alt="" className="contact-footer__icon" />
            <span>+372 625 9300</span>
          </span>

          <span className="contact-footer__item">
            <img src={email} alt="" className="contact-footer__icon" />
            <span>stat@stat.ee</span>
          </span>
        </div>
      </div>
    </footer>
  );
}