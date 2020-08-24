var IsDesktopApp = 1

if(IsDesktopApp == 1)
{
	$('body').append('<div class="btn-window-close">x</div>');
	$('body').append('<div class="window-border-top"></div>');
	$('body').append('<div class="window-border-right"></div>');
	$('body').append('<div class="window-border-bottom"></div>');
	$('body').append('<div class="window-border-left"></div>');	
}
else
{
	/* do nothing */
}


$(document).on('click', '.btn-window-close', function()
	{
        window.close();
	});