// import logo from './logo.svg';
import {Outlet} from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
// import POPOSList from './POPOSList';
import Footer from './Footer';
import './Footer.css';
import POPOSDetails from './POPOSDetails/POPOSDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <main>
        <Outlet />
        </main>
        <Footer />
        
      </header>
    </div>
  );
}

export default App;
