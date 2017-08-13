/*
 * Parse the data and create a graph with the data */
 
function parseData(createGraph) {
	Papa.parse("../data/sample_data.csv", {
		download: true,
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var RetentionTime = [];
	var Intensity = ["Intensity"];

	for (var i = 0; i < data.length-1; i++) {
		RetentionTime.push(data[i][0]);
		Intensity.push(data[i ][1]);
	}

	console.log(RetentionTime);
	console.log(Intensity);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	Intensity
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: RetentionTime,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);
