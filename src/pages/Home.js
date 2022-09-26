import "../styles/style.css"
import Navbar from "../components/Navbar"
import BodyPage from "../components/BodyPage"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <BodyPage/>
        <Footer/>
    </div>
  );
};

export default Home;
