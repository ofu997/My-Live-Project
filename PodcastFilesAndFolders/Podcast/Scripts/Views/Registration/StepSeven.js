$(document).ready(function () {
    $("#local-remote-form-btn").on("click", function () {
        var data = $("input[name='local-or-remote']:checked").val();

        $.ajax({
            type: "POST",
            url: "/Registration/StepSeven",
            data: { data: data },
            success: function (response) {
                window.location.href = "/Registration/StepEight";
            },
            dataType: "json",
            error: function (e) {
                console.log(e);
            },
            traditional: true
        });
    });
});