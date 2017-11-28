$(document).ready(function () {
    $("#concordiabackground-form-btn").on("click", function (e) {
        e.preventDefault();

        var formData = JSON.stringify({
            Education: $("#concordiabackgroundEducation").val(),
            STEM: $("#concordiabackgroundSTEM").val(),
            HomeAddress: $("#concordiabackgroundHomeAddress").val(),
            MailingAddress: $("#concordiabackgroundMailingAddress").val(),
            Birthday: $("#concordiabackgroundBirthday").val()
        });

        $.ajax({
            type: "POST",
            url: "/ConcordiaRegistration/PostConcordiaBackground",
            data: { json: formData },
            success: function (response) {

                window.location.href = "/ConcordiaRegistration/StepTwentyTwo";
            },

            error: function (error) {
                alert("All Fields are required.");
            },
            dataType: "json",
            traditional: true
        });
    });
});