$(document).ready(function () {
    $(".personality-modal-btn").on("click", function () {
        $("#personality-test-modal").modal({ backdrop: 'static', keyboard: false });
    });

    $(".personality-finish-btn").on("click", function () {
        checkPersonalityRadio();
    });
});

function checkPersonalityRadio() {
    var pass = false;
    var score = 0;
    for (var i = 1; i < 61; i++) {
        var value = $("input[name='eval-checkbox-" + i + "']:checked").val();
        if (value !== undefined) {
            score += parseInt(value);
        }
    }

    if (score >= 35 && 50) {
        score += " Pass";
        pass = true;
    } else if (score <= 34) {
        score += " Fail";
    }


    score = JSON.stringify(score);

    $.ajax({
        type: "POST",
        url: "/ConcordiaRegistration/PersonalityTest",
        data: { score: score, pass: pass },
        success: function (response) {
            window.location.href = "/ConcordiaRegistration/StepEight";
        },
        dataType: "json",
        error: function () {
            alert("Whoops, something went wrong.");
        },
        traditional: true
    });
}