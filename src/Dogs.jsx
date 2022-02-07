import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Dogs = () => {
  const url = "https://api.thedogapi.com/v1/images/search";

  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>

  return (
    <div>
      {data ? (
        <center>
          <h1>Dog App</h1>
          <div className="card">
            <img src={data[0].url} alt="img" />
            {data[0].breeds.length > 0 ? (
              <div>
                <p>
                  <b>Breed: </b>
                  {data[0].breeds[0].name}
                </p>
                <p>
                  <b>Life span: </b>
                  {data[0].breeds[0].life_span}
                </p>
                <p>
                  <b>Utility: </b>
                  {data[0].breeds[0].bred_for}
                </p>
                <p>
                  <b>Temperament: </b>
                  {data[0].breeds[0].temperament}
                </p>
              </div>
            ) : (
              <p>
                <b>Breed: </b>
                Por especificar
              </p>
            )}
            <button type="submit" onClick={() => window.location.reload()}>Siguiente</button>
          </div>
        </center>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Dogs;
