import Menu from './menu'

const Layout = ({children, page}) => {
	console.log(page)
  return (
    <>
		<Menu/>
		<div className="grid-container">
			<div className="head">
				<h1 id="intro">{page.title}</h1>
			</div> 
		</div>
		{children}
		<footer>
			<div className="logo-footer">
				<a href='/about'><img src="logo.png" alt=""/></a>
			</div>
		</footer>
		</>
  );
};



export default Layout;