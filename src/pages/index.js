import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Contact from '@sections/Contact';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
