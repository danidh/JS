var movies = [
    {
        title: "movie 1",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "movie 1",
        rating: 5,
        hasWatched: false
    },
    {
        title: "movie 3",
        rating: 3,
        hasWatched: false
    },
    {
        title: "movie 4",
        rating: 3.5,
        hasWatched: true
    }
];

function loopThrough() {
    movies.forEach(function(arr) {
        if (arr.hasWatched === true) {
            console.log("You have watched \"" + arr.title + "\" - " + arr.rating + " stars");
        }
        else {
            console.log("You have not seen \"" + arr.title + "\" - " + arr.rating + " stars");
        }
    });
}
