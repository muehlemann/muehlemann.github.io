var jobs = [
	{
		"company": "Honeycommb",
		"date": "Feb, 2019 - Present",
		"title": "Mobile Lead Engineer",
		"desc": "...",
	},
	{
		"company": "Honeycommb",
		"date": "June, 2017 - Present",
		"title": "Android Engineer",
		"desc": "...",
	},
	{
		"company": "CellInfo",
		"date": "May, 2014 - Present",
		"title": "Co-Founder",
		"desc": "...",
	},
	{
		"company": "Cell Signaling Technologies",
		"date": "May - December, 2016",
		"title": "Intern",
		"desc": "Developed a peptide search engine that allows for the querying and filtering of large Mass Spectrometry datasets, I designed and implemented the project by myself over the course of my six month internship.",
	},
	{
		"company": "SpeechBooth",
		"date": "April - August, 2015",
		"title": "Sole iOS Engineer",
		"desc": "The SpeechBooth app lets people at weddings record their speeches for the happy couple to see later. As the developer, I engineered and developed the entire app form scratch allowing for a very smooth user experience.",
	},
];

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

	var container = document.getElementById("work-container");

	for (var i = 0; i < jobs.length; i++) {
		var li = document.createElement("li");
		li.classList.add("work-item");
		li.classList.add(jobs[i].icon)

		var h4 = document.createElement("h4");
		h4.innerHTML = jobs[i].company + ": " + jobs[i].title;

		var h5 = document.createElement("h5");
		h5.innerHTML = jobs[i].date;

		var p  = document.createElement("p");
		p.innerHTML = jobs[i].desc;

		li.appendChild(h4);
		li.appendChild(h5);
		li.appendChild(p);

		container.appendChild(li);
	}
})


