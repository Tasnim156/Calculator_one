function insertNumber(number) {

    var existingNumber = $("#result").val();

    $("#result").val(existingNumber + number);
}

function clearResult() {
    $("#result").val('');
}

function calculate() {

    var result = eval($("#result").val());
    $("#result").val(result);
}

function deleteNumber() {

    var currenNumber = $('#result').val();

    if (currenNumber != '') {
        $('#result').val($('#result').val().slice(0, -1));

    }



}