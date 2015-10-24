/*
 * Navigate.js
 *
 * Copyright 2015, Shahabaz Khan (tigertooth01)
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  https://github.com/tigertooth01/Navigate.js/
 * Version: 0.0.1
 */
$(document).ready(function(){

$('.page').first().css('margin-left','0vw');
});
var _currentPage='#page1';
var pageStack=['#page1'];//will contain the pages navigated

function navigateTo(page){
    
    $(page).css( '-webkit-transition','margin 0.3s');//adding transition effect.
    $(page).css('visibility','visible');//making it visible.
    $(_currentPage).css('margin-left','-100vw');//push current page to left.
    pageStack.push(page);//add new page to page stack.
    _currentPage = page;//set new page as current page.
    $(_currentPage).css('margin-left','0vw');//bring current page to front.

    setTimeout(function(){ 
        $(pageStack[pageStack.length-2]).css('visibility','hidden');//hide previous page.
        $(pageStack[pageStack.length-2]).css( '-webkit-transition','');//removing transition effect to move it right.
        $(pageStack[pageStack.length-2]).css('margin-left','100vw');//move previous page to right .
    }, 300);
}
            
function goBack(){
    
    
    if(pageStack.length>1)
        {
            var poppedPage = pageStack.pop();//remove current page from page stack, and cache it.
            $(_currentPage).css('margin-left','-100vw');//push current page to left.
            _currentPage = pageStack[pageStack.length-1];//set current page as the last item in page stack ie. the previous page.
            $(_currentPage).css( '-webkit-transition','margin 0.3s');//adding transition effect.
            $(_currentPage).css('visibility','visible');//making it visible.
            $(_currentPage).css('margin-left','0vw');//bring current page to front.

            setTimeout(function(){ 
                $(poppedPage).css('visibility','hidden');;//hide cached page. 
                $(poppedPage).css( '-webkit-transition','');//removing transition effect to move it right.
                $(poppedPage).css('margin-left','100vw');//move cached page to right.
            }, 300);
        }
}
