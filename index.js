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
document.getElementById("rsvp-form").addEventListener("submit", (event)=> {
   event.preventDefault();
   if (validateForm()) {
   addParticipation(event);
}});

function addParticipation(event) {
   let first_name = document.getElementById("first-name").value;
   let last_name = document.getElementById("last-name").value;
   let counter = document.getElementById("id-count");

   if (counter) {
      counter.remove();
   }

   const participant = document.createElement("p");
   counter = document.createElement("p");
   count = count + 1;
   counter.id = "id-count";
   participant.textContent = `✌︎㋡ ${first_name} ${last_name} has RSVPed!`;
   counter.innerHTML= `${count} people has signed up! <br>
            Come join the fun by filling out the form below ~ `
   document.getElementById("rsvp-list").appendChild(participant);
   document.getElementById("counter").appendChild(counter);


   document.getElementById("rsvp-form").reset();
}

function validateForm() {

   var isValid = true;
   var rsvpInputs = document.getElementById("rsvp-form").elements;
   
   for (let i = 0; i < 3; i++) {
      if (rsvpInputs[i].value.length < 2) {
         rsvpInputs[i].classList.add('error');
         isValid = false;
      } else {
         rsvpInputs[i].classList.remove('error');
      };

   };

   let emailInput = rsvpInputs[2];
   if (!emailInput.value.includes('@')) {
      emailInput.classList.add('error');
      isValid = false;
   } else {
      emailInput.classList.remove('error')
   }

   let phoneInput = rsvpInputs[3];
   if (phoneInput.value.length != 10 ) {
      phoneInput.classList.add('error');
      isValid = false;
   } else {
      phoneInput.classList.remove('error')
   }

   return isValid

}