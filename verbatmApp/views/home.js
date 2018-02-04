//Count number of words in database
var questionNumber = 0;
var i = 0;
while (!(wordsdatabase.words[i] == null)){
    i = i +1;
}
i = i +1;
questionNumber = parseInt(Math.random() * (i));

document.getElementById("word").innerHTML = wordsdatabase.words[questionNumber].word;
document.getElementById("question").src = wordsdatabase.words[questionNumber].picture;

function next() {
    questionNumber = parseInt(Math.random() * (i));
    document.getElementById('word').innerHTML = wordsdatabase.words[questionNumber].word;
    document.getElementById("question").src = wordsdatabase.words[questionNumber].picture;
}