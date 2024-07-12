import React from 'react';
import "./Hero.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {

  const handleDownload = () => {
    const url = getImageUrl('documents/Resume.pdf');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <section className='hero container'>
    <img src={getImageUrl("/hero/head_pic.png")} alt='my-hero' className='hero__image'/>

    <div className='hero__content'>
      <h1 className='hero__greeting'>Software engineer</h1>
      <h1 className='hero__title'>Hello, my name is Enrique Hernandez</h1>
      <p className='hero__description'>I'm a software engineer based in Goshen, Indiana. I specialize in full-stack web development, creating efficient and scalable applications.</p> 
      {/* <a href="mailto:enrinandez102@gmail.com" className='hero__contact-btn btn'>Contact Me</a> */}
      <div className="hero__btn-container">
          <button
            className="hero__btn1 btn"
            onClick={handleDownload}
          >
            Download CV
          </button>
          <a href="#contact">
            <button className="hero__btn2 btn">
              Contact Info
            </button>
          </a>
      </div>
    </div>
  </section>);
};