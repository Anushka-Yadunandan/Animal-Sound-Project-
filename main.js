function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xxEJGdZ82/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"  %";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Cute Cow');
        img1 = document.getElementById('Cute Cat');
        img2 = document.getElementById('Cute Dog');
        img3 = document.getElementById('Cute Lion');
        
        if(results[0].label == "Clap") {
            img.src = 'Cute cat.webp';
            img1.src = 'Cute Cow.webp';
            img2.src = 'Cute Dog.webp';
            img3.src = 'Cute Lion.webp';
        } else if (results[0].label == "Bell") {
            img.src = 'Cute Cat.webp';
            img1.src = 'Cute Cow.webp ';
            img2.src = 'Cute Dog.webp';
            img3.src = 'Cute Lion.webp';
        }else{
            img.src = 'Cute Cat.webp';
            img1.src = 'Cute Cow.webp';
            img2.src = 'Cute Dog.webp';
            img3.src = 'Cute Lion.webp';
        }
    }
}