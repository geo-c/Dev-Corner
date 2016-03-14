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
        $( '.wy-side-nav-search' ).html(
        	'<img src="' + url + '" style="width:auto; height:30px; border-radius:0px;">Dev-Corner' + 
        	'<div role="search">' + 
                '<form id="rtd-search-form" class="wy-form" action="./search.html" method="get">' +
                    '<input type="text" name="q" placeholder="Search docs">' +
                '</form>' +
            '</div>';
      	);
    };

    urlExists();

});
