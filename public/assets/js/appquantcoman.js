$(function() {

      
            var chartProperties = {
                

                "caption": "Purpose of flight and number of injuries",
                "paletteColors": "#0075c2,#1aaf5d,#f45b00,#8e0000,#f2c500,#FF69B4,#A2EA24,#1644C1,#D69B2A,#126705,#800080",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "useDataPlotColorForLabels": "1"

            };

            apiChart = new FusionCharts({
                type: 'pie2d',
                renderAt: 'comanquantChartContainer',
                width: '100%',
                height: '650',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": [{"label":"Personal","value":45297},{"label":"Instructional","value":9648},{"label":"Aerial Application","value":4432},{"label":"","value":4156},{"label":"Flight Test","value":331},{"label":"Air Race/Show","value":153},{"label":"Business","value":3899},{"label":"Aerial Observation","value":684},{"label":"Unknown","value":6780},{"label":"Public Aircraft - Local","value":61},{"label":"Other Work Use","value":1130},{"label":"Banner Tow","value":85},{"label":"Public Aircraft - Federal","value":93},{"label":"Public Aircraft - State","value":64},{"label":"External Load","value":88},{"label":"Firefighting","value":24},{"label":"Skydiving","value":161},{"label":"Ferry","value":779},{"label":"Public Aircraft","value":709},{"label":"Positioning","value":1524},{"label":"Glider Tow","value":44},{"label":"Air Drop","value":11},{"label":"Executive/Corporate","value":517}]
                }
            });
            apiChart.render();
       
});