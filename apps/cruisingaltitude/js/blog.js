fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fmedium.com%2Ffeed%2F%40AdAstraUltraque')
	.then(data => {
		return data.json();
	})
	.then(data => {
		for (let i = 0; i < Math.min(10, data.items.length); i++) {
			const entry = data.items[i];
			printPost(entry);

			console.log(entry);
		}
	});

function printPost(entry) {
	var post = document.createElement('a');
	post.setAttribute('class', 'blog-post');
	post.setAttribute('href', entry.link);
	post.setAttribute('target', '_blank');

	var title = document.createElement('a');
	title.setAttribute('class', 'blog-text blog-title');
	title.innerText = entry.title;

	var date = document.createElement('span');
	date.setAttribute('class', 'blog-text blog-date');
	date.innerText = new Date(entry.pubDate).toDateString();;

	var labels = document.createElement('div');
	labels.setAttribute('class', 'blog-text');

	for (var i = 0; i < entry.categories.length; i++) {
		console.log(entry.categories);
		var lbl = document.createElement('span');
		lbl.setAttribute('class', 'blog-text blog-tags');
		lbl.innerHTML = entry.categories[i] + '';

		labels.appendChild(lbl);
	}

	post.appendChild(title);
	post.appendChild(date);
	post.appendChild(labels);

	var blogs = document.getElementById('blog-container');
	blogs.appendChild(post);
}