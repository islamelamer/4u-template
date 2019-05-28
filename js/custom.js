$(document).ready(function(){
    
    'use strict';



//    //    // adjust header height
//    
   
  
    
    var winH=$(window).height(),
        
        nav=$(".nav-bar").innerHeight();    //عشان يحسب الهوامش 
    
        
    
    $(".header .overlay,.header .intro").height(winH); 
    
   
    
    // end  header height
    
    
    
//    adjust  nav menu
    
    
    
    
    
    
    
    $(".menu ul li a").on("click",function(){
        
        
       $(".menu ul li a").removeClass("active");
        $(this).addClass("active");
        
        
        
        
        
    })
    
    
    
    //    end header  nav menu
    
    
    
    
    
//    timer
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
$(window).on('scroll', function(){
    
    var x=1;
    
    
    
    
    if($(this).scrollTop()>=2700 && x==1)
            {
                
                $('.timer').countTo();
                
                x=2;
                
                
                
                
            }
    
    
    
    

});

    
 
    
//    end timer
    
    
    
    
    
    
    
    
    
   
   
    
    
//  nav colo change
    
    
    
    
          
$(window).on('scroll', function(){
    
    
    
   
    
    
    if($(this).scrollTop()>=500)
            {
                
                    
                    $('.navbar').css("background-color","#141414");
                
                    $(".navbar-toggler").css("color","#fff");
                
                
                 $('.navbar').css("border-bottom"," 2px solid #d5c501");
                
                    $(" .navbar-toggler").css("border"," 1px solid #d5c501");
                    
             
              
   
         
                
                
                
            }
    
    
    else {
        
        
        $('.navbar').css("background-color","rgba(0,0,0,0.2)");
        
        
        
         $('.navbar').css("border-bottom"," none");
                
                    $(" .navbar-toggler").css("border","none");
        
        
           
         
        
        
        
        
        
        
        
    }
    
    
    
    

});

    
    
    
//    nav end
    
    
    
    
    
    
    
      $(" .navbar-toggler").on("click",function(){
          
          
            $('.navbar').css("background-color","#141414");
          
          
          
          
          
          
      });
    
    
    
    

    
    

    
    
    
    
     
    
//    start slide up arrow
    
    
       
          

    
    $(window).on("scroll",function(){
        
        
        if($(this).scrollTop()>=400)
            {
                
               $(".arrow").fadeIn(1000);
                
            }
        else {
            $(".arrow").fadeOut(1000);
            
        }
        
        
        
        
    });
    
    
    $(".arrow").on("click",function(){
        
        $("body,html").animate({"scrollTop":"0"},4000);
        
        
        
        
        
    })
    
    
    
    
    
   
        
        
        
        
    
    
    
    
    
  
  

    
    
    
//    end arrow
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});

























//start loading








$(window).on("load",function(){
    
    
// $("body").css("overflow","auto");    //      عشاان متعمليش مشكلة فى الاسكروول 
    
                                   // لكن اناا مش هستخدمهااا لانى مستخدم nice scroll 
    
    
  $(".loading .lds-hourglass").fadeOut(1000,function(){
      
      
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      
      
      }) ;
      
      
      
      
      
      
     
      
      
   
    
    
});













   


    




//start loading








$(window).on("load",function(){
    
    
// $("body").css("overflow","auto");    //      عشاان متعمليش مشكلة فى الاسكروول 
    
                                   // لكن اناا مش هستخدمهااا لانى مستخدم nice scroll 
    
    
  $(".loading .sk-cube-grid").fadeOut(1000,function(){
      
      
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      
      
      }) ;
      
      
      
      
      
      
     
      
      
   
    
    
});

















