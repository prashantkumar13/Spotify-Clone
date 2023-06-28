console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Woh-Badshah" , filepath: "Songs/1.mp3" , coverpath: "Covers/1.jpg"},
    {songName: "Jadugar" , filepath: "Songs/2.mp3" , coverpath: "Covers/2.jpg"},
    {songName: "Kesariya" , filepath: "Songs/3.mp3" , coverpath: "Covers/3.jpg"},
    {songName: "Maan Meri Jaan" , filepath: "Songs/4.mp3" , coverpath: "Covers/4.jpg"},
    {songName: "Sinner-King" , filepath: "Songs/5.mp3" , coverpath: "Covers/5.jpg"},
    {songName: "Tu Aake Dekh Le" , filepath: "Songs/6.mp3" , coverpath: "Covers/6.jpg"},

]

songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].Innertext = songs[i].songName;
})


// handle the play
masterPlay.addEventListener( 'click' , ()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
     }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // For Seekbar
      Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);    
      ProgressBar.value = Progress;
})

ProgressBar.addEventListener('change', ()=>{
      audioElement.currentTime = ProgressBar.value * audioElement.duration/100;

})

const AllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click', (e)=>{
        AllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSong.InnerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
     })
})   
 

// For Farward 
document.getElementById('Next').addEventListener('click', ()=>{
       if(songIndex>=5){
           songIndex = 0;
       }
       else{
           songIndex += 1;
       }
       audioElement.src = `Songs/${songIndex+1}.mp3`;
       masterSong.InnerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
})


// For backward
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSong.InnerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

