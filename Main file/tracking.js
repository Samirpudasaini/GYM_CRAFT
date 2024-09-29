// Get reference to elements
const daysContainer = document.getElementById('days-container');
const today = new Date();
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let currentIndex = today.getDay(); // Start with the current day of the week
let dates = [];

// Create date objects for the days of the current week
for (let i = 0; i < 7; i++) {
    const date = new Date(today.setDate(today.getDate() - today.getDay() + i));
    dates.push(date);
}

// Update the day elements
function updateDays() {
    const dayElements = document.querySelectorAll('.day');
    dayElements.forEach((dayElement, index) => {
        const date = dates[index];
        const dayOfWeek = daysOfWeek[date.getDay()];
        const monthOfYear = monthsOfYear[date.getMonth()];
        const dayOfMonth = date.getDate();

        const dayNameElement = dayElement.querySelector('.day-name');
        dayNameElement.textContent = dayOfWeek; // Update day name

        if (index === currentIndex) {
            dayElement.classList.add('active');
        } else {
            dayElement.classList.remove('active');
        }

        // Set click handler for each day
        dayElement.onclick = () => {
            currentIndex = index;
            showProgress(date.toISOString().split('T')[0]); // Show progress for selected day
            updateDays(); // Update active state
        };
    });
}

// Show progress data for the selected day
function showProgress(date) {
    const trackingsList = document.getElementById('trackings-list');
    
    // Example data: Replace this with your actual tracking data for each day
    const progressData = {
        "2024-09-29": [
            { event: "Running", calories: 400 },
            { event: "Strength Training", calories: 300 }
        ],
        "2024-09-30": [
            { event: "Yoga", calories: 200 },
            { event: "HIIT", calories: 500 }
        ]
        // Add more data here
    };

    // Clear current progress
    trackingsList.innerHTML = '';

    // Get progress for the selected day
    const progressForDay = progressData[date] || [];

    // Populate trackings
    progressForDay.forEach(item => {
        const trackingItem = document.createElement('div');
        trackingItem.classList.add('trackings-item');
        trackingItem.innerHTML = `
            <span class="event">${item.event}</span> <br>
            <span class="calories">Calories <br>Burned: ${item.calories}</span>
        `;
        trackingsList.appendChild(trackingItem);
    });
}

// Navigation buttons to move between days
function previousDay() {
    if (currentIndex > 0) {
        currentIndex--;
        showProgress(dates[currentIndex].toISOString().split('T')[0]);
        updateDays();
    }
}

function nextDay() {
    if (currentIndex < 6) {
        currentIndex++;
        showProgress(dates[currentIndex].toISOString().split('T')[0]);
        updateDays();
    }
}

// Initial setup
updateDays();
showProgress(dates[currentIndex].toISOString().split('T')[0]); // Show progress for today
