console.log('index.js');
const b1 = document.querySelector('button');
const b2 = document.querySelector('button:last-of-type');
const audio = document.querySelector('audio');
b1.addEventListener('click', function(e){
    audio.src = 'highhopes.mp3';
    audio.play();
});

b2.addEventListener('click', function(e){
    audio.src = 'cleopatra.mp3';
    audio.play();
});