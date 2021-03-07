$(document).ready(() => {
    $(".chatBox").click((e) => {
        let chatBox = $(".chatDiv")
        if (chatBox.length === 0) {
            chatBox = $("<div class='chatDiv'/>");
            $(document.body).append(chatBox)
            let btn = $("<button class='startChatting'>start chatting</button>")
            btn.click(startChatting);
            chatBox.append(btn)
        } else if (chatBox.css("display") !== "none") {
            chatBox.hide()
        } else {
            chatBox.show()
        }


        chatBox.addClass("chatDiv");
        $(document.body).append(chatBox);

    })
})

const options = [
    {prompt: "I'd like to know about some healthy recipes 😋",
    response: $("<p class='prompts'>take a look at our Nutrition page for a variety of recipes! :)</p>")},
    {prompt: "What are some signs of strokes? 😳",
    response: $("<p class='prompts'>Vision changes - blurred or double vision, Sudden severe headache - usually accompanied by some of the other signs, Numbness - usually on one side of the body, Problems with balance are often signs of a stroke :(</p>")},
    {prompt: "How do I know if I'm at risk? 🤔",
    response: $("<p class='prompts'>Your risk of stroke depends on your lifestyle habits like what you eat and whether you are active. Some health conditions - in particular high blood pressure - are significant contributors to risk. And finally, your risk depends on things you can’t control such as age and family history. Our risk assessment tool will help you assess your risk and will provide you with a personal report.</p>")},
]

function startChatting() {
    $(".startChatting").hide();
    options.forEach((value, index) => {
        let btn = $(`<button class="prompts">${value.prompt}</button>`);
        btn.click(() => {
                    btn.css({"align-self": "flex-end", "background-color": "#BD9EFF", "text-align": "right"});
                    btn.click(null)
                    $(".chatDiv").append(btn)
                    value.response.css({"align-self": "flex-start", "text-align": "left"} )
                    $(".chatDiv").append(value.response);
        })
        $(".chatDiv").append(btn);

    })
}
