/*
 * 
 * Copyright(c) 2015 - 2016
 * Velusamy Sathiakumar Ragul Balaji
 * & Ho Jie Feng.
 * Released under GNU GPL v2
 * All rights reserved.
 * 
 */

function start() {
    $("#mainlogo").fadeIn(1500, function () {});
}
function createccapages()
{
	for(name in ccas)
	{
		alert(ccas[name]);
		$('body').append($('<div>')
						.attr('data-role','page')
						.attr('id',name)
						.attr('data-theme','a')
						.append($('<div>')
								.attr('data-role','content')
								.attr('data-theme','a')
								.append($('<center>')
									.append($('<h2>').text(ccas[name].fullname))
									.append($('<p>').text(ccas[name].introduction))
									.append($('<p>').text(ccas[name].content))
								)
						)
		);
	}
}
