$(document).ready(function(e){$('.bc_icon_box>.bc_iconbox_content').html('<h4>loading..</h4>');$('.bc_icon_box_bell>.bc_iconbox_content').html('<h4>loading..</h4>');$(document).mouseup(function(e){var header_icon_popup=$('.bc_icon_box, .bc_icon_box_flag, .bc_icon_box_bell');var header_icon_popup_inner=$('#bc_bell, #bc_message');if(!$('.bc_icon_box, .bc_icon_box_flag, .bc_icon_box_bell').is(e.target)&&!header_icon_popup.is(e.target)&&header_icon_popup.has(e.target).length==0&&!$('#bc_bell, #bc_message').is(e.target)&&!header_icon_popup_inner.is(e.target)&&header_icon_popup_inner.has(e.target).length==0){$('.bc_icon_box, .bc_icon_box_flag, .bc_icon_box_bell').removeClass('icon_active');$('.bc_icons_wrap li a#bc_message').removeClass('active');$('.bc_icons_wrap li a#bc_bell').removeClass('active');}});$("#toggle-nav").on("click",function(a){$("body").toggleClass("nav-open"),a.stopPropagation();});$(".bc_wrapper").on("click",function(a){a.target===this&&$("body").removeClass("nav-open");});$('.bc_icons_wrap li a#bc_message').click(function(e){e.preventDefault()
$('.bc_icon_box_bell, .bc_icon_box_flag').removeClass('icon_active');$('.bc_icons_wrap li a#bc_bell, .bc_icons_wrap li a#bc_flag').removeClass('active');if($('.bc_icon_box').hasClass('icon_active'))
{$('.bc_icon_box').removeClass('icon_active');$(this).removeClass('active');}
else
{$('.bc_icon_box').addClass('icon_active');$(this).addClass('active');}
if($('.bc_icon_box').hasClass('icon_active'))
{$.ajax({type:"post",url:'/forums/?app=members&module=ajax&section=messenger&do=getInboxDropDown',evalJSON:'force',hideLoader:true,data:{secure_key:loginhash},dataType:'json',success:function(data){if(data['error'])
{if(data['__board_offline__'])
{$('.bc_icons_wrap li a#bc_message').removeClass('active');}}else{$('.bc_icon_box>.bc_iconbox_content').html(data['html']);}}});}});$('.bc_icons_wrap li a#bc_bell').click(function(e){e.preventDefault()
$('.bc_icon_box, .bc_icon_box_flag').removeClass('icon_active');$('.bc_icons_wrap li a#bc_message, .bc_icons_wrap li a#bc_flag').removeClass('active');if($('.bc_icon_box_bell').hasClass('icon_active'))
{$('.bc_icon_box_bell').removeClass('icon_active');$(this).removeClass('active');}
else
{$('.bc_icon_box_bell').addClass('icon_active');$(this).addClass('active');}
if($('.bc_icon_box_bell').hasClass('icon_active'))
{$.ajax({type:"post",url:'/forums/index.php?app=core&module=ajax&section=notifications&do=getlatest',evalJSON:'force',hideLoader:true,data:{secure_key:loginhash},dataType:'json',success:function(data){if(data['error'])
{if(data['__board_offline__'])
{$('.bc_icons_wrap li a#bc_bell').removeClass('active');}}else{$('.bc_icon_box_bell>.bc_iconbox_content').html(data['html']);$('.bc_icons_wrap li a#bc_bell span').css('display','none');}}});}});});