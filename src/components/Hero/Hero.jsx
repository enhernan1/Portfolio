import React from 'react';
import "./Hero.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
  return <section className='container'>
    <div className='content'>
      <h1 className='hero-title'>Hi, I'm Enrique</h1>
      <p className='description'>I'm a software engineer based in Goshen, Indiana. Reach out if you'd like to learn more!</p> 
      <a href="mailto:enrinandez102@gmail.com" className='contact-btn'>Contact Me</a>
    </div>
    <img src={getImageUrl("/hero/head_pic.png")} alt='my-hero' className='hero-image'/>
  </section>
};