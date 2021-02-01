import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { data } from "./data";

function App() {
  const [search, setSearch] = useState("");
  const [displayCard, setDisplayCard] = useState(true);
  const [profiles, setProfiles] = useState(data.records.profiles);
  const [options, setOptions] = useState({
    gender: data.getGenderFilter(),
    "payment method": data.getPaymentFilter(),
  });
  const [pageNum, setPageNum] = useState(1);

  const updateOptions = (e) => {
    e.stopPropagation();
    const type = e.target.parentElement.id;
    const filter_value = e.target.id;
    setOptions({
      ...options,
      [type]: {
        ...options[type],
        [filter_value]: !options[type][filter_value],
      },
    });
    setPageNum(1);
  };
  const updatePageNum = (e) => {
    console.log(e.target);
    setPageNum(e.target.innerText);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
    setPageNum(1);
  };
  const filterDisplay = () => {
    setDisplayCard(!displayCard);
  };
  const genders = Object.keys(options.gender).filter(
    (key) => options.gender[key] === true
  );
  const paymentMethods = Object.keys(options["payment method"]).filter(
    (key) => options["payment method"][key] === true
  );
  const userData = profiles
    .filter(
      ({ FirstName, LastName }) =>
        FirstName.toLowerCase().includes(search) ||
        LastName.toLowerCase().includes(search)
    )
    .filter(
      (profile) =>
        paymentMethods.includes(profile.PaymentMethod) &&
        genders.includes(profile.Gender)
    );
  const pageData = userData.slice((pageNum - 1) * 20, pageNum * 20);
  const size = userData.length;
  return (
    <div
      onClick={() => {
        if (!displayCard) {
          setDisplayCard(true);
        }
      }}
      className="App"
    >
      <Header
        setSearch={updateSearch}
        filterProp={{ filterDisplay, displayCard }}
        optionsProp={{ options, updateOptions }}
      />
      <Body data={pageData} pageProp={{ pageNum, updatePageNum, size }} />
    </div>
  );
}

export default App;
