const getSongs = async (val)=>{
    const URL =  `https://itunes.apple.com/search?term=${val}&limit=60&media=music`;
    const response = await fetch(URL);
    const object = await response.json();
   const songs = object['results'];
//    console.log(songs);

    return songs;//wrap in promise
    
}
export default getSongs;