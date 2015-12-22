/*
 * 
 * Copyright(c) 2015 - 2016
 * Velusamy Sathiakumar Ragul Balaji
 * & Ho Jie Feng.
 * Released under GNU GPL v2
 * All rights reserved.
 * 
 */

$(function () {
    $("#mainlogo").fadeIn(1500, function () {});

	//create CCA buttons
    for (name in ccas) {
    	$('#' + ccas[name].type + ' ul').append(
    		$('<li>').attr('data-filtertext',ccas[name].searchtags)
    				 .attr('data-ccaname',name)
    				 .append($('<a>')
    				 		 .attr('href','#ccapage').text(ccas[name].fullname)
    				 		 .attr('data-ccaname',name)
    				 )
    	);
    		//<li data-filtertext="Infocomm Robotics Society HCIRS"><a href="#infosoc">Infocomm &amp; Robotics Society</a></li>
    }
    $('#cns ul li a').on('click',function(e) {
    	var ccaname = $(this).attr('data-ccaname');
    	$('#ccapage').css('background-image', 'url("' + ccas[ccaname].backgroundimg + '")');
    	$('#ccamainimg').attr('src',ccas[ccaname].mainimg);
    	$('#ccapage h1').html(ccas[ccaname].fullname);
    	$('#ccaintro').html(ccas[ccaname].introduction.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    	$('#ccacontent').html(ccas[ccaname].content.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    });
    /*//create the cca pages
    for (name in ccas) {
        $('body').append($('<div>')
            .attr('data-role', 'page')
            .attr('id', name)
            .attr('class', 'contentpage')
            .css('background-image', 'url(' + ccas[name].img + ')')
            .append($('<div>')
                .attr('data-role', 'content')
                .attr('data-theme', 'a')
                .append($('<center>')
                    .append($('<h2>').html(ccas[name].fullname))
                    .append($('<p>').html(ccas[name].introduction.replace(/(?:\r\n|\r|\n)/g, '<br />')))
                    .append($('<p>').html(ccas[name].content.replace(/(?:\r\n|\r|\n)/g, '<br />')))
                )
            )
        );
    }//*/
});
