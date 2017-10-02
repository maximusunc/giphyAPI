var buttons = ["Michael Scott", "Dwight Shrute", "Jim Halpert", "Pam Beasley", "Andy Bernard", "Angela Martin", "Toby Flenderson", "Creed Bratton"];
var queryURL = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&limit=10&q=michael+scott";

$("#buttons").on("click", function() {
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(response) {
		for (var i = 0; i < 10; i++) {
			var result = response.data[i].images.fixed_height.url;
			console.log(result);
			$("#giphs").prepend("<img src=" + result + ">");
		}
	})
});

for (var i = 0; i < buttons.length; i++) {
	$("#buttons").append("<button>" + buttons[i] + "</button>");
};