var albums = [
	{
		"artist": "Tame Impala",
		"title": "Currents",
		"cover": "tame-impala-currents.png"
	},
	{
		"artist": "L'Imp&eacute;ratrice",
		"title": "Odyss&eacute;e",
		"cover": "limperatrice-odyssee.jpg"
	},
	{
		"artist": "Parcels",
		"title": "Live Vol. 1",
		"cover": "parcels-live-vol-1.jpeg"
	},
	{
		"artist": "Arctic Monkeys",
		"title": "Tranquility Base Hotel &amp;...",
		"cover": "arctic-monkeys-tranquility-base-hotel-and-casino.png",
	},
	{
		"artist": "Toro y Moi",
		"title": "MAHAL",
		"cover": "toro-y-moi-mahal.png"
	},
	{
		"artist": "Lime Cordiale",
		"title": "Permanent Vacation",
		"cover": "lime-cordiale-permanent-vacation.png"
	},
	{
		"artist": "Kikagaku Moyo",
		"title": "Kumoyo Island",
		"cover": "kikagaku-moyo-kumoyo-island.png"
	},
	{
		"artist": "Mac Miller",
		"title": "Circles",
		"cover": "mac-miller-circles.png"
	},
	{
		"artist": "Logic",
		"title": "Young Sinatra IV",
		"cover": "logic-ysiv.png"
	},
	{
		"artist": "Logic",
		"title": "The Incredible True Story",
		"cover": "logic-thei-ncredible-true-story.jpg"
	},
	{
		"artist": "Pink Floyd",
		"title": "Wish You Were Here",
		"cover": "pink-floyd-wish-you-were-here.png"
	},
	{
		"artist": "Pink Floyd",
		"title": "The Dark Side of the Moon",
		"cover": "pink-floyd-the-dark-side-of-the-moon.png"
	},
	{
		"artist": "Led Zeppelin",
		"title": "Led Zeppelin II",
		"cover": "led-zeppelin-ii.jpg"
	},
	{
		"artist": "Jimi Hendrix",
		"title": "Electric Ladyland",
		"cover": "jimi-hendrix-electric-ladyland.jpg"
	},
	{
		"artist": "Greta Van Fleet",
		"title": "From The Fires",
		"cover": "greta-van-fleet-from-the-fires.jpg"
	},
	{
		"artist": "The Beatles",
		"title": "Abbey Road",
		"cover": "beatles-abbey-road.jpg"
	}
];

/* Evaluates the list of albums and creates DOM elements for them.
*/
function loadMusic() {
	var container = document.getElementById("music-container");

	for (var i = 0; i < albums.length; i++) {
		var div = document.createElement("div");
		div.classList.add("album");

		var img = document.createElement("img");
		img.src = "res/img/albums/" + albums[i].cover;

		var h5 = document.createElement("h5");
		h5.innerHTML = albums[i].title + "<br/>" + albums[i].artist;

		div.appendChild(img);
		div.appendChild(h5);

		container.appendChild(div);
	}
}

/* Adds js functionality to the menu element.
*/
function loadMenu() {

	document.getElementById("apps").addEventListener('click', (event) => {
		var appsMenu = document.getElementById("submenu");
		var className = appsMenu.className;

		if (className === "submenu-hide" || className === "") {
			appsMenu.className = "submenu-show";
		} else {
			appsMenu.className = "submenu-hide";
		}
	});

}

/* Due to the usage of the csi.js script not all of the DOM is availiable when "onload" is called.
*/
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
	loadMenu();
	loadMusic();
});

