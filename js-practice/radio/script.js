// const radio = {};
// radio.stations = [
//     {name: "100.7", songs: 
//         [{title: "white roses", artist: "Greyson Chance"}, 
//         {title: "Teenage Dream x Put Your Records On", artist: "Darcy Stokes"}, 
//         {title: "Pessamist", artist: "Greta Isaac"}]}, 
//     {name: "99.7", songs: 
//         [{title: "Put Your Phone Down", artist: "Ben Laine"},
//         {title: "Someday", artist: "OneRepublic"}, 
//         {title: "Nightlight", artist: "We Three"}]},]

// radio.changeStation = changeStation;

// function changeStation() {
//     let ranStation = Math.floor(Math.random() * radio.stations.length);
//     let ranSong = Math.floor(Math.random() * radio.stations[ranStation].songs.length);
//     let song = (radio.stations[ranStation].songs[ranSong])
//     console.log(`Now Playing: ${song.title} by ${song.artist}.`)
// }


class Radio {
    constructor(stations) {
        this.stations = stations;
    }
    changeStation() {
        let ranStation = Math.floor(Math.random() * this.stations.length);
        let ranSong = Math.floor(Math.random() * this.stations[ranStation].songs.length);
        let song = (this.stations[ranStation].songs[ranSong])
        console.log(`Now Playing: "${song.title}" by ${song.artist} on ${this.stations[ranStation].name}.`)
    }
}

class Station {
    constructor(name, songs) {
        this.name = name;
        this.songs = songs;
    }
}

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

const radio = new Radio([
    new Station('100.7 Star', [
        new Song('white roses', 'Greyson Chance'),
        new Song('Teenage Dream x Put Your Records On', 'Darcy Stokes')
    ]),
    new Station('WISH 99.7', [
        new Song('Put Your Phone Down', 'Ben Laine'),
        new Song('Nightlight', 'We Three')
    ])
])


radio.changeStation();