
var $linkID, $linkURL

function changeTime(){
    let d= new Date(); //built in JS function
    let mm = ('0' + d.getMinutes()).slice(-2);
    let ss = ('0' + d.getSeconds()).slice(-2);
    document.getElementById("dateTime").innerHTML = `${d.getMonth()}/${d.getDay()}/${d.getYear()} ${d.getHours()}:${mm}:${ss}`;
}

setInterval(changeTime, 1000); //updates the time dynamically.

//Group1
//Click to Show functionality: group 1 
//clicks hide all divs, then uses a "title" attribute as a variable to toggle the associated box showing that title's information. 
//I am no marketer, so the text is some basic info I read on the websites.
$(document).ready(function(){
    $(".clickToShow").click(function(){
        $(".clickToShowBlock").hide();
        let idTag = '#' + this.getAttribute("title");        
      $(idTag).toggle();
    });
  });

//Group 2
//Same as above, except using hover instead of click to show the images.

$(document).ready(function(){    
    $(".hoverToShow").hover(function(){let idTag = '#' + this.getAttribute("title");
        $(idTag).show();
      }, function(){let idTag = '#' + this.getAttribute("title");
        $(idTag).hide();      
      $(".hoverToShowBlock").hide();
    });
  });

  //Group3
  //follows group 1 method, but loads all links at the same time by toggling a button.
  
$(document).ready(function(){
    $("#showLinksButton").click(function(){        
      $(".showLinks").toggle();
    });
  });

  $(function(){
    $("#showLinksButton").click(function () {
       $(this).text(function(i, text){
           return text === "Show Links" ? "Hide Links" : "Show Links";
       })
    });
 })
 //https://stackoverflow.com/questions/13652835/button-text-toggle-in-jquery

 //Group4
 //https://stackoverflow.com/questions/4511652/looping-through-list-items-with-jquery
// http://jsfiddle.net/mblase75/wE4S8/
//from: https://stackoverflow.com/questions/20105762/show-n-number-of-list-elements-at-a-time-jquery
$(document).ready(function (){
    var elements =$("#aviationLinks li");
    var index=0;
    var showTwo = function (index) {
        if (index >=elements.length){
            index = 0
        }
        elements.hide().slice(index, index+2).show();
        setTimeout(function(){
            showTwo(index +2)
        }, 5000);
        }
        showTwo(0);
    });

//Make key-value pairs on id and hyperlinks
const linkIDref = {
    delphiInfo:"https://delphitechcorp.com/",
    vrCityInfo:"https://vrcity.ca/",
    auroraInfo:"https://auroraaerial.aero",
    virbelaURL:"https://virbela.com",
    amazonURL:"https://amazon.com",
    moodleURL:"https://moodle.org",
    xPlaneURL:"https://x-plane.com",
    wordpressURL:"https://wordpress.org",
    gitHub:"https://github.com",
    googleMeet:"https://meet.google.com",
    slack:"https://slack.com",
    wrike:"https://wrike.com",
    airbus:"https://airbus.com",
    boeing:"https://boeing.com",
    lockheedMartin:"https://lockheedmartin.com",
    rtx:"https://rtx.com",
    geAviation:"https://geaviation.com",
    safran:"https://safran-group.com",
    leonardo:"https://leonardocompany.com",
    baseSystems:"https://baesystems.com"
}
//use key-values to populate the dynamic hyperlink functionality.
jQuery(".link").click(function(){
    $linkID = $(this).attr("id");
    window.location.href=linkIDref[$linkID];
})

$( function() {
    $( ".groups" ).draggable();
  } );
  
  $( function() {
    $( ".groups" ).resizable();
  } );