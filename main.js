function setup() {
    canvas = createCanvas(709, 610);
    canvas.position(310, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    strokeWeight(11);
    stroke(0, 194, 56);

    ellipse(0, 0, 40, 40);
    ellipse(0, 610, 40, 40);
    ellipse(709, 0, 40, 40);
    ellipse(709, 610, 40, 40);
    fill(0, 194, 56);

    stroke(155, 10, 155);
    ellipse(40, 40, 40, 40);
    ellipse(40, 570, 40, 40);
    ellipse(669, 40, 40, 40);
    ellipse(669, 570, 40, 40);
    fill(155, 10, 155);

    stroke(255, 162, 13);
    rect(50, 50,  609, 510);
    image(video, 56, 56, 597, 498);
    Xpos = mouseX.toFixed(2);
    Ypos = mouseY.toFixed(2);
    document.getElementById("mouse_x").innerHTML = "X = " + Xpos;
    document.getElementById("mouse_y").innerHTML = "Y = " + Ypos;
}
function take_snapshot() {
    save("student_name.png");
}