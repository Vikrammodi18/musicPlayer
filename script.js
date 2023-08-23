let index;
let audio = new Audio('songs/1.mp3');

let clip = Array.from(document.querySelectorAll(".clip"));
let masterPlay = document.querySelector(".masterplay");
let card = document.getElementsByClassName("card");
let songName = document.querySelector(".songName");
let myprogressBar = document.querySelector("#myprogressBar");
let nextForward = document.getElementById("next-forward");
let previous = document.getElementById("previous");
let songs = [
    { songName: "Party-getting-hot yoyo honey singh", filePath: "songs/1.mp3", coverPath: "covers/party getting.jpg" },
    { songName: "Angreji-beat-yoyo honey singh", filePath: "songs/2.mp3", coverPath: "covers/angreji.jpg" },
    { songName: "Dope shope -yoyo honey singh", filePath: "songs/3.mp3", coverPath: "covers/dope.jpg" },
    { songName: "Desi kalakaar-yoyo honey singh", filePath: "songs/4.mp3", coverPath: "covers/desi-kalakaar.jpg" }

]

clip.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})

audio.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audio.currentTime/audio.duration)*100);
    // console.log(progress);
    myprogressBar.value = progress;
    
})
myprogressBar.addEventListener("change",()=>{
    audio.currentTime = myprogressBar.value*audio.duration/100;
})

masterPlay.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        masterPlay.classList.remove("ri-play-line")
        masterPlay.classList.add("ri-pause-line")
        audio.play();
    } else {
        masterPlay.classList.add("ri-play-line")
        masterPlay.classList.remove("ri-pause-line")
        audio.pause();
    }

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songlistplay")).forEach((element) => {

        element.classList.remove("ri-pause-circle-fill")
        element.classList.add("ri-play-circle-fill")

    })
}

Array.from(document.getElementsByClassName("songlistplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("ri-play-circle-fill")
        e.target.classList.add("ri-pause-circle-fill")
        audio.src = `songs/${index}.mp3`
        masterPlay.classList.add("ri-pause-line");
        audio.currentTime=0;
        audio.play();
        songName.innerHTML = songs[index-1].songName;
        
    })
})
nextForward.addEventListener("click",()=>{
    index++;
if(index >4){
    index =1;
}
    audio.src = `songs/${index}.mp3`
    audio.currentTime=0;
    audio.play();
    songName.innerHTML = songs[index-1].songName;
})
previous.addEventListener("click",()=>{
    index--;
    if(index<1){
        index =4;
    }
    audio.src = `songs/${index}.mp3`
    audio.currentTime=0;
    audio.play();
    songName.innerHTML = songs[index-1].songName;
})
