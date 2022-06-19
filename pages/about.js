import React from "react";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import Image from '../components/image'

const About = ({ page }) => {
  return (
    <Layout page={page}>
      <div className="about">
        <div class="image">
          <Image image={page.image.data.attributes}/>
        </div>
        <div class="side-text">
          <ReactMarkdown 
            children={page.text} 
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  
  // Run API calls in parallel
  const [pageRes] = await Promise.all([
    fetchAPI("/about", { populate: "*" }),
  ])

  return {
    props: {
      page: pageRes.data.attributes,
    },
    revalidate: 1,
  }
}

export default About;