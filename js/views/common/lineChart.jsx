import React, { Component } from 'react'
import Amcharts from "exports?window.AmCharts!amcharts3";
import "exports?window.AmSerialChart!amcharts3/amcharts/serial";
// Add charts as required, this is the AmSerialChart...
// import "exports?window.AmSerialChart!amcharts3/amcharts/serial";
import configChart from './lineChart/multipleCharts.config'

function zoomChart(chart){
  chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}


function generateChartData() {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 1000);

  for (var i = 0; i < 500; i++) {
    var newDate = new Date(firstDate);
    newDate.setMinutes(newDate.getMinutes() + i);

    var visits = Math.round(Math.sin(i * 5) * i);
    var hits = Math.round(Math.random() * 80) + 200 + i * 3;
    var views = Math.round(Math.random() * 100) + i * 4;
    
    chartData.push({
      date: newDate,
      visits: visits,
      hits: hits,
      views: views
    });
  }
  return chartData;
}

class LineChart extends Component {
  
  constructor(props){
    super(props)
  } 
  
  getData() {
    //if (typeof this.props.patientShifts == "undefined"){
    //  return [];
    //}
    return generateChartData()
  }

  renderChart(){
   
    const data = this.getData()
    if (typeof data == "undefined" || data.length == 0) {
      return
    }
  
    let graphLines = []
    const length = Object.keys(data.pop()).length 

    for (var i = 1; i < length; i++) {
      const title = Object.keys(data.pop())[i]
      const d = {
        "valueAxis": "v" + i,
        "lineColor": '#' + (Math.random()*0xFFFFFF<<0).toString(16) ,
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": title,
        "valueField": title,
	      "fillAlphas": 0
      }
      graphLines.push(d)
    }
    
    const chart = AmCharts.makeChart("chartdiv",
      Object.assign(configChart, {
        "dataProvider": data, 
        "graphs": graphLines 
      })
    )
    
    chart.addListener("dataUpdated", zoomChart(chart));
  
  }

  componentDidMount(){
    this.renderChart() 
  }

  render(){
    return (
     <div>
       <h5 className="card__title">HEALTH DATA</h5>
       <div id="chartdiv"></div>
     </div>
    )
  }
}

export default LineChart
