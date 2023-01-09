import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  AOS.init({ duration: 1000 });
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button btn-animation">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img" data-aos="fade-left">
        <img src={images.welcome} alt="header" />
      </div>
    </div>
  );
};

export default Header;
