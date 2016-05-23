// var jukebox = document.querySelector('ul.player');
// jukebox.addEventListener('click', function(e) {
// 	var songName = e.target.getAttribute('data-src');
// 	var audioPlayer = document.querySelector('#player');

// 	if (audioPlayer) {

// 		if (songName === audioPlayer.getAttribute('src')) {
// 			if (audioPlayer.paused) {
// 				audioPlayer.play();
// 				e.target.id = 'playing'
// 			}
// 			else {
// 				audioPlayer.pause();
// 				e.target.id = 'paused';
// 			}
// 		}
// 		else {
// 			audioPlayer.src = songName;
// 			audioPlayer.play();
// 			if (document.querySelector('#playing')) {
// 				document.querySelector('#playing').id = '';
// 				e.target.id = 'playing';
// 			}
// 			else {
// 				document.querySelector('#paused').id = '';
// 			}
// 			e.target.id = 'paused';
// 		}

		

// 	}
// 	else {
// 		var audioPlayer = document.createElement('audio');
// 		audioPlayer.id = 'player';
// 		e.target.id = 'playing';
// 		audioPlayer.src = songName;
// 		document.body.appendChild(audioPlayer);
// 		audioPlayer.play();

// 		audioPlayer.addEventListener('ended', function() {
// 			audioPlayer.parentNode.removeChild(audioPlayer);
// 			e.target.id = '';
// 		}, false);
// 	}

	
// }, false);

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

	this.play = function() {
		audio.setAttribute('src', this.playlist[i])
		audio.play();
	}
	this.pause = function() {
		audio.pause();
	}
	this.next = function() {
		
		if (i < this.playlist.length - 1) {
			i += 1
		}
		else {
			i = 0
		}
		this.play();
	}
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