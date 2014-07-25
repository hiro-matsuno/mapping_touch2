/**
 * 
 */
$(function(){
	//マップ変数の設定
	var map = new OpenLayers.Map("map_canvas");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    //座標の設定 
    var lonLat = new OpenLayers.LonLat(136.607991,35.364799)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), 
            new OpenLayers.Projection("EPSG:900913")
        );
    map.setCenter(lonLat, 17);
    
    //位置情報自動取得でマーカーを表示
    navigator.geolocation.getCurrentPosition(function(pos){
    	//緯度・軽度の取得
    	lat = pos.coords.latitude;
    	lon = pos.coords.longitude;
        //マーカーの追加
        var markers = new OpenLayers.Layer.Markers("Markers");
        map.addLayer(markers);
        //マーカーの設定
        var marker = new OpenLayers.Marker(
            new OpenLayers.LonLat(lon,lat)
                .transform(
                    new OpenLayers.Projection("EPSG:4326"), 
                    new OpenLayers.Projection("EPSG:900913")
                )
        );
        //マーカーの追加
        markers.addMarker(marker);   	
    },function(e){
    	alert('位置情報取得できませんでした。');
    },
    {"enableHighAccuracy":true});

});