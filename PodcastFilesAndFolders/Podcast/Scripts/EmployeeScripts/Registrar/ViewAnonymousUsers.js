// Script to manage viewing anonymous users

// Ready method for our event listeners
$(document).ready(function () {

    // Create note view/edit
    $(".appendContents").on("click", ".anonymousUserNotes", anonymousUserNotes);

    // Allow escape of partials within this view
    $(".appendContents").on("click", ".anonymousUserNotesView input[type='submit']", cancelAnonymousUserNotes);

    // Pagination
    $(".appendContents").on("click", ".anonymousUserPager .pagination-container .pagination li a", anonymousUserPagedListPagination);

    // Save User Notes
    $(".appendContents").on("click", ".anonymousUserNotesView input[value='Save']", saveAnonymousUserNotes);

    // Delete/Hide anonymousUser from Registrar
    $(".appendContents").on("click", ".anonymousUserDelete", deleteAnonymousUser);

    // Edit listener for our anonymous users
    $(".appendContents").on("click", ".anonymousUserEdit", editViewAnonymousUsers);

    // Save user information
    $(".appendContents").on("click", "#anonymousUserModal #anonymousUserModalSave", saveViewAnonymousUsers);

    // Get user iq test
    $(".appendContents").on("click", ".IQTest", getIQTest);

    // Get user Questionnaire
    $(".appendContents").on("click", ".Questionnaire", Questionnaire);

    // Ger user Background
    $(".appendContents").on("click", ".Background", getBackground);

    // Ger user StudySchedule
    $(".appendContents").on("click", ".StudentSchedule", getStudentSchedule);

    // accept prospective student
    $(".appendContents").on("click", ".AcceptProspectiveStudent", acceptProspectiveStudent);

    // accept prospective student
    $(".appendContents").on("click", ".DeclineProspectiveStudent", declineProspectiveStudent);

});

// Description: Pulls in the data about a user's IqTest
function getIQTest() {

    // Get the modal
    $("#ViewUserIQTest").modal("show");

    // Get this user's id
    var id = this.parentNode.parentNode.id;

    // Ajax get this user's iq test
    $.get(
        "/Employee/GetUserIQTest",
        { id: id },
        function (response) {

            // This student's name
            var name = document.getElementById(id).children[1].innerHTML;

            // Set the name section of the modal
            $("#IQTestUserName").html(name);

            // In order
            var testAnswers = response.length > 0 ? JSON.parse(response) : "";

            $("#IQTestResults").empty();

            if (testAnswers != "") {
                // Iterate through the array and add them to the modal
                testAnswers.map((answer, i) => {
                    ;
                    $("#IQTestResults").append("<div><div class='IQTestAnswer'>" +
                        "<span>Question #" + (i + 1) + ": </span>" +
                        "<span>" + answer + "</span>" +
                        "</div></div>");

                    return;
                });
            }
        }
    );
}
// Description: Pulls in the data about a user's Questionnaire
function Questionnaire() {
    // Get the modal
    $("#ViewUserQuestionnaire").modal("show");
    // Get this user's id
    var id = this.parentNode.parentNode.id;

    // Ajax get this user's Questionnaire
    $.get(
        "/Employee/GetUserQuestionnaire",
        { id: id },
        function (response) {
            //console.log(response);
            // This student's name
            var name = document.getElementById(id).children[1].innerHTML;

            // Set the name section of the modal
            //$("#QuestionnaireUserName").html(name);

            var results = $("#QuestionnaireUserModalExperience").val(response.Experience);
            $("#QuestionnaireUserModalLanguages").val(response.Languages);
            $("#QuestionnaireUserModalWebsiteExperience").val(response.WebsiteExperience);
            $("#QuestionnaireUserModalWhyInterested").val(response.WhyInterested);
            $("#QuestionnaireUserModalCity").val(response.City);
            $("#QuestionnaireUserModalWhenEnroll").val(response.WhenEnroll);
            $("#QuestionnaireUserModalHowManyHours").val(response.HowManyHours);
            $("#QuestionnaireUserModalWhereStudy").val(response.WhereStudy);
            $("#QuestionnaireUserModalHowPay").val(response.HowPay);


            //var results = "<h6>" + response.Experience + "</h6>" +
            //              "<h6>" + response.Languages + "</h6>" +
            //              "<h6>" + response.WebsiteExperience + "</h6>" +
            //              "<h6>" + response.WhyInterested + "</h6>" +
            //              "<h6>" + response.City + "</h6>" +
            //              "<h6>" + response.WhenEnroll + "</h6>" +
            //              "<h6>" + response.HowManyHours + "</h6>" +
            //              "<h6>" + response.WhereStudy + "</h6>" +
            //              "<h6>" + response.HowPay + "</h6>";

            //$("#QuestionnaireResults").html(results);

            return;
        });
}

// Description: Pulls in the data about a user's Background
function getBackground() {
    // Get the modal
    $("#ViewUserBackground").modal("show");
    // Get this user's id
    var id = this.parentNode.parentNode.id;
    // Ajax get this user's Background 
    $.get(
        "/Employee/GetUserBackground",
        { id: id },
        function (response) {
            //console.log(response);
            // This student's name
            var name = document.getElementById(id).children[1].innerHTML;

            // Set the name section of the modal
            //$("#BackgroundUserName").html(name);

            $("#backgroundUserModalEducation").val(response.Education);
            $("#backgroundUserModalSTEM").val(response.STEM);
            $("#backgroundUserModalHomeAddress").val(response.HomeAddress);
            $("#backgroundUserModalMailAddress").val(response.MailingAddress);
            $("#backgroundUserModalBirthday").val(response.Birthday);

            //$("#BackgroundResults").html(results);

            return;
        });
}

// Description: Pulls in the data about a user's Schedule
function getStudentSchedule() {
    // Get the modal
    $("#ViewUserStudentSchedule").modal("show");
    // Get this user's id
    var id = this.parentNode.parentNode.id;
    // Ajax get this user's Background 
    $.get(
        "/Employee/GetUserStudySchedule",
        { id: id },
        function (response) {
            //console.log(response);
            // This student's name
            var name = document.getElementById(id).children[1].innerHTML;

            // Set the name section of the modal
            //$("#StudentScheduleUserName").html(name);

            // Set the name section of the modal

            $("#StudentScheduleUserName").html(name);
            $("#ViewUserStudentScheduleModalMonday").val(response.Monday);
            $("#ViewUserStudentScheduleModalTuesday").val(response.Tuesday);
            $("#ViewUserStudentScheduleModalWednesday").val(response.Wednesday);
            $("#ViewUserStudentScheduleModalThursday").val(response.Thursday);
            $("#ViewUserStudentScheduleModalFriday").val(response.Friday);
            $("#ViewUserStudentScheduleModalSaturday").val(response.Saturday);
            $("#ViewUserStudentScheduleModalSunday").val(response.Sunday);
            $("#ViewUserStudentScheduleModalCommittedHoursPerWeek").val(response.CommittedHoursPerWeek);

            //$("#StudentScheduleResults").html(results);

            return;
        });
}


// Description: Saves this anonymous user's information
// Variable In: e, use the event to stop default actions
// Variable Out: None
// Notes: Makes an ajax call to save data
function saveViewAnonymousUsers() {

    // Json Object to stringify for server
    var json = {
        Id: $("#anonymousUserModalId").val(),
        Name: $(".anonymousUserModalName")[1].value,
        Email: $("#anonymousUserModalEmail").val(),
        Number: $("#anonymousUserModalNumber").val(),
        Interested: $("#anonymousUserModalInterested").val() === "true",
        FollowedUpWith: $("#anonymousUserModalFollowedUpWith").val() === "true",
        Notes: $("#anonymousUserModalNotes").val()
    };

    var url = window.location.origin + "/Employee/SaveAnonymousUserInfo";

    $.ajax({
        url: url,
        type: "POST",
        global: false,
        data: { JsonObject: JSON.stringify(json) },
        success: function (response) {
            // Set modal saved value to true
            $("#anonymousUserModalSaved").val("true");

            // Hide modal
            $("#anonymousUserModal").modal("hide");
        }
    });
}

// Description: Pulls in all necessary information regarding our anonymous user
// Variable In: none
// Variable Out: none
// Notes: Makes an ajax call to get the messages between anonymous user and employee
function editViewAnonymousUsers() {

    // Get this user's id
    var id = $(this).parents(".AnonymousUser")[0].id;

    // Get this user's information
    var name, email, number, daysPassed, followedUpWith, interested, notes;

    // Go through node list to get values
    var nodes = $("#" + id).children();
    for (var i = 0; i < nodes.length; i++) {

        // Save current node's classnames
        var nodeClasses = nodes[i].className.split(" ");

        // Only check if classes contain specific class names
        for (var ii = 0; ii < nodeClasses.length; ii++) {

            // Make checks to set content
            if (nodeClasses[ii] === "anonymousUserName") {
                name = nodes[i].innerText.trim()

            } else if (nodeClasses[ii] === "anonymousUserEmail") {
                email = nodes[i].innerText.trim();

            } else if (nodeClasses[ii] == "anonymousUserNumber") {
                number = nodes[i].innerText.trim();

            } else if (nodeClasses[ii] === "anonymousUserDaysPassed") {
                daysPassed = nodes[i].innerText.trim();

            } else if (nodeClasses[ii] === "anonymousUserFollowedUp") {
                followedUpWith = nodes[i].innerText.trim().toLowerCase() == "true" ? "true" : "false";

            } else if (nodeClasses[ii] === "anonymousUserInterested") {
                interested = nodes[i].innerText.trim().toLowerCase() == "true" ? "true" : "false";

            } else if (nodeClasses[ii] === "anonymousUserNotes") {
                notes = nodes[i].children[0].value;

            }
        }
    } // End of for loop

    // Set our modal fields
    $("#anonymousUserModalId").val(id);
    $("#anonymousUserModalEmail").val(email);
    $(".anonymousUserModalName")[0].innerText = name;
    $(".anonymousUserModalName")[1].value = name;
    $("#anonymousUserModalNumber").val(number);
    $("#anonymousUserModalInterested").val(interested);
    $("#anonymousUserModalFollowedUpWith").val(followedUpWith);
    $("#anonymousUserModalNotes").val(notes);

    // Create date object
    var date = new Date();

    // Set the date I want to display
    date.setDate(date.getDate() - parseInt(daysPassed));

    // Save date output
    var dateMonth = date.getMonth() + 1;
    var dateDay = date.getDate();

    // Run check to make sure the correct format is being used
    var month = dateMonth < 10 ? "0" + dateMonth : dateMonth;
    var day = dateDay < 10 ? "0" + dateDay : dateDay;

    // Create acceptable format for html
    var dateMsg = date.getFullYear() + "-" + month + '-' + day;
    $("#anonymousUserModalDateOfInquiry").val(dateMsg);

    // Clear messages container
    $("#anonymousUserModalMessages").empty();

    var url = window.location.origin + "/Employee/ViewRegistrarUserMessages";

    // Run AJAX get to retrieve a list of all the messages sent between users
    $.ajax({
        url: url,
        data: { id: id },
        global: false,
        success: function (response) {
            $("#anonymousUserModalMessages").html(response).fadeIn(200);
        }
    });

}

// Description: Initialize viewing anonymous users
// Variable In: reInit, allows us to take a different approach to changing our data
// Variable Out: none
// Notes: Use reInit true if you only want to update the list of users
/*
function InitViewAnonymousUsers(reInit) {
	

    if (reInit === true) {
    	var url = window.location.origin + "/Employee/ViewRegistrarUsers?searchString=" + "Adam";//searchString;

        // Ajax get request
        $.get(
            url,
            {},
            function (html) {

                // Remove old elements
                $(".AnonymousUserTable").remove();
                $(".anonymousUserPager").remove();

                // Prepend new content
                $(".appendContents").prepend(html);

                $(".AnonymousUserTable tbody").children("tr").animate({ opacity: "1" }, 200);

                // Remove one modal
                $(".anonymousUserModal").first().remove();
            });
    }
    else {
        // Empty anything that is currently on the panel
        $(".appendContents").children().fadeOut(200);

        $(".appendContents").empty();
        

        var url = window.location.origin + "/Employee/ViewRegistrarUsers";

        // Ajax get request
        $.get(
            url,
            {},
            function (html) {
                $(".appendContents").html(html);
                $(".AnonymousUserTable tbody").children("tr").animate({ opacity: "1" }, 200);
            });

    }
    
}
*/

function InitViewAnonymousUsers() {

    // Create place to input a search string and input our users
    $(".appendContents").html("<div class='row appendTableUserSearchBar'>" +
                                "</div>" +
                                "<div class='row'><div id='anonymousProductList' class='col-xs-12'>" +
                                "</div></div>");

    // Make initial ajax call

    anonymousSearch();

    // Create search bar
    $(".appendTableUserSearchBar").append("<div class='col-xs-6'>" +
                                            "<input type='text' name ='anonymous' class='form-control' id='SearchStringAnonymous' placeholder='Search...' />" +
                                          "</div>" +
                                          "<div class='col-xs-6'>" +
                                            "<input type='button' name= 'anonymous' class='SubmitSearchString' value='Search' />" +
                                          "</div>");
}

function anonymousSearch() {
    // Get Search string if it exists //ViewUsers //ViewRegistrarUsers
    var searchString = $("#SearchStringAnonymous").val();

    if (searchString == null || searchString == "" || searchString == undefined) {
        searchString = "";
    }

    var url = window.location.origin + "/Employee/ViewRegistrarUsers?searchString=" + searchString;

    $.ajax({
        url: url,
        success: function (result) {
            $('#anonymousProductList').html(result);

            // Fade in the table elements //TableUser
            $(".AnonymousUser").animate({ opacity: 1 }, 500);
        }
    });
}












// Allows a user to view and write notes about the user  
function anonymousUserNotes() {

    // Get this user's id to find the notes
    var id = $(this).parents(".AnonymousUser")[0].id;

    // Get this user's notes
    var notes = $("#" + id).children(".anonymousUserNotes").children("input")[0].value;

    // Create editing space
    $(".appendContents").append("<div class='anonymousUserNotesView'><div class='container'><div class='row'>" +
                                "<div class='col-xs-12'>" +
                                    "<textarea>" + notes + "</textarea>" +
                                "</div>" +
                                "<div class='col-xs-12 col-sm-6'>" +
                                    '<input type="submit" class="form-control" value="Cancel" />' +
                                "</div>" +
                                "<div class='col-xs-12 col-sm-6'>" +
                                    "<input type='submit' class='form-control' id='notes" + id + "' value='Save' />'" +
                                "</div>" +
                                "</div></div></div>");
}

// AJAX save notes
function saveAnonymousUserNotes(e) {

    // Make sure the input is the correct one
    if ($(e.target).val() == "Save") {

        // Get this user's id and notes
        var id = this.id.replace("notes", "");

        var notes = this.parentNode.parentNode.firstChild.firstChild.value;

        var url = window.location.origin + "/Employee/SaveAnonymousUserNotes";

        // Submit post request
        $.post(
            url,
            { id: id, notes: notes },
            function (saveNotes) {

                // Set the new value of the notes node if this post was a success
                $("#" + id).children(".anonymousUserNotes").children("input")[0].value = saveNotes;

                // Let user know it was a success
                $("#notes" + id).parents(".anonymousUserNotesView").children(".row").children().fadeOut(200);
                $("#notes" + id).parents(".anonymousUserNotesView").html("<div class='container'><div class='row'>" +
                                                                         "<div class='col-xs-12 text-center'><h3 class='alert-success'>SUCCESS!</h3></div></div>");

                // Get the items we want to cancel
                var nodes = $(".appendContents .anonymousUserNotesView");

                nodes.delay(500).fadeOut(500, function () { $(this).remove(); });

            });
    }
}

// Allows a user to cancel out of any anonymous user partial view i.e. notes, edit
function cancelAnonymousUserNotes(e) {

    if ($(e.target).val() == "Cancel") {
        // Get the items we want to cancel
        var nodes = $(".appendContents .anonymousUserNotesView");

        // Ease out the nodes
        nodes.fadeOut(200);

        // Remove it from contents
        nodes.remove();
    }
}

// Hide an anonymousUser's information by "deleting"(hiding) it from the view
function deleteAnonymousUser(e) {

    // Get this anonymousUser's id
    var id = this.parentNode.parentNode.id;

    var url = window.location.origin + "/Employee/HideAnonymousUser";

    // Submit post request
    $.post(
        url,
        { id: id },
        function () { // Succeeded so delete this user from view

            // Retrieve more user information
            searchAnonymousUsers();
        });

}

/* Paging Section */

// Searches for our anonymous users via ajax
function searchAnonymousUsers() {
    // Get Search string if it exists
    var searchString = $("#SearchStringAnonymous").val();

    if (searchString == null || searchString == "" || searchString == undefined) {
        searchString = "";
    }

    var url = window.location.origin + "/Employee/ViewRegistrarUsers";

    $.ajax({
        url: url, //?searchString=" + searchString,
        success: function (result) {
            $('#anonymousProductList').html(result);

            // Fade in the table elements
            $(".AnonymousUser").animate({ opacity: 1 }, 500);
        }
    });
}

// Function to hold pagination info
function anonymousUserPagedListPagination(event) {

    // Prevent the url submission
    event.preventDefault();

    // Stope them from targeting the page they are on
    if ($(this).attr("href") != undefined) {
        //Get and set search string
        var searchString = $('#SearchStringAnonymous').val();
        if (searchString == null || searchString == '') {
            searchString = '';
        }
        else {
            searchString = "&searchString=" + searchString;
        }

        // Create url
        var url = $(this).attr("href") + searchString;
        //console.log(url)
        // Empty the current contents of tableUsers
        $(".appendContents .AnonymousUserTable").stop().fadeOut(200).remove();

        // Send ajax request
        $.ajax({
            url: url, // Url request
            success: function (result) {// function to perform when the request succeeds
                $('#anonymousProductList').html(result);

                // Fade in the table elements
                $(".AnonymousUser").animate({ opacity: 1 }, 500);
            }
        });
    }
}

function acceptProspectiveStudent() {
    // Get the modal
    $("#AcceptStudentModal").modal("show");

    // Get this user's id
    var id = this.parentNode.parentNode.id;

    $("#AcceptStudentButton").click(function () {
        $.get(
            "/Employee/AcceptProspectiveStudent",
            { id: id },
            function (response) {
                alert("Student accepted successfully.");
            }
        );
    });
}

function declineProspectiveStudent() {
    // Get the modal
    $("#DeclineStudentModal").modal("show");

    // Get this user's id
    var id = this.parentNode.parentNode.id;

    $("#DeclineStudentButton").click(function () {
        $.get(
            "/Employee/DeclineProspectiveStudent",
            { id: id },
            function (response) {
                alert("Student declined successfully.");
            }
        );
    });
}
