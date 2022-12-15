// ==UserScript==
// @name         SiMenMorning-A
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  use this to book A section, SiMen
// @author       EdwardChang
// @match        <$URL$>
// @icon         <$ICON$>
// @grant        none
// @include      https://pay.x50.fun/reservation/select
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function xpath(query) {
    return document.evaluate(query, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    }

    function anchorclick(node)
    {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        var allowDefault = node.dispatchEvent(evt);
    }

    var simenMorningA = xpath("//label[@for='376560A']")
    console.log(simenMorningA)
    if(simenMorningA.snapshotLength > 0){
        var thisLabel = simenMorningA.snapshotItem(0)
        anchorclick(thisLabel)
        console.log(thisLabel)
    }

    var submitBtn = xpath("//div[@id='submit']")
    console.log(submitBtn)
    if(submitBtn.snapshotLength > 0){
        var thisBtn = submitBtn.snapshotItem(0)
        setTimeout(function(){
            anchorclick(thisBtn);
            console.log('clicked')
        }, 5000);
        console.log(thisBtn)
    }




})()