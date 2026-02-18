function setup() {
    let cnv=createCanvas(1360,400);
    cnv.position(0,32);
    let panel = createDiv('');
    panel.position(5,40);
    panel.size(80,50);
    panel.style('background','orchid');
    panel.style('font-size','16px');
}
function draw() {
    background(178,255,255);
    fill("");
    rect(600,70,200,60);
    rect(600,131,200,60);
    rect(600,192,200,60);
    rect(600,253,200,60);
}
function mouseDragged(){}