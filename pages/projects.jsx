import React from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Layout/Slider";

const projects = () => {
  return (
    <Layout whiteLogo={false} actualPage={"projects"} setFullHeight={"100vh"}>
      <Slider />
    </Layout>
  );
};

export default projects;
