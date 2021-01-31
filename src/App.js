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
    gender: {
      Male: true,
      Female: true,
    },
    "payment method": {
      cc: true,
      paypal: true,
      check: true,
    },
  });

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
  };
  const updateSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
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

  console.log(displayCard);
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
      <Body data={userData} />
    </div>
  );
}

export default App;
