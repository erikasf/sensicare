const config = {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    },
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "dataProvider": null,
    "graphs": null,
    "synchronizeGrid":true,
    "valueAxes": [{
        "id": "1",
        "axisColor": "#c7d4f2",
        "axisThickness": 10,
        "axisAlpha": 0.5,
        "position": "left"
    }],
    "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "red line",
        "valueField": "visits",
		"fillAlphas": 0
    }, {
        "valueAxis": "v2",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "red line",
        "valueField": "hits",
		"fillAlphas": 0
    }, {
        "valueAxis": "v3",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "red line",
        "valueField": "views",
		"fillAlphas": 0
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "minPeriod": "mm",
        "minorGridEnabled": true
    },
    "export": {
    	"enabled": true,
      "position": "bottom-right",
      "dateFormat": "YYYY-MM-DD HH:NN:SS"
    }
}

export default config 
