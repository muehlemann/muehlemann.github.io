function selectTitle(titleElement) {
	var titleRoot = document.getElementById('more-titles');
	var titleList = titleRoot.getElementsByTagName('span');

	for (title of titleList) {
		title.dataset.selected = 'false'
	}

	titleElement.dataset.selected = 'true'
}

function selectList(selectedId) {
	var itemRoot = document.getElementById('more-items');
	var itemList = itemRoot.querySelectorAll('#more-items > div');

	for(item of itemList) {
		item.classList.add('more-items-hide');

		if (item.id == selectedId) {
			item.classList.remove('more-items-hide');
		}
	};
}

window.addEventListener("load", () => {

	var items = document.getElementById("more-titles");
	items.addEventListener('click', (event) => {
		if (event.target == event.currentTarget) {
			return;
		}

		selectTitle(event.target);
		selectList(event.target.dataset.id);
	});

});