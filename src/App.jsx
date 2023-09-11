import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Companies from './component/companies/Companies';
import Best from './component/best choices/Best';
import Value from './component/value/Value'
import Contact from './component/contact/Contact'
import Getstarted from './component/get started/Getstarted'
import Footer from './component/footer/Footer'
import './component/header/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import './component/hero/hero.css';
import './App.css';
import './component/companies/companies.css';
import './component/best choices/best.css';
import './component/value/value.css'
import './component/contact/contact.css'
import './component/get started/getstarted.css'
import './component/footer/footer.css'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Best/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}

export default App;
