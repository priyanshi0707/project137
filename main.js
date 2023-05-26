function setup(){
    canvas= createCanvas(380,440);
    canvas.center();
    video=createCapture(VIDEO);
video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocssd',modelLoaded);
    document.getElementById("status").innerHTML="status:DETECTING OBJECTS";
    if(objects[i].label==object_name);
    document.getElementById("object_status").innerHTML = object_name + "Found";
}
function modelLoaded(){
    console.log("Model Loaded!!");
    status=true;
}
function draw(){
    image(video,0,0,380,440);
    if(status != ""){
          percent=floor(objects[i].confidence*100);
 text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
function gotResult(results){
    
}