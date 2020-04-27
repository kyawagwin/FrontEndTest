import React, { Fragment, useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";

import ColorList from "../components/ColorList";

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/unknown")
      .then((response) => {
        // handle success
        const { data } = response.data;

        setState(data);
      })
      .catch((error) => {
        // handle error
        message.error("Fetch data failed: ", error);
      });
  }, []);

  return (
    <Fragment>
      <h1>Home</h1>
      <ColorList colors={state} />
    </Fragment>
  );
};

export default Home;
