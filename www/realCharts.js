$(function () {
    $(document).ready(function () {	

        var initialData=[];
	
		
		getVariableX = function(){
			var aaa= JSON.parse(dataFromServer);
			return parseInt(aaa.X)};
		
		getVariableY = function(){
			var bbb = JSON.parse(dataFromServer);
			return parseInt(bbb.Y)};
	
	
        Highcharts.setOptions({
            global: {
                useUTC: false,
				pointStart:0
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var series = this.series[0];
                        setInterval(function () { 
                            series.addPoint([getVariableX(),getVariableY()], true, false);
                        }, 3000);
                    }
                }
            },
            title: {
                text: 'Live data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150		
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
				
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        'X: '+Highcharts.numberFormat(this.x,2) + '<br/>' +
                        'Y: '+Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
			
      series: [{
                name: 'data',
                data: (function () {
                    // generate an array of data for initial setup
                            initialData.push({                          
                                x: getVariableX(),
                                y: getVariableY()
                            });
                        
                    return initialData;
                }())
            }]
        });
    });
});
