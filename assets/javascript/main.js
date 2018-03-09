$(document).ready(function () {

    $('#addTrainBtn').on('click', function (e) {
        e.preventDefault();
        // Capture user inputs and store them into variables
        var trainName = $("#trainNameInput").val().trim();
        var trainDest = $("#trainDestInput").val().trim();
        var firstTrain = $("#firstTrainInput").val().trim();
        var frequency = $("#frequencyInput").val().trim();

        // Store all content into localStorage
        localStorage.setItem("key-trainName", trainName);
        localStorage.setItem("key-trainDest", trainDest);
        localStorage.setItem("key-firstTrain", firstTrain);
        localStorage.setItem("key-frequency", frequency);
    });

    (function createRow() {
        // Get reference to existing tbody element, create a new table row element
        var tBody = $("tbody");
        var tRow = $("<tr>");

        var trainName        = $("<td>").text(localStorage.getItem('key-trainName'));
        var trainDestination = $("<td>").text(localStorage.getItem('key-trainDest'));
        var frequecy         = $("<td>").text(localStorage.getItem('key-firstTrain'));
        var nextArrival      = $("<td>").text(localStorage.getItem('key-frequency'));

        // var MinutesAway = localStorage.getItem('frequency');

        // Append the newly created table data to the table row
        tRow.append(trainName, trainDestination, frequecy, nextArrival);
        // Append the table row to the table body
        tBody.append(tRow);
    })();

});