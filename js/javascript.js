/*global $, window, document, window */
// external js: flickity.pkgd.js

//Caching The Scroll Top 
            
          

$(document).ready(function(){
    "use strict";
  


  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


  ///////// search 
  $(function(){

    var  search = $(".fa-search") ;
       
        search.click(function (){
          
        $('header .social').addClass("hidden");
        $('header .search  input').removeClass("hidden") ;
        $('header .search  input').addClass("display-inline") ;

        $( '.search .fa-window-close').removeClass("hidden");
        $( '.search .fa-window-close').addClass("disply-block")
           
       
            console.log("pressed")

        })

       


});


$(function(){

    var  close = $(".search .fa-window-close") ;
  
        close.click(function (){
          
            $('.search input').removeClass("disply-inline");
            $('header .search input').addClass("hidden")
            $('.search  .fa-window-close').removeClass("display-block");
            $('.search  .fa-window-close').addClass("hidden")

            $('header .social').removeClass("hidden")
          
  
  
          
            console.log("close")
        })
  
       
  
  
  });






})