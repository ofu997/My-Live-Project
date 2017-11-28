$(document).ready(function () {
    $("#agreeToPrecedingPoints-disagreeToPrecedingPoints-form-btn").on("click", function () {
        var data = $("input[name='agree-or-disagree']:checked").val();

        $.ajax({
            type: "POST",
            url: "/Registration/StepThirtyFive",
            data: { data: data },
            success: function (response) {
                window.location.href = "/Registration/StepThirtySix";
            },
            dataType: "json",
            error: function (e) {
                console.log(e);
            },
            traditional: true
        });
    });
});