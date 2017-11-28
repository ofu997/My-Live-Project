$(document).ready(function () {
    $("#agreeToConcernes-disagreeToConcernes-form-btn").on("click", function () {
        var data = $("input[name='agree-or-disagree']:checked").val();

        $.ajax({
            type: "POST",
            url: "/Registration/StepThirtySix",
            data: { data: data },
            success: function (response) {
                window.location.href = "/Registration/StepThirtySeven";
            },
            dataType: "json",
            error: function (e) {
                console.log(e);
            },
            traditional: true
        });
    });
});