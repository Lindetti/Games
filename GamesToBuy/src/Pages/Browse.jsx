import {useEffect, useState} from "react";
import "../Styles/Browse.scss";

const Browse = () => {
const [input, setInput] = useState("");
const [searchedGame, setSearchedGame] = useState([]);
const url = `https://www.cheapshark.com/api/1.0/games?title=${input}`

const handleOnChange = (event) => {
setInput(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setSearchedGame(data);
        setInput("");
    })
}
return (
    <div className="browse-wrapper">
     <div className="title">
    <h1>We help you find the best deal!</h1>
    {searchedGame.length === 0 && <h1>Search games and find a nice deal!</h1>}
     </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search game.."
          onChange={handleOnChange}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
          <div className="games">
            {searchedGame.map((item, index) =>
              item.steamAppID ? (
                <div key={index} className="allGames">
                  <img src={item.thumb} alt="image" />
                  <p>{item.external}</p>
                  <p>Cheapest price: {item.cheapest} USD</p>
                  <a
                    href={`https://store.steampowered.com/app/${item.steamAppID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get it now!
                  </a>
                </div>
              ) : null
              )}
            </div>
    </div>
  )}
export default Browse;