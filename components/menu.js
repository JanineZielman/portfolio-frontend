const Menu = () => {
  return (
    <nav className='menu'>
			<input className='menu-toggler' id='menu-toggler' type='checkbox'/>
			<label for='menu-toggler'></label>
			<ul>
				<li className='menu-item'>
					<a href='/contact'>C</a>
				</li>
				<li className='menu-item'>
					<a href='/about'>A</a>
				</li>
				<li className='menu-item'>
					<a  href='/'>W</a>
				</li>
			</ul>
		</nav>
  );
};



export default Menu;