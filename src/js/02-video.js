import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(event) {
  const currentTime = event.seconds;
  localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000));

const savedTime = parseFloat(localStorage.getItem('videoplayer-current-time'));

if (!isNaN(savedTime)) {
  player.setCurrentTime(savedTime);
}

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});
