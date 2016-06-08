function Song(title, artist, url) {
	this.title = document.getElementById("songTitle").value,
	this.artist = document.getElementById("songArtist").value,
	this.url = document.getElementById("addSong").value
}

function Song_up(title, artist, url) {
	this.title = title,
	this.artist = artist,
	this.url = url
}

function Jukebox() {
	var audio = document.getElementById("audio");
	this.playlist = [];
	var i = 0;
	// play song
	this.play = function() {
		audio.setAttribute('src', this.playlist[i])
		audio.play();
	}
	// pause song
	this.pause = function() {
		audio.pause();
	}
	// next song
	this.next = function() {
		
		if (i < this.playlist.length - 1) {
			i += 1
		}
		else {
			i = 0
		}
		this.play();
	}
	// previous song
	this.back = function() {
		i -= 1
		if (i = 0) {
			i = this.playlist.length - 1
		}
		else {
			i -= 1
		}
		this.play();
	}
	// preload songs
	this.selectPlay = function(y) {
		audio.setAttribute('src', this.playlist[y]);
		this.play();
	}
}

var my_jukebox = new Jukebox;
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var next = document.getElementById("next");
var back = document.getElementById("back");
play.addEventListener('click', function() {
	my_jukebox.play()
});
pause.addEventListener('click', function() {
	my_jukebox.pause()
});
next.addEventListener('click', function() {
	my_jukebox.next()
});
back.addEventListener('click', function() {
	my_jukebox.back()
});

my_jukebox.playlist = ["songs/Doctor P - Tetris.mp3", 
			"songs/Tiesto - Red Lights.mp3", 
			"songs/Deadmau5 - I Remember.mp3", 
			"songs/Chela - Zero (Keljet Remix).mp3", 
			"songs/Avicii - Wake Me Up.mp3"]