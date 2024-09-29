// Toggle visibility of workouts
function toggleWorkout() {
    const workoutSection = document.querySelector('.workout-section');
    const toggle = document.getElementById('workoutsToggle');
    if (toggle.checked) {
        workoutSection.style.display = 'block';
    } else {
        workoutSection.style.display = 'none';
    }
}

// Switch between tabs
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
}
