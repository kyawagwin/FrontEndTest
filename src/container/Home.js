import React, { Fragment, useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";

import ColorList from "../components/ColorList";

const Home = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/unknown")
      .then((response) => {
        // handle success
        const { data } = response.data;

        setColors(data);
      })
      .catch((error) => {
        // handle error
        message.error("Fetch data failed: ", error);
      });
  }, []);

  return (
    <Fragment>
      <h1>Home</h1>
      <ColorList colors={colors} />
    </Fragment>
  );
};

export default Home;
