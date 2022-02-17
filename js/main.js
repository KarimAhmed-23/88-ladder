/*------------- #General --------------*/


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$('a[href="#"]').click(function ($) {
        $.preventDefault();
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
    
})





