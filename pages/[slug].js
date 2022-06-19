import { fetchAPI } from "../lib/api"
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout"
import Image from '../components/image'

const Page = ({page, projects, id }) => {
	console.log(projects)
	let next = id + 1;
	let prev = id - 1;
	if (id == 1) {
		prev = projects.length;
	}
	if (id == projects.length) {
		next = 1;
	}
  return (
    <Layout page={page}>
      <div>
				<div class="preview-img">
        	<Image image={page.cover_image.data.attributes}/>
      	</div>
				<a href={projects.find(x => x.id === prev).attributes.slug}><div class="circle-left dark"></div></a>
				<a href={projects.find(x => x.id === next).attributes.slug}><div class="circle-right dark"></div></a>
				<a href="#main"><div class="circle-bottom dark"></div></a>
			</div>
			<div class="grid-container">
				<div id="main">
					<div class="text">
						<ReactMarkdown 
							children={page.description} 
						/>
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
			id: pagesRes.data[0].id, 
			projects: projectsRes.data,
    },
    revalidate: 1,
  };
}


export default Page
