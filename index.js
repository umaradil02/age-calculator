var birthDateStr = prompt("Enter your birthdate (YYYY-MM-DD):");
var birthDate = new Date(birthDateStr);

if (isNaN(birthDate.getTime())) {
    alert("Invalid date format. Please enter date in YYYY-MM-DD format.");
} else {
    var today = new Date();
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthDate.getDate())) {
        ageYears--;
        ageMonths += 12;
    }

    var totalDays = ageYears * 365 + ageMonths * 30 + ageDays;
    var ageYearsNew = Math.floor(totalDays / 365);
    var ageMonthsNew = Math.floor((totalDays % 365) / 30);
    var ageDaysNew = Math.floor((totalDays % 365) % 30);

    var output = "You are " + ageYearsNew + " years, " + ageMonthsNew + " months, and " + ageDaysNew + " days old.";
    alert(output);
}
