/*
 * Navigate.js
 *
 * Copyright 2015, Shahabaz Khan (tigertooth01)
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  https://github.com/tigertooth01/Navigate.js/
 * Version: 1.0.0
 */
$(document).ready(function(){

$('.page').first().css('-webkit-transform', 'translate3d(0vw, 0, 0)');
});
var _currentPage='#dashboard';
var pageStack=['#dashboard'];//will contain the pages navigated

function navigateTo(page){
    
    if(page!=_currentPage)
    {
        $(_currentPage).css('-webkit-transform', 'translate3d(-100vw, 0, 0)');//push current page to left.
        pageStack.push(page);//add new page to page stack.
        _currentPage = page;//set new page as current page.
        $(_currentPage).css('-webkit-transform', 'translate3d(0vw, 0, 0)');
        $(pageStack[pageStack.length-2]).css('-webkit-transform', 'translate3d(100vw, 0, 0)');//move previous page to right .

    }
}
            
function navigateGoBack(){
    
    
    if(pageStack.length>1)
        {
            var poppedPage = pageStack.pop();//remove current page from page stack, and cache it.
            $(_currentPage).css('-webkit-transform', 'translate3d(-100vw, 0, 0)');//push current page to left.
            _currentPage = pageStack[pageStack.length-1];//set current page as the last item in page stack ie. the previous page.
            $(_currentPage).css('-webkit-transform', 'translate3d(0vw, 0, 0)');//bring current page to front.
            $(poppedPage).css('-webkit-transform', 'translate3d(100vw, 0, 0)');//move cached page to right.

        }
}
