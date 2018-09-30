require("dotenv").config();
var request = require("request");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

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

var movie = function (movieTitle) {
    var url = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";
    request(url, function (error, response, body) {
        var data = JSON.parse(body);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].movieTitle.year + ", " + data[i].name.imdbRating + ", " + data[i].datetime);
        }
        if (movieTitle === undefined) {
            movieTitle = "mr nobody";
        }
    });
};

function says() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        var txt = data.split(',');
        spot(txt[1]);
    });
};


if (process.argv[2] === "concert-this") {
    concert(process.argv.slice(3).join(" "))
} else if (process.argv[2] === "spotify-this-song") {
    spot(process.argv.slice(3).join(" "))
} else if (process.argv[2] === "movie-this") {
    movie(process.argv.slice(3).join(" "))
} else if (process.argv[2] === "do-what-it-says") {
    says(process.argv.slice(3).join(" "))
};