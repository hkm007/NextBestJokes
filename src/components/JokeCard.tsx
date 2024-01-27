"use client";
import React, { useEffect, useState } from "react";
import { CUSTOM_JOKE, API_ENDPOINT, HEADERS } from "../config";

function JokeCard() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      setLoading(false);
    };

    fetchData();
  }, []);

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
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh); 
  };

  return (
    <div className="container">
       { loading ? (
       <div className="spinner">
      <div className="spinner-border text-primary justify-center" role="status">
      <span className="sr-only"></span>
    </div>
    </div>
          ) : (
    <div>        
    <div className="card">
     
      <div className="card-body">
        <i style={{ color: "grey", fontWeight: "bold", fontSize: "20px" }}>
          {joke}
        </i>
      </div> 
    </div>
    <div className="refreshButton">
    <button type="button" className="btn btn-primary" onClick={handleRefresh}>
    Refresh
  </button>
  </div>
  </div>)}
  </div>
  );
}

export default JokeCard;
