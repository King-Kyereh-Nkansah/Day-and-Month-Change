function day_change(){
    const days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayElement = document.getElementById("day");
    const currentDay = dayElement.textContent;
    const currentDayIndex = days_of_week.indexOf(currentDay);
    const newDayIndex= (currentDayIndex + 1) %7;
    const newDay = days_of_week[newDayIndex];
    dayElement.textContent = newDay;
}

function month_change(){
    const month_of_year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthElement = document.getElementById("month");
    const currentMonth = monthElement.textContent;
    const currentMonthIndex = month_of_year.indexOf(currentMonth);
    const newMonthIndex= (currentMonthIndex + 1) %12;
    const newMonth = month_of_year[newMonthIndex];
    monthElement.textContent = newMonth;
}