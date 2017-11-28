//$(document).ready(function () {
//    $("#questionnaire-form-btn").on("click", function () {

//        var experience = $("#form-ta-experience").val();
//        var languages = $("#form-ta-languages").val();
//        var websiteExperience = $("#form-ta-website-experience").val();
//        var whyInterested = $("#form-ta-why-interested").val();
//        var city = $("#form-ta-city").val();
//        var whenEnroll = $("#form-ta-when-enroll").val();
//        var howManyHours = $("#form-ta-how-many-hours").val();
//        var whereStudy = $("#form-ta-where-study").val();
//        var howPay = $("#form-ta-how-pay").val();

//        var formData = {
//            Experience: experience,
//            Languages: languages,
//            WebsiteExperience: websiteExperience,
//            City: city,
//            WhenEnroll: whenEnroll,
//            HowManyHours: howManyHours,
//            HowPay: howPay
//        }

//        //formData = JSON.stringify(formData);

//        $.ajax({
//            type: "POST",
//            url: "/Registration/Questionnaire",
//            data: { questionnaire: formData },
//            success: function () {
//                window.location.href = "/Registration/StepThree";
//            },
//            error: function(error) {
//                $("#error-modal").modal('show');
//            },
//            dataType: "json",
//            traditional: true
//        });
//    });
//});