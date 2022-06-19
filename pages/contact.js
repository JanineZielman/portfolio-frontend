import React from "react";
import ReactMarkdown from "react-markdown";
import Head from 'next/head';
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";

const Contact = ({ page }) => {
  return (
		<>
		<Head>
			<script src="/sketch.js"></script>
		</Head>
    <Layout page={page}>
			<div class="contact">
				<ReactMarkdown 
					children={page.text} 
				/>
			</div>
    </Layout>
		</>
  );
};

export async function getStaticProps() {
  
  // Run API calls in parallel
  const [pageRes] = await Promise.all([
    fetchAPI("/contact", { populate: "*" }),
  ])

  return {
    props: {
      page: pageRes.data.attributes,
    },
    revalidate: 1,
  }
}

export default Contact;