import { useState } from 'react';
import './App.css';
import restaurant from './restaurant.jpg'

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
      <img src={restaurant} 
        height={200} 
        alt="napkin and silverware on table"/>
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
  const [pageType, setPageType] = useState("restaurant")
  const [emotion, setEmotion] = useState("happy")
  const [authorized, setAuthorized] = useState(false)
  return (
    <div className="App">
      {!!pageType ? <p>Selected page is {pageType}</p> : <p>Select page</p>}
      <div>
        <button onClick={() => setPageType("restaurant")}>Restaurant</button>
        <button onClick={() => setPageType("emotion")}>Emotion</button>
      </div>
      {pageType === 'restaurant'?
      <>
        {authorized ?
          <>
            <Header name="Deepu"/>
            <button onClick={() => setAuthorized(false)}>Logout</button>
            <Main adjective="amazing" dishes={dishObj}/>
            <Footer year={new Date().getFullYear()}/> 
          </>:
        <>
          <button onClick={() => setAuthorized(true)}>Login</button>
        </>}
      </>:
      <>
        <h1>Current emotion is {emotion}</h1>
        <button onClick={() => setEmotion("happy")}>Happy</button>
        <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
        <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
      </>
      }
    </div>

  );
}

export default App;
