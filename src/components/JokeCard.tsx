"use client";
import React, { useEffect, useState } from "react";
import { CUSTOM_JOKE, API_ENDPOINT, HEADERS } from "../config";

function JokeCard() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch(API_ENDPOINT, HEADERS)
      .then((res) => res.json())
      .then((jokeResponse) => {
        setJoke(jokeResponse.joke ?? CUSTOM_JOKE);
      })
      .catch((err) => {
        console.log(err);
        setJoke(CUSTOM_JOKE);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <i style={{ color: "grey", fontWeight: "bold", fontSize: "20px" }}>
          {joke}
        </i>
      </div>
    </div>
  );
}

export default JokeCard;
