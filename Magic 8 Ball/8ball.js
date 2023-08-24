window.addEventListener('load', function () {

    const container = this.document.getElementsByClassName("container")[0];

    const generate = function() {
        const outcomeP = document.querySelector(".outcome");
        const input = document.getElementsByClassName("inputBox")[0];
        input.value = "";

        const outcomes = ["It is certain.", "It is decidedly so.", "Without a doubt!", "Yes, definitely!", "You may rely on it", "As I see it, yes!", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes", "Reply hazy, try again.", "Ask again later.", "Better not tell you now...", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful"];
        var outcome = Math.floor(Math.random() * 21);

        outcomeP.innerHTML = outcomes[outcome];
    }

    const button = this.document.createElement("button");
    button.innerHTML = "generate!";
    button.addEventListener("click", generate);
    container.appendChild(button);
})