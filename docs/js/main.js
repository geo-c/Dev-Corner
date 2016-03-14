$( document ).ready(function() {

    //console.log(window.location.pathname);
    //console.log(window.location.href);

    /*function urlExists() {
        $('<img src="' + window.location.pathname + 'img/logo-geoc_white.png">').load(function() {
            insertLogo(window.location.pathname + "/img/logo-geoc_white.png");
        }).bind('error', function() {
            insertLogo("http://giv-oct.uni-muenster.de/dev-corner/img/logo-geoc_white.png");
        });
    };

    function insertLogo(url) {*/
        $('.wy-side-nav-search a[href="."]').before(
            '<img src="http://giv-oct.uni-muenster.de/dev-corner/img/logo-geoc_white.png" style="width:auto; height:30px; border-radius:0px;">'  
        );
    //};

    //urlExists();

});
