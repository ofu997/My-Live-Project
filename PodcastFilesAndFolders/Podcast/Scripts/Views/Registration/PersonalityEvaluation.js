$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();

	$(".personality-modal-btn").on("click", function () {

		($("#iq-test-container input:radio:checked").size() < 50) ?
			alert('Please answer all questions') :
			$("#personality-test-modal").modal({ backdrop: 'static', keyboard: false });

		
    })

    $(".personality-finish-btn").on("click", function () {
        checkPersonalityRadio();
    })
})

function checkPersonalityRadio() {
    var pass = false;
    var score = 0;
    for (var i = 1; i < 51; i++) {
        var value = $("input[name='eval-checkbox-" + i + "']:checked").val();
        if (value !== undefined) {
            score += parseInt(value);
        }
    };

    if (score >= 35 && 50) {
        score += " Pass";
        pass = true;
    } else if (score <= 34){
        score += " Fail";
}

    score = JSON.stringify(score);

    $.ajax({
        type: "POST",
        url: "/Registration/PersonalityEvaluation",
        data: { score: score, pass: pass },
        success: function (response) {
            window.location.href = "/Registration/StepEleven";
        },
        dataType: "json",
        error: function () {
            console.log(data);
            alert("Whoops, something went wrong.");
        },
        traditional: true
    });
}