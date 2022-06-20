import { fetchAPI } from "../lib/api"
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout"
import Image from '../components/image'

const Page = ({page, projects, id, content }) => {
	let next = id + 1;
	let prev = id - 1;
	if (id == 1) {
		prev = projects.length;
	}
	if (id == projects.length) {
		next = 1;
	}

	console.log(content)
  return (
    <Layout page={page}>
      <div>
				<div class="preview-img">
					{page.iframe ? 
						<>
							<iframe src={page.iframe} scrolling="no"/>
							<a target="_blank" href={page.iframe}><div class="circle dark"></div></a>
						</>
					:
        		<Image image={page.cover_image.data.attributes}/>
					}
      	</div>
				<a href={projects.find(x => parseInt(x.attributes.number) === prev)?.attributes.slug}><div class="circle-left dark"></div></a>
				<a href={projects.find(x => parseInt(x.attributes.number) === next)?.attributes.slug}><div class="circle-right dark"></div></a>
				<a href="#main"><div class="circle-bottom dark"></div></a>
			</div>
			<div class="grid-container">
				<div id="main">
					<div class="text">
						<ReactMarkdown 
							children={page.description} 
						/>
					</div>
					{content.map((item, i) => {
						return(
							<div className="content">
								{item.__component == 'basic.text' &&
									<div class="text">
										<ReactMarkdown 
											children={item.text} 
										/>
									</div>
								}
								{item.__component == 'basic.image' &&
									<div class="project-image">
											<Image image={item.image.data.attributes}/>
									</div>
								}
								{item.__component == 'basic.iframe' &&
									<div class="iframe">
										<iframe src={item.iframe} scrolling="no"/>
									</div>
								}
							</div>
						)
					})}
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

	const contentRes = 
    await fetchAPI( `/projects?filters[slug][$eq]=${params.slug}&populate[content][populate]=*`
  );

	const projectsRes = 
    await fetchAPI( `/projects?populate=*`
  );


  return {
    props: { 
      page: pagesRes.data[0].attributes, 
			content: contentRes.data[0].attributes.content,
			id: parseInt(pagesRes.data[0].attributes.number), 
			projects: projectsRes.data,
    },
    revalidate: 1,
  };
}


export default Page
