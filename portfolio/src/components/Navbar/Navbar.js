import React from 'react'

function Navbar () {
  return(
    <nav>
		<ul className="nav-list">
			<li className="nav-item">
				<a href="/" className="nav-link">Home</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link">About</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link">Portfolio</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link">Blog</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link">Contact</a>
			</li>
		</ul>
	</nav>
  )
};

export default Navbar;