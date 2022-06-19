import React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import Projects from "../components/projects";

const Home = ({ projects, categories, page }) => {
  return (
    <Layout page={page}>
      <Projects projects={projects} categories={categories}/>
    </Layout>
  );
};

export async function getStaticProps() {
  
  // Run API calls in parallel
  const [pageRes, projectsRes, categoriesRes] = await Promise.all([
    fetchAPI("/home", { populate: "*" }),
    fetchAPI("/projects", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
  ])

  return {
    props: {
      page: pageRes.data.attributes,
      projects: projectsRes.data,
      categories: categoriesRes.data,
    },
    revalidate: 1,
  }
}

export default Home;