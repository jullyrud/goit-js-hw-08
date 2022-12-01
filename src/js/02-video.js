import Player from '@vimeo/player';
var throttle = require('lodash.throttle')


const frameRefs = document.querySelector('#vimeo-player')


const player = new Player(frameRefs);

function getTime(data) {
    let currentTime = data.seconds
   localStorage.setItem('videoplayer-current-time', currentTime)

}
let savedTime = localStorage.getItem('videoplayer-current-time')
console.log(savedTime);


player.on('timeupdate', throttle(getTime, 1000))
    
player.setCurrentTime(savedTime);


