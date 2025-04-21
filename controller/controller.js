import { loginWithGoogle } from "../db/oauth.js";
import songOprations from "../services/service.js";

const PrintSongs = ()=>{
    document.querySelector('#login').addEventListener('click', doLogin);
    const searchButton = document.querySelector('#searchButton');
    searchButton.addEventListener('click', doSearch);
    getAllSongs();

}
window.addEventListener('load', PrintSongs);
const doLogin = async ()=>{
    // alert('Login with Google');
    const user = await loginWithGoogle();
    console.log( user.displayName, user.email, user.photoURL);
    // document.querySelector('#userinfo').innerText = 'Email '+user.email + " Welcome Name "+user.displayName;
  }

const doSearch = (event)=>{
    event.preventDefault();
    const val = document.querySelector("#search").value;
   if(val === ''){
        val = "Sonu Nigam";
        getAllSongs(val);
    }else{
      getAllSongs(val);
    }
   
    
}
const getAllSongs = async (val= "Sonu Nigam")=>{
const container = document.querySelector('#root');
container.innerHTML = '';
const songs = await songOprations.getAllMusicSongs(val);
console.log(songs);

for(let i = 0; i<songs.length ; i++){
          
              printSong(songs[i]);
          }
}

let previousSong ;
//let currentSong ;
const isPlayingSong = (event)=>{
  
  if(previousSong){
    previousSong.pause();
    previousSong.currentTime = 0;
  }
  
  previousSong =  event.target;
  //console.log('Is Playing Called...', event);
}
const printSong = (currentSong)=>{

    
    // DOM 
    const cardDiv = document.createElement('div'); // <div></div>
    cardDiv.className = 'card me-2 p-4 m-3 ';
    cardDiv.classList.add("songcard")
    cardDiv.style.width = '18rem';
    const image = document.createElement('img');
    image.src =currentSong.imageurl;
    image.className = 'card-img-top';
    cardDiv.appendChild(image); //<div> <img/> </div>
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    const songName = currentSong.name;
    h5.innerText = songName;// only 20 characters
    cardBody.appendChild(h5);
    cardDiv.appendChild(cardBody);
    // const pTag = document.createElement('p');
    // pTag.className = 'card-text';
    // pTag.innerText= currentSong.collectionName;
    // cardBody.appendChild(pTag);
    const audio = document.createElement('audio');
    audio.style.width = '15em'
    audio.controls = true;
    audio.addEventListener('play',isPlayingSong);
    audio.src = currentSong.audiourl;
    audio.type = 'audio/mpeg';
    cardBody.appendChild(audio);
    const div = document.getElementById('root');
    div.appendChild(cardDiv);
}
   