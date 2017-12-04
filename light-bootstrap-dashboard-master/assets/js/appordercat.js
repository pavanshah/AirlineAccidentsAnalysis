$(function() {
   
            var chartProperties = {
                

                "caption": "Engine type and number of accidents",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#FF6347",
                "bgColor": "#ffffff",
                "decimals": "1",
                "showBorder": "0",
                "isHollow": "1",
                "labelDistance": "15",
                "is2D": "1",
                "plotTooltext": "Success : $percentOfPrevValue",
                "showPercentValues": "1"
            };

            apiChart = new FusionCharts({
                type: 'funnel',
                renderAt: 'catorderChartContainer',
                width: '100%',
                height: '350',
                dataFormat: 'json',
                dataSource: {
                    "chart": chartProperties,
                    "data": [{"label":"Reciprocating","value":3000},{"label":"","value":3717},{"label":"Turbo Prop","value":3122},{"label":"Turbo Shaft","value":3359},{"label":"Turbo Fan","value":2270},{"label":"Turbo Jet","value":683},{"label":"Electric","value":3},{"label":"Hybrid Rocket","value":1}]
                }
            });
            apiChart.render();
       
});