import React, { useState, useEffect } from 'react';
import Image from './image'

const Projects = ({projects, categories}) => {
	let [elements, setElements] = useState();



	console.log(elements)

	useEffect(() => {
		let elem = [];
		for (let i = 0; i < categories.length; i++) { 
			elem += '.' + categories[i].attributes.slug + ',';
		}
		setElements(elem)
		$(function () {
		
			var filterList = {
			
				init: function () {
				
					// MixItUp plugin
					// http://mixitup.io
					$('#portfoliolist').mixItUp({
						selectors: {
							target: '.portfolio',
							filter: '.filter'	
						},
						load: {
							filter: elements
						}     
					});								
				
				}

			};
			
			// Run the show!
			filterList.init();
			
		});	
  });
		
  return (
		<section className='works'>
			<ul id="filters" class="clearfix">
				<li><span class="filter" data-filter={`${elements} .all`}>All</span></li>
				{categories.map((category, i) => {
					return(
						<li><span class="filter" data-filter={`.${category.attributes.slug}`}>{category.attributes.title}</span></li>
					)
				})}
			</ul>
			<div id="portfoliolist">
				{projects.map((item, i) => {
					return(
						<div className={`portfolio ${item.attributes.categories.data[0].attributes.slug}`} data-cat={item.attributes.categories.data[0].attributes.slug}>
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