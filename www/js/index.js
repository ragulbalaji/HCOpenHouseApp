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
}