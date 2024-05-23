
console.log('I just ran');

(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "NoE6Up0hSUYQnokoz",
  });
});

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });

  const myTimeout = setTimeout(showDelayed, 4000);

    function showDelayed() {
      document.getElementById("typewriter-div-2").style.display = "block"};

  const typewriterOff = setTimeout(typeOff, 4250);

    function typeOff() {
      document.getElementById("typewriter1").style.border = "none"};


	  jQuery(document).ready(function($) 
    {$(".accordion-button").click(function()
    { this.scrollIntoView({behavior: 'smooth', block: 'center' });})});
  

