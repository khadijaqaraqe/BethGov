
$(document).ready(function () {

  google.charts.load("current", {
    packages: ["corechart"]
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var radio3 = document.getElementById("radio3");

    var radio1Value = radio1.value | 0;
    var radio2Value = radio2.value | 0;
    var radio3Value = radio3.value | 0;

     var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['راضٍ', radio1Value*1],
      ['مقبول', radio2Value*1],
      ['غير راضٍ', radio3Value*1]
    ]);

    var options = {
      'title': 'مدى الرضى',
      'width': '370',
      'height': '220'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

});

/* function renderChart() {
  var elements1 = document.getElementsByName("radio1");

  var avg = [];
  for (var i=0;i<elements1.length;i++) {
  	if(elements1[i].checked ){
			avg[i] = (parseFloat(elements1[i].value));
		}
    else {
    	avg[i] = 0;
    }
  }

	var dataPoints = [];
  for(var i=0; i<avg.length;i++){
  	dataPoints.push({y:avg[i], indexLabel:"{y}"});
  }
  var chart = new CanvasJS.Chart("chartContainer", {
  	title: {
    	text: "test"
    },
    data: [{
      type: "pie",
      dataPoints: dataPoints
    }]
  });

  chart.render();
} */
/*
function renderChart() {
  var elements1 = document.getElementsByName("exampleForm");
  var avg = [];
  for(var i=0;i<elements1.length;i++){
  	if(elements1[i].checked ) {
			avg[i] = (parseFloat(elements1[i].value));
		}
    else if(elements1[i].checked) {
			avg[i] = (parseFloat(elements1[i].value));
    }
    else {
    	avg[i] = 0;
    }
  }

	var dataPoints = [];
  for(var i=0; i<avg.length;i++){
  	dataPoints.push({y:avg[i], indexLabel:"{y}"});
  }
  var chart = new CanvasJS.Chart("chartContainer", {
  	title: {
    	text: "Pie Chart from Form Data"
    },
    data: [{
      type: "pie",
      dataPoints: dataPoints
    }]
  }); */
 /*  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options); */
/*
  chart.render();
}
 */
