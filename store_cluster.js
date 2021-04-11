require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/dijit/PopupTemplate",
    "esri/dijit/Legend",
    "dojo/domReady!",
    "esri/dijit/Search",
    "esri/geometry/Extent",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/geometry/screenUtils",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/query",
], function (Map, FeatureLayer, PopupTemplate, Legend, Search, Extent, Graphic, SimpleMarkerSymbol, screenUtils, dom, domConstruct, query, Color
) {

    var map = new Map("map", {
        basemap: "streets-navigation-vector",
        center: [-73.92872, 40.71321],
        zoom: 11

    });



    // Enable clustering in the layer's constructor
    // and add the layer to the map

    var serviceUrl =
        "https://services.arcgis.com/uKN48PkxmWiqJM9q/arcgis/rest/services/NYC_GroceryStores/FeatureServer/0"
        ;

    var serviceUrl2 = "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer/0";

    var layer = new FeatureLayer(serviceUrl, {
        outFields: ["facname", "proptype", "factype", "address"],
        featureReduction: {
            // can leave it default single if needed
            type: "cluster"
        },
        infoTemplate: new PopupTemplate({
            // title: "{facname}",
            title: "Grocery Store",
            // description: "{proptype} {factype} on {address}."
        })


    });
    var layer2 = new FeatureLayer(serviceUrl2, {
        outFields: ["facname", "proptype", "factype", "address"],
        featureReduction: {
            // can leave it default single if needed
            type: ""
        },
        infoTemplate: new PopupTemplate({
            // title: "{facname}",
            title: "",
            // description: "{proptype} {factype} on {address}."
        })
    });
    // Adds the layer for the daily covid cases in the country
    // map.addLayer(layer2);

    map.addLayer(layer);

    map.on("load", function (evt) {
        var legend = new Legend({
            map: map,
            layerInfos: [{
                layer: layer,
                title: "Cluster of grocery stores",

            }],

        }, "legendDiv");
        legend.startup();

    });

});




