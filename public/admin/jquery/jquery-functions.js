function jquerySetSizeToItemAkce(table, id, id_item, id_item1, id_item2, id_size)
{
  $.ajax({
      type:"POST", 
      url:"jquery/set_sizetoitem.php",
      data:"table="+table+"&id="+id+"&id_item="+id_item+"&id_item1="+id_item1+"&id_item2="+id_item2+"&id_size="+id_size,
      success: function(){
         $("#floatbox-box").fadeOut();
         $("#floatbox-background").fadeOut();
       }
   });
}

function jquerySetSizeToItem(table, id, id_item, id_size)
{
  $.ajax({
      type:"POST", 
      url:"jquery/set_sizetoitem.php",
      data:"table="+table+"&id="+id+"&id_item="+id_item+"&id_size="+id_size,
      success: function(){
         $("#floatbox-box").fadeOut();
         $("#floatbox-background").fadeOut();
       }
   });
}

function jquerySetColorToItem(table, id, id_item, id_color)
{
  $.ajax({
      type:"POST", 
      url:"jquery/set_colortoitem.php",
      data:"table="+table+"&id="+id+"&id_item="+id_item+"&id_color="+id_color,
      success: function(){
         $("#floatbox-box").fadeOut();
         $("#floatbox-background").fadeOut();
       }
   });
  
  //$("#floatbox-box").fadeOut();
}

function jquerySetCheckbox(table, id, param)
{
  $.ajax({
      type:"POST", 
      url:"jquery/set_checkbox.php",
      data:"table="+table+"&id="+id+"&param="+param
   });
}

function setValue(id, value)
{
  document.getElementById(id).value = value;
}

function jquery_getTitle(container, value)
{  
  $.get("jquery/_getTitle.php?value="+value, 
         function(data) { setValue(container, data.toLowerCase()); } 
       );
}

function jquerySend(container, url, url_resource)
{
  // index.php?page=ModuleText&subpage=photogallery&id=1&order=first&id-photo=278
  //var new_url = url.replace("index.php", '');
  $.ajax({url:url});
  $('#'+container).load('jquery/_frame_photoTable.php'+url_resource);
  
  /*$.post("_test/_jquery_save_form_data.php", 
    { 
      id_test: id_test, 
      id_testtostudent: id_testtostudent, 
      id_otazka: id_otazka,
      id_odpoved: id_odpoved,
      spravna: spravna,
      typ_otazky: typ_otazky,
      text: text,
      text2: text2 
    } );*/
}