var audioPlayerObj = document.getElementById('audioplayer');
var sndPlaying = false;
var recObj = document.getElementById('record2');
var discObj = document.getElementById('record1');
var randSound = '';

function audiorandom() {

    rand = [
        'audio/shake.mp3', 'audio/rockstar.mp3', 'audio/mind.mp3', 'audio/ticks.mp3', 'audio/downtown.mp3', 'audio/blownaway.mp3', 'audio/night.mp3', 'audio/done.mp3', 'audio/somebody.mp3', 'audio/highway.mp3', 'audio/shirt.mp3', 'audio/world.mp3', 'audio/cruise.mp3', 'audio/pirate.mp3', 'audio/wagon.mp3', 'audio/bad.mp3', 'audio/beme.mp3', 'audio/betterlife.mp3', 'audio/kindofnight.mp3', 'audio/days.mp3'
    ];
    var randSound = rand[Math.floor(Math.random() * rand.length)];

    audioPlayerObj.setAttribute('src', randSound);


}

//song = rand[randSound];
//

function audioToggle() {


    if (sndPlaying == false) {


        audioPlayerObj.play();
        sndPlaying = true;
        recObj.classList.add("opacityfull");
        recObj.classList.remove("opacityless");
        discObj.classList.add("recordmore");
        discObj.classList.remove("recordless");




    } else {
        audioPlayerObj.pause();

        sndPlaying = false;
        recObj.classList.remove("opacityfull");
        recObj.classList.add("opacityless");
        discObj.classList.add("recordless");
        discObj.classList.remove("recordmore");
    }

}
