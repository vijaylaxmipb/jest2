let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);

}

function showScore() {
    document.getElementById("score").innetText = game.score;
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);

}
module.exports = { game, newGame, showScore, addTurn, lightsOn };
