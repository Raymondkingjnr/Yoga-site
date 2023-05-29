import "./App.css";
import Experties from "./pages/Experties/Experties";
import GetStarted from "./pages/GetStarted/GetStarted";
import Courses from "./pages/Courses/Courses";
import Header from "./pages/Header";
import Price from "./pages/Price/Price";
import Reviews from "./pages/reviews/Reviews";
import Newsletter from "./pages/newsletter/Newsletter";
import Form from ".//pages/form/Form";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Experties />
      <GetStarted />
      <Courses />
      <Price />
      <Reviews />
      <Newsletter />
      <Form />
      <Footer />
    </>
  );
}

export default App;
