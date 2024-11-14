// Selected DOM elements
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.querySelector('.digital-time');
const hourMarks = document.querySelector('.hour-marks');

//  Function to create hour markers
function createHourMarkers() {
    for (let i = 1; i <= 12; i++) {
        const marker = document.createElement('div'); // Create a new div for each hour marker
        marker.classList.add('hour-marker');
        const angle = (i / 12) * 360; // Calculate the angle for each hour marker
        marker.style.transform = `rotate(${angle}deg)`; // Rotate the marker to its position

        // Create a span for the hour number
        const span = document.createElement('span');
        span.textContent = i;
        span.style.display = 'inline-block'; // Rotate the number back so it's always upright
        span.style.transform = `rotate(-${angle}deg)`;
        // Append the number to the marker and the marker to the clock
        marker.appendChild(span);
        hourMarks.appendChild(marker);
    }
}

function setDate() { // Function to update clock hands and digital time
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour % 12 / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // NEW: Update digital time
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    digitalTime.textContent = `${hour12.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
}

// NEW: Initialize clock
createHourMarkers(); // Create hour markers when the page loads
setInterval(setDate, 1000);// Update clock every second 
setDate();// Initial call to set clock hands and digital time