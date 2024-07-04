import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [country, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {country.map((ele) => (
        <CountryCard image={ele.flag} name={ele.name} key={ele.abbr} />
      ))}
    </div>
  );
};

export {Countries};