import React, { Component } from 'react'
import '../../App.css'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'
import '../home/home.scss'
import Tables from '../../components/parts/Tables'

class Home extends Component {
	constructor(props) {
		super(props)
		const user = JSON.parse(localStorage.getItem('user')) || null
		this.state = {
			user: user
		}
	}
	render() {
		// if (!this.state.user) {
		//     window.location.href = "/login"
		// }

		return (
			<div>
				<Header />
				<div className="floatleft">
					<Tables />
				</div>
				<div className="floatright">
					<section>
						<header>
							<h3 className="subHeader">Latest News</h3>
						</header>
						<ul className="block-list-3" data-widget="lazy-load">
							<li className="article-thumb js-content-load" data-initialised="true" >
								<a href="https://www.premierleague.com/news/1772769" className="thumbnail">
									<figure>
										<span className="image thumbCrop-latestnews">
											<img className="article-thumb__img" src=" https://resources.premierleague.com/photos/2020/08/24/9d0993d1-48ab-43d9-b30e-3afcb9c940c9/jeff-hendrick-joins-newcastle.png?width=500&amp;height=333" 
											data-src-placeholder="https://resources.premierleague.com/photos/2020/08/24/9d0993d1-48ab-43d9-b30e-3afcb9c940c9/jeff-hendrick-joins-newcastle.png?width=100&amp;height=56" alt="Jeff Hendrick joins Newcastle"></img>

										</span>
										<figcaption>


											<span className="tag">Transfers</span>
											<span className="title">Newcastle sign former Burnley midfielder Hendrick</span>
										</figcaption>
									</figure>
								</a>
								<div className="relatedArticles">

									<a href="https://www.premierleague.com/video/single/1654536" className="relatedArticle club video">
										<p>
											Watch Newcastle signing Hendrick give Kepa no chance
										</p>
									</a>

									<a id="mini-link" href="https://www.nufc.co.uk/news/latest-news/magpies-confirm-signing-of-republic-of-ireland-international-jeff-hendrick/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
										<span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
											<img className="club-icon" className="badge-image badge-image--25 js-badge-image"
												src="https://resources.premierleague.com/premierleague/badges/25/t4.png"
												srcset="https://resources.premierleague.com/premierleague/badges/25/t4@x2.png 2x"></img>
										</span>
										<p className="mini-header">
											Magpies confirm signing of Republic of Ireland international Jeff Hendrick
				
										</p>
									</a>
								</div>
							</li>
							<li className="article-thumb js-content-load" data-initialised="true" >


								<a href="https://www.premierleague.com/news/1772210" className="thumbnail">
									<figure>
										<span className="image thumbCrop-latestnews">

											<img className="article-thumb__img"
												src="https://resources.premierleague.com/photos/2020/08/24/f04239b7-3319-45ec-ab1f-31500fce2dec/Cedric-Soares.jpg?width=500&amp;height=333"
												data-src-placeholder="https://resources.premierleague.com/photos/2020/08/24/f04239b7-3319-45ec-ab1f-31500fce2dec/Cedric-Soares.jpg?width=100&amp;height=67"
												alt="Cedric Soares"></img>

										</span>
										<figcaption>


											<span className="tag">Transfers</span>
											<span className="title">Cedric and Mari make Arsenal moves permanent</span>
										</figcaption>
									</figure>
								</a>
								<div className="relatedArticles">

									<a id="mini-link" href="https://www.arsenal.com/news/mari-and-soares-make-loan-moves-permanent?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" className="relatedArticle club text">
										<span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
											<img className="club-icon" className="badge-image badge-image--25 js-badge-image"
												src="https://resources.premierleague.com/premierleague/badges/25/t3.png"
												srcset="https://resources.premierleague.com/premierleague/badges/25/t3@x2.png 2x"></img>
										</span>
										<p className="mini-header">
											Mari and Soares make loan moves permanent
										
										</p>
									</a>

									<a href="https://www.premierleague.com/news/1674059" className="relatedArticle club text">
										<p>
											Summer 2020 Transfers &amp; News
										</p>
									</a>
								</div>
							</li>
							<li className="article-thumb js-content-load" data-initialised="true">


								<a href="https://www.premierleague.com/news/1766913" className="thumbnail">
									<figure>
										<span className="image thumbCrop-latestnews">

											<img className="article-thumb__img" src="https://resources.premierleague.com/photos/2020/08/23/23167761-c0f7-45ac-8530-085558bf5dc2/Talking-Tactics-LIVLEE-Firmino-Bamford-non-HP.jpg?width=500&amp;height=333"
												data-src-placeholder="https://resources.premierleague.com/photos/2020/08/23/23167761-c0f7-45ac-8530-085558bf5dc2/Talking-Tactics-LIVLEE-Firmino-Bamford-non-HP.jpg?width=100&amp;height=67"
												alt="Roberto Firmino and Patrick Bamford"></img>

										</span>
										<figcaption>


											<span className="tag">Talking Tactics</span>
											<span className="title">Leading from front will be key when champions collide</span>
										</figcaption>
									</figure>
								</a>
								<div className="relatedArticles">

									<a href="https://www.premierleague.com/news/1755335" className="relatedArticle club text">
										<p>
											Liverpool eye yet another high-scoring opener
		</p>
									</a>

									<a href="https://www.premierleague.com/news/1755014" className="relatedArticle club text">
										<p>
											Promoted clubs seek historic treble
		</p>
									</a>
								</div>
							</li>
							<li className="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1701595" className="thumbnail">
			<figure>
				<span className="image thumbCrop-latestnews">
				
						<img className="article-thumb__img" src="https://resources.premierleague.com/photos/2020/08/23/2354acaf-608a-4d50-80a7-a67c1b7cf4e3/konsa-new-away-kit.png?width=500&amp;height=333" 
						data-src-placeholder="https://resources.premierleague.com/photos/2020/08/23/2354acaf-608a-4d50-80a7-a67c1b7cf4e3/konsa-new-away-kit.png?width=100&amp;height=67" 
						alt="Esri Konsa in Aston Villa's 2020/21 away kit"></img>					
				</span>
				<figcaption>
					<span className="tag">Feature</span>
					<span className="title">Premier League new kits revealed for 2020/21 season</span>
				</figcaption>
			</figure>
		</a>
			<div className="relatedArticles">
	<a id="mini-link" href="https://www.avfc.co.uk/News/2020/08/20/gallery-first-team-away-kit?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" className="relatedArticle club text">
			<span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" className="badge-image badge-image--25 js-badge-image" 
				src="https://resources.premierleague.com/premierleague/badges/25/t7.png" 
				srcset="https://resources.premierleague.com/premierleague/badges/25/t7@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			GALLERY: Konsa, McGinn and Hourihane in the new away shirt
			
		</p>
	</a>

	<a id="mini-link" href="https://www.arsenal.com/news/new-adidas-x-arsenal-away-kit?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" className="relatedArticle club text">
			<span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" className="badge-image badge-image--25 js-badge-image" 
				src="https://resources.premierleague.com/premierleague/badges/25/t3.png" 
				srcset="https://resources.premierleague.com/premierleague/badges/25/t3@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			The new adidas x Arsenal away kit!		
		</p>
	</a>
			</div>
	</li>
							<li className="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1752636" className="thumbnail">
			<figure>
				<span className="image thumbCrop-latestnews">
				
						<img className="article-thumb__img" src="https://resources.premierleague.com/photos/2020/08/22/e29e779e-6d19-4b7f-8b01-659de3e405a5/son.jpg?width=500&amp;height=333" 
						data-src-placeholder="https://resources.premierleague.com/photos/2020/08/22/e29e779e-6d19-4b7f-8b01-659de3e405a5/son.jpg?width=100&amp;height=67" 
						alt="Heung-min Son, Tottenham Hotspur"></img>
					
				</span>
				<figcaption>

					<span className="tag">News</span>
					<span className="title">Premier League clubs' summer 2020 matches</span>
					<br/>
				</figcaption>
			</figure>
		</a>
			<div className="relatedArticles">

	<a id="mini-link" href="https://www.tottenhamhotspur.com/news/2020/august/ipswich-beaten-in-pre-season-opener/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" className="relatedArticle club text">
			<span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" className="badge-image badge-image--25 js-badge-image" 
				src="https://resources.premierleague.com/premierleague/badges/25/t6.png" 
				srcset="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			Ipswich beaten in pre-season opener
		</p>
	</a>

	<a id="mini-link" href="https://www.evertonfc.com/match/58749/blackpool-everton#report/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" className="relatedArticle club text">
			<span className="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" className="badge-image badge-image--25 js-badge-image" 
				src="https://resources.premierleague.com/premierleague/badges/25/t11.png" 
				srcset="https://resources.premierleague.com/premierleague/badges/25/t11@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			Report: Blackpool 3-3 Everton
				
		</p>
	</a>
			</div>
	</li>
							<li className="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1756986" className="thumbnail">
			<figure>
				<span className="image thumbCrop-latestnews">
				
						<img className="article-thumb__img" 
						src="https://resources.premierleague.com/photos/2020/08/21/ff373ba9-1fdc-4727-bb7b-9d4fd32a4455/Jose-Mourinho.jpg?width=500&amp;height=333" 
						data-src-placeholder="https://resources.premierleague.com/photos/2020/08/21/ff373ba9-1fdc-4727-bb7b-9d4fd32a4455/Jose-Mourinho.jpg?width=100&amp;height=67" 
						alt="Jose Mourinho"></img>
					
				</span>
				<figcaption>


					<span className="tag">Fixtures</span>
					<span className="title">Mourinho aims to maintain record of fast starts</span>
				</figcaption>
			</figure>
		</a>
			<div className="relatedArticles">

	<a href="https://www.premierleague.com/news/1755771" className="relatedArticle club text">
		<p>
			Matchweek 1 records of current Premier League managers
		</p>
	</a>

	<a href="https://www.premierleague.com/news/1755964" className="relatedArticle club text">
		<p>
			Title contenders face early heavyweight duels
		</p>
	</a>
			</div>
	</li>
						</ul>
					</section>
					<section class="mainWidget latestFeatures ">
	        <header>
	            <h3 class="subHeader">Latest FPL News</h3>
	        </header>

        <ul class="block-list-3" data-widget="lazy-load">
	<li class="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1776446" class="thumbnail">
			<figure>
				<span class="image thumbCrop-latestnews">
				
                        <img class="article-thumb__img" src="            https://resources.premierleague.com/photos/2020/08/25/bdf046a6-1463-482f-8b2b-b4a93f6b5079/eric-dier-ruben-vinagre-2.png?width=500&amp;height=333
" data-src-placeholder="https://resources.premierleague.com/photos/2020/08/25/bdf046a6-1463-482f-8b2b-b4a93f6b5079/eric-dier-ruben-vinagre-2.png?width=100&amp;height=67" alt="Eric Dier and Ruben Vinagre"></img>
					
				</span>
				<figcaption>


					<span class="tag">Fantasy Premier League</span>
					<span class="title">FPL rotation: Dier and Vinagre can bring in early points</span>
				</figcaption>
			</figure>
		</a>
			<div class="relatedArticles">

	<a href="https://www.premierleague.com/video/single/1777106" class="relatedArticle club video">
		<p>
			FPL expert Ben McNair's initial GW1 line-up
		</p>
	</a>

	<a id="mini-link" href="https://www.tottenhamhotspur.com/news/2020/august/dier-recalled-three-in-england-squad/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" class="relatedArticle club text">
			<span class="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" class="badge-image badge-image--25 js-badge-image" src="https://resources.premierleague.com/premierleague/badges/25/t6.png" srcset="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			Dier recalled, three in England squad
			
		</p>
	</a>
			</div>
	</li>
	<li class="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news//1775545" class="thumbnail">
			<figure>
				<span class="image thumbCrop-latestnews">
				
                        <img class="article-thumb__img" src="            https://resources.premierleague.com/photos/2020/08/25/829c0630-5147-454f-8005-558848a6d90e/sterling-wan-bissaka-mun-mci-1920.png?width=500&amp;height=333
" data-src-placeholder="https://resources.premierleague.com/photos/2020/08/25/829c0630-5147-454f-8005-558848a6d90e/sterling-wan-bissaka-mun-mci-1920.png?width=100&amp;height=56" alt="Raheem Sterling, Man City"></img>
					
				</span>
				<figcaption>


					<span class="tag">Fantasy Premier League</span>
					<span class="title">FPL experts: How to plan for blank Gameweek 1</span>
				</figcaption>
			</figure>
		</a>
			<div class="relatedArticles">

	<a href="https://www.premierleague.com/news/1756876" class="relatedArticle club text">
		<p>
			FPL experts: Top tips on how to structure your GW1 squad
		</p>
	</a>

	<a href="https://www.premierleague.com/video/single/1754712" class="relatedArticle club video">
		<p>
			The Scout's early FPL Ones to watch
		</p>
	</a>
			</div>
	</li>
	<li class="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1775739" class="thumbnail">
			<figure>
				<span class="image thumbCrop-latestnews">
				
						<img class="article-thumb__img" src="            https://resources.premierleague.com/photos/2020/08/25/8ae034bd-48ae-4cf2-a7e9-08ce818103a1/EKBqNTpp.jpg?width=500&amp;height=333
" data-src-placeholder="https://resources.premierleague.com/photos/2020/08/25/8ae034bd-48ae-4cf2-a7e9-08ce818103a1/EKBqNTpp.jpg?width=100&amp;height=56" alt="FPL expert Ben McNair's initial GW1 line-up"></img>
					
				</span>
				<figcaption>


					<span class="tag">Fantasy Premier League</span>
					<span class="title">FPL expert's squad: Double up on Wolves wing-backs</span>
				</figcaption>
			</figure>
		</a>
			<div class="relatedArticles">

	<a href="https://www.premierleague.com/news/1756876" class="relatedArticle club text">
		<p>
			FPL experts: Top tips on how to structure your GW1 squad
		</p>
	</a>

	<a href="https://www.premierleague.com/video/single/1773895" class="relatedArticle club video">
		<p>
			FPL expert Sam Bonfield's initial GW1 line-up
		</p>
	</a>
			</div>
	</li>
	<li class="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1771814" class="thumbnail">
			<figure>
				<span class="image thumbCrop-latestnews">
				
						<img class="article-thumb__img" src="            https://resources.premierleague.com/photos/2020/08/24/5b887c91-d205-4ab9-a6e0-415c9c5f46c9/dKYtcFvv.jpg?width=500&amp;height=333
" data-src-placeholder="https://resources.premierleague.com/photos/2020/08/24/5b887c91-d205-4ab9-a6e0-415c9c5f46c9/dKYtcFvv.jpg?width=100&amp;height=56" alt="FPL expert Sam Bonfield's initial GW1 line-up"></img>
					
				</span>
				<figcaption>


					<span class="tag">Fantasy Premier League</span>
					<span class="title">FPL expert's squad: Alexander-Arnold can be a record-breaker</span>
				</figcaption>
			</figure>
		</a>
			<div class="relatedArticles">

	<a href="https://www.premierleague.com/news/1756876" class="relatedArticle club text">
		<p>
			FPL experts: Top tips on how to structure your GW1 squad
		</p>
	</a>

	<a href="https://www.premierleague.com/video/single/1753082" class="relatedArticle club video">
		<p>
			How Alexander-Arnold won TAG Heuer Young Player of the Season
		</p>
	</a>
			</div>
	</li>
	<li class="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1771417" class="thumbnail">
			<figure>
				<span class="image thumbCrop-latestnews">
				
                        <img class="article-thumb__img" src="            https://resources.premierleague.com/photos/2020/08/24/d50a46e2-d3cf-48f4-9c74-431cc9460ecc/egan-walker-peters-2.png?width=500&amp;height=333
" data-src-placeholder="https://resources.premierleague.com/photos/2020/08/24/d50a46e2-d3cf-48f4-9c74-431cc9460ecc/egan-walker-peters-2.png?width=100&amp;height=67" alt="John Egan and Kyle Walker-Peters"></img>
					
				</span>
				<figcaption>


					<span class="tag">Fantasy Premier League</span>
					<span class="title">FPL rotation: Double up with Egan and Walker-Peters</span>
				</figcaption>
			</figure>
		</a>
			<div class="relatedArticles">

	<a id="mini-link" href="https://www.sufc.co.uk/news/2020/august/egan-deal/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" class="relatedArticle club text">
			<span class="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" class="badge-image badge-image--25 js-badge-image" src="https://resources.premierleague.com/premierleague/badges/25/t49.png" srcset="https://resources.premierleague.com/premierleague/badges/25/t49@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			Blades invest in defender Egan
		
		</p>
	</a>

	<a id="mini-link" href="https://www.southamptonfc.com/2020/08/11/southampton-football-club-transfer-announcement-kyle-walker-peters-signing?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" class="relatedArticle club text">
			<span class="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" class="badge-image badge-image--25 js-badge-image" src="https://resources.premierleague.com/premierleague/badges/25/t20.png" srcset="https://resources.premierleague.com/premierleague/badges/25/t20@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			Saints seal Walker-Peters deal
				
		</p>
	</a>
			</div>
	</li>
	<li class="article-thumb js-content-load" data-initialised="true">


		<a href="https://www.premierleague.com/news/1770668" class="thumbnail">
			<figure>
				<span class="image thumbCrop-latestnews">
				
                        <img class="article-thumb__img" src="            https://resources.premierleague.com/photos/2020/08/24/00033c57-59d7-4f22-a5f1-78fc88f02ca3/GettyImages-1267728134.jpg?width=500&amp;height=333
" data-src-placeholder="https://resources.premierleague.com/photos/2020/08/24/00033c57-59d7-4f22-a5f1-78fc88f02ca3/GettyImages-1267728134.jpg?width=100&amp;height=67" alt="Son Heung-min, Spurs"></img>
					
				</span>
				<figcaption>


					<span class="tag">Fantasy Premier League</span>
					<span class="title">FPL pre-season lessons: Son double turning heads</span>
				</figcaption>
			</figure>
		</a>
			<div class="relatedArticles">

	<a id="mini-link" href="https://www.tottenhamhotspur.com/news/2020/august/sonny-aiming-high/?utm_source=premier-league-website&amp;utm_campaign=website&amp;utm_medium=link" target="_blank" class="relatedArticle club text">
			<span class="badge badge-image-container" data-widget="club-badge-image" data-size="25">
				<img className="club-icon" class="badge-image badge-image--25 js-badge-image" src="https://resources.premierleague.com/premierleague/badges/25/t6.png" srcset="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png 2x"></img>
			</span>
		<p className="mini-header">
			Sonny aiming high
				
		</p>
	</a>

	<a href="https://www.premierleague.com/news/1756876" class="relatedArticle club text">
		<p>
			FPL experts: Top tips on how to structure your GW1 squad
		</p>
	</a>
			</div>
	</li>
		</ul>
			</section>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Home


