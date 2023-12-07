import styles from "./About.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  return (

    <div className={styles.container}>

   <img className={styles.image} src= "../src/assets/image/FormFrase.png" alt="" />

    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h3 className={styles.h3} >App created by</h3>
          <h1 className={styles.h1} >Erika Judith Fogar</h1>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.description}>
            <p className={styles.description}>
              Hello, I am full stack developer. I specialize in building
              scalable, high-performance web applications using modern web
              technologies such as React, Express, and Node.js.
            </p>
            <div className={styles.socialbar}>
              <div>
              <a 
                href="https://www.linkedin.com/in/erikafogar/"
                target="_blank" >
                  <AiFillLinkedin className={styles.icon} />
              </a>

                <a
                  href="https://github.com/erikayeah"
                  target="_blank"
                >
                  <AiFillGithub className={styles.icon} />
                </a>

                <a
                  href="https://twitter.com/ErikaYeah_"
                  target="_blank"
                >
                  <FaSquareXTwitter className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
