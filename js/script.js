

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









/*   Hardhat Area
--event listener for click
--push link grabbed in console log to image display
--button functionality
--interval functionality




*/