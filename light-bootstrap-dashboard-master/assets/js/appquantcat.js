$(function() {
            var chartProperties = {
                

                "caption": "Broad phase of flight and number of injuries",
                "paletteColors": "#0075c2",
                "lineColor": "#1aaf5d",
                "xAxisName": "Reported Cause",
                "pYAxisName": "No. of Occurrence",
                "sYAxisname": "Cumulative Percentage",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "showCanvasBorder": "0",
                "showHoverEffect": "1",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "showValues": "0",
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14"
            };

            apiChart = new FusionCharts({
                type: 'pareto2d',
                renderAt: 'catquantChartContainer',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": [{"label":"","value":6298},{"label":"LANDING","value":19557},{"label":"MANEUVERING","value":9981},{"label":"TAKEOFF","value":15527},{"label":"APPROACH","value":7843},{"label":"TAXI","value":2362},{"label":"CRUISE","value":10836},{"label":"STANDING","value":1245},{"label":"CLIMB","value":2301},{"label":"GO-AROUND","value":1630},{"label":"DESCENT","value":2230},{"label":"UNKNOWN","value":698},{"label":"OTHER","value":162}]
                }
            });
            apiChart.render();
       
});