const translations = {
    en: {
        headerTitle: "Hello! Welcome to my site!",
        headerDescription: "Software developer passionate about travel and adventures",
        navAbout: "About Me",
        navEducation: "Education",
        navExperience: "Experience",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        sectionAboutTitle: "About Me",
        sectionAboutText: "I am a graduate student in Software Engineering at GoIT Neoversity, passionate about programming, travel, and adventures. I enjoy solving complex technical problems and exploring new places.",
        sectionEducationTitle: "Education",
        sectionEducationText: "I am studying at GoIT Neoversity, where I am pursuing a Master of Science in Software Engineering. This program allows me to develop my knowledge and practical skills in creating modern software solutions.",
        sectionExperienceTitle: "Experience",
        experienceJob1Title: "Software Developer at Company 1",
        experienceJob1Description: "Description of your experience at Company 1.",
        experienceJob2Title: "Software Developer at Company 2",
        experienceJob2Description: "Description of your experience at Company 2.",
        sectionProjectsTitle: "Projects",
        sectionProjectsText: "Here are some of my projects:",
        project1Title: "Project 1",
        project1Description: "Project description with a link to GitHub.",
        project2Title: "Project 2",
        project2Description: "Project description with a link to GitHub.",
        sectionSkillsTitle: "Skills",
        skill1: "JavaScript",
        skill2: "React",
        skill3: "Python",
        skill4: "Node.js",
        skill5: "Git",
        sectionContactTitle: "Contact",
        sectionContactText: "You can reach me through:",
        contactEmail: "your.email@example.com",
        contactGithub: "github.com/yourusername",
        contactLinkedin: "linkedin.com/in/yourusername",
        footerText: "&copy; 2024 [Your Name]. All rights reserved."
    },
    uk: {
        headerTitle: "Привіт! Вітаю на моєму сайті!",
        headerDescription: "Розробник ПЗ, захоплений подорожами та пригодами",
        navAbout: "Про мене",
        navEducation: "Освіта",
        navExperience: "Досвід",
        navProjects: "Проекти",
        navSkills: "Навички",
        navContact: "Контакти",
        sectionAboutTitle: "Про мене",
        sectionAboutText: "Я студент магістратури з програмної інженерії в GoIT Neoversity, захоплююся програмуванням, подорожами та пригодами. Люблю вирішувати складні технічні завдання і досліджувати нові місця.",
        sectionEducationTitle: "Освіта",
        sectionEducationText: "Навчаюсь в GoIT Neoversity, де здобуваю магістра наук у програмній інженерії. Ця програма дозволяє мені розвивати свої знання та практичні навички у створенні сучасних програмних рішень.",
        sectionExperienceTitle: "Досвід",
        experienceJob1Title: "Розробник ПЗ в компанії 1",
        experienceJob1Description: "Опис вашого досвіду в компанії 1.",
        experienceJob2Title: "Розробник ПЗ в компанії 2",
        experienceJob2Description: "Опис вашого досвіду в компанії 2.",
        sectionProjectsTitle: "Проекти",
        sectionProjectsText: "Ось кілька моїх проектів:",
        project1Title: "Проект 1",
        project1Description: "Опис проекту з посиланням на GitHub.",
        project2Title: "Проект 2",
        project2Description: "Опис проекту з посиланням на GitHub.",
        sectionSkillsTitle: "Навички",
        skill1: "JavaScript",
        skill2: "React",
        skill3: "Python",
        skill4: "Node.js",
        skill5: "Git",
        sectionContactTitle: "Контакти",
        sectionContactText: "Можна зв'язатися зі мною через:",
        contactEmail: "your.email@example.com",
        contactGithub: "github.com/yourusername",
        contactLinkedin: "linkedin.com/in/yourusername",
        footerText: "&copy; 2024 [Твоє Ім'я]. Усі права захищені."
    }
};

function setLanguage(lang) {
    const translation = translations[lang];
    document.getElementById('header-title').textContent = translation.headerTitle;
    document.getElementById('header-description').textContent = translation.headerDescription;
    document.getElementById('nav-about').textContent = translation.navAbout;
    document.getElementById('nav-education').textContent = translation.navEducation;
    document.getElementById('nav-experience').textContent = translation.navExperience;
    document.getElementById('nav-projects').textContent = translation.navProjects;
    document.getElementById('nav-skills').textContent = translation.navSkills;
    document.getElementById('nav-contact').textContent = translation.navContact;
    document.getElementById('section-about-title').textContent = translation.sectionAboutTitle;
    document.getElementById('section-about-text').textContent = translation.sectionAboutText;
    document.getElementById('section-education-title').textContent = translation.sectionEducationTitle;
    document.getElementById('section-education-text').textContent = translation.sectionEducationText;
    document.getElementById('section-experience-title').textContent = translation.sectionExperienceTitle;
    document.getElementById('experience-job1-title').textContent = translation.experienceJob1Title;
    document.getElementById('experience-job1-description').textContent = translation.experienceJob1Description;
    document.getElementById('experience-job2-title').textContent = translation.experienceJob2Title;
    document.getElementById('experience-job2-description').textContent = translation.experienceJob2Description;
    document.getElementById('section-projects-title').textContent = translation.sectionProjectsTitle;
    document.getElementById('section-projects-text').textContent = translation.sectionProjectsText;
    document.getElementById('project1-title').textContent = translation.project1Title;
    document.getElementById('project1-description').textContent = translation.project1Description;
    document.getElementById('project2-title').textContent = translation.project2Title;
    document.getElementById('project2-description').textContent = translation.project2Description;
    document.getElementById('section-skills-title').textContent = translation.sectionSkillsTitle;
    document.getElementById('skill1').textContent = translation.skill1;
    document.getElementById('skill2').textContent = translation.skill2;
    document.getElementById('skill3').textContent = translation.skill3;
    document.getElementById('skill4').textContent = translation.skill4;
    document.getElementById('skill5').textContent = translation.skill5;
    document.getElementById('section-contact-title').textContent = translation.sectionContactTitle;
    document.getElementById('section-contact-text').textContent = translation.sectionContactText;
    document.getElementById('contact-email').textContent = translation.contactEmail;
    document.getElementById('contact-github').textContent = translation.contactGithub;
    document.getElementById('contact-linkedin').textContent = translation.contactLinkedin;
    document.getElementById('footer-text').innerHTML = translation.footerText;
}

// Set default language
setLanguage('uk');
