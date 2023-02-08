window.human=false
var canvasEl=document.querySelector('.fuego')
var ctx = canvasEl.getContext('2d');
var numberOfParticules=40
var pointerX=0
var pointerY=0
var tap=('ontouchstart' in window||navigator.msMaxTouchPoints)?'touchstart':'mousedown'