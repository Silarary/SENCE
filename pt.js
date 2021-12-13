// Canvas setup
const Canvas =document.getElementById('canvas1');
const ctx = Canvas.getContext('2d');
Canvas.width = 800;
Canvas.height = 500;

let score =0;
let gameframe =0;
ctx.font = '50px Georgia';
// Mouse Interactivity
let CanvasPosition = Canvas.getBoundingClientRect();
const mouse = {
    x:Canvas.width/2,
    y:Canvas.height/2,
    click: false
}
Canvas.addEventListener('mousedown',function(event){
    mouse.x = event . x -CanvasPosition.left;
    mouse.y = event . y-CanvasPosition.top;;
});
// Player
class Player {
    constructor(){
    this.x = Canvas.width;
    this.y = Canvas.height/2;
    this. radius=50;
    this. angle =0;
    this. frameX =0;
    this.frameY =0;
    this,spritewidth = 498;
    this.spriteheight = 327;
    }
    update(){
        const dx = this.x- mouse.x
        const dy = this.y- mouse.y
    }
}
// Bubbles
// Animation Loop