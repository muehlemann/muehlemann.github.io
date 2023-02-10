fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fmedium.com%2Ffeed%2F%40AdAstraUltraque')
	.then(data => {
		return data.json();
	})
	.then(data => {
		for (let i = 0; i < Math.min(10, data.items.length); i++) {
			const entry = data.items[i];
			const image = parseImage(entry)

			printPost(entry, image);
		}
	});

function parseImage(entry) {
	let parser = new DOMParser();
	const page = parser.parseFromString(entry.content, 'text/html');
	const list = page.getElementsByTagName("figure");

	return list[0].getElementsByTagName("img")[0].src;
}

function printPost(entry, src) {

	// Header
	var title = document.createElement('h3');
	title.setAttribute('class', 'blog-text blog-title');
	title.innerText = entry.title;

	var header = document.createElement('div');
	header.setAttribute('class', 'blog-header');
	header.setAttribute('style', 'background-image: url(' + src + ');')
	header.appendChild(title);

	// Body
	var pubDate = new Date(entry.pubDate);
	var dateStr = pubDate.toLocaleDateString('en-us', { year:'numeric', month:'short'});

	var date = document.createElement('span');
	date.setAttribute('class', 'blog-text blog-date');
	date.innerText = dateStr;

	var labels = document.createElement('div');
	labels.setAttribute('class', 'blog-text');

	for (var i = 0; i < entry.categories.length; i++) {
		var lbl = document.createElement('span');
		lbl.setAttribute('class', 'blog-text blog-tags');
		lbl.innerHTML = entry.categories[i] + '';

		labels.appendChild(lbl);
	}

	var body = document.createElement('div');
	body.appendChild(date);
	body.appendChild(labels);

	// Post
	var post = document.createElement('a');
	post.setAttribute('class', 'blog-post');
	post.setAttribute('href', entry.link);
	post.setAttribute('target', '_blank');

	post.appendChild(header);
	post.appendChild(body);

	var blogs = document.getElementById('blog-container');
	blogs.appendChild(post);
}