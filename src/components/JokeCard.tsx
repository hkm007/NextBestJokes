"use client";
import React, { useEffect, useState } from "react";

function JokeCard() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res2) => {
        setJoke(res2.joke ?? "");
      })
      .catch((err) => {
        alert(err);
        setJoke("Something went wrong...");
      });
  }, []);

  return (
    <div className="card col-lg-6 mx-auto my-5">
      <div className="card-body">
        <i style={{ color: "grey", fontWeight: "bold", fontSize: "20px" }}>
          {joke}
        </i>
      </div>
    </div>
  );
}

export default JokeCard;
