$(function() {
    $.ajax({

        url: 'http://bse-dnn/Buckles-Stash/chart_data_userpoints.php',
        type: 'GET',
        success: function(data) {
            chartData = data;
            
            apiChart = new FusionCharts({
                type: 'angulargauge',
                renderAt: 'voltmeterChartContainer',
                width: '250',
                height: '75',
                dataFormat: 'json',
                dataSource: {
                     "chart": {
                    "theme": "fint",
                    "showValue": "1",
                    "manageResize": "1",
                    "showTickMarks": "0",
                    "showTickValues": "0",
                    "autoScale":"1",
                    "bgAlpha":"0",
                    "canvasBgAlpha":"0",
                    "showBorder":"0"
                    },
                    "colorRange": {
                        "color": [
                            {
                                "minValue": "0",
                                "maxValue": chartData,
                                "code": "#6baa01"
                            },
                            
                            {
                                "minValue": chartData,
                                "maxValue": "501",
                                "code": "#D3D3D3"

                            }
                        ]
                    },
                    "dials": {
                        "dial": [
                            {
                                "value": chartData
                            }
                        ]
                    }
                }
            });
            apiChart.render();
        }
    });
});