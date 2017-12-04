$(function() {
   
            
            var chartProperties = {
                "caption": "Aircraft type and number of injuries",
        "subCaption": "Last year",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#FA8072,#FFA500,#BDB76B,#32CD32,#FF6347,#00CED1,#800000,#808000,#FF00FF,#000000,#C0C0C0",
        "bgColor": "#ffffff",
        "showBorder": "0",
        "use3DLighting": "0",
        "showShadow": "0",
        "enableSmartLabels": "0",
        "startingAngle": "0",
        "showPercentValues": "1",
        "showPercentInTooltip": "0",
        "decimals": "1",
        "captionFontSize": "14",
        "subcaptionFontSize": "14",
        "subcaptionFontBold": "0",
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "5",
        "showHoverEffect": "1",
        "showLegend": "1",
        "legendBgColor": "#ffffff",
        "legendBorderAlpha": "0",
        "legendShadow": "0",
        "legendItemFontSize": "10",
        "legendItemFontColor": "#666666",
        "useDataPlotColorForLabels": "1"
            };

            apiChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'minqtyChartContainer',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": [{"label":"Airplane","value":20473},{"label":"Gyroplane","value":21},{"label":"Glider","value":405},{"label":"Helicopter","value":2508},{"label":"Ultralight","value":32},{"label":"Powered Parachute","value":52},{"label":"Weight-Shift","value":75},{"label":"Balloon","value":182},{"label":"","value":56795},{"label":"Blimp","value":4},{"label":"Unknown","value":24},{"label":"Powered-Lift","value":6},{"label":"Gyrocraft","value":92},{"label":"Rocket","value":1}]
                }
            });
            apiChart.render();
       
       

            
});


