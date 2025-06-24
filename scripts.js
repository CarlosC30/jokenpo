document.addEventListener('DOMContentLoaded', (event) => {
    const result = document.querySelector(".Resultado");
    const humanScore = document.querySelector("#human-score");
    const machineScore = document.querySelector("#machine-score");

    let humanScoreNumber = 0;
    let machineScoreNumber = 0;

    window.playHuman = (humanChoice) => {
        const machineChoice = playMachine();
        playTheGame(humanChoice, machineChoice);
    }

    const playMachine = () => {
        const choices = ["pedra", "papel", "tesoura"];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    const playTheGame = (human, machine) => {
        console.log("Humano: " + human + " Máquina: " + machine);

        if (human === machine) {
            result.innerHTML = "Deu empate!";
        } else if (
            (human === "papel" && machine === "pedra") ||
            (human === "pedra" && machine === "tesoura") ||
            (human === "tesoura" && machine === "papel")
        ) {
            humanScoreNumber++;
            humanScore.innerHTML = humanScoreNumber; 
            result.innerHTML = "Você ganhou!";
        } else {
            machineScoreNumber++;
            machineScore.innerHTML = machineScoreNumber;
            result.innerHTML = "Você perdeu.";
        }
    }
     window.resetScores = () => {
        humanScoreNumber = 0; 
        machineScoreNumber = 0; 
        humanScore.innerHTML = humanScoreNumber;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Pontuação zerada!";
    }
});