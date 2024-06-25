document.addEventListener('DOMContentLoaded', () => {
    const monthSelect = document.getElementById('month-select');
    const yearInput = document.getElementById('year-input');
    const calendarBody = document.getElementById('calendar-body');

    const generateCalendar = (month, year) => {
        calendarBody.innerHTML = '';
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Fill initial empty slots
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendarBody.appendChild(emptyCell);
        }

        // Fill days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = day;
            calendarBody.appendChild(dayCell);
        }
    };

    monthSelect.addEventListener('change', () => {
        generateCalendar(parseInt(monthSelect.value), parseInt(yearInput.value));
    });

    yearInput.addEventListener('input', () => {
        generateCalendar(parseInt(monthSelect.value), parseInt(yearInput.value));
    });

    // Initial calendar generation
    generateCalendar(parseInt(monthSelect.value), parseInt(yearInput.value));
});
