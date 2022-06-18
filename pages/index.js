import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const Home = ({ projects, categories, home }) => {
  return (
    <Layout>
      <div className="grid-container">
        <div className="head">
          <h1 id="intro">{home.title}</h1>
        </div> 
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/home", { populate: "*" }),
  ])

  return {
    props: {
      home: homepageRes.data.attributes,
    },
    revalidate: 1,
  }
}

export default Home;