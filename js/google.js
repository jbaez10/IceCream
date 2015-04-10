var NewYork=new google.maps.LatLng(40.714406, -74.006487);
var Italy=new google.maps.LatLng(43.772025, 11.253893);
var Japan=new google.maps.LatLng(36.166621, 138.531830);
var Pakistan=new google.maps.LatLng(30.360966, 69.330323);
var Philippines=new google.maps.LatLng(15.127685, 121.149586);
var Turkey=new google.maps.LatLng(39.425654, 35.681029);

function initialize() {
	var mapProp = {
	  center: NewYork,
	  zoom:4,
	  minZoom:4,
	  maxZoom:9,
	  icon: "../img/three_New.png",
	  keyboardShortcuts:false,
	  scaleControl:false,
	  disableDefaultUI:true, 
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	  };

	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	// ------- MARKERS
	var nymarker = new google.maps.Marker({
	  position: NewYork,
	  title:'Click to zoom'
	  });

		nymarker.setMap(map);
			// Zoom to 9 when clicking on Marker
		google.maps.event.addListener(nymarker,'click',function() {
	  		//map.setZoom(9);
	  		map.setCenter(nymarker.getPosition());
	  	});

	  	var nyinfo = new google.maps.InfoWindow({
  		content:"America: Ice Cream!"
  		});

  		google.maps.event.addListener(nymarker, 'mouseover', function() {
  		nyinfo.open(map,nymarker);
  		});

  		google.maps.event.addListener(nymarker, 'mouseout', function() {
  		nyinfo.close(map,nymarker);
  		});



	var italymarker = new google.maps.Marker({
	  position: Italy,
	  title:'Click to zoom'
	  });

		italymarker.setMap(map);

		google.maps.event.addListener(italymarker,'click',function() {
	  		map.setCenter(italymarker.getPosition());
	  	});

	  	var italyinfo = new google.maps.InfoWindow({
	  		content:"Italy: Gelato!"
  		});

  		google.maps.event.addListener(italymarker, 'mouseover', function() {
  			italyinfo.open(map,italymarker);
  		});

  		google.maps.event.addListener(italymarker, 'mouseout', function() {
  			italyinfo.close(map,italymarker);
  		});


	var japanmarker = new google.maps.Marker({
	  position: Japan,
	  title:'Click to zoom'
	  });

		japanmarker.setMap(map);

		google.maps.event.addListener(japanmarker,'click',function() {
		  	map.setCenter(japanmarker.getPosition());
	  	});

	  	var japaninfo = new google.maps.InfoWindow({
  			content:"Japan: Mochi!"
  		});

  		google.maps.event.addListener(japanmarker, 'mouseover', function() {
  			japaninfo.open(map,japanmarker);
  		});

  		google.maps.event.addListener(japanmarker, 'mouseout', function() {
  			japaninfo.close(map,japanmarker);
  		});

	var pakistanmarker = new google.maps.Marker({
	  position: Pakistan,
	  title:'Click to zoom'
	  });

		pakistanmarker.setMap(map);

		google.maps.event.addListener(pakistanmarker,'click',function() {
		  	map.setCenter(pakistanmarker.getPosition());
	  	});

		var pakistaninfo = new google.maps.InfoWindow({
  			content:"Pakistan: OMORE!"
  		});

		google.maps.event.addListener(pakistanmarker, 'mouseover', function() {
  			pakistaninfo.open(map,pakistanmarker);
  		});

  		google.maps.event.addListener(pakistanmarker, 'mouseout', function() {
  			pakistaninfo.close(map,pakistanmarker);
  		});

	var philippinesmarker = new google.maps.Marker({
	  position: Philippines,
	  title:'Click to zoom'
	  });

		philippinesmarker.setMap(map);

		google.maps.event.addListener(philippinesmarker,'click',function() {
		  	map.setCenter(philippinesmarker.getPosition());
	  	});

		var philippinesinfo = new google.maps.InfoWindow({
  			content:"Philippines: Sorbetes!"
  		});

		google.maps.event.addListener(philippinesmarker, 'mouseover', function() {
  			philippinesinfo.open(map,philippinesmarker);
  		});

  		google.maps.event.addListener(philippinesmarker, 'mouseout', function() {
  			philippinesinfo.close(map,philippinesmarker);
  		});

	var turkeymarker = new google.maps.Marker({
	  position: Turkey,
	  title:'Click to zoom'
	  });

		turkeymarker.setMap(map);

		google.maps.event.addListener(turkeymarker,'click',function() {
		  	map.setCenter(turkeymarker.getPosition());
	  	});

		var turkeyinfo = new google.maps.InfoWindow({
  			content:"Turkey: Dondurma!"
  		});

		google.maps.event.addListener(turkeymarker, 'mouseover', function() {
  			turkeyinfo.open(map,turkeymarker);
  		});

		google.maps.event.addListener(turkeymarker, 'mouseout', function() {
  			turkeyinfo.close(map,turkeymarker);
  		});



}
google.maps.event.addDomListener(window, 'load', initialize);
  

  // animation:google.maps.Animation.BOUNCE
  // icon: "three_New.png"