import {
	StyledBanner,
	StyledHeader,
	StyledMain,
	StyledTextBox,
	StyledToGameStore
} from './home.styles';

const Home = () => {
	return (
		<StyledMain>
			<StyledHeader>Gamer Shop</StyledHeader>
			<picture>
				<source
					media='(min-width: 767px )'
					srcSet='/assets/images/banner-desktop.jpg'
				/>
				<source
					media='(min-width: 350px )'
					srcSet='/assets/images/banner-mobile.jpg'
				/>
				<StyledBanner src='/assets/images/banner-mobile.jpg' alt='banner' />
			</picture>
			<StyledTextBox>
				<span>Welcome to GAMER SHOP</span>
				<span>Discover a world of gaming excitement at your fingertips!</span>
				<span>
					From the latest blockbusters to timeless classics, we offer an
					extensive collection of games for all platforms.
				</span>
				<br />
				<span>🎮 Why Choose Us?</span>
				<ul>
					<li>
						<b>·</b> Wide Selection: Thousands of titles across all genres.
					</li>
					<li>
						<b>·</b> Great Deals: Competitive prices and exclusive offers.
					</li>
					<li>
						<b>·</b> Instant Access: Digital downloads available 24/7.
					</li>
					<li>
						<b>·</b> Trusted Service: Fast and secure shopping experience.
					</li>
				</ul>
				<span>
					Level up your gaming experience today! Explore, shop, and play like
					never before.
				</span>
			</StyledTextBox>
			<StyledToGameStore to={'/gamestore'}>Go To Game Store</StyledToGameStore>
		</StyledMain>
	);
};

export default Home;
