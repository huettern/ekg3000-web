var data = [
  // The first series
  {
    label: "Series 1",
    values: [ {x: 0, y: 1}, {x: 5, y: 2} ]
  }
];

var Chartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "EKG Patien",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};

var data2 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
var data3 = {
            labels: [1,2,3,4],
            datasets: [
                {
                    data: [1, 6, 3, 6],
                    lineTension: 0
                }
            ]
        };

var realdata = {
  // The first series
  datasets: [
    {
        label: "ECG Data",
        data: [1,2,3,4,5]
    }
  ]
};

var parts = [];
var file = new File(
    parts,
    "asdf.txt"
);

var config = {
    delimiter: ","
};
Papa.parse(file, {
    config,
    complete: function(results) {
        console.log(results);
    }
});



var myLineChart = $('#lineChart').epoch({
    type: 'line',
    data: data,
    axes: ['left', 'bottom'],
    ticks: { top: 10, right: 5, bottom: 20, left: 5 },
    range: [-1, 2]
});




// var chartChart = new Chart(document.getElementById("chartChart"), {
//     type: 'line',
//     data: data
// });


window.onload = function() {
            var ctx = document.getElementById("chartChart").getContext("2d");
            window.myLine = new Chart(ctx, {
			    type: 'line',	
			    data: data3,
			    onAnimationComplete: function () {
	                var sourceCanvas = this.chart.ctx.canvas;
	                var copyWidth = this.scale.xScalePaddingLeft - 5;
	                // the +5 is so that the bottommost y axis label is not clipped off
	                // we could factor this in using measureText if we wanted to be generic
	                var copyHeight = this.scale.endPoint + 5;
	                var targetCtx = document.getElementById("myChartAxis").getContext("2d");
	                targetCtx.canvas.width = copyWidth;
	                targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth, copyHeight, 0, 0, copyWidth, copyHeight);
            	}
			});
        };









