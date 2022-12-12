import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Cards from "./Cards";
import SearchList from "./SearchList";
import Footer from "./Footer";
import { useState } from "react";
import SmallCards from "./SmallCards";
import QuestionBox from "./QuestionBox";
import FavourateList from "./FavourateList";
import Login from "./Login";
import ProductDetails from './ProductDetails';

const PropertiesData = [
  {
    Id: 1,
    Title: "Mobiles",
    // Text: " On Day Delivery",
    Budget: "100000",
    Type: "Mobile, Appliances, Toys, Machines, travel, Clothes, Offers",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkh_myWIBy9LsGYJNpf6VbQPgUDWbEDavWA&usqp=CAU",
  },

  {
    Id: 2,
    Title: "Mens",
    // Text: "1-2 Day Delivery",
    Budget: "4500",
    Type: "Mobile, Appliances, Toys, Machines, travel, Clothes, Offers",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TbHY7krBR0HAD_XErqKJ1wMT5HVN4L0WBA&usqp=CAU",
  },

  {
    Id: 3,
    Title: "Women",
    // Text: "1-2 Day Delivery",
    Budget: "5000",
    Type: "Mobile, Appliances, Toys, Machines, travel, Clothes, Offers",
    URL: "data:image/jpeg;base64,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",
  },

  {
    Id: 4,
    Title: "Appliances",
    // Text: "2-3 Day Delivery",
    Budget: "15000",
    Type: "Mobile, Appliances, Toys, Machines, travel, Clothes, Offers",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFbVAx8McYBiftW65NJ4h8W7fbEvGRdxaWg&usqp=CAU",
  },

  {
    Id: 5,
    Title: "Toys",
    // Text: "3-4 Day Delivery",
    Budget: "4000",
    Type: "Mobile, Appliances, Toys, Machines, travel, Clothes, Offers",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-kmGoAXYIysjHYnpA9uzmaZm3EkToXSkaw&usqp=CAU",
  },
  
  {
    Id: 6,
    Title: "Electronics",
    // Text: "On Day Delivery",
    Budget: "100000",
    Type: "Mobile, Appliances, Toys, Machines, travel, Clothes, Offers",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaOXplCKkqUwGpkfi1to9oex-59ExvnL-Iw&usqp=CAU",
  },
];

function App() {
  const [Properties, SetProperties] = useState(PropertiesData);
  const [FilteredProperties, SetFilteredProperties] = useState(PropertiesData);
  const [Favourates, SetFavourates] = useState([]);
  const [showFavourate, SetShowFavourates] = useState("main");
  const [selectedProducts, SetselectedProducts] = useState(0);
  const [selectedProduct, SetselectedProduct] = useState({});

  const favourates = (id) => {
    const fav = Properties.find((p) => p.Id == id);
    SetFavourates([...Favourates, fav]);
  };

  const gotofavourates = (screenname) => {
    SetShowFavourates(screenname);
  };

  const setProducts = (id) => {
    const pro = Properties.find((p) => p.Id == id);
    SetselectedProduct(pro);
    SetShowFavourates("details")
  };

  const search = (filters) => {
    const filteredProperties = Properties.filter(
      (p) =>
        p.Text.indexOf(
          filters.filters.location === "" ||
            filters.filters.location === undefined
            ? p.Text
            : filters.filters.location
        ) > -1 &&
        p.Type.indexOf(
          filters.filters.propertyType === "" ||
            filters.filters.propertyType === undefined
            ? p.Type
            : filters.filters.propertyType
        ) > -1 &&
        p.BudgetRange ===
          (filters.filters.budget === "" || filters.filters.budget === undefined
            ? p.BudgetRange
            : filters.filters.budget) &&
        p.BhkRange ===
          (filters.filters.bhk === "" || filters.filters.bhk === undefined
            ? p.BhkRange
            : filters.filters.bhk)
    );
    SetFilteredProperties(filteredProperties);
  };

  const content = () => {
    let text;
    if (showFavourate == "favourate") {
      text = (
        <>
          <FavourateList favourates={Favourates} />
        </>
      );
    } else if (showFavourate == "main") {
      text = (
        <>
          <SearchList search={search} />
          <SmallCards />
          <Cards properties={FilteredProperties} favourates={favourates} gotofavourates={gotofavourates} setProducts={setProducts}/>
        </>
      );
    } else{
      text = (
      <>
      <ProductDetails product={selectedProduct} gotofavourates={gotofavourates}/>
      </>
      )
    }
    return text;
  };
  return (
    <div className="App">
      <Navbar gotofavourates={gotofavourates} />
      {content()}
      {/* <Login/> */}
      
      <QuestionBox />
      <Footer />
    </div>
  );
}
export default App;
