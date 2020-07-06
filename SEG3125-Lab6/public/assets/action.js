// jQuery that will "listen" to Lab6.html
// code borrowed from https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis

$(document).ready(function () {

    $('form').on('submit', function () {

        // var item = $('form input');
        // console.log(item.serializeArray());

        $.ajax({
            type: 'POST',
            url: '/Lab6',
            data: $(this).serializeArray(),
            success: function (data) {
                // do something with the data via front-end framework
                // Make the submit button red, disabled and saying Thank you
                $("#bb").css("background-color", "purple");
                $("#bb").prop("disabled", "true");
                $("#bb").text("Suvery Submitted!");
            }
        });
        return false;
    });
});