import Navbar from '../components/Navbar/NavbarHomepage';
import Header from '../components/Header/Header';
import CardDescription from '../components/Cards/Description/CardDescription';
import CardInterest from '../components/Cards/Description/CardInterest';
import Footer from '../components/Footer/Footer';

function Homepage() {
  return (
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