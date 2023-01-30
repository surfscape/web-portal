window.location.href = "https://lastfm-widget.web.app/proxy.html";

var response = JSON.parse(decodeURIComponent(window.location.hash.substr(1)));

let track = response.recenttracks.track[0];
let trackName = track.name;
let albumName = track.album["#text"];
let artistName = track.artist["#text"];
let albumCover = track.image[3]["#text"];

let isPlaying = track["@attr"] && track["@attr"].nowplaying === "true";

document.getElementById("music-title").innerHTML = trackName;
document.getElementById("album-name").innerHTML = albumName;
document.getElementById("artist-name").innerHTML = artistName;
document.getElementById("album-cover").src = albumCover;
document.getElementById(
  "music-link"
).href = `https://www.last.fm/music/${artistName}/_/${trackName}`;
document.getElementById("playing-status").innerHTML = isPlaying
  ? "Now Playing:"
  : "Recently played:";
