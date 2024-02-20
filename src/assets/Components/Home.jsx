import "./Styles/Home.css";
import "./Styles/About.css";
import "./Styles/Skills.css";
import "./Styles/Project.css"
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMongoose } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";

import{Link,animateScroll as scroll} from "react-scroll";
import portfolioImage from "./Styles/portfolio.jpg";
import resume1 from "./Files/resume1.pdf";
 const Home=()=>{
   const [opennav, setopennav] = useState(false);
   const handledownload=()=>{
   const url=resume1;
    const link=document.createElement('a');
    link.href=url;
    link.setAttribute('download','resume1.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    const togglenav = () => {
   setopennav(!opennav); // Corrected to toggle opennav
    };
    const closenav=()=>{
        setopennav(false); 
    }
   
    return(
        <div className="Maindiv">
         <nav className={`${opennav?"openNav":""}`} >
        <i className="navbuttonopen" onClick={togglenav}><FaBars /></i>
      <ul className="navitem">
      <i className="navbuttonclose" onClick={closenav}><FaBars /></i>
       <li> <Link className="Navlink" to="Home" smooth={true} duration={500}> Home </Link></li> 
       <li> <Link className="Navlink" to="About" smooth={true} duration={500} > About </Link></li>
       <li> <Link className="Navlink" to="skill" smooth={true} duration={500}> skills </Link></li>
       <li> <Link className="Navlink" to="project" smooth={true} duration={500}> Projects</Link></li>
      </ul>
    </nav>
    <section className="banner" id="Home">
      <div className="banner1">
      <h2> hi, Im<br />Hyder Danish </h2>
      <h1>Full Stack 
      Web Developer
      </h1>
      <div onClick={()=>handledownload()} className="resume">
      <h3>RESUME</h3>
      </div>
      
      </div>
      <div >
      </div>
      {/* <img className="profileimage" src={portfolioImage}/> */}
      </section>
    <div className="container" id="About">
      <section className="description panel blue">
        <div className="about1">
          <h1>Any type of question &<br />discussion.</h1> 
          <p>hyder.danish369@gmail.com <br /><br /> whatsapp:9207403126</p>
        </div>
        <div className="about2">
        <img src={portfolioImage} alt="" />
        <div>
          <h2>Hyder Danish PS</h2>
          <h3>WEB Developer</h3>
          <p>
          Highly skilled MERN Stack developer
          bringing 8 month of internship in designing
          and developing robust web applications. <br />Proficient in
front-end and back-end technologies, <br /> including React.js, Node.js,
MongoDB, and Express.js. Strong understanding of responsive
design principles and cross-browser compatibility.
<br />
          </p>
          <a href="https://github.com/hyderdan">GIT HUB</a>
        </div>
        </div>
        
      </section>
      </div>
     
      <section className="projects" id="project">
      <div className="project1">
          <h1>PROJECTS</h1>
          <div className="firstpro">
          <h5>E-commerse Website: (<a href="https://github.com/hyderdan/E-commerse-furniture-fulstackl-.git">Git Hub Link</a>) </h5>
          <p>Welcome to our furniture-focused e-commerce platform,<br /> where  style meets comfort and quality.
          <br />Discover a curated collection  of contemporary, timeless, <br />
           and functional pieces that elevate your living spaces. <br />
           From sleek modern designs to cozy classics, our wide <br />
           range of furniture caters to every taste and lifestyle. <br />
            Browse through our user-friendly interface, <br /> explore detailed product descriptions, <br />
            and visualize how each piece can transform your home. <br />
            With secure payment options and hassle-free delivery,<br />
             furnishing your dream space has never been easier</p>
          </div>
          <div className="secondpro">
          <h5>Social FLow: (<a href="https://github.com/hyderdan/Social-Flow.git">Git Hub Link</a>) </h5>
          <p>Welcome to our vibrant social media platform,
            <br /> where connections flourish and communities thrive. <br />
            Join a diverse network of individuals from around the globe,
            <br /> sharing experiences, ideas, and passions.
            <br /> Engage in lively discussions, discover trending topics,<br />
            Embrace the power of connection and  <br /> join our dynamic community today.
             <br /> Welcome to a world where every interaction sparks possibility.</p>
          </div>
         
      </div>
    </section>
    <section className="footer" id="skill">
     
      <div className="skill">
      <h2>Skills</h2>
      <h3>_______</h3>
      <div className="skill2">
      <h1><FaHtml5 /> <br />HTML</h1>
      <h1><FaCss3Alt /> <br />CSS</h1>
      <h1><SiJavascript /><br />javascript</h1>
      <h1><FaReact /><br />React</h1>
      <h1><FaNodeJs /><br />Node</h1>
      <h1><SiExpress /><br />Express</h1>
      <h1><DiMongodb /><br />MongoDB</h1>
      <h1><SiMongoose /><br />Mongoose</h1>
      <h1><FaGitAlt /><br />GIT</h1>
      <h1><FaGithub /><br />Github</h1>
      <h1><RiBootstrapLine /><br />BOOTSTRAP</h1>
      <h1> <SiChakraui /><br />Chakra Ui</h1>
     

      </div>
      </div>
      

    </section>
    
        </div>
    );


};
export default Home;