import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";



//MongoDB Section
Events = new Mongo.Collection('Event');
Locations = new Mongo.Collection('Location');

//SQLite Implementation Section
//7fc46e0600795cfdc096b6317d4a419aa24f6fa9


export default class Map {
	constructor() {
		this.events = "Bodulus";
		this._listeners = new EventListener;
	}

	get listeners() {
		console.log("added map listener");
		return this._listeners;
	}

	printEvents() {
		return this.events;
	}

	handleMessage(message) {
		if (message.dest == Destination["MAP"]) {
			// if is true the map handle the message
			
			
		}
		//if not true the message dies off
	}
	
	//var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	
	var mymap = L.map('mapid').fitWorld();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xkYXZpZHMiLCJhIjoiY2p0cnVxMXJtMGxjbDQ0czBjMjNpMXY2bCJ9.GFLFPUNG28GNkO6IFN_2ew'
}).addTo(mymap);  

/*var map = L.map('mapid').fitWorld();

L.tileLayer('https://api.tiles.mapbox.com/v4/MapID/997/256/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: 'pk.eyJ1IjoiY2xkYXZpZHMiLCJhIjoiY2p0cnVxMXJtMGxjbDQ0czBjMjNpMXY2bCJ9.GFLFPUNG28GNkO6IFN_2ew'
	
}).addTo(map); */

mymap.locate({setView: true, maxZoom: 16}); 

//Adds a marker somewhere
var marker = L.marker([36.067833, -79.808292]).addTo(mymap);
var marker2 = L.marker([36.0589, -79.853804]).addTo(mymap);

//Sample, makes a pop up happen upon click
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker2.bindPopup("<form></form>").openPopup();

//Added some sample click to test Map Clicks
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

var searchLayer = L.layerGroup().addTo(map);
//... adding data in searchLayer ...
map.addControl( new L.Control.Search({layer: searchLayer}) );
//searchLayer is a L.LayerGroup contains searched markers





//Search Bar
$(document).ready(function () {
        
        /*var map = L.map('map').setView([51.505, -0.09], 5);
        map.zoomControl.setPosition('topright');
        map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {attribution:'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
            ));*/
	    
        var searchboxControl=createSearchboxControl();
        var control = new searchboxControl({
            sidebarTitleText: 'Header',
            sidebarMenuItems: {
                Items: [
                    { type: "link", name: "Link 1 (github.com)", href: "http://github.com", icon: "icon-local-carwash" },
                    { type: "link", name: "Link 2 (google.com)", href: "http://google.com", icon: "icon-cloudy" },
                    { type: "button", name: "Button 1", onclick: "alert('button 1 clicked !')", icon: "icon-potrait" },
                    { type: "button", name: "Button 2", onclick: "button2_click();", icon: "icon-local-dining" },
                    { type: "link", name: "Link 3 (stackoverflow.com)", href: 'http://stackoverflow.com', icon: "icon-bike" },
                ]
            }
        });
        control._searchfunctionCallBack = function (searchkeywords)
        {
            if (!searchkeywords) {
                searchkeywords = "The search call back is clicked !!"
            }
            alert(searchkeywords);
        }
        map.addControl(control);
    });
    
    function button2_click()
    {
        alert('button 2 clicked !!!');
    }
	
	

}
