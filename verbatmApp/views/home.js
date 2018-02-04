//Count number of words in database
var questionNumber = 0;
var i = 0;
while (!(wordsdatabase.words[i] == null)){
    i = i +1;
}
i = i +1;
questionNumber = parseInt(Math.random() * (i));

var points=0;
var addable = false;

function next() {
    questionNumber = parseInt(Math.random() * (i));
    document.getElementById('word').innerHTML = wordsdatabase.words[questionNumber].word;
    document.getElementById("question").src = wordsdatabase.words[questionNumber].picture;
    document.getElementById("link").innerHTML = "https://translate.google.com/#en/en/"+wordsdatabase.words[questionNumber].word;
    addable = true;
}

function correct() {
    if (addable) {
        points += 10;
        document.getElementById("points").innerHTML = points.toString();
        addable = false;
    }
}