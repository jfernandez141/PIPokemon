import HnavBar from "../../components/HNavBar/HNavBar";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutBody}>
      <HnavBar></HnavBar>
      <div className={style.text}>
        <h1>This application was created by Jhamil Fernandez </h1>
        <h1>as an individual project for the SoyHenry BootCamp!  </h1>
        <img className={style.img} src="https://i.pinimg.com/280x280_RS/cd/f6/e8/cdf6e86b69cca8bb613f7704af125861.jpg" alt="" />

      </div>
    </div>
  );
};

export default About;
