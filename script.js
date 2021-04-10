var map;
require(["esri/map"], function (Map) {
    map = new Map("map", {
        basemap: "streets-navigation-vector",
        center: [-79.3832, 43.6532],
        zoom: 13
    });
});

var search = new Search({
    map: map
}, "search");
search.startup();
