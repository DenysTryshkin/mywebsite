// Function to set language
function setLanguage(lang) {
    document.querySelectorAll('[data-' + lang + ']').forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
    });
    calculateAge(); // Update age when language changes
}

// Function to calculate age
function calculateAge() {
    const birthDate = new Date('1993-12-14'); // Date of Birth
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Get the language
    const lang = document.documentElement.lang;

    // Determine the appropriate age text based on the language
    const ageText = (lang === 'uk' ? 'Вік: ' : 'Age: ') + age + (lang === 'uk' ? ' років' : ' years');

    // Update the text content for the age element
    document.getElementById('dob').textContent = ageText;
}

// Set default language to Ukrainian
setLanguage('uk');

// Calculate age on page load
window.addEventListener('load', calculateAge);

// Update language buttons to reflect the current language
function updateLanguageButtons() {
    document.getElementById('lang-uk').classList.toggle('active', document.documentElement.lang === 'uk');
    document.getElementById('lang-en').classList.toggle('active', document.documentElement.lang === 'en');
}

// Call this function after changing language
updateLanguageButtons();

