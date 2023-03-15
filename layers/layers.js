var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OsmQuery_1 = new ol.format.GeoJSON();
var features_OsmQuery_1 = format_OsmQuery_1.readFeatures(json_OsmQuery_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OsmQuery_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OsmQuery_1.addFeatures(features_OsmQuery_1);
var lyr_OsmQuery_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OsmQuery_1, 
                style: style_OsmQuery_1,
                interactive: true,
                title: '<img src="styles/legend/OsmQuery_1.png" /> OsmQuery'
            });
var format_OsmQuery_2 = new ol.format.GeoJSON();
var features_OsmQuery_2 = format_OsmQuery_2.readFeatures(json_OsmQuery_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OsmQuery_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OsmQuery_2.addFeatures(features_OsmQuery_2);
var lyr_OsmQuery_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OsmQuery_2, 
                style: style_OsmQuery_2,
                interactive: true,
                title: '<img src="styles/legend/OsmQuery_2.png" /> OsmQuery'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_OsmQuery_1.setVisible(true);lyr_OsmQuery_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OsmQuery_1,lyr_OsmQuery_2];
lyr_OsmQuery_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'office': 'office', });
lyr_OsmQuery_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'official_name:id': 'official_name:id', 'official_name:en': 'official_name:en', 'official_name': 'official_name', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'government': 'government', 'layer': 'layer', 'office': 'office', 'shop': 'shop', 'type': 'type', 'religion': 'religion', 'name': 'name', 'building': 'building', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_OsmQuery_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'office': '', });
lyr_OsmQuery_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'official_name:id': '', 'official_name:en': '', 'official_name': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'government': '', 'layer': '', 'office': '', 'shop': '', 'type': '', 'religion': '', 'name': '', 'building': '', 'amenity': '', 'addr:street': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_OsmQuery_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'office': 'no label', });
lyr_OsmQuery_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'official_name:id': 'no label', 'official_name:en': 'no label', 'official_name': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'government': 'no label', 'layer': 'no label', 'office': 'no label', 'shop': 'no label', 'type': 'no label', 'religion': 'no label', 'name': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_OsmQuery_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});