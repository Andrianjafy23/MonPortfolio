import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useTheme } from './ThemeContext';
import sary from '../assets/sary.png';
import './style1.css';

function Apropos() {
  const [text, setText] = useState('');
  const t = "hello! \n Je m'appelle Lazaniaina \n Je suis developpeur React.js| Node.js ";
  const { getBackgroundColor } = useTheme();

  useEffect(() => {
    let i = 0;
    const n = setInterval(() => {
      setText(t.slice(0, i + 1));
      i++;
      if (i >= t.length) {
        i = 0;
      }
    }, 200);

    return () => clearInterval(n);
  }, [t]);

  const a = {
    image: sary
  };

  return (
    <div className="container-fluid d-flex flex-column" style={{ backgroundColor: getBackgroundColor(), height: '100vh', }}>
      <div className="soratra d-flex justify-content-between ">
        <div className="col-md-6 text-center angled-background">
          <h2 className="texte-emphase-primaire display-4">
            {text}
          </h2>
        </div>
        <div className="col-md-6 " style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'100px'}}>
          <img src={a.image} alt="Profil" className="img-fluid rounded-circle" style={{ width: '70%' }} />
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center align-items-center contact-icons pb-4">
              <a href="mailto:laza02340@gmail.com" className="icon-link">
                <MdEmail size={40} />
              </a>
              <a href="tel:+033" className="icon-link">
                <FaPhoneFlip size={40} />
              </a>
              <a href="https://wa.me/1234567890" className="icon-link">
                 <FaWhatsapp size={40} />
              </a>
              <a href="https://www.linkedin.com/in/laza-niaina-4748262b6/" className="icon-link">
                 <AiOutlineLinkedin size={40} />
              </a>
              <a href="https://github.com/Andrianjafy23" className="icon-link">
                <FaGithub size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
