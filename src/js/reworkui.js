/*
Copyright 2021-23 Quarkz By Mr Techtroid

All rights reserved by [Mr Techtroid]. This work is not open-source.

No part of these HTML, CSS, and JavaScript files may be reproduced, distributed, 
or transmitted in any form or by any means, including photocopying, recording, 
or other electronic or mechanical methods, without the prior written permission 
of the author, except in the case of brief quotations embodied in critical reviews 
and certain other noncommercial uses permitted by copyright law.

For permission requests, please contact [Mr Techtroid] at mrtechtroid@outlook.com .
*/
export function sysaccess() {
    function w(ele) {
        return document.getElementById(ele)
    }
    function r(txt,st){
        // w("c-output").insertAdjacentHTML("beforeend","<div style = "+st+">"+txt+"</div>")
    }
    function init(){
        r("Ariel","color:pink;align-text:center;")
    }
    function x(fn){
        const u = w("c-input").value;
        document.querySelector("body").insertAdjacentHTML("beforeend",
        `<script></script>`
    )
    }
    var clog = console
    console = {}
    console = {log:function(logtxt){r("",logtxt)},error:function(logtxt){r("",logtxt)},warn:function(logtxt){r("",logtxt)}}
    // w("c-exec").addEventListener("click",x(w("c-input").value))
    const cs = console
    // console = {}
    init()
}
