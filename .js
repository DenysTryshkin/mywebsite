document.addEventListener("DOMContentLoaded", function() {
    // Введи свою дату народження
    const birthDate = new Date('1993-12-14'); // Зміни на свою дату народження
    const dobElement = document.getElementById('dob');
    const ageElement = document.getElementById('age');

    // Функція для обчислення віку
    function calculateAge(dateOfBirth) {
        const today = new Date();
        let age = today.getFullYear() - dateOfBirth.getFullYear();
        const monthDifference = today.getMonth() - dateOfBirth.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
            age--;
        }
        return age;
    }

    // Відобразити дату народження та вік
    dobElement.textContent = birthDate.toDateString();
    ageElement.textContent = calculateAge(birthDate);
});