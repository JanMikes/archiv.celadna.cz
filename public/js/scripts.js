function hideElement(id){
  if(document.getElementById(id).style.display != "none"){
    document.getElementById(id).style.display="none";
  }
}

function showElement(id){
  if(document.getElementById(id).style.display != "block"){
    document.getElementById(id).style.display="block";
  }
}

function bar(url)
{
  wasOpen  = false;
  win = window.open(url);    
  return (typeof(win)=='object')?true:false;
}

$(document).ready(function() {
  $('#menuFrame LI').hover(
     function () 
     {
       $(this).children('.submenu').slideDown('fast');
     },
     function () 
     {
       $(this).children('.submenu').hide();
     }
  );
  
  
  if(inIframe())
  {
    console.log('Iframe');
  	$('a').click(function(e){
  		var _href_ = this.href,
  		_anchorHost_ = this.host,
  		_host_ = window.location.host,
  		_target_ = this.target;
  		if(_href_.indexOf('.xls') > -1 || _href_.indexOf('.xlsx') > -1 || _href_.indexOf('.pdf') > -1 || _href_.indexOf('.doc') > -1 || _href_.indexOf('.docx') > -1 || _anchorHost_ != _host_ || _href_.indexOf('mailto') > -1 || _href_.indexOf('tel') > -1)
  		{
  			e.preventDefault();
  			e.stopPropagation();
  			return false;
  		}
  		else if(_anchorHost_ == _host_ && _target_ == '_blank')
  		{
  			this.target = '_self';
  		}
  	});
  }
  else
  {
    console.log('NO Iframe');
  }
  
  
});



function inIframe()
{
	try
	{
		return window.self !== window.top;
	}
	catch (e)
	{
		return true;
	}
}
