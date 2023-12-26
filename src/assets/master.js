if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    document.write("<script src='" + localeFolder + "js/externaljs/jquery.min.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/angular.min.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/bootstrap3.1.min.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/angular-modal-service.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/html5shiv-printshiv.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/html5shiv.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/jquery.mediaqueries1.19.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/filterIE.js'></script>");
} else {
    document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>");
    document.write("<script>if(typeof jQuery == 'undefined') {document.write(unescape(\"%3Cscript src='" + localeFolder + "js/externaljs/jquery.min.js'%3E%3C/script%3E\")); }</script>");
    document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.0/angular.min.js'></script>");
    document.write("<script>if(typeof angular == 'undefined') {document.write(unescape(\"%3Cscript src='" + localeFolder + "js/externaljs/angular.min.js'%3E%3C/script%3E\")); }</script>");
    document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js'></script>");
    document.write("<script>if(typeof($.fn.popover) == 'undefined') {document.write(unescape(\"%3Cscript src='" + localeFolder + "js/externaljs/bootstrap3.1.min.js'%3E%3C/script%3E\")); }</script>");
    document.write("<script src='" + localeFolder + "js/externaljs/angular-modal-service.js'></script>");
    document.write("<script src='" + localeFolder + "js/externaljs/jquery.mediaqueries1.19.js'></script>");
}