var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 10] = "AISLE";
    seatChoice[seatChoice["WINDOW"] = 11] = "WINDOW";
    seatChoice[seatChoice["MIDDLE"] = 12] = "MIDDLE";
})(seatChoice || (seatChoice = {}));
var mySeat = seatChoice.AISLE;
console.log(mySeat);
