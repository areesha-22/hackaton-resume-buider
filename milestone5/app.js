"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var html2canvas_1 = require("html2canvas");
var jspdf_1 = require("jspdf");
// Function to capture and download the resume as PDF
var downloadPDF = function () {
    (0, html2canvas_1.default)(document.getElementById('resume-output')).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jspdf_1.jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('resume.pdf');
    });
};
// Function to copy resume link (for demonstration purposes, link functionality needs to be implemented)
var copyLink = function () {
    var link = window.location.href; // This will copy the current URL
    navigator.clipboard.writeText(link).then(function () {
        alert('Link copied to clipboard!');
    });
};
// Add event listeners
(_a = document.getElementById('download-pdf-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', downloadPDF);
(_b = document.getElementById('copy-link-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', copyLink);
// Form submission event handler
(_c = document.getElementById('resume-form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (event) {
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
    // Update resume output
    document.getElementById('personal-name').textContent = name;
    document.getElementById('personal-father').textContent = father;
    document.getElementById('personal-surname').textContent = surname;
    document.getElementById('personal-email').textContent = email;
    document.getElementById('personal-phone-no').textContent = phoneNo;
    document.getElementById('personal-releigion').textContent = religion;
    document.getElementById('personal-province').textContent = PROVINCE;
    document.getElementById('personal-birthdate').textContent = birthdate;
    document.getElementById('personal-status').textContent = STATUS;
    document.getElementById('output-qualification').textContent = QUALIFICATION;
    document.getElementById('output-workexperence').textContent = workExperience;
    document.getElementById('output-skills').textContent = skills;
    // Show the resume output
    document.getElementById('resume-output').style.display = 'block';
});
