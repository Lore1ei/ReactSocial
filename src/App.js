// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';



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
