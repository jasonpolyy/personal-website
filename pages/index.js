import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work } from '../config/config';
import { photo_src } from '../config/photos.js';
import { Header } from '../components/Header';

import { Photos } from '../components/Photos';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />

      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Photos
        title={'Some photos!'}
        photo1={photo_src.photo1}
        photo2={photo_src.photo2}
        photo3={photo_src.photo3}
        photo4={photo_src.photo4}
        photo5={photo_src.photo5}
        photo6={photo_src.photo6}
        photo7={photo_src.photo1}
        photo8={photo_src.photo1}
        photo9={photo_src.photo1}
        photo10={photo_src.photo1}
        photo11={photo_src.photo1}
        photo12={photo_src.photo1}

      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />

      <Footer />
    </Fragment>
  );
}
