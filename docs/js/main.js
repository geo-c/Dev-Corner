$( document ).ready(function() {

    console.log(window.location.pathname);
    console.log(window.location.href);

    function urlExists() {
        $('<img src="' + window.location.pathname + 'img/logo-geoc_white.png">').load(function() {
            insertLogo(window.location.pathname + "/img/logo-geoc_white.png");
        }).bind('error', function() {
            insertLogo("../../img/logo-geoc_white.png");
        });
    };

    function insertLogo(url) {
        $('a[role="search"]').insertBefore(
            '<img src="' + url + '" style="width:auto; height:30px; border-radius:0px;">Dev-Corner<br>' +   
        );
    };

    urlExists();

});
