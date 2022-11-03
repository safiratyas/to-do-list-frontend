import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListUser } from '../redux/actions/getUser';
import Navbar from '../components/Navbar/NavbarHomepage';
import NavbarLogin from '../components/Navbar/NavbarLogin';
import Header from '../components/Header/Header';
import CardDescription from '../components/Cards/Description/CardDescription';
import CardInterest from '../components/Cards/Description/CardInterest';
import Footer from '../components/Footer/Footer';

function Homepage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  useEffect(() => {
    if (userResult) {
      setUserData(userResult);
    }
  }, [userResult]);

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
      <Header userData={userData} />
      <CardDescription />
      <CardInterest />
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <Header userData={userData} />
      <CardDescription />
      <CardInterest />
      <Footer />
    </>
  )
}

export default Homepage;