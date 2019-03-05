/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery,
 * and changed the color to blue.
 */
 function turnParagraphsBlue() {
    let turnBlue = $("p");
    turnBlue.css("color","blue");
 }

/**
* Question 2:
* When button 1 is clicked, select all <h2> elements on this page,
* and change the text to say your name.
*/
function changeText() {
   let chtext = $("h2");
   chtext.text("Ahmed Alzohimeel");
}

/**
* Question 3:
* When button 1 is clicked, select the ordered list item that has the class "falseFact".
* Using jQuery change the content to read "True Fact".
*/
function trueFact() {
   let trFact = $(".falseFact");
   trFact.text("True Fact");
}

/**
* Question 4:
* When button 2 is clicked, change the background color of the whole page to "pink"
*/

function turnPink() {
   let backPink = $("body");
   backPink.css("background","pink");
}

/**
* Question 5:
* When button 2 is clicked, change the color of all h2's to "green"
*/
function turnGreen() {
   let tuGreen = $("h2");
   tuGreen.css("color","green");
}
/**
* Question 6:
* When button 2 is clicked, change the html content of all "blockquotes"
* to be "<span>no quote</span>"
*/

function turnBlockQuotes() {
   let blockq = $("blockquote");
   blockq.html("<span>no quote</span>");
}
/**
* Question 7:
* When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
*/
function turnNinja() {
   let ninja = $("h1");
   ninja.text("jQuery Ninja");
}
/**
* Question 8:
* Have the following code execute when button 3 is clicked
* Write a JavaScript comment with a description of what happened
* $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
*/

function picch() {
   let pic = $(".city");
   pic.attr("src", "http://lorempixel.com/g/500/400/food");
}

/**
* Question 9:
* When button 3 is clicked, select all paragraphs on the page
* and change the color to blue and font to Georgia.
* Bonus: Try to do this with only one jQuery call.
* $("selector").css({attribute: "value", attribute: "value"});
*/



function colorandfont() {
   let candf = $("p");
   candf.css({"color": "blue", "font-family": "Georgia"});
}


//   click events
$ ("#button1").on("click",turnParagraphsBlue);
$ ("#button1").on("click",changeText);
$ ("#button1").on("click",trueFact);
$ ("#button2").on("click",turnPink);
$ ("#button2").on("click",turnGreen);
$("#button2").on("click",turnBlockQuotes);
$ ("#button3").on("click",turnNinja);
$ ("#button3").on("click",picch);
$ ("#button3").on("click",colorandfont);
