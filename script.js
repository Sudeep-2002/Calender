document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const monthAndYear = document.getElementById('monthAndYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const eventPopup = document.getElementById('eventPopup');
    const closePopup = document.getElementsByClassName('close')[0];
    const eventForm = document.getElementById('eventForm');
    const eventDate = document.getElementById('eventDate');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();


    function generateCalendar(month, year) {
        calendarBody.innerHTML = ''; 
        let firstDay = (new Date(year, month)).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();
        monthAndYear.innerHTML = ${year}-${month + 1};

        let date = 1;
        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    let cell = document.createElement('td');
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    let cell = document.createElement('td');
                    cell.innerHTML = date;
                    cell.addEventListener('click', function() {
                        eventDate.value = ${year}-${month + 1}-${date};
                        eventPopup.style.display = 'block';
                    });
                    row.appendChild(cell);
                    date++;
                }
            }
            calendarBody.appendChild(row);
        }
    }


    prevMonthBtn.addEventListener('click', function() {
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
        generateCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', function() {
        currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
        generateCalendar(currentMonth, currentYear);
    });

    // Close the popup
    closePopup.addEventListener('click', function() {
        eventPopup.style.display = 'none';
    });
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        eventPopup.style.display = 'none';
    
    });

    generateCalendar(currentMonth, currentYear);
});