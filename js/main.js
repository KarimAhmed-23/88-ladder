/*------------- #General --------------*/


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$('a[href="#"]').click(function ($) {
        $.preventDefault();
    });



/*------------- #header  --------------*/

$(window).scroll(function() {
          
        if ($(this).scrollTop() > 0) {
            $('#header').addClass("scroll")
        } else {
            $('#header').removeClass("scroll")

        }
    });


$("#nav-toggler").click(function () {

         $("#header").toggleClass('panelOpen');

});
$("#overlayPanel").click(function () {

        $("#header").removeClass('panelOpen');

});


/*------------- #navbar dropdowns functions--------------*/


$(".h-menu").click(function () {
    
        $("#header").removeClass('panelOpen');
    
         var current_parent = $(this).parent(),
             current_tab = current_parent.attr("data-target");
             

         if ($(this).hasClass('show')) {

             $(this).removeClass("show");
             $(current_parent).removeClass('active');
             $("." + current_tab).removeClass("show");
             
             
         }
         else {


             $(".h-menu").removeClass("show");
             $(this).addClass("show");
             
             $(".logined-item").removeClass('active');
             $(current_parent).addClass('active');

             
             $(".dropdown-list").removeClass("show");
             $("." + current_tab).addClass("show");

         }
         

     });
$(document).click(function (e) {

         if (!(($(e.target).closest('.dropdown-list').length > 0) ||

                 ($(e.target).closest('.h-menu').length > 0))) {

                    $(".h-menu").removeClass("show");
                    $(".dropdown-list").removeClass("show");
                    $(".logined-item").removeClass('active');
         }
             
     });


/*------------- # Fix 100vh viewport bug on mobile devices --------------*/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


/*------------- #tabs function   --------------*/

$(".tab-content").hide();
$(".tab-content.active").show();

$(".tab-btn").click(function(){
  
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        var current_tab = $(this).attr("data-target");
        $(".tab-content").hide();
        $("#"+current_tab).fadeIn();
    
        
    });

/*------------- #loading-overlay-btn function --------------*/

function loading_overlay (){
    
    
    btn = $(this);
    btn.addClass('loading-overlay');
    setTimeout(function() {
      btn.removeClass('loading-overlay');
    }, 1000);
    
}

$('.loading-btn').click(loading_overlay);



/*------------- #hide and show fitler-sidebar using active class by clicking button  --------------*/   


$("#sidebar_toggle").click(function(){
        
        $('.fitler-sidebar').addClass('active');
		$('.sidebar-overlay').addClass('active')
		
  });

$(".sidebar-overlay , .close-sidebar ").click(function(){
        
        $('.fitler-sidebar').removeClass('active');
		$('.sidebar-overlay').removeClass('active');
		
  });

/*------------- #active added --------------*/


$('.active-add').on("click" , function(){
    
    $(this).addClass('active');
});

$('.active-toggle').on("click" , function(){
    
    $(this).toggleClass('active');
});

$('.more-text-btn').on("click" , function(){
    
    $(this).toggleClass("active");
    $(this).parent().find('.more-text').toggleClass('active');
    
    if($(this).hasClass("active")){
        
        $(this).text("Show Less");
    }else{
        
        $(this).text("Show More");
    }
    
});



/*------------- #copy function --------------*/

 var resultContainer = document.querySelectorAll(".copied-container");

 resultContainer.forEach(items =>{
        
             items.addEventListener("click", () => {
                 
                items.classList.add('active');
                setTimeout(() => { items.classList.remove("active")}, 1500);
               
                var textField = document.createElement('textarea');
                textField.readOnly = true;
                var text = items.querySelector('.copied-target').innerText;
                textField.innerText = text;
                document.body.appendChild(textField);
                textField.select();
                textField.focus();
                document.execCommand('copy');
                textField.remove();
               
               
                 
             });
        
    });







