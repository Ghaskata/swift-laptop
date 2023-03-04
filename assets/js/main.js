$(document).ready(function() {
  /**Sidebar toggle*/
  $('.toggle-sidebar-btn').click(function() {
      $('body').toggleClass('toggle-sidebar');
    });
 

$("h2").hide().slideDown(1000);
 $("p").hide().show(1500);
 

 $(".col-md-4").hover(function(){
   console.log("hover");
     $(this).animate({
       marginTop:"-=2%"
     },200);
   },
   function(){
     $(this).animate({
       marginTop:"0%"
     },200);
   });
   
   /*navbar hover effect*/
   $(".nav-link").hover(function(){
     $(this).animate({
       fontSize:"2rem"
     },500);
     $(this).find("ion-icon").animate({
       fontSize:"3rem"
     },500);
   },
     function(){
     $(this).animate({
       fontSize:"15px"
     },500);
     $(this).find("ion-icon").animate({
       fontSize:"2rem"
     },500);
   });
   
   
   /*addrlistbox hover effect*/
   $(".addrListBox").hover(function(){
     console.log("&&&");
     $(this).animate({
       
     },500);
   },
     function(){
     $(this).animate({
       fontSize:"15px"
     },500);
   });
   
/*add to cart*/

$(document).on('click', '.btn-buy', function() {
      swal({
          title: 'This item add to your cart',
          icon: 'success',
          button: 'ok',
        }).then(function(){
          var a=$(".badge").text();
          var b=parseInt(a, 10);
          var c=b+1;
          $(".badge").text(c);
        });
        
    });
 
 /*contact hover effect*/
 $('.dvhead').hover(function () {
  $(this).siblings('.dvTrackBody').css({"display":"block"});
    }, 
  function () {
     $(this).siblings('.dvTrackBody').css({"display":"none"});
  });
 
 $(".dvCustCareBody").hide().slideDown(400);
 
    
});

    
function submitForm() {
      var x = document.getElementById('name').value;
      var y = document.getElementById('phone').value;
      var z = document.getElementById('password').value;
      var e = document.getElementById('uname').value;
      let w = document.getElementById('email').value;
      let c = document.getElementById('country').value;
      var at_position = w.indexOf('@');
      var dot_position = w.lastIndexOf('.');

      if (x == '') {
        swal({
          title: 'Note',
          text: 'Name is Reqiure',
          icon: 'warning',
          button: 'OK',
        });
      } else if (at_position < 1 || dot_position - at_position < 2) {
        swal({
          title: 'Correct Email',
          text: 'Email is Reqiure',
          icon: 'warning',
          button: 'OK',
        });
      } else if (y == '') {
        swal({
          title: 'Note',
          text: 'Moblie Number Is Reqiure',
          icon: 'warning',
          button: 'OK',
        });
      }
      else if (e== '') {
        swal({
          title: 'Note',
          text: 'user name Is Reqiure',
          icon: 'warning',
          button: 'OK',
        });
      }
      else if (z == '') {
        swal({
          title: 'Note',
          text: 'password Is Reqiure',
          icon: 'warning',
          button: 'OK',
        });
      } 
     else if (c == '') {
        swal({
          title: 'Note',
          text: 'select your country',
          icon: 'warning',
          button: 'OK',
        });
      } else {

        swal({
          title: 'Thank You',
          text: 'Account has created',
          icon: 'success',
          button: 'OK',
        }).then(function(){
          window.location.replace('/index.html');
        });
       
      }
    }
