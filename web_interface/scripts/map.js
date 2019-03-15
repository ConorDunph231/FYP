/** 
 * author Conor Dunphy
 * version: 1.0.0
*/

/*This is the container for the map*/
    
var map
var mapProp;

function myMap(){

    
    /*The properties of the map, including zoom */
    mapProp = {
        center: new google.maps.LatLng(53.2734,-7.7783),
        zoom:6.5,
    };
    
}

document.addEventListener ("DOMContentLoaded", init);

function init () {
    //Initialising the buoy.
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    //The co-ordinates of each buoy.
    var m2Pos = new google.maps.LatLng(53.4836, -5.4302);
    var m3Pos = new google.maps.LatLng(51.21596, -10.5483);
    var m4Pos = new google.maps.LatLng(54.6667, -9.0667);
    var m5Pos = new google.maps.LatLng(51.69043, -6.70434);
    var m6Pos = new google.maps.LatLng(53.07482, -15.8814);

    //Initialising and setting the markers the markers.
    //And attaching an event listener to each marker.
    //Which will open the buoys data visualisations. 
    var m2Marker = new google.maps.Marker({position:m2Pos});
    m2Marker.setMap(map);
    google.maps.event.addListener(m2Marker, 'click', function(){
        window.open('M2_Data.html', '_self');
    });

    var m3Marker = new google.maps.Marker({position:m3Pos});
    m3Marker.setMap(map);
    google.maps.event.addListener(m3Marker, 'click', function(){
        window.open('M3_Data.html', '_self');
    });

    var m4Marker = new google.maps.Marker({position:m4Pos});
    m4Marker.setMap(map);
    google.maps.event.addListener(m4Marker, 'click', function(){
        window.open('M4_Data.html', '_self');
    });

    var m5Marker = new google.maps.Marker({position:m5Pos});
    m5Marker.setMap(map);
    google.maps.event.addListener(m5Marker, 'click', function(){
        window.open('M5_Data.html', '_self');
    });

    var m6Marker = new google.maps.Marker({position:m6Pos});
    m6Marker.setMap(map);
    google.maps.event.addListener(m6Marker, 'click', function(){
        window.open('M6_Data.html', '_self');
    });

    //Setting an Info window for each Buoy.
    var m2Info = new google.maps.InfoWindow({
        content:"M2 Weather Buoy"
    });
    m2Info.open(map, m2Marker);

    var m3Info = new google.maps.InfoWindow({
        content:"M3 Weather Buoy"
    });
    m3Info.open(map, m3Marker);

    var m4Info = new  google.maps.InfoWindow({
        content:"M4 Weather Buoy"
    });
    m4Info.open(map, m4Marker);

    var m5Info = new  google.maps.InfoWindow({
        content:"M5 Weather Buoy"
    });
    m5Info.open(map, m5Marker);

    var m6Info = new  google.maps.InfoWindow({
        content:"M6 Weather Buoy"
    });
    m6Info.open(map, m6Marker);


}

    
        
