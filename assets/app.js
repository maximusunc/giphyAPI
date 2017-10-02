var buttons = ["Michael Scott", "Dwight Shrute", "Jim Halpert", "Pam Beasley", "Andy Bernard", "Angela Martin", "Toby Flenderson", "Creed Bratton"];
var queryURL = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&limit=10";


for (var i = 0; i < buttons.length; i++) {
	$("#buttons").append("<button>" + buttons[i] + "</button>");
};

$("button").on("click", function() {
	queryURL += "&q=" + $(this).text();
	console.log(queryURL)
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(response) {
		for (var i = 0; i < 10; i++) {
			var result = response.data[i].images.fixed_height.url;
			$("#giphs").prepend("<img src=" + result + ">");
		}
	})
});