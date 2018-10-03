require("dotenv").config();
var request = require("request");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var command = process.argv[3];
var fs = require("fs");

var concert = function (artist) {
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(url, function (error, response, body) {
        var data = JSON.parse(body);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].venue.city + ", " + data[i].venue.name + ", " + data[i].datetime);
        }
    })
}

var spot = function (song) {
    spotify.search({
        type: "track",
        query: song,
    }, function (error, data) {
        for (var i = 0; i < data.tracks.items.length; i++) {
            console.log(data.tracks.items[i].artists[0].name + ", " + data.tracks.items[i].name + ", " + data.tracks.items[i].preview_url + ", " + data.tracks.items[i].album.name);
        }
    });
}

function movie() {
    var movieTitle = command;
    var url = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&tomatoes=true&apikey=trilogy";
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);
            console.log('================ Movie Info ================');
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.Ratings[2].Value);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);
            console.log('================== THE END =================');

        } else {
            console.log("Error occurred.")
        }
        //Response if user does not type in a movie title
        if (movieTitle === "Mr. Nobody") {
            console.log("-----------------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");


        }
    });
};

function says() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (!error);
        console.log('================ Info ===================');
        console.log(data.toString());
        console.log('================ THE END ================');
    });
}


if (process.argv[2] === "concert-this") {
    concert(process.argv.slice(3).join(" "))
} else if (process.argv[2] === "spotify-this-song") {
    spot(process.argv.slice(3).join(" "))
} else if (process.argv[2] === "movie-this") {
    movie(process.argv.slice(3).join(" "))
} else if (process.argv[2] === "do-what-it-says") {
    says(process.argv.slice(3).join(" "))
};
