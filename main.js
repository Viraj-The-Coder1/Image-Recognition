Webcam.set({
    width:315,
    height:250,
    image_format:'png',
    png_quality:95
});
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(caps){
        document.getElementById("display-cam").innerHTML = "<img id='img_caps' src='"+ caps +"'>";
    });
}
console.log("Ml5 version is", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/c_6RSVi6h/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function identify(){
    img= document.getElementById("img_caps");
    classifier.classify(img, gotresult);
}
function gotresult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = ((result[0].confidence)*100).toFixed(3)+ " %";
    }
}