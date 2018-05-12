$(function() {
    $(".recycle_box").click(function(){
        var css = $(this).find(".box_content").attr("class");

        if(css =="box_content row"){
            $(this).find(".box_content").addClass("box_content_open");
        }else{
            $(this).find(".box_content").removeClass("box_content_open");
        }

    });

    $("#card1").click(function(){
	    $("#chart1").css("height","100%");
	    $("#chart1").css("opacity","1");
  	});

  	$("#card2").click(function(){
	    $("#chart2").css("height","100%");
	    $("#chart2").css("opacity","1");
  	});

  	$("#card3").click(function(){
	    $("#chart3").css("height","100%");
	    $("#chart3").css("opacity","1");
  	});

  	$(".close_button").click(function(){
  		var chart = $(this).parent().parent();
	    chart.css("opacity","0");
	    chart.css("height","0");
  	});

    //charts
    Highcharts.chart('chartcontainer1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'how much trash you generate every day?'
        },
        subtitle: {
            text:'The average American produced 4.5 pounds of garbage every day. - 2017'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Items',
            colorByPoint: true,
            data: [{
                name: 'Paper, paperboard products',
                y:31,
                sliced: true,
                selected: true
            }, {
                name: 'Yard trimmings',
                y: 14
            }, {
                name: 'Food waste',
                y: 13
            }, {
                name: 'Plastic',
                y:12
            }, {
                name: 'Metals',
                y: 8
            }, {
                name: 'Wood',
                y: 7
            }, {
                name: '',
                y: 5
            }, {
                name: '',
                y: 5
            }, {
                name: '',
                y: 3
            }]
        }]
    });
    Highcharts.chart('chartcontainer2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'How much do we recycle?'
        },
        subtitle: {
            text: 'we currently recycle somewhere between 30–90 percent of the various different materials we use, and we can do better  - 2017'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        },

        "series": [
            {
                "name": "Browsers",
                "colorByPoint": true,
                "data": [
                    {
                        "name": "Steel(cars)",
                        "y": 85,
                        "drilldown": "Steel(cars)"
                    },
                    {
                        "name": "Steel(appliances)",
                        "y": 82,
                        "drilldown": "Steel(appliances)"
                    },
                    {
                        "name": "Steel(cans)",
                        "y": 70,
                        "drilldown": "Steel(cans)"
                    },
                    {
                        "name": "Aluminum(total)",
                        "y": 30,
                        "drilldown": "Aluminum(total)"
                    },
                    {
                        "name": "Aluminum(cans)",
                        "y": 67,
                        "drilldown": "Aluminum(cans)"
                    },
                    {
                        "name": "Paper&Paperboard",
                        "y": 63,
                        "drilldown": "Paper&Paperboard"
                    },
                    {
                        "name": "Newspaper",
                        "y": 67,
                        "drilldown": "Newspaper"
                    },
                    {
                        "name": "Corrugated cardboard",
                        "y": 89,
                        "drilldown": "Corrugated cardboard"
                    },
                    {
                        "name": "Glass bottles & jars",
                        "y": 34,
                        "drilldown": "Glass bottles & jars"
                    },
                    {
                        "name": "Rubber tires",
                        "y": 88,
                        "drilldown": "Rubber tires"
                    },
                    {
                        "name": "Plastic bottles",
                        "y": 32,
                        "drilldown": "Plastic bottles"
                    }
                ]
            }
        ],
        "drilldown": {
            "series": [
                {
                    "name": "Chrome",
                    "id": "Chrome",
                    "data": [
                        [
                            "v65.0",
                            0.1
                        ],
                        [
                            "v64.0",
                            1.3
                        ],
                        [
                            "v63.0",
                            53.02
                        ],
                        [
                            "v62.0",
                            1.4
                        ],
                        [
                            "v61.0",
                            0.88
                        ],
                        [
                            "v60.0",
                            0.56
                        ],
                        [
                            "v59.0",
                            0.45
                        ],
                        [
                            "v58.0",
                            0.49
                        ],
                        [
                            "v57.0",
                            0.32
                        ],
                        [
                            "v56.0",
                            0.29
                        ],
                        [
                            "v55.0",
                            0.79
                        ],
                        [
                            "v54.0",
                            0.18
                        ],
                        [
                            "v51.0",
                            0.13
                        ],
                        [
                            "v49.0",
                            2.16
                        ],
                        [
                            "v48.0",
                            0.13
                        ],
                        [
                            "v47.0",
                            0.11
                        ],
                        [
                            "v43.0",
                            0.17
                        ],
                        [
                            "v29.0",
                            0.26
                        ]
                    ]
                },
                {
                    "name": "Firefox",
                    "id": "Firefox",
                    "data": [
                        [
                            "v58.0",
                            1.02
                        ],
                        [
                            "v57.0",
                            7.36
                        ],
                        [
                            "v56.0",
                            0.35
                        ],
                        [
                            "v55.0",
                            0.11
                        ],
                        [
                            "v54.0",
                            0.1
                        ],
                        [
                            "v52.0",
                            0.95
                        ],
                        [
                            "v51.0",
                            0.15
                        ],
                        [
                            "v50.0",
                            0.1
                        ],
                        [
                            "v48.0",
                            0.31
                        ],
                        [
                            "v47.0",
                            0.12
                        ]
                    ]
                },
                {
                    "name": "Internet Explorer",
                    "id": "Internet Explorer",
                    "data": [
                        [
                            "v11.0",
                            6.2
                        ],
                        [
                            "v10.0",
                            0.29
                        ],
                        [
                            "v9.0",
                            0.27
                        ],
                        [
                            "v8.0",
                            0.47
                        ]
                    ]
                },
                {
                    "name": "Safari",
                    "id": "Safari",
                    "data": [
                        [
                            "v11.0",
                            3.39
                        ],
                        [
                            "v10.1",
                            0.96
                        ],
                        [
                            "v10.0",
                            0.36
                        ],
                        [
                            "v9.1",
                            0.54
                        ],
                        [
                            "v9.0",
                            0.13
                        ],
                        [
                            "v5.1",
                            0.2
                        ]
                    ]
                },
                {
                    "name": "Edge",
                    "id": "Edge",
                    "data": [
                        [
                            "v16",
                            2.6
                        ],
                        [
                            "v15",
                            0.92
                        ],
                        [
                            "v14",
                            0.4
                        ],
                        [
                            "v13",
                            0.1
                        ]
                    ]
                },
                {
                    "name": "Opera",
                    "id": "Opera",
                    "data": [
                        [
                            "v50.0",
                            0.96
                        ],
                        [
                            "v49.0",
                            0.82
                        ],
                        [
                            "v12.1",
                            0.14
                        ]
                    ]
                }
            ]
        }
    });
	Highcharts.chart('chartcontainer3', {
        chart: {
            type: 'line'
        },
        title: {
            text: ' How much money can be saved by recycling?'
        },
        subtitle: {
            text: 'Recycling contributes to the financial savings that offsets spending on the plants of environmental and safety efforts. - 2017'
        },
        xAxis: {
            categories: ['2006','2007','2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
        },
        yAxis: [{
            title:{
                text:'Financial Savings (Million US$)'
            },
            opposite: false// set right side title
        }],
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'New York',
            data: [4.0, 6.2, 7.5, 14.5, 18.4, 18.3, 13.9, 13.6, 21.5, 22.2, 23.5, 21.3]
        }, {
            name: 'London',
            data: [5.8,6.9, 9.7, 8.5, 11.9, 15.2, 13.3, 14.6, 13.8, 17.0, 16.6, 17.2]
        }]
    });

});