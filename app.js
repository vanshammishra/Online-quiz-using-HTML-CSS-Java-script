function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("1. What is the Commercial Capital of India?", ["A. New Delhi", "B. Mumbai","C. Jaipur", "D. Kolkata"], "B. Mumbai"),

    new Question("2. The line which divides the earth in to two equal parts?", ["A. Tropic of cancer", "B. Tropic of capricon","C. Equater", "D. Lattitude"], "C. Equater"),
    

    new Question("3. National River of India?", ["A. Yamuna", "B. Ganga","C. Brahmputra", "D. Sindhu"], "B. Ganga"),
    

    new Question("4. Currency of India?", ["A. Dollar", "B. Rupee","C. Euro", "D. Pound"], "B. Rupee"),


    new Question("5. Which of the following contury does not share its border with india?", ["A. Nepal", "B. Bhutan","C. Kazakhastan", "D. Afganistan"], "C. Kazakhastan"),

    new Question("6. Which of the following is Prime number?", ["A. 59", "B. 729","C. 6", "D. 8"], "A. 59"),

    new Question("7. Which acid is present in humen digestive system?", ["A. Acetic acid", "B. Sulphuric acid","C. Nitric acid", "D. Hydro cloric acid"], "D. Hydro cloric acid"),

    new Question("8. Pigment present in a plant responsible for its green colour?", ["A. Chloroplast", "B. Haemoglobin","C. Photosynthesis", "D. Cellulose"], "A. Chloroplast"),

    new Question("9. Hardest substance?", ["A. Iron", "B. Tungestion","C. Diamond", "D. Gold"], "C. Diamond"),

    new Question("10. Smallest bone in human body?", ["A. Backbone", "B. Diaphram","C. Stapes", "D. Ligament"], "C. Stapes"),

    
        

];


var quiz = new Quiz(questions);


populate();
