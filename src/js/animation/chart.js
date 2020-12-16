google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Sales', 'Expenses', 'Profit'],
    ['Month 1', 1000, 400, 200],
    ['Month 2', 1170, 460, 250],
    ['Month 3', 660, 1120, 300],
    ['Month 4', 930, 540, 350],
    ['Month 5', 530, 140, 360],
    ['Month 6', 300, 50, 30],
    ['Month 7', 1030, 540, 10],
    ['Month 8', 1030, 600, 30],
    ['Month 9', 100, 540, 450],
  ]);

  var options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2020',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}