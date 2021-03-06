window.onload = function(){
			
		var chart = Highcharts.chart('container', {
		title: {
			text: '访问数'
		},
		
		yAxis: {
			title: {
				text: '访问数'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle'
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 2012
			}
		},
		series: [{
			name: '访问数',
			data: [4334, 5250, 5717, 6958, 9731, 11931, 13133, 15475]
		}],
		responsive: {
			rules: [{
				condition: {
					// maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}
	});
	var chart1 = Highcharts.chart('container1', {
	chart: {
		type: 'column'
	},
	title: {
		text: 'visitors'
	},
	
	xAxis: {
		type: 'category',
		labels: {
			rotation: -45  // 设置轴标签旋转角度
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: '人数'
		}
	},
	legend: {
		enabled: false
	},
	
	series: [{
		name: 'vistors',
		data: [
			[2425],
			[2350],
			[2151],
			[1678],
			[1606],
			[1520],
			[1416],
			[1851],
			[2308],
			
			[8.87]
		],
		dataLabels: {
			enabled: true,
			rotation: -90,
			color: '#FFFFFF',
			align: 'right',
			// format: '{point.y:.1f}', // :.1f 为保留 1 位小数
			y: 10
		}
	}]
});
	var chart2 = Highcharts.chart('container2', {
	title: {
		text: 'more vistors',
		align: 'center',
		verticalAlign: 'middle',
		y: 50
	},
	
	plotOptions: {
		pie: {
			// dataLabels: {
			// 	enabled: true,
			// 	distance: -50,
			// 	style: {
			// 		fontWeight: 'bold',
			// 		color: 'white',
			// 		textShadow: '0px 1px 2px black'
			// 	}
			// },
			startAngle: -90, // 圆环的开始角度
			endAngle: 90,    // 圆环的结束角度
			center: ['50%', '75%']
		}
	},
	series: [{
		type: 'pie',
		
		innerSize: '50%',
		data: [
			['2010',1262],
			['2012',5845],
			['2014',7968],
			['2016',11128],
			['2018',22185],
			
			{
				name: '其他',
				y: 0.7,
				dataLabels: {
					// 数据比较少，没有空间显示数据标签，所以将其关闭
					enabled: false
				}
			}
		]
	}]
});
	
}
