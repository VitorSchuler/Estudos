import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  
  return(
    <>
    <UserGreeting isLoggedIn={true} username="Vitor"/>
    </>
  );
}

export default App
