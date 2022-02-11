import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../styles/home.css";

import logo from "../../img/logo.jpg";
import { CreateText } from "../component/CreateText";
// import { TopTrending } from "../component/TopTrending";

export const Home = () => {
  const history = useHistory();
  const handleonClick = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/api/collection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        description: "",
        attributes: "",
        url: "",
        owner_account: "",
        contract_account: "",
        fee: 0,
        transferred: false,
      }),
    });

    if (response.status === 200) {
      const payload = await response.json();
      history.push("/collection/" + payload.id);
    }
  };

  return (
    <div className="text-center mt-5">
      <img src={logo} alt="" id="logo" />
      <h1 className="neonText">
        The <span id="new">New</span> Age
      </h1>
      <CreateText />
      {/* <TopTrending /> */}
      <Button className="coloredbtn" onClick={handleonClick}>
        Create NFT Collection
      </Button>
    </div>
  );
};
