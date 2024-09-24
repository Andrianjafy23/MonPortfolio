import React, { useState } from 'react';
import login from '../assets/login.png';
import loginomda from '../assets/loginomda.png';
import membre from '../assets/membre.png';
import oeuvre from '../assets/oeuvre.png';
import reser from '../assets/reser.png';
import vatany from '../assets/vatany.png';
import voyage1 from '../assets/voyage1.png';
import './style.css';

function Projets() {
  const images = {
    concours: [reser, voyage1],
    memoire: [login, vatany],
    omda: [loginomda, membre, oeuvre]
  };

  const [hoveredImage, setHoveredImage] = useState({
    concours: images.concours[0],
    memoire: images.memoire[0],
    omdaIndex: 0
  });

  const handleMouseOver = (category, nextImage) => {
    if (category === 'omda') {
      setHoveredImage(prev => ({
        ...prev,
        omdaIndex: (prev.omdaIndex + 1) % images.omda.length // Rotate between the 3 images
      }));
    } else {
      setHoveredImage(prev => ({ ...prev, [category]: nextImage }));
    }
  };

  return (
    <div style={{ paddingTop: '60px' }}  className='sary'>
      <h4 className="explication">Concours du projet</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('concours', images.concours[1])}
           onMouseOut={() => handleMouseOver('concours', images.concours[0])}>
        <img src={hoveredImage.concours} alt="Concours" />
      </div>

      <h4 className="explication">Projet mémoire</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('memoire', images.memoire[1])}
           onMouseOut={() => handleMouseOver('memoire', images.memoire[0])}>
        <img src={hoveredImage.memoire} alt="Mémoire" />
      </div>

      <h4 className="explication">Stage OMDA</h4>
      <div className="image-container"
           onMouseOver={() => handleMouseOver('omda')}
           onMouseOut={() => setHoveredImage(prev => ({ ...prev, omdaIndex: 0 }))}>
        <img src={images.omda[hoveredImage.omdaIndex]} alt="OMDA" />
      </div>
    </div>
  );
}

export default Projets;
