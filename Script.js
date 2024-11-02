function generateResume() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    document.getElementById("resumeName").innerText = name;
    document.getElementById("resumeEmail").innerText = email;
    document.getElementById("resumePhone").innerText = phone;
    document.getElementById("resumeEducation").innerText = education;
    document.getElementById("resumeExperience").innerText = experience;
    document.getElementById("resumeSkills").innerText = skills;
}
