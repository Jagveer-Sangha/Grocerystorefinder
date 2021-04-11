require([
    "esri/map",
    "esri/dijit/Search",
    "esri/geometry/Extent",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/geometry/screenUtils",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/_base/Color"
], function (Map, Search, Extent, Graphic, SimpleMarkerSymbol, screenUtils, dom, domConstruct, query, Color) {
    // create a map and instance of the search widget here
    // var map;
    // require(["esri/map"], function (Map) {
    //     map = Map("map", {
    //         basemap: "streets-navigation-vector",
    //         center: [-79.3832, 43.6532],
    //         zoom: 13
    //     });

    var search = new Search({
        map: map,
    }, dom.byId("search"));

    search.startup();
});


// Navbar function
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
