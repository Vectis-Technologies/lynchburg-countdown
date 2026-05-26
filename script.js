// Target date:
// May 21, 2027 at 12:00 AM Eastern Time

const targetDate = new Date(
  "2027-05-21T00:00:00-04:00"
);

function updateCountdown() {

    const now = new Date();

    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
            "The conference has started!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
