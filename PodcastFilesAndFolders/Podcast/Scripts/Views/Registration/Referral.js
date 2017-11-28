$(document).ready(function () {
    $("#referral-form-btn").on("click", function (e) {
        e.preventDefault();

        var formData = JSON.stringify({
            Id: guid(),
            UserId: "",
            FriendId: $("#referralFriendId").val(),
            WhoRefer: $("#referralWhoRefer").val(),
            ReferralNumber: $("#referralReferralNumber").val(),
            ReferralEmailAddress: $("#referralReferralEmailAddress").val(),
        });

        $.ajax({
            type: "POST",
            url: "/Registration/PostReferral",
            data: { json: formData },
            success: function (response) {
                //alert(response);
				window.location.href = "/Registration/StepThirtyFive";
            },
            error: function (error) {
               // alert("Whoops, something went wrong." + error);
            },
            dataType: "json",
            traditional: true
        });
    });
});