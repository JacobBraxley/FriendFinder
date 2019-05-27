/* Format: 
{
    "name": "Bob",
    "photo": "https://photo.org",
    "scores": [ 1,2,3,4,5,6,7,8,9,10 ]

    Range 10 - 100
    55 Kermit - https://vignette.wikia.nocookie.net/muppet/images/0/0f/KermitSS.jpg/revision/latest?cb=20100919200930
    65 Miss Piggy - https://vignette.wikia.nocookie.net/muppet/images/0/04/Piggy_karate.jpg/revision/latest?cb=20090630231450
    45 Fozzie - https://vignette.wikia.nocookie.net/muppet/images/b/b5/Fozzie2.jpg/revision/latest?cb=20120410231906
    75 Gonzo - https://vignette.wikia.nocookie.net/muppet/images/c/c0/Gonzo_balloons.jpg/revision/latest?cb=20160922021932
    85 Big Bird - https://vignette.wikia.nocookie.net/muppet/images/9/92/Bigbirdnewversion.png/revision/latest?cb=20120128201030
    15 Uncle Deadly - https://vignette.wikia.nocookie.net/muppet/images/1/1b/Episode108_%2814%29.jpg/revision/latest?cb=20151126193608
    95 Walter - https://vignette.wikia.nocookie.net/muppet/images/1/16/Walter-whitebg.jpg/revision/latest?cb=20111116132835
    35 Beaker - https://vignette.wikia.nocookie.net/muppet/images/0/05/Beaker.jpg/revision/latest?cb=20101015151246
    25 Rowlf - https://vignette.wikia.nocookie.net/muppet/images/7/79/Rowlf2.jpg/revision/latest?cb=20100320214031
    10 Animal - https://vignette.wikia.nocookie.net/muppet/images/7/78/AN_004.jpg/revision/latest?cb=20111004221237
}
*/

let recommendedFriend = null;

const friendsData = [
    {
        "name": "Kermit",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/0/0f/KermitSS.jpg/revision/latest?cb=20100919200930",
        "scores": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        "name": "Miss Piggy",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/0/04/Piggy_karate.jpg/revision/latest?cb=20090630231450",
        "scores": [3, 4, 5, 6, 7, 6, 7, 8, 9, 10]
    },
    {
        "name": "Fozzie",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/b/b5/Fozzie2.jpg/revision/latest?cb=20120410231906",
        "scores": [1, 2, 3, 4, 5, 6, 7, 3, 9, 5]
    },
    {
        "name": "Gonzo",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/c/c0/Gonzo_balloons.jpg/revision/latest?cb=20160922021932",
        "scores": [10, 10, 6, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        "name": "Big Bird",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/9/92/Bigbirdnewversion.png/revision/latest?cb=20120128201030",
        "scores": [10, 10, 7, 4, 10, 10, 7, 8, 9, 10]
    },
    {
        "name": "Uncle Deadly",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/1/1b/Episode108_%2814%29.jpg/revision/latest?cb=20151126193608",
        "scores": [1, 1, 1, 1, 2, 2, 2, 2, 2, 1]
    },
    {
        "name": "Walter",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/1/16/Walter-whitebg.jpg/revision/latest?cb=20111116132835",
        "scores": [10, 10, 10, 10, 10, 10, 8, 8, 9, 10]
    },
    {
        "name": "Beaker",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/0/05/Beaker.jpg/revision/latest?cb=20101015151246",
        "scores": [1, 2, 3, 4, 5, 2, 7, 1, 9, 1]
    },
    {
        "name": "Rowlf",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/7/79/Rowlf2.jpg/revision/latest?cb=20100320214031",
        "scores": [1, 2, 3, 4, 3, 2, 1, 2, 3, 4]
    },
    {
        "name": "Animal",
        "photo": "https://vignette.wikia.nocookie.net/muppet/images/7/78/AN_004.jpg/revision/latest?cb=20111004221237",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
];

function findClosestMatch(incomeScores) {
    let bestMatch = null;
    let bestMatchDiff = 10000;

    friendsData.forEach(element => {
        let totalDiff = 0;
        for(let i = 0; i < incomeScores.length; i++) {
            totalDiff += Math.abs(element.scores[i] - incomeScores[i]);
        }
        if(totalDiff < bestMatchDiff) {
            bestMatch = element;
        }
    });

    recommendedFriend = bestMatch;
}

module.exports = friendsData;