var topics = ["Michael Scott", "Dwight Shrute", "Jim Halpert", "Pam Beasley", "Andy Bernard", "Angela Martin", "Toby Flenderson", "Creed Bratton"];
var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&limit=10";
var still;
var animated;
var rating;


function displayButtons () {
	for (var i = 0; i < topics.length; i++) {
		$("#buttons").append("<button>" + topics[i] + "</button>");
	};
};

$("#addButton").on("click", function () {
	event.preventDefault();
	if ($("#addGiph").val() !== "") {
		topics.push($("#addGiph").val().trim());
		$("#buttons").empty();
		$("#addGiph").val("");
		displayButtons();
	};
});

displayButtons();

$("#buttons").on("click", "button", function() {
	queryURL += "&q=" + $(this).text();
	console.log(queryURL)
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(response) {
		for (var i = 0; i < 10; i++) {
			still = response.data[i].images.fixed_height_still.url;
			animated = response.data[i].images.fixed_height.url;
			rating = response.data[i].rating;
			var giph = "<img src=" + still + " data-still=" + still + " data-animated=" + animated + " data-state=still class=giph>" + "<br><br>" + "Rating: " + rating;
			$("#giphs").prepend(giph);
		}
		$(".giph").on("click", function() {
			var state = $(this).attr("data-state");
			if (state === "still") {
				$(this).attr("src", $(this).attr("data-animated"));
				$(this).attr("data-state", "animated");
				console.log($(this).attr("src"));
			} else {
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
				console.log($(this).attr("src"));
			}
		});
	})
});

