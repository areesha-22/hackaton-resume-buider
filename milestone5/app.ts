
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// Function to capture and download the resume as PDF
const downloadPDF:any = () => {
    html2canvas(document.getElementById('resume-output')!).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('resume.pdf');
    });
};

// Function to copy resume link (for demonstration purposes, link functionality needs to be implemented)
const copyLink = () => {
    const link = window.location.href; // This will copy the current URL
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
    });
};

// Add event listeners
document.getElementById('download-pdf-btn')?.addEventListener('click', downloadPDF);
document.getElementById('copy-link-btn')?.addEventListener('click', copyLink);

// Form submission event handler
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
        const father = (document.getElementById('father') as HTMLInputElement).value;
        const surname = (document.getElementById('surname') as HTMLInputElement).value;
        const religion = (document.getElementById('religion') as HTMLInputElement).value;
         const email = (document.getElementById('email') as HTMLInputElement).value;
         const phoneNo = (document.getElementById('phone-no') as HTMLInputElement).value;
         const PROVINCE = (document.getElementById('PROVINCE') as HTMLInputElement).value;
         const  birthdate= (document.getElementById('birthdate') as HTMLInputElement).value;
        const STATUS = (document.getElementById('STATUS') as HTMLInputElement).value;
        const QUALIFICATION = (document.getElementById('QUALIFICATION') as HTMLTextAreaElement).value;
         const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
         const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
       
    // Update resume output
    (document.getElementById('personal-name') as HTMLElement).textContent = name;
    (document.getElementById('personal-father') as HTMLElement).textContent = father;
    (document.getElementById('personal-surname') as HTMLElement).textContent =surname;
    (document.getElementById('personal-email') as HTMLElement).textContent = email;
    (document.getElementById('personal-phone-no') as HTMLElement).textContent = phoneNo;
    (document.getElementById('personal-releigion') as HTMLElement).textContent = religion;
    (document.getElementById('personal-province') as HTMLElement).textContent = PROVINCE;
    (document.getElementById('personal-birthdate') as HTMLElement).textContent = birthdate;
    (document.getElementById('personal-status') as HTMLElement).textContent = STATUS;
   (document.getElementById('output-qualification') as HTMLElement).textContent = QUALIFICATION;
   (document.getElementById('output-workexperence') as HTMLElement).textContent = workExperience;
    (document.getElementById('output-skills') as HTMLElement).textContent = skills;
 


    // Show the resume output
    document.getElementById('resume-output')!.style.display = 'block';
});
