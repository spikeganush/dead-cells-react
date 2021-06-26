import './App.css';
import { Header } from './Components/Header'
import { Content } from './Components/Content'
import { Footer } from './Components/Footer'


const Nav = [
  {name: "Home", link: "/home"},
  {name: "Studio", link: "/studio"},
  {name: "Stuff", link: "/stuff"},
  {name: "Map", link: "/map"},
  {name: "Purchase", link: "/purchase"},
  {name: "Help", link: "/help"},
]

function App() {
  return (
    <div className="App">
      <Header navigation={Nav}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
