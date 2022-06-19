import Image from './image'

const Projects = ({projects, categories}) => {
  return (
		<section className='works'>
			<ul id="filters" class="clearfix">
				<li><span class="filter" data-filter=".digital-media, .photography, .typography, .books">All</span></li>
				<li><span class="filter" data-filter=".digital-media">Digital</span></li>
				<li><span class="filter" data-filter=".photography">Photography</span></li>
				<li><span class="filter" data-filter=".typography">Typography</span></li>
				<li><span class="filter" data-filter=".books">Books</span></li>
			</ul>
			<div id="portfoliolist">
				{projects.map((item, i) => {
					return(
						<div className={`portfolio ${item.attributes.slug}`} data-cat={item.attributes.slug}>
							<div className="portfolio-wrapper">
								<div className='img'>
									<Image image={item.attributes.cover_image.data.attributes}/>
								</div>
								<div className="label">
									<div className="label-text">
										<a href="pages/typography/typography.html" className="text-title">{item.attributes.title}</a>
										<span className="text-category">
											{item.attributes.categories.data.map((category, j) => {
												return(
													<>
													{category.attributes.title}
													</>
												)
											})}
										</span>
									</div>
									<a href={item.attributes.slug}><div className="label-bg"></div></a>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
  );
};



export default Projects;