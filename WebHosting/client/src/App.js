
import './App.css';

import Navigation from './components/template/navigation/Navigation';
import Header from './components/header/Header';
import WhyUs from './components/whyus/WhyUs';
import Features from './components/features/Features';
import Speed from './components/speed/Speed';
import Graph from './components/graph/Graph';
import JoinUs from './components/joinus/JoinUs';
import Footer from './components/template/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <WhyUs />
      <Features />
      <Speed />
      <Graph />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
