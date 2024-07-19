const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line");

});
 
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

 const scrollRevealOption ={
    distance: "50px",
    origin:"bottom",
    duration:1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption,
    delay: 500
});

ScrollReveal().reveal(".header__container .btn",{
    ...scrollRevealOption,
    delay: 1000,
});




//room container
ScrollReveal().reveal(".room__card",{
  ...scrollRevealOption,
  interval: 500,
});

//feature container
ScrollReveal().reveal(".feature__card",{
  ...scrollRevealOption,
  interval: 500,
});

































// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('room-booking-form');
//     const bookingDetails = document.getElementById('booking-details');
  
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       const name = form.elements['name'].value;
//       const email = form.elements['email'].value;
//       const checkIn = form.elements['check-in'].value;
//       const checkOut = form.elements['check-out'].value;
//       const roomType = form.elements['room-type'].value;
  
//       // Simulate booking confirmation (in a real system, this would be sent to a server)
//       const bookingInfo = `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Check-In:</strong> ${checkIn}</p>
//         <p><strong>Check-Out:</strong> ${checkOut}</p>
//         <p><strong>Room Type:</strong> ${roomType}</p>
//       `;
  
//       bookingDetails.innerHTML = bookingInfo;
//       form.reset(); // Reset the form after booking
//     });
//   });
  