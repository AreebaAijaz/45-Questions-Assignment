function make_album(Artist, title, tracks) {
    var album = {
        Artist: Artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album title 1');
console.log(album1);
var album2 = make_album('Artist 2', 'Album title 2');
console.log(album2);
var album3 = make_album('Artist 3', 'Album title 3', 25);
console.log(album3);
