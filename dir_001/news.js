$(document).ready(function(e){$('.cz-news-comment').click(function(e){e.preventDefault();if($(this).find('a').size()>0)
{window.location=String($(this).find('a').attr('href'));}});});