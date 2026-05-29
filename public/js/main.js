/* Olio Theme Scripts (Next.js port: preloader + map init handle late-load) */

(function($){ "use strict";

/* NOTE: Preloader fade, sticky header, and the mobile menu are now handled in
   React (app/page.tsx and components/Navbar.tsx). The old jQuery preloader/
   sticky-header toggles and the slicknav mobile menu have been removed. */

/*=========================================================================
        textrotator
=========================================================================*/
    $(".rotate").textrotator({
      animation: "flipUp",
      separator: ",",
      speed: 2000
    });

/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});


/* Smooth scrolling for [data-scroll] links is handled in React (app/page.tsx),
   so the cferdinandi smooth-scroll plugin is intentionally not initialized here
   — running both caused two scroll animations to fight over the same links. */

/*=========================================================================
	WOW Active
=========================================================================*/
   new WOW().init();

/*=========================================================================
    Google Map Settings
=========================================================================*/
    function initMap() {
        if (typeof google === 'undefined' || !google.maps) {
            return;
        }

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400),
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        };

        var mapElement = document.getElementById('google-map');
        if (!mapElement) { return; }

        var map = new google.maps.Map(mapElement, mapOptions);

        new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Location!'
        });
    }

    if (typeof google !== 'undefined' && google.maps) {
        if (document.readyState === 'complete') {
            initMap();
        } else {
            google.maps.event.addDomListener(window, 'load', initMap);
        }
    }


})(jQuery);
