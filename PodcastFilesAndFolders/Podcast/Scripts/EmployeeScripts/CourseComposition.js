// All items related to creating, editing, viewing, or deleting a course

// Call get to initialize course creation
function InitCourse() {
    // Get request for course creation
    $.get("CreateCourse", function (html) { $(".appendContents").html(html) });
}

// Event listener that will only display a page number if the core course value is changed to true
// Event is located on the input element in the html
function CoursePosition() {

    // Check core course value
    var isCore = $("#Core").val();

    // Change display value based on core value
    if (isCore == 'true') {
        $(".CoursePosition").css("display", "block");
    }
    else {
        $(".CoursePosition").css("display", "none");
    }
}

// Call post to save base course information and then render page creation
// Located on the submit create html element
function CreateCourse() {

    // Send request if all items are appropriate values
    var sendRequest = true;

    // Check all values to ensure they are populated
    var courseName = $("#CourseName").val();
    var isCore = $("#Core").val();
    var coursePosition = $("#CoursePosition").val();

    // Check values
    if (courseName == null || courseName.replace(" ", "") == "") {

        // Set request to false and highlight the value that needs to be filled
        $("#CourseName").parent().append("<h5>Must contain letters or numbers</h5>");

        sendRequest = false;
    }

    if (isNaN(coursePosition)) {

        // Set request to false and let them know what went wrong
        $("#Core").parent().append("<h5>Please input a number</h5>");

        sendRequest = false;
    }

    if (sendRequest == true) {

        var url = window.location.origin + "/Employee/CreateCourse";

        // Post for course creation
        $.post(url,
            { courseName: courseName, isCore: Math.ceil(coursePosition), coursePosition: coursePosition },
            function (html) {

                // Fade effect for UX
                $(".appendContents").children().fadeOut(200);

                // Replace html body that currently exists
                $(".appendContents").html(html);

                // Fade it in for effect
                $("#CreatePage").fadeIn(200);
            });
    }
}

// Cancels course creation
function CancelCreateCourse() {

    // Fade course view out first for UX
    $("#CreateCourse").stop().fadeOut(200);

    // Cancel course creation
    $("#CreateCourse").remove();
}

//************** Page Creation ****************//

// Global array for holding page objects
var CoursePageCreateList = [];

// Page Creation Object
function PageCreationField() {

    // Unique identifier
    this.id = guid();

    // Type of field
    this.type = "";

    // Object meant for holding file data
    this.UploadedFile = new FormData();

    // String to hold url where file is located
    this.urlFile = "";

    // String to hold content
    this.content = "";

    // String Field title (if the type gets one)
    this.title = "";

    // String field holding the field instructions if it has them
    this.instructions = "";

    // Screen sizes
    this.small = "";
    this.medium = "";
    this.large = "";
}


// Create form for field creation
function PageCreateForm() {

    // Get value of select field
    var type = $("#FieldType").val();

    // Hide everything if it is type select
    if (type != "select") {

        // Show generic fields
        $(".createGenericSection").stop().fadeIn(200);

        // Hide all other fields if they are shown
        $(".CreatePageFieldForm").children().stop().not(".create" + type + "Section").not(".createGenericSection").fadeOut(200);

        // Show this field if hidden
        $(".create" + type + "Section").stop().fadeIn(200);
    }
    else {
        // Hide all type fields
        $(".initHide").stop().fadeOut(200);
    }
}