const Menu = () => {
  return (
    <nav class='menu'>
			<input class='menu-toggler' id='menu-toggler' type='checkbox'/>
			<label for='menu-toggler'></label>
			<ul>
				<li class='menu-item'>
					<a href='/contact'>C</a>
				</li>
				<li class='menu-item'>
					<a href='/about'>A</a>
				</li>
				<li class='menu-item'>
					<a  href='/'>W</a>
				</li>
			</ul>
		</nav>
  );
};



export default Menu;