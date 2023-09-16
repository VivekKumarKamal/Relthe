let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if (menu.classList.contains("ri-menu-line")) {
        menu.classList.replace("ri-menu-line", "ri-close-line");
    } else {
        menu.classList.replace("ri-close-line", "ri-menu-line");
    }
}



// Scroll to Top Button 

let mybutton = document.getElementById("movetoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  // Determine the starting position
  const startingY = window.pageYOffset;

  // Set the duration of the scroll animation (in milliseconds)
  const duration = 800; // Adjust this value to control the speed of the scroll

  // Calculate the time when the animation should end
  const endTime = Date.now() + duration;

  function scroll() {
    // Calculate the current time
    const currentTime = Date.now();

    // Calculate the time elapsed since the beginning of the animation
    const timeElapsed = currentTime - startTime;

    // Calculate the next position using easing function (you can adjust the easing function)
    const nextY = easeInOutQuad(timeElapsed, startingY, -startingY, duration);

    // Scroll to the next position
    window.scrollTo(0, nextY);

    // Continue the animation until the end time is reached
    if (currentTime < endTime) {
      requestAnimationFrame(scroll);
    }
  }

  // Start the animation
  const startTime = Date.now();
  requestAnimationFrame(scroll);
}

// Easing function for smooth scrolling (you can adjust this)
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
