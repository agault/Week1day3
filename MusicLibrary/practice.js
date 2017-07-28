var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}
// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {

  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var key = uid()

  var newTrack = {id: key, name: name, artist: artist, album: album};
  library.tracks[key] = newTrack;
  // library.tracks.push(newTrack)


}


// adds a playlist to the library

var addPlaylist = function (name) {
  var newkey = uid()

  var newplaylist = {id: newkey, name: name, tracks: []}
  library.playlists.[newkey] = newplaylist;


}





