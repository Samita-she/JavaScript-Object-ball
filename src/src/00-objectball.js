function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe;

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                playerWithLargestShoe = player;
            }
        }
    }
    return game["home"].players[playerWithLargestShoe]?.rebounds || game["away"].players[playerWithLargestShoe]?.rebounds;
}

function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    let topPlayer = "";

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > mostPoints) {
                mostPoints = game[team].players[player].points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

function winningTeam() {
    let game = gameObject();
    let scores = {};

    for (let team in game) {
        let totalPoints = 0;
        for (let player in game[team].players) {
            totalPoints += game[team].players[player].points;
        }
        scores[game[team].teamName] = totalPoints;
    }

    return scores["Brooklyn Nets"] > scores["Charlotte Hornets"] ? "Brooklyn Nets" : "Charlotte Hornets";
}

function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";

    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > mostSteals) {
                mostSteals = game[team].players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }
    return longestName === playerWithMostSteals;
}
