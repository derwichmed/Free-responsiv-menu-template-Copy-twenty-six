$(function (){
    $('.icons_navs_bar .search_icon').click(function (){
        $('.search_page:hidden').fadeIn(600); 
    });
    
    $('.icons_navs_bar .exit_search').click(function (){
       $('.search_page').fadeOut(600); 
    });
    
    $('header .nav_bar .nav_bar_item').mouseover(function (){
        $('header .nav_bar .nav_bar_item .drop_down_menu:visible').hide();
       $('header .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $(this).find('.mega_menu').show(); 
    });
    
    $('body').children().not('header').mouseover(function (){
       $('header .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $('header .nav_bar .nav_bar_item .drop_down_menu:visible').hide();
    });
    
    $('header .nav_bar .nav_bar_item').mouseover(function (){
       $(this).find('.drop_down_menu').show(); 
    });
    
    $('.drop_down_menu .item').mouseover(function (){
        $('.drop_down_menu .item .sub_menu:visible').hide();
        $(this).find('.sub_menu').show(); 
    });
    
    isNavBarHidden = true;
    $('.mobile_navs .menu_icon').click(function (){
       if(isNavBarHidden){
           $('header .nav_bar').fadeIn("slow");
           isNavBarHidden = false;
       } 
        else{
            $('header .nav_bar').fadeOut("slow");
           isNavBarHidden = true;
        }
    });
});