document.getElementById("theme-button").addEventListener("click", () => {
   toggleDarkMode();
   buttonChange();
});

function toggleDarkMode() {
   document.body.classList.toggle("dark-mode"); 
}

function buttonChange() {
   let themeButton = document.getElementById("theme-button");
   if (themeButton.textContent=="Toggle Dark Mode") themeButton.textContent = "Toggle Light Mode";
   else themeButton.textContent = "Toggle Dark Mode";

}

let count = 3;
document.getElementById("rsvp-form").addEventListener("submit", validateForm);

function addParticipation(person) {
   let counter = document.getElementById("id-count");

   if (counter) {
      counter.remove();
   }

   const participant = document.createElement("p");
   counter = document.createElement("p");
   count = count + 1;
   counter.id = "id-count";
   participant.textContent = `✌︎㋡ ${person.first_name} ${person.last_name} has RSVPed!`;
   counter.innerHTML= `${count} people has signed up! <br>
            Come join the fun by filling out the form below ~ `
   document.getElementById("rsvp-list").appendChild(participant);
   document.getElementById("counter").appendChild(counter);


   document.getElementById("rsvp-form").reset();
}

function validateForm() {
   event.preventDefault()

   var isValid = true;
   var rsvpInputs = document.getElementById("rsvp-form").elements;
   let person = {
      first_name: rsvpInputs[0].value,
      last_name: rsvpInputs[1].value
   };
   
   for (let i = 0; i < 3; i++) {
      if (rsvpInputs[i].value.length < 2) {
         rsvpInputs[i].classList.add('error');
         isValid = false;
      } else {
         rsvpInputs[i].classList.remove('error');
      }

   };

   let emailInput = rsvpInputs[2];
   if (!emailInput.value.includes('@')) {
      emailInput.classList.add('error');
      isValid = false;
   } else {
      emailInput.classList.remove('error');
   }

   let phoneInput = rsvpInputs[3];
   if (phoneInput.value.length != 10 ) {
      phoneInput.classList.add('error');
      isValid = false;
   } else {
      phoneInput.classList.remove('error');
   }

   if (isValid) addParticipation(person)

}

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            revealableContainers[i].classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            revealableContainers[i].classList.remove('active');
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

document.getElementById('motion-button').addEventListener('click', reduceMotion);

function reduceMotion() {
   let motionButton = document.getElementById("motion-button");

   if (motionButton.textContent=="Reduce Motion Off") {
      for (let i = 0; i < revealableContainers.length; i++) {
      revealableContainers[i].classList.add('reduceMotion');
      }

      motionButton.textContent = "Reduce Motion On";
   } else {
      for (let i = 0; i < revealableContainers.length; i++) {
         revealableContainers[i].classList.remove('reduceMotion')
      }

      motionButton.textContent = "Reduce Motion Off";
   }
}

// modal animations
const toggleModal = (person) => {
    let modal = 0; // TODO
    
    // TODO: Update modal display to flex
    

    // TODO: Update modal text to personalized message


    // Set modal timeout to 5 seconds
    
}

// TODO: animation variables and animateImage() function