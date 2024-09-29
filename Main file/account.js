// Function to toggle dropdown visibility
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        dropdown.setAttribute('aria-expanded', 'false');
    } else {
        dropdown.classList.add('show');
        dropdown.setAttribute('aria-expanded', 'true');
    }
}

// Logout function - Redirect to Gymcraft home page (index.html)
function logout() {
    console.log('Logging out...');
    window.location.href = "index.html"; // Redirects to the index.html page
}
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Example usage
document.querySelector('#workoutsToggle').addEventListener('click', debounce(toggleWorkout, 250));

window.addEventListener('click', function(event) {
    var dropdown = document.getElementById("dropdownMenu");
    if (!event.target.matches('.account-icon') && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        dropdown.setAttribute('aria-expanded', 'false');
    }
});

