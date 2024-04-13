import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app-wrapper-container">
      <div className='app-container'>
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
