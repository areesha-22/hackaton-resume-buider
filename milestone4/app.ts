document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
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
       
        // Generate resume output
        resumeOutput.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span class="editable" contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable" contenteditable="true">${email}</span></p>
            <p><strong>father:</strong> <span class="editable" contenteditable="true">${father}</span></p>
            <p><strong>surname:</strong> <span class="editable" contenteditable="true">${surname}</span></p>
            <p><strong>Phone-no:</strong> <span class="editable" contenteditable="true">${phoneNo}</span></p>
            <p><strong>religion:</strong> <span class="editable" contenteditable="true">${religion}</span></p>
       <p><strong>PROVINCE:</strong><span class="editable" contenteditable="true"> ${PROVINCE}</span></p>
       <p><strong>birthdate:</strong><span class="editable" contenteditable="true"> ${birthdate}</span></p>
       <p><strong>STATUS:</strong><span class="editable" contenteditable="true"> ${STATUS}</span></p>
       <p><strong>QUALIFICATION:</strong> <span class="editable" contenteditable="true">${QUALIFICATION}</span></p>
            <p><strong>Work Experience:</strong> <span class="editable" contenteditable="true">${workExperience}</span></p>
            <p><strong>Skills:</strong> <span class="editable" contenteditable="true">${skills}</span></p>
              `;

        makeSectionsEditable();
    });

    // Make resume sections editable on click
    const makeSectionsEditable = () => {
        document.querySelectorAll('.editable').forEach((element) => {
            const editableElement = element as HTMLElement;
            editableElement.addEventListener('click', () => {
                editableElement.focus();
            });
        });
    };

    makeSectionsEditable();
});