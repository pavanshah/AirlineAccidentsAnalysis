$(function() {
    $.ajax({

        url: 'http://bse-dnn/Buckles-Stash/chart_data.php',
        type: 'GET',
        success: function(data) {
            chartData = data;
            var chartProperties = {
                "caption": "Users with highest orders",
                "xAxisName": "Users",
                "yAxisName": "Orders",
                "rotatevalues": "1",
                "theme": "zune",
                "canvasBgColor":"#98FB98",
                "paletteColors":"#2E8B57",
                "xAxisNameFontSize":"15",
                "yAxisNameFontSize":"15"
            };

            apiChart = new FusionCharts({
                type: 'column2d',
                renderAt: 'chartContainer',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": chartData
                }
            });
            apiChart.render();
        }
    });
});

 