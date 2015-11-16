/*
 * Navigate.js
 *
 * Copyright 2015, Shahabaz Khan (tigertooth01)
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  https://github.com/tigertooth01/Navigate.js/
 * Version: 1.0.1
 */

var _currentPage='';// initialize with first page's ID
var pageStack=[];//will contain the pages navigated
var transLock=false;//prevention from spamming forward/back

$(document).ready(function(){

    $('.page').first().css('-webkit-transform', 'translate3d(0, 0, 0)');
    _currentPage = '#'+$('.page').first().attr('id');//initialize with first page's ID.
    pageStack.push(_currentPage);//pushing first page's ID to pageStack.
});

function navigateTo(page){
    
    if((page!=_currentPage)&&(!transLock))
        {
            pageStack.push(page);//add new page to page stack.
            _currentPage = page;//set new page as current page.
            $(_currentPage).css('-webkit-transform', 'translate3d(0, 0, 0)');//bring current page to front.
            transLock = true;
            setTimeout(function(){ $(pageStack[pageStack.length-2]).css('-webkit-transform', 'translate3d(100%, 0, 0)'); transLock = false;}, 400);
            //move previous page to right, after transition is over.

        }
}
            
function navigateGoBack(){
    
    if((pageStack.length>1)&&(!transLock))
        {
            var poppedPage = pageStack.pop();//remove current page from page stack, and cache it.
            _currentPage = pageStack[pageStack.length-1];//set current page as the last item in page stack ie. the previous page.
            $(_currentPage).css('-webkit-transition', 'none');//remove transition to bring up the page before previous page slides back.
            $(_currentPage).css('-webkit-transform', 'translate3d(0, 0, 0)');//bring current page to front.
            $(poppedPage).css('-webkit-transform', 'translate3d(100%, 0, 0)');//move cached page to right.
            transLock = true;
            setTimeout(function(){$(_currentPage).css('-webkit-transition', '0.4s'); transLock = false;}, 400);
            //attach transition property back, after transition is over.
        }
}

