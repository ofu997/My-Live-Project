// Location for Table User JS object for keeping track of things on the employee page
// This also contains all ajax commands that will be used with this object

// Create modal for editing
function editCreate() {

    // Make sure there can't be multiple instances of this edit box
    $(".editUser").remove();

    // Target row id for editing
    // VanillaJs required to get id or jquery will throw an error
    var UserId = this.parentNode.parentNode.id;

    // Get email
    var email = $(this).parents(".TableUser").children(".TableUserEmail")[0].innerText;

    // Name
    var name = $(this).parents(".TableUser").children(".TableUserName")[0].innerText.split(", ");

    // FirstName
    var firstName = name[1];

    // last name
    var lastName = name[0];

    // Roles user is in
    role = $(this).parents(".TableUser").children(".TableUserRole")[0].firstElementChild.value;

    // Create div
    $(".appendContents").append("<div id='edit" + UserId + "' class='editUser container-fluid'>" +
                                "<div class='row'><div class='col-xs-8 col-xs-offset-2 editUserBoxStyling'><div class='row'>" +
                                "<div class='col-xs-6'><h5>Email</h5></div>" +
                                "<div class='col-xs-6'><h5>Role: Please enter role</h5><p class='incorrectRole'></p></div>" +
                                "<div class='col-xs-6'><input type='text' class='form-control' id='email' value='" + email + "' /></div>" +
                                "<div class='col-xs-6'><input type='text' class='form-control' id='role' value='" + role + "'/></div>" +
                                "<div class='col-xs-6'><h5>First Name</h5></div>" +
                                "<div class='col-xs-6'><h5>Last Name</h5></div>" +
                                "<div class='col-xs-6'><input type='text' class='form-control' id='firstName' value='" + firstName + "'/></div>" +
                                "<div class='col-xs-6'><input type='text' class='form-control' id='lastName' value='" + lastName + "'/></div>" +
                                "<div class='col-xs-6'><input type='submit' class='form-control' id='cancelEditUser' value='Cancel'/></div>" +
                                "<div class='col-xs-6'><input type='submit' class='form-control' id='submitEditUser' value='Save' /></div>" +
                                "</div></div></div></div>");

    // Append list of userRoles
    if (allUserRoles.length != 0) {
        // Prepend what this section is
        $(".editUserBoxStyling .row").prepend("<div class='col-xs-12'><h4 class='pointer toggleAllRoles'>Roles: Click for Roles</h4><div class='allUserRoles'></div></div>");

        // Prepend all roles to box to allow for easy role manipulation
        for (var i = 0; i < allUserRoles.length; i++) {
            $(".allUserRoles").append("<div class='col-xs-6 col-md-4'><p>" + allUserRoles[i] + "</p></div>");
        }
    }
}

// Allows Admin to view users
function ViewUsers() {

    // Get url for ajax
    var url = window.location.origin + "/Employee/ViewUsers";

    // AJAX get call to bring in a list of users
    $.ajax({
        // Request type to the server.  Just getting information here
        type: "GET",

        // Request controller then action
        url: url,

        // If it works create the users table
        success: function (data) { $("#appendContents").html(data) },

        error: function (data) { console.log(data) }
    });
}

// Ajax function that allows people to create a search parameter
function searchUsers(e) {
	
    if (e.which == 13 || e.type == "click") {

    	e.preventDefault

    	// Send get request
		if (e.target.name == 'anonymous') anonymousSearch();
		else if (e.target.name == 'concordia') {
			var url = window.location.origin + "/Employee/ViewConcordiaUsers?searchString=";
			search(url);

		}
		else {
			
			var url = window.location.origin + "/Employee/ViewUsers?searchString=";
			search(url);
		}
    	//(e.target.name == 'anonymous') ? isearch() : search();
       
    }
}


// Submit a put ajax command to save changes
function submitEditUser(e) {

    if (e.target.id == "cancelEditUser") {
        $(".editUser").remove();
    }
    else {
        // Get the tableuser
        var id = $(this).parents(".editUser")[0].id.replace("edit", "");

        // Must be done this way or jquery can't read it
        var idNode = $(document.getElementById(id));

        // Save Changes to a user
        $.post('/Employee/EditUsers', {
            userId: id,
            email: $('#email').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            role: $('#role').val()
        },

            // If the post succeeded
            function (response) {

                // Do this if role names are invalid
                if (response != "Succeeded" && response != "Invalid User" && response != "Error : 404 Bad Request") {

                    // Mark as danger
                    $("#role").parent().addClass("has-error");

                    // Add text
                    $(".incorrectRole").html("Invalid Roles: " + response).addClass("error text-danger");

                }
                else {

                    // Update view data info for user
                    $(idNode).children(".TableUserEmail").html($('#email').val());
                    $(idNode).children(".TableUserName").html($("#lastName").val() + ", " + $('#firstName').val());
                    $(idNode).children(".TableUserRole")[0].firstElementChild.value = $('#role').val();

                    // Remove popup
                    $(".editUser").remove();
                }

            });

    }
}

// Function to perform when performing ajax get request
function InitViewUsers() {

    // Create place to input a search string and input our users
    $(".appendContents").html("<div class='row appendTableUserSearchBar'>" +
                                "</div>" +
                                "<div class='row'><div id='ProductList' class='col-xs-12'>" +
		"</div></div>");

	var url = window.location.origin + "/Employee/ViewUsers?searchString=";

    // Make initial ajax call
    search(url);

    // Create search bar
    $(".appendTableUserSearchBar").append("<div class='col-xs-6'>" +
                                            "<input type='text' class='form-control' id='SearchString' placeholder='Search...' />" +
                                          "</div>" +
                                          "<div class='col-xs-6'>"+
                                            "<input type='button' class='SubmitSearchString' value='Search' />" +
                                          "</div>");
}

// Function to perform when performing ajax get request
function InitViewConcordiaUsers() {

	// Create place to input a search string and input our users
	$(".appendContents").html("<div class='row appendTableUserSearchBar'>" +
		"</div>" +
		"<div class='row'><div id='ProductList' class='col-xs-12'>" +
		"</div></div>");

	var url = window.location.origin + "/Employee/ViewConcordiaUsers?searchString=";

	// Make initial ajax call
	search(url);

	// Create search bar
	$(".appendTableUserSearchBar").append("<div class='col-xs-6'>" +
		"<input type='text' class='form-control' name ='concordia' id='SearchString' placeholder='Search...' />" +
		"</div>" +
		"<div class='col-xs-6'>" +
		"<input type='button' name ='concordia' class='SubmitSearchString' value='Search' />" +
		"</div>");
}

function search(url) {
	// Get Search string if it exists //ViewUsers //ViewRegistrarUsers
    var searchString = $("#SearchString").val();

    if (searchString == null || searchString == "" || searchString == undefined) {
        searchString = "";
    }
	
	var URL = url + searchString;


    $.ajax({
        url: URL,
        success: function (result) {
            $('#ProductList').html(result);

            // Fade in the table elements
            $(".TableUser").animate({opacity: 1},500);
        }
    });
}

// Function to hold pagination info
function PagedListPagination(event) {

    // Prevent the url submission
    event.preventDefault();

    // Stope them from targeting the page they are on
    if ($(this).attr("href") != undefined) {
        // Get and set search string
        var searchString = $('#SearchString').val();
        if (searchString == null || searchString == '') {
            searchString = '';
        }
        else {
            searchString = "&searchString=" + searchString;
        }

        // Create url
        var url = $(this).attr("href") + searchString;

        // Empty the current contents of tableUsers
        $("#ProductList").not(".TableUserPager").empty();

        // Send ajax request
        $.ajax({
            url: url, // Url request
            success: function (result) {// function to perform when the request succeeds
                $('#ProductList').html(result);

                // Fade in the table elements
                $(".TableUser").animate({ opacity: 1 }, 500);
            }
        });
    }
}