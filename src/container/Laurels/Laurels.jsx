import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />

    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#dcca87' }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  AOS.init({ duration: 1000 });

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img" data-aos="fade-left">
        <img src={images.laurels} alt="Laurels" />
      </div>
    </div>
  );
};

export default Laurels;
