
console.log('I just ran');

  const myTimeout = setTimeout(showDelayed, 4000);

    function showDelayed() {
      document.getElementById("typewriter-div-2").style.display = "block"};

  const typewriterOff = setTimeout(typeOff, 4250);

    function typeOff() {
      document.getElementById("typewriter1").style.border = "none"};


	  jQuery(document).ready(function($) {
      
      //center accordions
      $(".accordion-button").click(function()
    { this.scrollIntoView({behavior: 'smooth', block: 'center' })})

//scroll contact page after send 

 $("#contact-form-submit").click(function() {
  $("html, body").animate({ scrollTop: 0 });
  return false;
});
   
   
    //hide contact form show success message

$('#contact-form-submit').click(function(){
$("#contact-div").hide();
$("#successMessage").show();
});     


//chiude jquery
});

