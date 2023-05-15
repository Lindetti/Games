import "../Styles/Home.scss";
import {useEffect, useState} from "react";


const Home = () => {
const [sales, setSales] = useState([]);
const [numDisplayed, setNumDisplayed] = useState(10);
const url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
 useEffect(() => {
 fetch(url)
 .then((response) => response.json())
 .then((data) => {
 console.log(data);
 setSales(data);
   })
 }, [])


 const showMoreButton = () => {
    setNumDisplayed(sales.length);
 }

 const showLessButton = () => {
    setNumDisplayed(6);
 }
    
    
    return (
        <div className="home-wrapper">
                <h1>Games on Sale:</h1>
    <div className="games-onsale-div">
    {sales.slice(0, numDisplayed).map((item, index) => {
      return (
        <div key={index} className="sales-div">
          <h1>{item.title}</h1>
          <div className="image-div"> 
          <img src={item.thumb} alt="image" />
          </div>
          <div className="sale-info-div">
          <p>Is on Sale: {item.isOnSale === "1" ? "Yes" : "No"}</p>
          <p>Sale Price: {item.salePrice}</p>
          <p>Normal Price: {item.normalPrice}</p>
          <p>Steam Rating: {item.steamRatingPercent}%</p>
          <p>Steam Rating Text: {item.steamRatingText}</p>
          <a href={`https://store.steampowered.com/app/${item.steamAppID}`}  target="_blank">Get it now!</a>
          </div>
        </div>
      )
    })}
     </div>
     {numDisplayed < sales.length ? (
    <div className="showMoreButton">
    <button onClick={showMoreButton}>Show All</button>
    </div>
    ): (
        <div className="showMoreButton">
    <button onClick={showLessButton}>Show Less</button>
    </div>
    )
}

        </div>
    )
}

export default Home;