function GenerateMap(VID) {

	$.getJSON('https://app.statuscake.com/Workfloor/PerformanceCountry.php?VID=' + VID + '&callback=?', function(data) {

		var map = $('#map').vectorMap(
			{
			map: 'world_mill_en',
			backgroundColor: '#fff',
			normalizeFunction: 'polynomial',
			regionStyle: {
					  initial: {
					    fill: '#ededed',
					    "fill-opacity": 1,
					    stroke: 'none',
					    "stroke-width": 0,
					    "stroke-opacity": 1
					  },
					  hover: {
					  	fill: '#dfea62',
					    "fill-opacity": 0.8
					  },
					  selected: {
					    fill: 'yellow'
					  },
					  selectedHover: {
					  }
					},

			 series: {
					      regions: [{
					        values: data,
					        min: 0,
        				    max: 30000,
					        scale: ['#74c800', '#e14c16'],
					        normalizeFunction: 'polynomial'
					      }]
			 }

			}
		);

	}); 
}
