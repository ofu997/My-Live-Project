$(document).ready(function () {
    $("#agree-disagree-form-btn").on("click", function () {

        var data = $("input[name='agree-or-disagree']:checked").val();

        if (data == 'disagree') {
            alert('By refusing to follow our school’s policies, you are not eligible to enroll in our program. We wish you the best of luck in your pursuit of becoming a software developer!');
            window.location.replace("/Home/index");
        } else {
            $.ajax({
                type: "POST",
                url: "/Registration/StepTwentyThree",
                data: { data: data },
                success: function (response) {
                    window.location.href = "/Registration/StepTwentySeven";
                },
                dataType: "json",
                error: function (e) {
                    console.log(e);
                },
                traditional: true
            });
        }

    });
});