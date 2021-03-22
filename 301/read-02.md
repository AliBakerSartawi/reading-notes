## jQuery

**jQuery** offers simple ways to *select elements*, *perform tasks in the **DOM*** and *handle events*.

But, it must be included in the **HTML** first as a `script src` before closing the body, it is better for performance than placing it in the head. It can be download from [here](http://jquery.org). Or it can be loaded from a **CDN**

**Syntax**
```javascript
//instead of document.getElementBy
$('li.hot')
$('#box')
$('p')

//ready method
$(document).ready(function() {
  //jQuery script
});
//shortcut
$(function() {
  //jQuery script
});

//methods
$('h1').html(); //to get (let content = $('h1').html();), fill parameters to set
$('p').text();
$('.row').addClass('complete'); //the dot before addClass is called (member operator)
$('#header').hide().fadeIn(1000); //using more than one method is called chaining

let listItemText = $('li').text();
$('li').append().prepend().before().after(`<i>${listItemText}</i>`);

//more methods
.replaceWith();
.remove();
.attr(); //.attr('id', 'hot');
.removeAttr();
.addClass();
.removeClass();

//css
.css(); //on parameter to get, second parameter to set [for one command]
//multiple css lines
$('li').css({
  'background-color': 'black',
  'color': 'whitesmoke',
  'font-family': 'Georgia'
  'padding-left': '+=75' //add 75 to current value
});

//working with each element in selection, like a for each loop
$('li').each(function() {
  const ids = this.id;
  $(this).append('<p>WHAT</p>');
});

//event methods
.focus();
.blur();
.change();
.input();
.keydown();
.keyup();
.keypress();
.click();
.dblclick();
.mouseup().mousedown().mouseover().mousemove().mouseout().hover();
.submit();
.select();
//and some other events
$('.button').on('click dblclick mouseover', function(nameOfEvent) {
  $(this).remove(); //(this) will remove the clicked button only not all buttons with the same class
  eventType = nameOfEvent.type;
  nameOfEvent.which //button or key that was pressed
  event.target //DOM element that initiated the event
  event.pageX //mouse position from left edge of viewport
  event.pageY //mouse position from top edge of viewport
  event.preventDefault();
  event.stopPropogation(); //stop event from bubbling to ancestors
  $('.button').off('click'); //disable event
})


//effects
.show();
.hide();
.toggle();

.fadeIn();
.fadeOut();
.fadeTo(); //changes opacity
.fadeToggle();

.slideUp();
.slideDown();
.slideToggle();

.delay(); //delays execution of subsequent items in queue
.stop(); //stops animation
.animate();
```

---

## Pair Programming

Why do pair programming?
- *Greater efficiency*... sometimes, two eyes are better than one
- *Engaged collaboration*... two minds are better than one.
- *Learning from fellow students*... everyone has something new to offer to the table.
- *Social skills*... introverts have to, you know, get out of the shell every once in a while.
- *Job interview readiness*... they will test your pair programming skills... yikes!!!
- *Work environment readiness*... like it or not, you are going to work in pairs... get used to it now!!