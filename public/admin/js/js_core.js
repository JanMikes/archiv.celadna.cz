menu_1 = new Image();
menu_1.src="images/uploading-image.gif";	

$(document).ready(function() {
  $('.shadow').shadow();
  $('.formSubmitSmall INPUT').corner();
  $('.formSubmitSmallRight INPUT').corner();
  $('.formSubmit INPUT').corner();
  //$('#menu LI').corner('top');
  $('#content #submenu LI').shadow();
  $(".datepicker").datepicker(
  { 
    dateFormat: 'dd.mm.yy' , 
    changeMonth: true,
    changeYear: true,
    yearRange: '1930:',
    showAnim: 'slide'
    //appendText: '(dd.mm.yyyy)' , 
    //beforeShowDay: $.datepicker.noWeekends 
  });
});

function checkboxChangeValue(checkboxid, tablerowid)
{
  if (document.getElementById(checkboxid).checked == true)
  {
    document.getElementById(checkboxid).checked = false;
    document.getElementById(tablerowid).style.backgroundColor = '#f1f1f1';
  }
  else
  {
    document.getElementById(checkboxid).checked = true;
    document.getElementById(tablerowid).style.backgroundColor = '#CCCCCC';
  }
}

function putItOnCenter(element)
{
  
}

function bar(url)
{
  wasOpen  = false;
  win = window.open(url);    
  return (typeof(win)=='object')?true:false;
}

function barSized(url, width, height) 
{
  wasOpen  = false;
  windowTest = window.open( url, "windowTest", "status = 1, height = "+height+", width = "+width+", resizable = 1, scrollbars = 1" );   
  return (typeof(windowTest)=='object')?true:false;
}

function hideElement(id)
{
  if(document.getElementById(id).style.display != "none")
  {
    document.getElementById(id).style.display="none";
  }
}

function showElement(id)
{
  if(document.getElementById(id).style.display != "block")
  {
    document.getElementById(id).style.display="block";
  }
}

function addInputValue(element, value)
{
  var lower_case_value = value.toLowerCase(); 
  document.getElementById(element).value = lower_case_value;
} 

function ShowElementText(id, text)
{
  document.getElementById(id).style.display="block";
  document.getElementById('actionFrameText').innerHTML=text;
}

function setBottomBarPosition()
{
  function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
  }
  document.getElementById("bottomBar2").style.top = (getDocHeight() - 41) + 'px';
}

$(document).ready(function() {
  $('#topMenu LI').hover(
     function () 
     {
       $(this).children('.submenu').slideDown('fast');
     },
     function () 
     {
       $(this).children('.submenu').hide();
     }
  );
});