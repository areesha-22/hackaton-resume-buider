// app.ts
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    const resumeOutput = document.getElementById('resume-output');
  
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
  
        <h3>Education</h3>
        <p>${education}</p>
  
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
    }
  });
// app.ts
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const surname = (document.getElementById('surname') as HTMLInputElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
    const phoneNo = (document.getElementById('phone-no') as HTMLInputElement).value;
    const PROVINCE = (document.getElementById('PROVINCE') as HTMLInputElement).value;
    const  birthdate= (document.getElementById('birthdate') as HTMLInputElement).value;
   const STATUS = (document.getElementById('STATUS') as HTMLInputElement).value;
   const QUALIFICATION = (document.getElementById('QUALIFICATION') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    const resumeOutput = document.getElementById('resume-output');
  
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone-No:</strong> ${phoneNo}</p>
         <p><strong>surname:</strong>${surname}</span></p>
        <p><strong>religion:</strong>${religion}</span></p>
       <p><strong>PROVINCE:</strong> ${PROVINCE}</span></p>
       <p><strong>birthdate:</strong> ${birthdate}</span></p>
       <p><strong>STATUS:</strong> ${STATUS}</span></p>
       <p><strong>QUALIFICATION:</strong>${QUALIFICATION}</span></p>
     
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
    }
  });
    