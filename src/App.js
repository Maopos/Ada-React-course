import "./App.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  /* fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json)); */

  if (error) return <div>failed to load</div>;

  return (
    <div className="App">
      <header className="App-header">
        {" "}
        {data
          ? data.map((i) => {
              return (
                <div key={i.id}>
                  <p>{i.name}</p>
                  <p>{i.email}</p>
                  <p>{i.username}</p>
                </div>
              );
            })
          : "loading..."}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
