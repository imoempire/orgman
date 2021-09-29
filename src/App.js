import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
// import Org from './Org';
// import Router from './Router/Router'


function App() {
  return (
    <div className="App">
      <div class="columns is-variable is-0">
        <div>
        <div class="side-container">
        <div className="menu-wrapper py-1">
          <SideBar />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
