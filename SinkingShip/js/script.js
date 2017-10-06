function StartGame() {

    var tableSize = 3;
    var grid = [];

    for (var i = 0; i < tableSize * tableSize; i++) {
        $("#gamePlan").append("<div id=\"Square_" + i + "\" class=\"Square\" onclick=\"SquareClicked(" + i + ")\"></div>");

        if ((i + 1) % tableSize == 0)
            $("#gamePlan").append("<br />");
    }
    //test

}

function SquareClicked(i) {
    $("#Square_" + i).addClass("SquareMiss");
}