import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Sandeep's Kitchen</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around</p>
    </section>
  )
}

function Footer() {
  return (
    <section>
      <p>It's true</p>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
