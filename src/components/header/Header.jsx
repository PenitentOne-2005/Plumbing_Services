import styles from "./Header.module.css";
import container from "../../container.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${container.container} ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          PLUMBING SERVICES
        </a>

        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+1234567890" aria-label="Call us">
            <span aria-hidden>📞</span>
            <span>123-456-7890</span>
          </a>
          <button className={styles.cta}>Get a Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
