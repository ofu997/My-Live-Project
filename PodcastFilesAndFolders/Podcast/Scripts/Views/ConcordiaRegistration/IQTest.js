const thirtyMinutes = 30 * 60 * 1000;

// grab all answers, convert to json, post to controller, redirect to personality test
function checkRadioValues() {
    var answers = new Array(80);
    for (var i = 1; i < 81; i++) {
        var value = $("input[name='iq-checkbox-" + i + "']:checked").val();
        answers[i - 1] = value;
    };
    answers = JSON.stringify(answers);

    $.ajax({
        type: "POST",
        url: "/ConcordiaRegistration/IQTest",
        data: { answers: answers },
        success: function (response) {

            window.location.href = "/ConcordiaRegistration/StepSeven";
        },
        dataType: "json",
        error: function () {
            alert("Whoops, something went wrong.");
        },
        traditional: true
    });
}

// modal that prevents outside clicks and escapes
function submitModal() {
    $("#iq-test-modal").modal({ backdrop: 'static', keyboard: false });
}


// listen for button clicks to call functions
$(document).ready(function () {
    $(".iq-finish-btn").on("click", function () {
        submitModal();
    });
    $(".iq-submit-btn").on("click", function () {
        checkRadioValues();
    });
});

// submit automatically after 30 minutes
$(window).load(function () {
    setTimeout(function () {
        $("#iq-test-modal").modal({ backdrop: 'static', keyboard: false });
    }, thirtyMinutes);
});
