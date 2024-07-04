import React from "react";

const CountryCard = ({ name, image, key }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          border: "0.1rem solid black",
          width: "20vw",
          height: "30vh",
        }}
      >
        <img
          src={image}
          alt={name}
          key={key}
          style={{ width: "15vw", height: "10vh", padding: "1rem" }}
        />
        <h4>{name}</h4>
      </div>
    );
  };
  
  export default CountryCard;