var map;
require(["esri/map"], function (Map) {
    map = new Map("map", {
        basemap: "topo",
        center: [-122.45, 37.75],
        zoom: 13
    });
});