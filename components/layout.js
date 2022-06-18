import Menu from './menu'

const Layout = ({children}) => {
  return (
    <>
		<Menu/>
		<footer>
			<div class="logo-footer">
				<a href='/about'><img src="logo.png" alt=""/></a>
			</div>
			{children}
		</footer>
		</>
  );
};



export default Layout;