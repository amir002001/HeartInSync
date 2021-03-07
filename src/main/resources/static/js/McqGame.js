const questions = [
    {
        question: "What are some benefits of physical activity?",
        answers: [
            "dramatically lower risk of heart disease",
            "reduce stress levels",
            "increase energy",
            "all"],
        correct: 3
    },
    {
        question: "which is a vitamin C dynamo?",
        answers: [
            "broccoli",
            "Apples",
            "Bananas",
            "Squashes"],
        correct: 0
    },
    {
        question: "which is not rich sources of omega-3?",
        answers: [
            "cold-water fish",
            "apples",
            "flaxseed",
            "canola oil"],
        correct: 1
    },
    {
        question: "which contains saturated fat. A type of fat that raises your cholesterol?",
        answers: [
            "butter",
            "coconut oil",
            "fatty meats",
            "all"],
        correct: 3
    },
]

$(document).ready(() => {
    $("#mcqGame .button").click(() => {
        $("#playBtn").hide();
        let question = questions[Math.floor(Math.random() * 4)];
        let res = $('<h1 id="result" style="font-size: 3rem"></h1>');
        $("#playBtn").before(res)
        let buttons = question.answers.map((value, index) => {
            let btn = $(`<button class="button">${value}</button>`);

            btn.click(() => {
                if (index === question.correct) {
                    $("#result").text("✓")
                    $("#result").css("color", "green")
                } else {
                    $("#result").text("X")
                    $("#result").css("color", "red");
                }
                $("#playBtn").text("Play Again")
                $("#playBtn").click(()=> {window.location.reload()})
                $("#playBtn").show()

            });

            return btn;
        });
        $("#questionBox").append($(`<p>${question.question}</p>`));
        $("#questionBox").append($(`<img src="/images/q${questions.indexOf(question) + 1}.jpeg">`))
        buttons.forEach((value => {
            $("#answerBox").append(value);
        }));
    })
})
;
