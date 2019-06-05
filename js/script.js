

var button = document.getElementById("button");
var begUrl = "http://www.reddit.com/search.json?q=";
var endUrl = "+nsfw:no";


button.addEventListener("click", function(e) {
	var searchBoxValue = document.getElementById("searchBox").value;

	var fullURL = begUrl + searchBoxValue + endUrl;
	searchBox.value = " ";
	fetch(fullURL) 
  		.then(function(responseData) {
    		return responseData.json();
  		})
  		.then(function(jsonData) {
			var searchResults = jsonData.data.children;
			for(i = 0; i < searchResults.length; i++) {
				var thumbnail = searchResults[i].data.thumbnail;
				var image = document.createElement("img");
				image.src = thumbnail;
				document.getElementById("pics").appendChild(image);
			}
		})

	});







/*

Hardhat Area
--event listener for click
--push link grabbed in console log to image display
--button functionality
--interval functionality


========================
Steve Solutions

var button;
var stopButton;
var searchBox;
var show;
var splash;
var content;
//this holds the user's search phrase
var searchTerm = '';
var firstPart = "http://www.reddit.com/search.json?q";
var lastPart = "+nsfw:no";
var url = '';
var imageIndex = 0;
var handle = null;

//Below is basically boilerplate. This even fires wen the page is fully loaded.
document.addEventListener("DOMContentLoaded", function() {
	button = document.getElementById("searchbutton");
	searchBox = document.getElementById("searchterm");
	show = document.getElementById("show");
	splash = document.getElementById("splash");
	content = document.getElementById("content");
	stopButton = document.getElementById("stop");

	stopButton.addEventListener("click", function(e) {
		clearInterval(handle);
	})
	
									// i short for iterator in a loop, e short for event for a function//
	button.addEventListner("click", function(e) {
		searchTerm = searchBox.value;
		searchBox.value = '';
		splash.classList.remove("visible");
		splash.classList.add("hidden");
		splash.classList.remove("visible");
		splash.classList.add("hidden");
		url = firstPart + searchTerm + lastPart;
		fetch(url)
		.then(function(data) {
			return data.json();
		})
		.then(function(json) {
			//console.log(json.data.children.[1].data.thumbnail);
			var newThumbs = json.data.children.map(function(thumb) {
				return thumb.data.thumbnail;
			});
			show.src= newThumbs[0];
			handle = setInterval(function () {
				if (imageIndex >= newThumbs.length) {
					imageIndex = -1;
				}
				imageIndex++;
				show.src = newThumb[imageIndex];
			}, 750);
		});
	});
})

*/









