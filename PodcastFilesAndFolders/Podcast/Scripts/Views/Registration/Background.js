$(document).ready(function () {
    $("#background-form-btn").on("click", function (e) {
        e.preventDefault();

        var formData = JSON.stringify({
            Id: guid(),
            UserId: "",
            Education: $("#backgroundEducation").val(),
            STEM: $("#backgroundSTEM").val(),
            HomeAddress: $("#backgroundHomeAddress").val(),
            MailingAddress: $("#backgroundMailingAddress").val(),
            Birthday: $("#backgroundBirthday").val()
        });

        $.ajax({
            type: "POST",
            url: "/Registration/PostBackground",
            data: { json: formData },
            success: function (response) {

                window.location.href = "/Registration/StepThirtyThree";
            },

            error: function (error) {
                alert("All Fields are required.");
            },
            dataType: "json",
            traditional: true
        });
    });
});