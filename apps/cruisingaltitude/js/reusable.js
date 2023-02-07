// Social

class Social extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div id="hero-text">
				<div>
					<a target="_blank" href="https://www.instagram.com/cruisingaltituderadio/">
						<img src="res/img/social/instagram.png"/>
					</a>
					<a target="_blank" href="https://www.facebook.com/cruisingaltituderadio">
						<img src="res/img/social/facebook.png"/>
					</a>
					<a target="_blank" href="https://www.tiktok.com/@adastraultraque">
						<img src="res/img/social/tiktok.png"/>
					</a>
					<a target="_blank" href="https://www.youtube.com/channel/UCTGxipRvNOsdImHmfrmzkSQ?sub_confirmation=1">
						<img src="res/img/social/youtube.png"/>
					</a>
					<a target="_blank" href="https://open.spotify.com/user/3mo6c33sz9zxfrzao8dfkszek?si=762b5e1efd8f492c">
						<img src="res/img/social/spotify.png"/>
					</a>
					<a target="_blank" href="http://www.venmo.com/u/gratefulimpala">
						<img src="res/img/social/venmo.png"/>
					</a>
				</div>
			</div>
		`
	}
}

// Hero

class Hero extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="row">
				<div id="hero">
					<div id="hero-logo">
						<div>
							<img src="res/img/icon.png">
							<div>
								<span>Crusing Altitude</span>
								<br>
								<span>The Captain</span>
							</div>
						</div>
					</div>
					<main-social></main-social>
				</div>
			</div>
		`
	}
}

// Footer

class Footer extends HTMLElement {
	connectedCallback() {
    	this.innerHTML = `
			<div class="row">
				<div id="footer">
					<div>
						<h1>~ ad astra ultraque ~</h1>

						<main-social></main-social>

						<a target="_blank" href="https://www.flaticon.com/free-icons">Icons created by Freepik - Flaticon</a>
						<a href="#">Crusing Altitude &copy; 2023</a>
					</div>
				</div>
			</div>
		`
	}
}

// Define Custom Elements

customElements.define('main-social', Social);
customElements.define('main-hero', Hero);
customElements.define('main-footer', Footer);






