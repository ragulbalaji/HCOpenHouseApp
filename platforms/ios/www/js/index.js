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
        var additionaltags = "";
        if (ccas[name].img.indexOf("cns") > -1) {
            additionaltags = " Clubs and Societies";
        } else if (ccas[name].img.indexOf("sports") > -1) {
            additionaltags = " Sports";
        } else if (ccas[name].img.indexOf("arts") > -1) {
            additionaltags = " Performing Arts";
        }
        $('#ccas ul').append(
            $('<li>').attr('data-filtertext', ccas[name].searchtags + additionaltags)
            .attr('data-ccaname', name)
            .append($('<a>')
                .attr('href', '#ccapage').text(ccas[name].fullname)
                .attr('data-ccaname', name)
            )
        );
        //<li data-filtertext="Infocomm Robotics Society HCIRS"><a href="#infosoc">Infocomm &amp; Robotics Society</a></li>
    }

    $('#ccas ul li a').on('click', function (e) {
        var ccaname = $(this).attr('data-ccaname');
        $('#ccapage').css('background', 'url("' + ccas[ccaname].img + '") no-repeat center center fixed');
        $('#ccapage').css('background-size', 'cover');
        $('#ccamainimg').attr('src', ccas[ccaname].img);
        $('#ccapage h1').html(ccas[ccaname].fullname);
        $('#ccaintro').html(ccas[ccaname].introduction.replace(/(?:\r\n|\r|\n)/g, '<br />'));
        $('#ccacontent').html(ccas[ccaname].content.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    });

    for (name in academics) {
        $('#subjects ul').append(
            $('<li>').attr('data-filtertext', academics[name].searchtags)
            .attr('data-subjectname', name)
            .append($('<a>')
                .attr('href', '#subjectpage').text(academics[name].fullname)
                .attr('data-subjectname', name)
            )
        );
    }
    $('#subjects ul li a').on('click', function (e) {
        var subjectname = $(this).attr('data-subjectname');
        $('#subjectpage h1').html(academics[subjectname].fullname);
        ///*
        $('#subjectpage .subbtns').on('click', function (e) {
            window.open(academics[subjectname].website, '_blank', 'location=yes');
        }); //*/
        //$('#subjectpage .subbtns').attr('href', academics[subjectname].website);

        $('#subjectpage p').html(academics[subjectname].content.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    });

    console.log(activities);
    for (i in activities) {
        $('#activities ul').append($('<li>').append($('<a>')
            .attr('href', '#activitiespage')
            .append($('<h3>').text(activities[i].title))
            .append($('<p>').html(activities[i].content))
            .append($('<p>').attr('class', 'ui-li-aside').append($('<strong>').text(activities[i].time)))
        ));
    }
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
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};