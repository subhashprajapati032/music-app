import SongModel from "../model/song-model.js";
import getSongs from "./api.js"

const songOprations = {
    musicSongs: [],
    getAllMusicSongs:async function (singername) {
        const songs = await getSongs(singername);
        // console.log(songs);


        const allMusicSongs = songs.map((song) => {
            const mySong = new SongModel(song.trackId, song.trackName, song.previewUrl, song.artworkUrl100);
            return mySong;
        });
            return allMusicSongs;
    },
}
export default songOprations;