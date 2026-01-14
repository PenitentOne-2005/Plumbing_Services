import { useState } from "react";
import styles from "./Hero.module.css";
import container from "../../container.module.css";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={`${container.container} ${styles.inner}`}>
        <div className={styles.content}>
          <h1>Reliable Plumbing Services</h1>
          <p>Your Trusted Local Plumber</p>

          <div className={styles.buttons}>
            <button className="primary">Request Service</button>
            <button className="secondary">Call Now</button>
          </div>
        </div>

        <div className={styles.image}>
          <img
            src="/Plumbing.webp"
            alt="Plumber"
            onLoad={() => setLoaded(true)}
            className={loaded ? styles.loaded : styles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
