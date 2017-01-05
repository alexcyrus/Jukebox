
function Song(Artist, SongTitle, AlbumArtURL, SongURL) {
	this.Artist = Artist;
	this.SongTitle = SongTitle;
	this.AlbumArtURL = AlbumArtURL;
	this.URL = SongURL;
}




var Jukebox = function(){


		var x = document.getElementById("MyMusic"); 
		var i = 0


		this.songs = [];


		this.preload = function(y) {
			this.songs.push(y)
		};


		this.load = function() {
			x.setAttribute("src", this.songs[i].URL)
		}


		this.play = function(){
			document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
			document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
			document.getElementById("AlbumArt").setAttribute("src", this.songs[i].AlbumArtURL);
			document.getElementById("AlbumArt2").setAttribute("src", this.songs[i].AlbumArtURL);
			x.play()
		};


		this.updateProgress = function() {
	    var progressbar = document.getElementById('seekbar');
	    progressbar.value = (x.currentTime / x.duration);
		};


		this.next = function() {
			if (i == this.songs.length - 1) {
				i = 0
				this.stop()
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
			else if(i < this.songs.length) {
				i++
				this.stop()
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
		}


		this.back = function() {
			if(i > 0) {
				i--
				this.stop()
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
			else if (i == 0) {
				this.stop()
				i = this.songs.length - 1
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
		}


		this.pause = function(){
			 x.pause();
		};


		this.stop = function(){
			x.pause();
			x.currentTime = 0;
		}


		this.addSong = function(){
			var a
			var b
			var c
			a = document.getElementById("artistName").value
			b = document.getElementById("songName").value
			c = document.getElementById("newAlbumArt").value
			d = document.getElementById("newURL").value
				if (c == "") {
					var covers = ["./Images/ken.jpg", "./Images/dead.jpeg", "./Images/seagal.jpg", "./Images/dummy.jpg", "./Images/massage.jpg"]
					c = covers[Math.floor(Math.random() * covers.length)]
				}

				if (d == "") {
					d = "./Music/1.mp3"
				}

			var x = new Song(a, b , c, d)
			this.songs.push(x)
			document.getElementById("NewSongForm").reset()
		}
}


var jukebox = new Jukebox();



// ----- My Songs ----- \\

var JohnLegend = new Song("John Legend", "Who Did That to You?", "https://slyvinyl.com/wp-content/uploads/2013/02/django.jpg", "./Music/john_legend.mp3")
var LuisBacalov = new Song("Luis Bacalov & Rocky Roberts", "Django", "https://slyvinyl.com/wp-content/uploads/2013/02/django.jpg", "./Music/luis_bacalov.mp3")
var NancySinatra = new Song("Nancy Sinatra", "Bang Bang (My Baby Shot Me Down)", "https://images-na.ssl-images-amazon.com/images/I/711YfS6OvkL._SL1448_.jpg", "./Music/nancy_sinatra.mp3")
var SantaEsmeralda = new Song("Santa Esmeralda", "Don't Let Me Be Misunderstood", "https://images-na.ssl-images-amazon.com/images/I/711YfS6OvkL._SL1448_.jpg", "./Music/santa_esmeralda.mp3")
var StealersWheel = new Song("Stealers Wheel", "Stuck in the Middle With You", "https://images-na.ssl-images-amazon.com/images/I/81LpLvxabcL._SL1227_.jpg", "./Music/stealers_wheel.mp3")
var TheBrothersJohnson = new Song("The Brothers Johnson", "Strawberry Letter 23", "http://transmissionrecords.co.uk/wp-content/uploads/soundtrack-ost-jackie-brown.jpg", "./Music/the_brothers_johnson.mp3")
var TheRevels = new Song("The Revels", "Comanche", "http://images.musictimes.com/data/images/full/39155/pulp-fiction.jpg", "./Music/the_revels.mp3")
var UrgeOverkill = new Song("Urge Overkill", "Girl, You'll Be a Woman Soon", "http://images.musictimes.com/data/images/full/39155/pulp-fiction.jpg", "./Music/urge_overkill.mp3")

jukebox.preload(NancySinatra);
jukebox.preload(LuisBacalov);
jukebox.preload(UrgeOverkill);
jukebox.preload(StealersWheel);
jukebox.preload(TheBrothersJohnson);
jukebox.preload(SantaEsmeralda);
jukebox.preload(TheRevels);
jukebox.preload(JohnLegend);

jukebox.load();