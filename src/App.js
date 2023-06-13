import logo from './logo.svg';
import MyRoute from './MyRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userName, setUserName] = useState('');

  // const handleLogin = (userName) => {
  //   setLoggedIn(true);
  //   setUserName(userName);
  // }

  // const handleLogout = () => {
  //   setLoggedIn(false);
  //   setUserName('');
  // }

  return (
  <div className="App">
    <MyRoute />
    <Footer />
  </div>
  );
}

export default App;
