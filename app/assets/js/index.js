if ('serviceWorker' in navigator)
{
	window.onload = function ()
	{
		navigator.serviceWorker
		.register('/services.js')
		.then(function (reg)
		{
			
		});
	};
}