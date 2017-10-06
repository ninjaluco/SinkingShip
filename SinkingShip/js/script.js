var tableSize = 5;
var grid = [];
var shipID = Random(tableSize);

function StartGame() {
    
    for (var i = 0; i < tableSize * tableSize; i++) {
        $("#gamePlan").append("<div id=\"Square_" + i + "\" class=\"Square\" onclick=\"SquareClicked(" + i + ")\"></div>");

        if ((i + 1) % tableSize == 0)
            $("#gamePlan").append("<br />");
    }


    
    alert(shipID);

}

function SquareClicked(i) {
    if ("Square_" + i == shipID) {
        $("#Square_" + i).addClass("SquareBoom");
    }

    else {
        $("#Square_" + i).addClass("SquareMiss");
    }
}

function Random(tableSize) {
    var min = Math.ceil(0);
    var max = Math.floor((tableSize * tableSize) - 1);
    var shipID = "Square_" + (Math.floor(Math.random() * (max - min)) + min);
    alert(shipID);
    return shipID;
}
    