document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById('name').value;
        var father = document.getElementById('father').value;
        var surname = document.getElementById('surname').value;
        var religion = document.getElementById('religion').value;
        var email = document.getElementById('email').value;
        var phoneNo = document.getElementById('phone-no').value;
        var PROVINCE = document.getElementById('PROVINCE').value;
        var birthdate = document.getElementById('birthdate').value;
        var STATUS = document.getElementById('STATUS').value;
        var QUALIFICATION = document.getElementById('QUALIFICATION').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        // Generate resume output
        resumeOutput.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span class=\"editable\" contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>father:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(father, "</span></p>\n            <p><strong>surname:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(surname, "</span></p>\n            <p><strong>Phone-no:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(phoneNo, "</span></p>\n            <p><strong>religion:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(religion, "</span></p>\n       <p><strong>PROVINCE:</strong><span class=\"editable\" contenteditable=\"true\"> ").concat(PROVINCE, "</span></p>\n       <p><strong>birthdate:</strong><span class=\"editable\" contenteditable=\"true\"> ").concat(birthdate, "</span></p>\n       <p><strong>STATUS:</strong><span class=\"editable\" contenteditable=\"true\"> ").concat(STATUS, "</span></p>\n       <p><strong>QUALIFICATION:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(QUALIFICATION, "</span></p>\n            <p><strong>Work Experience:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(workExperience, "</span></p>\n            <p><strong>Skills:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(skills, "</span></p>\n              ");
        makeSectionsEditable();
    });
    // Make resume sections editable on click
    var makeSectionsEditable = function () {
        document.querySelectorAll('.editable').forEach(function (element) {
            var editableElement = element;
            editableElement.addEventListener('click', function () {
                editableElement.focus();
            });
        });
    };
    makeSectionsEditable();
});
