//closure=  A function defined inside another function, which has access to the outer function's variables even after the outer function has returned.

function createGame(){
    let score=0;

    function increaseScore(points){
        score += points;
        console.log(score);
    }

    function decreaseScore(points){
        score -= points;
        console.log(score);
    }

    function getScore(){
        return score;
    }

    return {
        increaseScore,
        decreaseScore,
        getScore
    };
}


const game = createGame();
game.increaseScore(9);
game.decreaseScore(5);
console.log(game.getScore());