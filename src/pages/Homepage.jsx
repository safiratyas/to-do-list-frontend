import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/NavbarHomepage';
import NavbarLogin from '../components/Navbar/NavbarLogin';
import Header from '../components/Header/Header';
import CardDescription from '../components/Cards/Description/CardDescription';
import CardInterest from '../components/Cards/Description/CardInterest';
import Footer from '../components/Footer/Footer';

function Homepage() {
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');
  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return isLoggedIn ? (
    <>
      <NavbarLogin />
      <Header />
      <CardDescription />
      <CardInterest />
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <Header />
      <CardDescription />
      <CardInterest />
      <Footer />
    </>
  )
}

export default Homepage;