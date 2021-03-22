import { useEffect, useState, useReducer} from 'react';
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
  const [login, setLogin] = useState('sitaramsandeep')
  const [authorized, setAuthorized] = useReducer(
    (authorized) => !authorized,
    false
  )

  useEffect(() => {
    console.log('Selected page is ' + pageType)
  },[pageType])

  useEffect(() => {
    console.log('Current emotion is ' + emotion)
  },[emotion])

  useEffect(() => {
    console.log('Authorized: ' + authorized)
  },[authorized])

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!login) return;
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(
      setData
    ).then(() => setLoading(false))
    .catch(setError)
  },[login])
  
  if (loading) {
    return <h1>Loading... </h1>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (!data) {
    return null
  }

  return (
    <div className="App">
      {!!pageType ? <p>Selected page is {pageType}</p> : <p>Select page</p>}
      <div>
        <button onClick={() => setPageType("restaurant")}>Restaurant</button>
        <button onClick={() => setPageType("emotion")}>Emotion</button>
        <button onClick={() => setPageType("gitView")}>Git View</button>
      </div>
      {pageType === 'restaurant'?
      <>
        {authorized ?
          <>
            <Header name="Deepu"/>
            <button onClick={setAuthorized}>Logout</button>
            <Main adjective="amazing" dishes={dishObj}/>
            <Footer year={new Date().getFullYear()}/> 
          </>:
        <>
          <button onClick={setAuthorized}>Login</button>
        </>}
      </>: 
      <> 
        {pageType === 'emotion' ?
        <>
          <h1>Current emotion is {emotion}</h1>
          <button onClick={() => setEmotion("happy")}>Happy</button>
          <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
          <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
        </> : 
        <>
          {data ? 
          <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} height="100" alt="git profile"/>
            <p>Number of public repos = {data.public_repos}</p>
          </div> : 
          <div>No User Available</div>}
        </>
        }
      </>}
    </div>
  );
}

export default App;
