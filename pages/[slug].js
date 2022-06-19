import { fetchAPI } from "../lib/api"
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout"
import Image from '../components/image'

const Page = ({page, projects}) => {
	console.log(page)
  return (
    <Layout page={page}>
      <div>
				<div class="preview-img">
        	<Image image={page.cover_image.data.attributes}/>
      	</div>
				<a href="../digital-media2/digital-media2.html"><div class="circle-left dark"></div></a>
				<a href="../typography/typography.html"><div class="circle-right dark"></div></a>
				<a href="#main"><div class="circle-bottom dark"></div></a>
			</div>
			<div class="grid-container">
				<div id="main">
					<div class="text">
						<ReactMarkdown 
							children={page.description} 
						/>
						{/* <p>{page.description}</p> */}
					</div>
				</div>
			</div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const pagesRes = await fetchAPI("/projects");
  return {
    paths: pagesRes.data.map((page) => ({
      params: {
        slug: page.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pagesRes = 
    await fetchAPI( `/projects?filters[slug][$eq]=${params.slug}&populate=*`
  );

	const projectsRes = 
    await fetchAPI( `/projects?populate=*`
  );


  return {
    props: { 
      page: pagesRes.data[0].attributes, 
			projects: projectsRes.data,
    },
    revalidate: 1,
  };
}


export default Page
