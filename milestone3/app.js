var _a, _b;
// app.ts
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n  \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n  \n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
    }
});
// app.ts
(_b = document.getElementById('resume-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var surname = document.getElementById('surname').value;
    var religion = document.getElementById('religion').value;
    var phoneNo = document.getElementById('phone-no').value;
    var PROVINCE = document.getElementById('PROVINCE').value;
    var birthdate = document.getElementById('birthdate').value;
    var STATUS = document.getElementById('STATUS').value;
    var QUALIFICATION = document.getElementById('QUALIFICATION').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone-No:</strong> ").concat(phoneNo, "</p>\n         <p><strong>surname:</strong>").concat(surname, "</span></p>\n        <p><strong>religion:</strong>").concat(religion, "</span></p>\n       <p><strong>PROVINCE:</strong> ").concat(PROVINCE, "</span></p>\n       <p><strong>birthdate:</strong> ").concat(birthdate, "</span></p>\n       <p><strong>STATUS:</strong> ").concat(STATUS, "</span></p>\n       <p><strong>QUALIFICATION:</strong>").concat(QUALIFICATION, "</span></p>\n     \n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
    }
});
