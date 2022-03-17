// import logo from './logo.svg';
import './App.css';
import './main.css';
import Header from './components/Heaader';
import Nav from './components/Nav';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
    <Header />
    <Nav />
    <Profile />
      
  </div>

  );
}


// const Footer = () => {
//   return(
//     <div className="class">
//       Подвал
//     </div>
//   );
// }

export default App;
