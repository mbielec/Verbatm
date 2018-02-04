//Count number of words in database
var questionNumber = 0;
var i = 0;
while (!(wordsdatabase.words[i] == null)){
    i = i +1;
}
i = i +1;
questionNumber = parseInt(Math.random() * (i));

var points=0;

function next() {
    var correct = false;
    questionNumber = parseInt(Math.random() * (i));
    document.getElementById('word').innerHTML = wordsdatabase.words[questionNumber].word;
    document.getElementById("question").src = wordsdatabase.words[questionNumber].picture;
    points += 10;
    document.getElementById("points").innerHTML = points.toString();

}