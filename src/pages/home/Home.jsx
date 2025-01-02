import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<h1>Gamer Shop</h1>
			<picture>
				<source
					media='(min-width: 767px )'
					srcSet='/assets/images/banner-desktop.jpg'
				/>
				<source
					media='(min-width: 350px )'
					srcSet='/assets/images/banner-mobile.jpg'
				/>
				<img src='/assets/images/banner-mobile.jpg' alt='banner' />
			</picture>
			<div>
				<span>Welcome to GAMER SHOP</span>
				<span>Discover a world of gaming excitement at your fingertips!</span>
				<span>
					From the latest blockbusters to timeless classics, we offer an
					extensive collection of games for all platforms.{' '}
				</span>

				<span>🎮 Why Choose Us?</span>
				<ul>
					<li>Wide Selection: Thousands of titles across all genres.</li>
					<li>Great Deals: Competitive prices and exclusive offers.</li>
					<li>Instant Access: Digital downloads available 24/7.</li>
					<li>Trusted Service: Fast and secure shopping experience.</li>
				</ul>
				<span>
					Level up your gaming experience today! Explore, shop, and play like
					never before.
				</span>
			</div>
			<Link to={'/gamestore'}>Go To Game Store</Link>
		</>
	);
};

export default Home;
