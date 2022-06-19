import React, { useState, useEffect } from 'react';
import Menu from './menu'

const Layout = ({children, page}) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
    	setLoading(false)
  	}, 500);
  }, []);
  return (
    <>
		{loading ? 
			<div className='loader'>
				<div className="lds-hourglass"></div>
			</div>
		:
			<div className='appear'>
				<Menu/>
				<div className="grid-container">
					<div className="head">
						<h1 id="intro" className={page.title}>{page.title}</h1>
					</div> 
				</div>
				{children}
				<footer>
					<div className="logo-footer">
						<a href='/'><img src="logo.png" alt=""/></a>
					</div>
				</footer>
			</div>
		}
		</>
  );
};



export default Layout;