

function pageLoad (){
//  containerList = new Array();
 containerList = ['containerADMIN','containerCMG','containerFINANCE','containerIT','containerLnD','containerLEGAL'
     , 'containerPEOPLE_SERVICE', 'containerRMG', 'containerSALES', 'containerTRAVEL', 'containerModal']
        
 
 containerList.forEach(_container => {
     
     configureMeterContainer(_container, _container.replace('container', '').replace('_', ' ').replace('Modal', ' '));      
 });
 
}

function configureMeterContainer(containerID,titleText){
  Highcharts.chart(containerID, {

    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
  
    title: {
      text: titleText
    },
  
    pane: {
      startAngle: -100,
      endAngle: 100,
      background: [{
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#FFF'],
            [1, '#333']
          ]
        },
        borderWidth: 0,
        outerRadius: '109%'
      }, {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#333'],
            [1, '#FFF']
          ]
        },
        borderWidth: 1,
        outerRadius: '107%'
      }, {
        // default background
      }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }]
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
  
      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',
  
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: ''
      },
      plotBands: [{
        from: 0,
        to: 50,
        color: '#55BF3B' // green
      }, {
        from: 50,
        to: 80,
        color: '#DDDF0D' // yellow
      }, {
        from: 80,
        to: 100,
        color: '#DF5353' // red
      }]
    },
  
    series: [{
      name: 'Speed',
      data: [50],
      tooltip: {
        valueSuffix: ' '+titleText
      }
    }]
  
  },
  // Add some life
  function (chart) {
    // if (!chart.renderer.forExport) {
    //   setInterval(function () {
    //     var point = chart.series[0].points[0],
    //       newVal,
    //       inc = Math.round((Math.random() - 0.5) * 20);
  
    //     newVal = point.y + inc;
    //     if (newVal < 0 || newVal > 100) {
    //       newVal = point.y - inc;
    //     }
  
    //     point.update(newVal);
  
    //   }, 5000);
    // }
  });
}
