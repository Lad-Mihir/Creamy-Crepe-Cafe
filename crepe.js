
$(document).ready(() => {
    // $("#Card1").addEventListener("mouseover", evt=> {
    //     $("#card1_h3").next().text("Loren Ipsum...");
    // });
   //adding validation to the email subscription button.
    $("#email_sub").submit( evt => {
      isvalid= true;
      let email=$("#email_text").val();
      if (email=="") {
         alert("Please enter E-mail ID.");
         isvalid= false;
      }
      if (isvalid== false) {
         evt.preventDefault();
      }
      });

   //Validation for the contact form.
   
   $("#form").submit( contact_evt => {
      isValid=true;
      var error_messages= [];
      let name_contact=$("#name").val();
      let user_email= $("#user_email").val();
      let user_phone=$("#user_phone").val();

      if (name_contact=="") {
         error_messages.push("Please enter your name.<br\>");
         isValid= false;
      }
      if (user_email=="") {
         error_messages.push("Please enter your E-mail ID.<br\>");
         isValid= false;
      }
      if (user_phone=="") {
         error_messages.push("Please enter your phone number.<br\>");
         isValid= false;
      }
      if (isValid== false) {
         contact_evt.preventDefault();
         $("#error_messages").html(error_messages);
      }
   });
});
//hover action to all the cards.
function onhover1() {
    $("#card1_h3").next().text("Lorem Ipsum...");
 }
function onout1() {
   $("#card1_h3").next().text("");
}
function onhover2() {
   $("#card2_h3").next().text("Lorem Ipsum ipsum...");
}
function onout2() {
   $("#card2_h3").next().text("");
}
function onhover3() {
   $("#card3_h3").next().text("Lorem Ipsum ipsum...");
}
function onout3() {
   $("#card3_h3").next().text("");
}
function onhover4() {
   $("#card4_h3").next().text("Lorem Ipsum ipsum...");
}
function onout4() {
   $("#card4_h3").next().text("");
}
function onhover5() {
   $("#card5_h3").next().text("Lorem Ipsum ipsum...");
}
function onout5() {
   $("#card5_h3").next().text("");
}
function onhover6() {
   $("#card6_h3").next().text("Lorem Ipsum ipsum...");
}
function onout6() {
   $("#card6_h3").next().text("");
}
function onhover7() {
   $("#card7_h3").next().text("Lorem Ipsum ipsum...");
}
function onout7() {
   $("#card7_h3").next().text("");
}
function onhover8() {
   $("#card8_h3").next().text("Lorem Ipsum ipsum...");
}
function onout8() {
   $("#card8_h3").next().text("");
}
function onhover9() {
   $("#card9_h3").next().text("Lorem Ipsum ipsum...");
}
function onout9() {
   $("#card9_h3").next().text("");
}

