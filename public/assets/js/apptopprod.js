$(function() {
  
            var chartProperties = {
                "caption": "Number of engines and accidents",
                "xAxisName": "Number of Engine",
                "yAxisName": "Accidents",
                "lineThickness": "2",
                "paletteColors": "#0075c2",
                "baseFontColor": "#333333",
                "baseFont": "Helvetica Neue,Arial",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "showBorder": "0",
                "bgColor": "#ffffff",
                "showShadow": "0",
                "canvasBgColor": "#ffffff",
                "canvasBorderAlpha": "0",
                "divlineAlpha": "100",
                "divlineColor": "#999999",
                "divlineThickness": "1",
                "divLineDashed": "1",
                "divLineDashLen": "1",
                "showXAxisLine": "1",
                "xAxisLineThickness": "1",
                "xAxisLineColor": "#999999",
                "showAlternateHGridColor": "0"
            };

            apiChart = new FusionCharts({
                type: 'column2d',
                renderAt: 'topprodChartContainer',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": [{"label":"0","value":1155},{"label":"1","value":64116},{"label":"2","value":10203},{"label":"3","value":479},{"label":"4","value":417}],
                    "trendlines": [
                        {
                            "line": [
                                {
                                    "startvalue": "18500",
                                    "color": "#1aaf5d",
                                    "displayvalue": "Average{br}accidents",
                                    "valueOnRight": "1",
                                    "thickness": "2"
                                }
                            ]
                        }
                    ]
                }
            });
            apiChart.render();
});