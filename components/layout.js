import Menu from './menu'

const Layout = ({children, page}) => {
  return (
    <>
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
		</>
  );
};



export default Layout;