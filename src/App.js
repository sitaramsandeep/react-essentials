import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <section>
      <p>Copyright {props.year}</p>
    </section>
  )
}

const dishes = [
  "Chicken Biryani",
  "Chicken Fried Rice",
  "Andhra Chicken Curry"
]

const dishObj = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Deepu"/>
      <Main adjective="amazing" dishes={dishObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
