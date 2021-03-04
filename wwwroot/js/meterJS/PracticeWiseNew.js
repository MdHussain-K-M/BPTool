        var practice;
        var practicename;
        var process;
        var processname;
        var account;
        var accountname;
        var compliancePracticeValue;
        var complianceAccountValue;
        var val;
        var period1= 1;
        var period2= 2;
        var period3= 3;
        var accperiod1;
        var accperiod2;
        var accperiod3;
        var procperiod1;
        var procperiod2;
        var procperiod3;
        var totalpeiod;
        var compliance1;
        var compliance2;
        var compliance3;
        var practice1;
        var allperiod = []; 
        var processValue;
        var procAccountName;
        var excelProcessData;
        var empCode;
        var practiceAccessRights=[];
        var accountAccessRights=[];
        var practicePeriod;
        var accountPeriod;
        var pra1,pra2,pra3,pra4,pra5,pra6,pra7,pra8,pra9,pra10;
        var datt;
        var avgchartval1,avgchartval2,avgchartval3;
        var processdata;
/*
        var gaugeOptions = {     
            chart: {
                type: 'solidgauge'
            },
            title: null,     
            pane: { 
                center: ['50%', '85%'],         
                size: '140%',         
                startAngle: -90,         
                endAngle: 90,        
                background: {  
                    backgroundColor: '#EEE',     
                    innerRadius: '60%',         
                    outerRadius: '100%',            
                    shape: 'arc'         }  
            },  
            exporting: {      
                enabled: false     },  
            tooltip: {   
                enabled: false     },   
            // the value axis    
            yAxis: {   
                stops: [ [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow  
                    [0.9, '#DF5353'] // red  
                ], lineWidth: 0, tickWidth: 0, minorTickInterval: null,
                tickAmount: 2, title: { y: -70 }, labels: { y: 16 }
            }, plotOptions: { solidgauge: { dataLabels: { y: 5, borderWidth: 0, useHTML: true } } }
        };
        // The speed gauge
        var chartSpeed = Highcharts.chart('chart-container-samp', Highcharts.merge(gaugeOptions,
            {
                yAxis: {
                    min: 0, max: 200, title: { text: 'Speed' }
                }, credits: { enabled: false },
                series: [
                    {
                        name: 'Speed', data: [80],
                        dataLabels:
                            {
                                format: '<div style="text-align:center">' +
                                  '<span style="font-size:25px">{y}</span><br/>' +
                                  '<span style="font-size:12px;opacity:0.4">km/h</span>' + '</div>'
                            }, tooltip: { valueSuffix: ' km/h' }
                    }]
            }));
        // The RPM gauge
        var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions,
            {
                yAxis: {
                    min: 0, max: 5, title: { text: 'RPM' }
                }, series: [{
                    name: 'RPM', data: [1],
                    dataLabels: {
                        format: '<div style="text-align:center">' +
                            '<span style="font-size:25px">{y:.1f}</span><br/>' +
                            '<span style="font-size:12px;opacity:0.4">' +
                            '* 1000 / min' + '</span>' + '</div>'
                    }, tooltip: { valueSuffix: ' revolutions/min' }
                }]
            })); // Bring life to the dials 
        setInterval(function () {     
            // Speed     
            var point, newVal,inc;
            if (chartSpeed) {     
                point = chartSpeed.series[0].points[0];  
                inc = Math.round((Math.random() - 0.5) * 100);     
                newVal = point.y + inc;     
                if (newVal < 0 || newVal > 200) {  
                    newVal = point.y - inc;        
                }        
                point.update(newVal);     }  
            // RPM   
            if (chartRpm) {
                point = chartRpm.series[0].points[0];
                inc = Math.random() - 0.5;
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 5) {
                    newVal = point.y - inc;
                } point.update(newVal);
            }
        }, 2000);*/

  function LoginInstructions()
  {
   var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome== true)
    {
    document.getElementById('divLoginInstructions').style.height = '76%';
    document.getElementById('divImage').style.marginTop = '6.1%';
    document.getElementById('divResults').style.marginTop = '6.1%';
    }
    else
    {
    document.getElementById('divLoginInstructions').style.height = '74%';
    document.getElementById('divImage').style.marginTop = '6.1%';
    document.getElementById('divResults').style.marginTop = '5.7%';
    }
   document.getElementById('divLoginInstructions').style.display = 'block';
    document.getElementById ("divOrganization").style.display ="none";
    document.getElementById('divPractices').style.display  = 'none';
    document.getElementById('imgbtnProcess').style.display = 'none';
    document.getElementById('imgNextMonth').style.display = 'none';
    document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
    document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';  
  }
            
  function ExportExcel()
  {
   JSONToCSVConvertor(exportData,titleData,true);
  }
  
  function ExportExcelNew()
  {
//    var a = document.createElement('a');
//        //getting data from our div that contains the HTML table
//        var data_type = 'data:application/vnd.ms-excel';
//        var table_div = document.getElementById('divProcessData');
//        var table_html = table_div.outerHTML.replace(/ /g, '%20');
//        a.href = data_type + ', ' + table_html;
//        //setting the file name
//        a.download = 'exported_table.xls';
//        //triggering the function
//        a.click();
//        //just in case, prevent default behaviour
//        e.preventDefault();


    var tab_text="<table border='2px'><tr style='background-color:rgb(104, 70, 199);'>";
    var textRange; var j=0;
    tab = document.getElementById('tblPracticeAccountProcessWiseData'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Download.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);

  }
   //Chart Practice
     function OrgChart() 
     {
     document.getElementById('divLoading').style.display = 'block';
     var organization ;
     var monthnamealert= allperiod[period1-1];
     if(period1 <=totalperiod)
     {
      var mon = monthnamealert.substring(6, 4);
      var year = monthnamealert.substring(4,2);
       organization = MonthName(mon,year);   
     }
     
     $('#divOrganization').highcharts({
         chart: {
             type: 'gauge',
             plotBackgroundColor: null,
             plotBackgroundImage: null,
             plotBorderWidth: 0,
             plotShadow: false
         },

       /*  title: {
             text: 'ORGANIZATION COMPLIANCE' + organization
         },*/

         pane: {
             center: ['50%', '55%'],
             size: '75%',
             startAngle: -100,
             endAngle: 100,
             background: {
                 backgroundColor: '#aaaaaa',
                 innerRadius: '95%',
                 outerRadius: '100%',
                 shape: 'arc',
             },
         },
         /* pane: {
             startAngle: -100,
             endAngle: 150,
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
                 backgroundColor: '#3A77B2',
                 borderWidth: 0,
                 outerRadius: '105%',
                 innerRadius: '103%'
             }]
         },
         */
         // the value axis
         yAxis: {
             min: 0,
             max: 100,

             minorTickInterval: 'auto',
             minorTickWidth: 1,
             minorTickLength: 13,
             minorTickPosition: 'inside',
             minorTickColor: '#666',

             tickPixelInterval: 30,
             tickWidth: 2,
             tickPosition: 'inside',
             tickLength: 13,
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
                 to: 70,
                 color: '#B44B4B' // #B44B4B
             }, {
                 from: 70,
                 to: 85,
                 color: 'rgb(255, 192, 0)' // rgb(255, 192, 0)
             }, {
                 from: 85,
                 to: 100,
                 color: 'green' // green
             }]
         },

	    series: [{
	        name: organization,
	        data: [parseInt(datt)],
	        tooltip: {
	            valueSuffix: '100%'
	        }
	    }]
	
	}, function(){});

     var practicetext;
         
for (i = 0; i < 11; i++) { 
if(i==0)
{
comValue = practice1;
pra1 = practice1;
document.getElementById("spPractice1").innerHTML='ADMIN';
}
else if(i==1)
{
comValue = practice2;
pra2 = practice2;
document.getElementById("spPractice2").innerHTML ='CMG';
}
else if(i==2)
{
comValue = practice3;
pra3 = practice3;
document.getElementById("spPractice3").innerHTML = 'FINANCE';
}
else if(i==3)
{
comValue = practice4;
pra4 = practice4;
document.getElementById("spPractice4").innerHTML ='IT';
}
else if(i==4)
{
comValue = practice5;
pra5 = practice5;
document.getElementById("spPractice5").innerHTML ='L&D';
}
else if(i==5)
{
comValue = practice6;
pra6 = practice6;
document.getElementById("spPractice6").innerHTML ='LEGAL';
}
else if (i == 6) {
    comValue = practice7;
    pra7 = practice7;
    document.getElementById("spPractice7").innerHTML = 'PEOPLE SERVICE';
}
else if (i == 7) {
    comValue = practice8;
    pra8 = practice8;
    document.getElementById("spPractice8").innerHTML = 'RMG';
}
else if (i == 8) {
    comValue = practice9;
    pra9 = practice9;
    document.getElementById("spPractice9").innerHTML = 'SALES';
}
else if (i == 9) {
    comValue = practice10;
    pra10 = practice10;
    document.getElementById("spPractice10").innerHTML = 'TRAVEL';
}
PracticeWiseChart('divPractice' + (i + 1), comValue, practicetext);
} 
document.getElementById('divLoading').style.display = 'none';
}

//Chart Practice
function PracticeWiseChart(div,comValue,practicetext) 
{
     var organization ;
     var monthnamealert= allperiod[period1-1];
     if(period1 <=totalperiod)
     {
      var mon = monthnamealert.substring(6, 4);
      var year = monthnamealert.substring(4,2);
       organization = MonthName(mon,year);   
     }
     $('#' + div).highcharts({
         chart: {
             type: 'gauge',
             plotBackgroundColor: null,
             plotBackgroundImage: null,
             plotBorderWidth: 0,
             plotShadow: false
         },

        

         pane: {
             center: ['50%', '55%'],
             size: '75%',
             startAngle: -100,
             endAngle: 100,
             background: {
                 backgroundColor: '#aaaaaa',
                 innerRadius: '95%',
                 outerRadius: '100%',
                 shape: 'arc',
             },
         },
         /* pane: {
             startAngle: -100,
             endAngle: 150,
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
                 backgroundColor: '#3A77B2',
                 borderWidth: 0,
                 outerRadius: '105%',
                 innerRadius: '103%'
             }]
         },
         */

         // the value axis
         yAxis: {
             min: 0,
             max: 100,

             minorTickInterval: 'auto',
             minorTickWidth: 1,
             minorTickLength: 13,
             minorTickPosition: 'inside',
             minorTickColor: '#666',

             tickPixelInterval: 30,
             tickWidth: 2,
             tickPosition: 'inside',
             tickLength: 13,
             tickColor: '#666',
             labels: {
                 step: 2,
                 rotation: 'auto'
             },



             title:
                 {
                 text: '      ' + organization
             },
             plotBands: [{
                 from: 0,
                 to: 70,
                 color: '#B44B4B' // #B44B4B
             }, {
                 from: 70,
                 to: 85,
                 color: 'rgb(255, 192, 0)' // rgb(255, 192, 0)
             }, {
                 from: 85,
                 to: 100,
                 color: 'green' // green
             }]
         },


	    series: [{
	        name: organization,
	        data: [parseInt(comValue)],
	        tooltip: {
	            valueSuffix: ' %'
	        }
	    }]
	
}, 
function(){});
}

//Chart Account
 function BindChartPractice(value,practicename,period) {
     var organization;
     var monthnamealert= period;
     if(accperiod1 <=totalperiod)
     {
      var mon = monthnamealert.substring(6, 4);
      var year = monthnamealert.substring(4,2);
      organization = MonthName(mon,year);   
     }
     $('#divPracticeChart').highcharts({
         chart: {
             type: 'gauge',
             plotBackgroundColor: null,
             plotBackgroundImage: null,
             plotBorderWidth: 0,
             plotShadow: false
         },

         
         pane: {
             center: ['50%', '55%'],
             size: '75%',
             startAngle: -100,
             endAngle: 100,
             background: {
                 backgroundColor: '#aaaaaa',
                 innerRadius: '95%',
                 outerRadius: '100%',
                 shape: 'arc',
             },
         },
         /* pane: {
             startAngle: -100,
             endAngle: 150,
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
                 backgroundColor: '#3A77B2',
                 borderWidth: 0,
                 outerRadius: '105%',
                 innerRadius: '103%'
             }]
         },
         */

         // the value axis
         yAxis: {
             min: 0,
             max: 100,

             minorTickInterval: 'auto',
             minorTickWidth: 1,
             minorTickLength: 13,
             minorTickPosition: 'inside',
             minorTickColor: '#666',

             tickPixelInterval: 30,
             tickWidth: 2,
             tickPosition: 'inside',
             tickLength: 13,
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
                 to: 70,
                 color: '#B44B4B' // #B44B4B
             }, {
                 from: 70,
                 to: 85,
                 color: 'rgb(255, 192, 0)' // rgb(255, 192, 0)
             }, {
                 from: 85,
                 to: 100,
                 color: 'green' // green
             }]
         },

	    series: [{
	        name: practicename,
	        data: [value],
	        tooltip: {
	            valueSuffix: ' %'
	        }
	    }]
	
	}, function(){});
}

//Chart Account
function BindChartAccount(value,accountname,period) {
     var organization;
     var monthnamealert= period;
     if(procperiod1 <=totalperiod)
     {
      var mon = monthnamealert.substring(6, 4);
      var year = monthnamealert.substring(4,2);
      organization = MonthName(mon,year);   
     }
     $('#divAccountChart').highcharts({
         chart: {
             type: 'gauge',
             plotBackgroundColor: null,
             plotBackgroundImage: null,
             plotBorderWidth: 0,
             plotShadow: false
         },

         title: {
             text: ''
         },

         pane: {
             center: ['50%', '55%'],
             size: '75%',
             startAngle: -100,
             endAngle: 100,
             background: {
                 backgroundColor: '#aaaaaa',
                 innerRadius: '95%',
                 outerRadius: '100%',
                 shape: 'arc',
             },
         },
         /* pane: {
             startAngle: -100,
             endAngle: 150,
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
                 backgroundColor: '#3A77B2',
                 borderWidth: 0,
                 outerRadius: '105%',
                 innerRadius: '103%'
             }]
         },
         */
         // the value axis
         yAxis: {
             min: 0,
             max: 100,

             minorTickInterval: 'auto',
             minorTickWidth: 1,
             minorTickLength: 13,
             minorTickPosition: 'inside',
             minorTickColor: '#666',

             tickPixelInterval: 30,
             tickWidth: 2,
             tickPosition: 'inside',
             tickLength: 13,
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
                 to: 70,
                 color: '#B44B4B' // #B44B4B
             }, {
                 from: 70,
                 to: 85,
                 color: 'rgb(255, 192, 0)' // rgb(255, 192, 0)
             }, {
                 from: 85,
                 to: 100,
                 color: 'green' // green
             }]
         },

	
	    series: [{
	        name: accountname,
	        data: [value],
	        tooltip: {
	            valueSuffix: ' %'
	        }
	    }]
	
	}, function(){});
}

     //Audit Types
     function ATSuccess(data)
     {
        data=  $.parseJSON(data);
        $("#stAuditType").get(0).options.length = 0;
        $("#stAuditType").get(0).options[0] = new Option("..::Select Audit Types::..", "-1");         
        $.each(data,function(index,item){
        $("#stAuditType").get(0).options[$("#stAuditType").get(0).options.length] = new Option(item.AUDIT_TYPES, item.AUDIT_TYPES);
        });
     }
     
     function ATFailure()
     {
     alert('Audit Types failure');
     }
     
     function BindAuditTypes()
     {
     var tbl = document.getElementById('tblAuditTypeResults');
     if(tbl) tbl.parentNode.removeChild(tbl);
     WService.AuditTypes(ATSuccess,ATFailure);
     }
     
     //Bind Audit Type Results
     function ATRSuccess(data)
     {
     if(data !='[]')
     {
    data=  $.parseJSON(data);
  itemRow="<table id='tblAuditTypeResults' border='1' style='font-family: Verdana;border-collapse:collapse'>";  
 $.each(data,function(index,item){
  if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:white'><td style='color:black;width:10%;border:1px solid gray;'>No</td><td style='color:black;width:48%;border:1px solid gray;'>Audit Check Points</td><td style='color:black;width:13%;border:1px solid gray;'>Audit Date</td><td style='color:black;width:12%;border:1px solid gray;'>Status</td><td style='color:black;width:17%;border:1px solid gray;'>Audit By</td><td style='display:none;border:1px solid gray;'>Comments</td></tr>";
   }
   index= index+1;
 
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td style='border:1px solid gray;'>"+index+"</td><td style='text-align:left; padding-left:3%;border:1px solid gray;'>"+item.Action_Point+"</td><td style='border:1px solid gray;'>"+item.Audit_Date+"</td><td style='text-align:left; padding-left:3%;border:1px solid gray;'>"+item.status+"</td><td style='border:1px solid gray;'>"+item.Audit_By+"</td><td style='display:none;border:1px solid gray;'></td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td style='border:1px solid gray;'>"+index+"</td><td style='text-align:left; padding-left:3%;border:1px solid gray;'>"+item.Action_Point+"</td><td style='border:1px solid gray;'>"+item.Audit_Date+"</td><td style='text-align:left; padding-left:3%;border:1px solid gray;'>"+item.status+"</td><td style='border:1px solid gray;'>"+item.Audit_By+"</td><td style='display:none;1px solid gray'></td></tr>";
   }
  });        
 itemRow+="</table>";  
  }
 else
 {
 itemRow="<table id='tblAuditTypeResults' border='1' style='font-family: Verdana;border-collapse:collapse'>";  
 itemRow+="<tr style='background-color:white'><td style='border:1px solid gray;'> NA - Not Applicable. </td></tr>";
 itemRow+="</table>";  
 }

$("#divAuditTypeResults").html(itemRow);
 document.getElementById('divAuditReports').style.display = 'table-cell';
 document.getElementById('tblAuditTypeResults').style.margin ='0 auto';
 document.getElementById('tblAuditTypeResults').style.marginTop ='4%';
 document.getElementById('tblAuditTypeResults').style.fontFamily ='Calibri';
 document.getElementById('tblAuditTypeResults').style.fontSize ='larger';
 document.getElementById('tblAuditTypeResults').style.textAlign ='center';
 document.getElementById('tblAuditTypeResults').style.width = '80%';
 document.getElementById('imgCloseAuditReports').style.display = 'block';
 }
     
     function ATRFailure()
     {
     alert('Audit Types Results failure');
     }
     
     function BindAuditTypeResults()
     {
     var e = document.getElementById("stAuditType");
     var auditTypes = e.options[e.selectedIndex].value;
     WService.AuditTypesResults(practiceAccessRights.toString(),accountAccessRights.toString(),auditTypes,ATRSuccess,ATRFailure);
     }
     
     //Month Change Practice  
    
     function MonthsChangePractice(imgID)
     {
      if(imgID == 'imgNextMonth')
      {
      period1 = period1 + 3;
      period2 = period2 + 3;
      period3 = period3 + 3;
      }
      else if(imgID == 'imgPrevMonth')
      {
      period1 = period1 - 3;
      period2 = period2 - 3;
      period3 = period3 - 3;
      }
      
     PracticeArrowCheck(period1,period2,period3);
     PracticeWise(period1,period2,period3);
     }
     
     //Month Change Account 
      function AWASuccess(data)
     {
       data=  $.parseJSON(data);
            if(data!= '')
            {
              $.each(data,function(index,item){
              if(index==0)
              {
               if(item.COMPLIANCE1!= '')
               {
               compliance1 = item.COMPLIANCE1;
               }
               else
               {
               compliance1='';
               }
               if(item.COMPLIANCE2!= '')
               {
               compliance2 = item.COMPLIANCE2;
               }
               else
               {
               compliance2='';
               }
               if(item.COMPLIANCE3!= '')
               {
                compliance3 = item.COMPLIANCE3;
               }
               else
               {
               compliance3='';
               }

              } 
              });
             }
             else
             {
              compliance1='';
              compliance2='';
              compliance3='';
             }
            if($.inArray('0', practiceAccessRights)>= 0)
            {
            accountaccess = '0';
            }           
     PracticeAccountArrowCheck(accperiod1,accperiod2,accperiod3);
     PracticeAccountWise(practice,practicename,accountaccess,compliance1,compliance2,compliance3);
             
     }
     
     function AWAFailure()
     {
     alert('Account wise average failure');
     }
     
     function MonthsChangeAccount(imgID)
     {
      if(imgID == 'imgAccNextMonth')
      {
      accperiod1 = accperiod1 + 3;
      accperiod2 = accperiod2 + 3;
      accperiod3 = accperiod3 + 3;
      }
      else if(imgID == 'imgAccPrevMonth')
      {
      accperiod1 = accperiod1 - 3;
      accperiod2 = accperiod2 - 3;
      accperiod3 = accperiod3 - 3;
      }
      
      WService.AccountWiseAverage(practice,accperiod1,accperiod2,accperiod3,AWASuccess,AWAFailure);
      
      }
    
    //Month Change Proocess 
    function PWASuccess(data)
    {
     data=  $.parseJSON(data);
            if(data != '')
            {
              $.each(data,function(index,item){
              if(index==0)
              {
               if(item.COMPLIANCE1!= '')
               {
               compliance1 = item.COMPLIANCE1;
               }
               else
               {
               compliance1='';
               }
               if(item.COMPLIANCE2!= '')
               {
               compliance2 = item.COMPLIANCE2;
               }
               else
               {
               compliance2='';
               }
               if(item.COMPLIANCE3!= '')
               {
                compliance3 = item.COMPLIANCE3;
               }
               else
               {
               compliance3='';
               }

              } 
              
              });
              }
              else
              {
              compliance1='';
              compliance2='';
              compliance3='';
              
              }
     PracticeAccountProcessArrowCheck(procperiod1,procperiod2,procperiod3);
     PracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3);              
    }
    
    function PWAFailure()
    {
    alert('Process wise average failure');
    }
    function MonthsChangeProcess(imgID)
     {
      if(imgID == 'imgProcNextMonth')
      {
      procperiod1 = procperiod1 + 3;
      procperiod2 = procperiod2 + 3;
      procperiod3 = procperiod3 + 3;
      }
      else if(imgID == 'imgProcPrevMonth')
      {
      procperiod1 = procperiod1 - 3;
      procperiod2 = procperiod2 - 3;
      procperiod3 = procperiod3 - 3;
      }
      
      WService.ProcessWiseAverage(practice,account,procperiod1,procperiod2,procperiod3,PWASuccess,PWAFailure);
    }
    
    //Arrow Check Practice
    function PracticeArrowCheck(period1,period2,period3)
    {
      if((period3 >= totalperiod) && (period3 <=24))
      {
      document.getElementById('imgNextMonth').style.visibility="hidden";  
      document.getElementById('imgPlus1').style.visibility="hidden";  
      }
      else
      {
      document.getElementById('imgNextMonth').style.visibility="visible";   
      document.getElementById('imgPlus1').style.visibility="visible";  
      }
      if(period1<= 1)
      {
      document.getElementById('imgPrevMonth').style.visibility="hidden";   
      document.getElementById('imgMinus1').style.visibility="hidden"; 
      }
      else
      {
      document.getElementById('imgPrevMonth').style.visibility="visible";   
      document.getElementById('imgMinus1').style.visibility="visible"; 
      }
   }
   
   //Arrow Check Account      
   function PracticeAccountArrowCheck(period1,period2,period3)
      {
      if((period3 >= totalperiod)&& (period3 <= 24))
      {
      document.getElementById('imgAccNextMonth').style.visibility="hidden";  
      document.getElementById('imgAccPlus1').style.visibility="hidden";  
      }
      else
      {
      document.getElementById('imgAccNextMonth').style.visibility="visible";   
      document.getElementById('imgAccPlus1').style.visibility="visible";  
      }
      if(period1<= 1)
      {
      document.getElementById('imgAccPrevMonth').style.visibility="hidden";   
      document.getElementById('imgAccMinus1').style.visibility="hidden";
      }
      else
      {
      document.getElementById('imgAccPrevMonth').style.visibility="visible";  
      document.getElementById('imgAccMinus1').style.visibility="visible"; 
      }
   }
      
   //Arrow Check Process   
   function PracticeAccountProcessArrowCheck(period1,period2,period3)
   {
      if((period3 >= totalperiod)&& (period3 <= 24))
      {
      document.getElementById('imgProcNextMonth').style.visibility="hidden";  
      document.getElementById('imgProcPlus1').style.visibility="hidden"; 
      }
      else
      {
      document.getElementById('imgProcNextMonth').style.visibility="visible";   
      document.getElementById('imgProcPlus1').style.visibility="visible"; 
      }
      if(period1<= 1)
      {
      document.getElementById('imgProcPrevMonth').style.visibility="hidden";   
      document.getElementById('imgProcMinus1').style.visibility="hidden"; 
      }
      else
      {
      document.getElementById('imgProcPrevMonth').style.visibility="visible";   
      document.getElementById('imgProcMinus1').style.visibility="visible"; 
      }
   }

//AccessRights   
function ARSuccess(data)
{
        data=  $.parseJSON(data);
               
        $.each(data,function(index,item){
        practiceAccessRights.push(item.DB_AR_PRACTICE);
        accountAccessRights.push(item.DB_AR_ACCOUNTS);
        });
        if($.inArray('0', practiceAccessRights)>= 0)
        {
        document.getElementById('lblRole').innerHTML = 'ROLE : Compliance Team';
        }
        else if($.inArray('0', accountAccessRights)>= 0)
        {
        document.getElementById('lblRole').innerHTML = 'ROLE : Practice Head';
        }
        else
        {
        document.getElementById('lblRole').innerHTML = 'ROLE : PM/TM';
        }           
        TotalPeriod();
}

function ARFailure()
{
  alert('Access Rights');
}

function AccessRights(empcode)
{
  empCode = empcode;
  WService.AccessRights(empcode,ARSuccess,ARFailure);
}    

//Total Count Period   
function TPSuccess(data)
{
   data=  $.parseJSON(data);
    
     $.each(data,function(index,item){
      if(index==0)
      {
       totalperiod= item.Column1;
      } 
      });
AllPeriod();      
}

function TPFailure()
{
   alert("Total Period");
}

function TotalPeriod()
{
   WService.TotalPeriod(TPSuccess,TPFailure);
}
 
//All Period   
function APSuccess(data)
{
    data=  $.parseJSON(data);

     $.each(data,function(index,item){
     allperiod[index]=item.PERIOD;
   });
   PracticeWise(period1,period2,period3);
}

function APFailure()
{
  alert("All Periods");
}

function AllPeriod()
{
    WService.AllPeriod(APSuccess,APFailure);
}  
   
//PracticeWiseValue    
function PWSuccess(data)
{
  var tempdata = new Array();
             tempdata = data.split('#');
             tempdata[0]=  $.parseJSON(tempdata[0]);
             var jsonResult = tempdata[0];
             document.getElementById("spPractice1").innerHTML = jsonResult[0].PRACTICE;
 var itemRow="<table id='tblPracticewise' border='1' class='display' style='font-family: Verdana;width:100%;border-collapse: collapse;'>";  
  $.each(tempdata[0],function(index,item){

  var val1,val2,val3;  
  if(index==0)
   {
   var mon1,year1,mon2,year2,mon3,year3;

pwperiod1= period1;
pwperiod2=period2;
pwperiod3   =period3;
if(pwperiod1 <= totalperiod)
{
       pwperiod1= allperiod[pwperiod1-1];
       mon1 = pwperiod1.substring(6, 4);
       year1 = pwperiod1.substring(4,2);
       pwperiod1 = MonthName(mon1,year1);
}      
else
{
pwperiod1=''
}
if(pwperiod2 <= totalperiod)
{
   pwperiod2 = allperiod[pwperiod2-1];
   mon2 = pwperiod2.substring(6, 4);
   year2 = pwperiod2.substring(4,2);
   pwperiod2 = MonthName(mon2,year2);
}
else
{
pwperiod2='';   
}
if(pwperiod3<=totalperiod)
{
   pwperiod3 = allperiod[pwperiod3-1];
   mon3 = pwperiod3.substring(6, 4);
   year3 = pwperiod3.substring(4,2);
   pwperiod3 = MonthName(mon3,year3);
}
else
{
pwperiod3='';
}
  
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td width='10%' style='color: white;border:1px solid gray;'>NO</td><td width='10%' style='color: white;display:none;border:1px solid gray;'>DEPT ID</td><td width='33%' style='color: white;border:1px solid gray;'>DEPARTMENT</td><td width='10%' style='color: white;display:none;border:1px solid gray;'>PERIOD1</td><td width='20%' style='color: white;border:1px solid gray;'>"+pwperiod1+"</td><td width='10%' style='color: white;display:none;border:1px solid gray;'>PERIOD2</td><td width='20%' style='color: white;border:1px solid gray;'>"+pwperiod2+"</td><td width='10%' style='color: white;display:none;border:1px solid gray;'>PERIOD3</td><td width='20%' style='color: white;border:1px solid gray;'>"+pwperiod3+"</td></tr>";
   }
   index= index+1;
   if(item.MON1 !='' && item.MON1 !='NA')
   {
   val1= Math.round(item.MON1);
   }
   else
   {
   val1='NA';
   }
   if(item.MON2 !='' && item.MON2 !='NA')
   {
   val2= Math.round(item.MON2);
   }
   else
   {
   val2='NA';
   }
   if(item.MON3 !='' && item.MON3 !='NA')
   {
   val3= Math.round(item.MON3);
   }
   else
   {
   val3='NA';
   }   
      
   //COLOR 1
 if(item.MON1 == 'NA')
 {
 com1color = 'gray';
 }
 else if(item.MON1 != '')
   {
   if(val1 <=100 && val1 >= 86 )
   {
   com1color = "green";
   }
   else if(val1 <= 85 && val1 >= 70 )
   {
   com1color = "rgb(255, 192, 0)";
   }
   else if(val1 <= 69 )
   {
   com1color = "#B44B4B";
   }
 }
   
    //COLOR2
if(item.MON2 == 'NA')
 {
 com2color = 'gray';
 }
else if(item.MON2 != '')
 {
   if(val2 <=100 && val2 >= 86 )
   {
   com2color = "green";
   }
   else if(val2 <= 85 && val2 >= 70 )
   {
   com2color = "rgb(255, 192, 0)";
   }
   else if(val2 <= 69 )
   {
   com2color = "#B44B4B";
   }
 }

    //COLOR 3
if(item.MON3 == 'NA')
 {
 com3color = 'gray';
 }
else if(item.MON3 != '')
 {    
   if(val3 <=100 && val3 >= 86 )
   {
   com3color = "green";
   }
   else if(val3 <= 85 && val3 >= 70 )
   {
   com3color = "rgb(255, 192, 0)";
   }
   else if(val3 <= 69 )
   {
   com3color = "#B44B4B";
   }
 }

//Practice dials
 if(index==1)
 {
 if(item.MON1!='' && item.MON1 !='NA')
 {
 practice1= Math.round(item.MON1);
 }
 else
 {
 practice1='0';
 }
 }
 else if(index==2)
 {
  if(item.MON1!='' && item.MON1 !='NA')
 {
 practice2= Math.round(item.MON1);
 }
 else
 {
 practice2='0';
 }
 }
 else if(index==3)
 {
 if(item.MON1!='' && item.MON1 !='NA')
 { 
 practice3= Math.round(item.MON1);
 }
 else
 {
 practice3='0';
 }  
 }  
 else if(index==4)
 {
  if(item.MON1!='' && item.MON1 !='NA')
 {
 practice4= Math.round(item.MON1);
 }
  else
 {
 practice4='0';
 }
 }  
 else if(index==5)
 {
  if(item.MON1!='' && item.MON1 !='NA')
 {
 practice5= Math.round(item.MON1);
 }
  else
 {
 practice5='0';
 }
 }  
 else if(index==6)
 {
  if(item.MON1!='' && item.MON1 !='NA')
 {
 practice6= Math.round(item.MON1);
 }
  else
 {
 practice6='0';
 }
 }    
 else if (index == 7) {
     if (item.MON1 != '' && item.MON1 != 'NA') {
         practice7 = Math.round(item.MON1);
     }
     else {
         practice7 = '0';
     }
 }
 else if (index == 8) {
     if (item.MON1 != '' && item.MON1 != 'NA') {
         practice8 = Math.round(item.MON1);
     }
     else {
         practice8 = '0';
     }
 }
 else if (index == 9) {
     if (item.MON1 != '' && item.MON1 != 'NA') {
         practice9 = Math.round(item.MON1);
     }
     else {
         practice9 = '0';
     }
 }
 else if (index == 10) {
     if (item.MON1 != '' && item.MON1 != 'NA') {
         practice10 = Math.round(item.MON1);
     }
     else {
         practice10 = '0';
     }
 }



if($.inArray('0', practiceAccessRights) >= 0)
{
    itemRow+="<tr id='trid"+index+"' style='background-color:white;height:35px;'><td width='10%' style='border:1px solid gray;' >"+index+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.ID+"</td><td style='text-align:left; padding-left:5%;border:1px solid gray;'>"+item.PRACTICE+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD1+"</td><td style='color:"+com1color+";border:1px solid gray;' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)')>"+val1+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD2+"</td><td style='color:"+com2color+";border:1px solid gray;' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val2+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD3+"</td><td style='color:"+com3color+";border:1px solid gray;' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val3+"</td></tr>";
}
else if($.inArray(item.ID, practiceAccessRights) >= 0)
{
    itemRow+="<tr id='trid"+index+"' style='background-color:white;height:35px;'><td width='10%' style='border:1px solid gray;' >"+index+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.ID+"</td><td style='text-align:left; padding-left:5%;border:1px solid gray;'>"+item.PRACTICE+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD1+"</td><td style='color:"+com1color+";border:1px solid gray;' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)')>"+val1+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD2+"</td><td style='color:"+com2color+";border:1px solid gray;' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val2+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD3+"</td><td style='color:"+com3color+";border:1px solid gray;' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val3+"</td></tr>";
}
else
{
    itemRow+="<tr id='trid"+index+"' style='background-color:white;height:35px;'><td width='10%' style='border:1px solid gray;' >"+index+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.ID+"</td><td style='text-align:left; padding-left:5%;border:1px solid gray;'>"+item.PRACTICE+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD1+"</td><td style='color:"+com1color+";border:1px solid gray;'>"+val1+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD2+"</td><td style='color:"+com2color+";border:1px solid gray;' >"+val2+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD3+"</td><td style='color:"+com3color+";border:1px solid gray;'>"+val3+"</td></tr>";
}

  });        
 itemRow+="</table>";  
 $("#divPracticeWise").html(itemRow);
 document.getElementById('tblPracticewise').style.margin ='0 auto';
 document.getElementById('tblPracticewise').style.height ='150px';
 document.getElementById('tblPracticewise').style.fontFamily ='calibri';
 document.getElementById('tblPracticewise').style.fontSize ='larger';
 document.getElementById('tblPracticewise').style.overflow ='scroll';
 document.getElementById('tblPracticewise').style.textAlign ='center';

tempdata[1] = $.parseJSON(tempdata[1]);
var com1color;
var com2color;
var com3color;
var itemRow="<table id='tblPracticewiseAverage' border='1' style='font-family: Verdana;width:100%;border-collapse: collapse;'>";  
  $.each(tempdata[1],function(index,item){
   if(index==0)
   {
   itemRow+="<tr style='background-color:white'><td colspan='2' width='10%' style='color:black;font-weight:bold;display:none;;border:1px solid gray;'>OVERALL COMPLIANCE</td><td width='33%' style='color:white;font-weight:bold;display:none;;border:1px solid gray;'>AVERAGE1</td><td width='10%' style='color:white;font-weight:bold;display:none;border:1px solid gray;'>AVERAGE2</td><td width='20%' style='color:white;font-weight:bold;display:none;;border:1px solid gray;'>AVERAGE3</td></tr>";
   }
   index= index+1;
//   if(period ==1 )
//   {
//   orgRecentCompliance = item.COMPLIANCE1;
//   }
if(item.COMPLIANCE1 != '' || item.COMPLIANCE1!='NA')
 {  
    if(parseInt(item.COMPLIANCE1)<=100 && parseInt(item.COMPLIANCE1)>= 86 )
    {
        avgcom1color = "green";
    }
    else if(parseInt(item.COMPLIANCE1)<= 85 && parseInt(item.COMPLIANCE1)>= 70 )
   
   {
   avgcom1color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE1)<= 69 )
   {
   avgcom1color = "#B44B4B";
   }
 }
 else
 {
 avgcom1color = gray;
 }  
   
 if(item.COMPLIANCE2!= '' || item.COMPLIANCE2 !='NA')
 {    
   if(parseInt(item.COMPLIANCE2)<=100 && parseInt(item.COMPLIANCE2)>= 86 )
   {
   avgcom2color = "green";
   }
   else if(parseInt(item.COMPLIANCE2)<= 85 && parseInt(item.COMPLIANCE2)>= 70 )
   {
   avgcom2color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE2)<= 69 )
   {
   avgcom2color = "#B44B4B";
   }
 } 
  else
 {
 avgcom2color = gray;
 }  
  
 if(item.COMPLIANCE3 != '' || item.COMPLIANCE3!='NA')
 { 
    if(parseInt(item.COMPLIANCE3)<=100 && parseInt(item.COMPLIANCE3)>= 86 )
   {
   avgcom3color = "green";
   }
   else if(parseInt(item.COMPLIANCE3)<= 85 && parseInt(item.COMPLIANCE3)>= 70 )
   {
   avgcom3color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE3)<= 69 )
   {
   avgcom3color = "#B44B4B";
   }
 }  
 else
 {
 avgcom3color = gray;
 }  
  
 if(item.COMPLIANCE1!='')
 {
 avgchartval1= parseInt(item.COMPLIANCE1);
 }
 else
 {
 avgchartval1='';
 }
 if(item.COMPLIANCE2!='')
 {
 avgchartval2= parseInt(item.COMPLIANCE2);
 }
 else
 {
 avgchartval2='';
 }
 if(item.COMPLIANCE3!='')
 {
 avgchartval3= parseInt(item.COMPLIANCE3);
 }
 else
 {
 avgchartval3='';
 }
  if((index%2)==0)
   {
   itemRow+="<tr><td style='text-align:center;width: 43%;background-color:white;color:black;border:1px solid gray;'>OVERALL COMPLIANCE</td><td style='WIDTH: 20%;color:"+avgcom1color+";border:1px solid gray;'>"+avgchartval1+"</td><td style='WIDTH: 20%;color:"+avgcom2color+";border:1px solid gray;'>"+avgchartval2+"</td><td style='width:20%;color:"+avgcom3color+";border:1px solid gray;'>"+avgchartval3+"</td></tr>";
   }
   else
   {
      itemRow += "<tr><td style='text-align:center;width: 43%;background-color:white;color:black;border:1px solid gray;'>OVERALL COMPLIANCE</td><td style='WIDTH: 20%;color:" + avgcom1color + ";border:1px solid gray;'>" + avgchartval1 + "</td><td style='WIDTH: 20%;color:" + avgcom2color + ";border:1px solid gray;'>" + avgchartval2 + "</td><td style='width:20%;color:" + avgcom3color + ";border:1px solid gray;'>" + avgchartval3 + "</td></tr>";
   }
  });        
 itemRow+="</table>";  
 $("#divPracticeWiseAvg").html(itemRow);
 document.getElementById('tblPracticewiseAverage').style.margin ='0px auto';
 document.getElementById('tblPracticewiseAverage').style.fontFamily ='Calibri';
 document.getElementById('tblPracticewiseAverage').style.fontSize ='larger';
 document.getElementById('tblPracticewiseAverage').style.textAlign ='center';    
           
 datt = avgchartval1;
 OrgChart();
}

function PWFailure()
{
alert('Practice Wise');
}
    
function PracticeWise(period1,period2,period3)
{
WService.PracticeWiseValue(period1,period2,period3,PWSuccess,PWFailure);
} 

function PraticeContainsCheck(parctice)
{
for (var key in practiceAccessRights) {
   var value = practiceAccessRights[key];
   return value;
}
}
 function PracticePopup(obj) {
         accperiod1 = period1;
         accperiod2 = period2;
         accperiod3 = period3;
            var table = document.getElementById("tblPracticewise");
            var row =  table.rows[obj.parentNode.rowIndex];
            
            practice = row.cells[1].innerText;
            practicename = row.cells[2].innerText.toUpperCase();
            var prevCell = $(obj).closest('td').prev();
            practicePeriod= prevCell[0].innerText;
            compliancePracticeValue = prevCell.prevObject[0].innerText;
            if(compliancePracticeValue=='' || compliancePracticeValue=='NA')
            {
            compliancePracticeValue='0';
            }
            compliance1= row.cells[4].innerText;
            compliance2= row.cells[6].innerText;
            compliance3= row.cells[8].innerText;
 
if($.inArray('0', practiceAccessRights)>= 0)
{       
        var popup = document.getElementById('divPopupPractice');
        document.getElementById('divOrganizations').style.backgroundColor = 'white';
        document.getElementById('divOrganization').style.display  = 'none';
        document.getElementById('divPractices').style.display  = 'none';
        document.getElementById('imgbtnProcess').style.display = 'none';
        document.getElementById('imgNextMonth').style.display = 'none';
        document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
        document.getElementById('divResults').style.backgroundColor = 'white';
        popup.style.display = 'block';
         
        document.getElementById('divPracticeAccountWisePanel').style.display = 'inline';

        BindChartPractice(parseInt(compliancePracticeValue),practicename,practicePeriod);
        glbpractice = practice;
        glbpracticename = practicename;
        glbperiod = practicePeriod;
        PracticeAccountWise(practice,practicename,'0',compliance1,compliance2,compliance3);
        PracticeAccountArrowCheck(period1,period2,period3);
 }
else
{
if($.inArray(practice, practiceAccessRights)>= 0)
{
var accessIndex = $.inArray(practice, practiceAccessRights);
var popup = document.getElementById('divPopupPractice');
        document.getElementById('divOrganizations').style.backgroundColor = 'black';
        document.getElementById('divOrganization').style.display  = 'none';
        document.getElementById('imgbtnProcess').style.display = 'none';
        document.getElementById('divPractices').style.display  = 'none';
        document.getElementById('imgNextMonth').style.display = 'none';
        document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
        document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';
        popup.style.display = 'block';
         
        document.getElementById('divPracticeAccountWisePanel').style.display = 'inline';

        BindChartPractice(parseInt(compliancePracticeValue),practicename,practicePeriod);
        glbpractice = practice;
        glbpracticename = practicename;
        glbperiod = practicePeriod;
        accountaccess = accountAccessRights[accessIndex].toString();
        PracticeAccountWise(practice,practicename,accountaccess,compliance1,compliance2,compliance3);
        PracticeAccountArrowCheck(period1,period2,period3);
}
else
{
alert("You can see the details of your own practice");
}
}
}

function PracticeAccountWise(practice,practicename,accountaccess,compliance1,compliance2,compliance3)
{
      BindPracticeAccountWise(practice,practicename,accountaccess,compliance1,compliance2,compliance3);
}

function AWSuccess(data)
{
  data=  $.parseJSON(data);
    
    document.getElementById('spPracticeProcessWiseHeader').innerHTML = practicename.toUpperCase();
    
 var itemRow="<table id='tblPracticeAccountwise' border='1' class='sortable' style='font-family: Verdana;border-collapse: collapse;width:100%' >";  
 $.each(data,function(index,item){
   if(index==0)
   {
   
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
   if(accperiod1 <=totalperiod)
   {
   period1= allperiod[accperiod1-1];
   mon1 = period1.substring(6, 4);
   year1 = period1.substring(4,2);
   period1 = MonthName(mon1,year1);   
   }
   else
   {
   period1='';
   }
   if(accperiod2 <=totalperiod)
   {
   period2= allperiod[accperiod2-1];
   mon2 = period2.substring(6, 4);
   year2 = period2.substring(4,2);
   period2 = MonthName(mon2,year2);   
   }
   else
   {
   period2='';
   }
   if(accperiod3 <=totalperiod)
   {
   period3= allperiod[accperiod3-1];
   mon3 = period3.substring(6, 4);
   year3 = period3.substring(4,2);
   period3 = MonthName(mon3,year3);   
   }
   else
   {
   period3='';
   }
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;width:10%'>NO</td><td style='color:white;display:none;'>DEPT ID</td><td style='color:white;display:none;border:1px solid gray;'>DEPARTMENT NAME</td><td style='color:white;display:none;border:1px solid gray;'>PROCESS ID</td><td style='color:white;width:42%;border:1px solid gray;'>PROCESS</td><td style='color:white;display:none;border:1px solid gray;'>PERIOD1</td><td style='color:white;width:16%;border:1px solid gray;'>"+period1+"</td><td style='color:white;display:none;border:1px solid gray;'>PERIOD2</td><td style='color:white;width:16%;border:1px solid gray;'>"+period2+"</td><td style='color:white;display:none;border:1px solid gray;'>PERIOD3</td><td style='color:white;width:16%;border:1px solid gray;'>"+period3+"</td></tr>";
   }
   index= index+1;
    
   //COLOR 1
if(item.COMPLIANCE1 != '' && item.COMPLIANCE1!='NA')
{    
   if(parseInt(item.COMPLIANCE1)<=100 && parseInt(item.COMPLIANCE1)>= 86 )
   {
   acccom1color = "green";
   }
   else if(parseInt(item.COMPLIANCE1)<= 85 && parseInt(item.COMPLIANCE1)>= 70 )
   {
   acccom1color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE1)<= 69 )
   {
   acccom1color = "#B44B4B";
   }
}
else
{
   acccom1color = "GRAY";
} 
 //COLOR2
if(item.COMPLIANCE2 != '' && item.COMPLIANCE2!='NA')
{        
   if(parseInt(item.COMPLIANCE2)<=100 && parseInt(item.COMPLIANCE2)>= 86 )
   {
   acccom2color = "green";
   }
   else if(parseInt(item.COMPLIANCE2)<= 85 && parseInt(item.COMPLIANCE2)>= 70 )
   {
   acccom2color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE2)<= 69 )
   {
   acccom2color= "#B44B4B";
   }
}
else
{
   acccom2color = "Gray";
} 
    //COLOR 3
if(item.COMPLIANCE3 != '' && item.COMPLIANCE3!='NA')
{        
   if(parseInt(item.COMPLIANCE3)<=100 && parseInt(item.COMPLIANCE3)>= 86 )
   {
   acccom3color = "green";
   }
   else if(parseInt(item.COMPLIANCE3)<= 85 && parseInt(item.COMPLIANCE3)>= 70 )
   {
   acccom3color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE3)<= 69 )
   {
   acccom3color = "#B44B4B";
   }
}
else
{
   acccom3color = "GRAY";
} 
   
   if((index%2)==0)
   {
       itemRow += "<tr style='background-color:white'><td style='border:1px solid gray;'>" + index + "</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PRACTICE_ID + "</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PRACTICE_NAME + "</td><td width='20%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.ACCOUNT_ID + "</td><td  style='text-align:left; padding-left:5%;border:1px solid gray;'>" + item.ACCOUNT_NAME + "</td><td width='50%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PERIOD1 + "</td><td style='color:" + acccom1color + ";border:1px solid gray;' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountProcessData(this)'>" + item.COMPLIANCE1 + "</td><td width='50%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PERIOD2 + "</td><td style='color:" + acccom2color + ";border:1px solid gray;' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountProcessData(this)'>" + item.COMPLIANCE2 + "</td><td width='20%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PERIOD3 + "</td><td style='color:" + acccom3color + ";border:1px solid gray;' width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountProcessData(this)'>" + item.COMPLIANCE3 + "</td></tr>";
   }
   else
   {
       itemRow += "<tr style='background-color:white'><td style='border:1px solid gray;'>" + index + "</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PRACTICE_ID + "</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PRACTICE_NAME + "</td><td width='20%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.ACCOUNT_ID + "</td><td style='text-align:left; padding-left:5%;border:1px solid gray;'>" + item.ACCOUNT_NAME + "</td><td width='50%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PERIOD1 + "</td><td style='color:" + acccom1color + ";border:1px solid gray;' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountProcessData(this)'>" + item.COMPLIANCE1 + "</td><td width='50%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PERIOD2 + "</td><td style='color:" + acccom2color + ";border:1px solid gray;' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountProcessData(this)'>" + item.COMPLIANCE2 + "</td><td width='20%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>" + item.PERIOD3 + "</td><td style='color:" + acccom3color + ";border:1px solid gray;' width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountProcessData(this)'>" + item.COMPLIANCE3 + "</td></tr>";
   }
  });        
 itemRow+="</table>";  

 $("#divPracticeAccountWisePanel").html(itemRow);
 document.getElementById('divPracticeProcessWise').style.display = 'table';
 document.getElementById('divPracticeProcessWise').style.overflowY = 'auto';
 document.getElementById('divPracticeProcessWise').style.display = 'table-cell';
 document.getElementById('tblPracticeAccountwise').style.margin ='0 auto';
 
   var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome== true)
    {
    document.getElementById('divPracticeProcessWise').style.maxHeight = '350px';
    document.getElementById('tblPracticeAccountwise').style.marginTop ='0%';
    document.getElementById ("imglegend").style.marginBottom ="-14%";
    }
    else
    {
     document.getElementById('divPracticeProcessWise').style.maxHeight = '325px';
    document.getElementById('tblPracticeAccountwise').style.marginTop ='0%';
    document.getElementById ("imglegend").style.marginBottom ="-14%";
    }
    
 document.getElementById('tblPracticeAccountwise').style.height ='auto';
  document.getElementById('tblPracticeAccountwise').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountwise').style.fontSize ='larger';
 document.getElementById('tblPracticeAccountwise').style.textAlign ='center';
 document.getElementById('tblPracticeAccountwise').style.width ='100%';
  
  
var itemRowAvg="<table id='tblPracticeAccountwiseAvg' border='1' style='font-family: Verdana;width:100%;border-collapse: collapse;'>";   
if(compliance1 !='' && compliance1 !='NA')
{
 if(parseInt(compliance1)<=100 && parseInt(compliance1)>= 86 )
   {
   avgacccom1color = "green";
   }
   else if(parseInt(compliance1)<= 85 && parseInt(compliance1)>= 70 )
   {
   avgacccom1color = "rgb(255, 192, 0)";
   }
   else if(parseInt(compliance1)<= 69 )
   {
   avgacccom1color = "#B44B4B";
   }
} 
else
{
avgacccom1color = "gray";
}  
if(compliance2 !='' && compliance2 !='NA')
{   
   if(parseInt(compliance2)<=100 && parseInt(compliance2)>= 86 )
   {
   avgacccom2color = "green";
   }
   else if(parseInt(compliance2)<= 85 && parseInt(compliance2)>= 70 )
   {
   avgacccom2color = "rgb(255, 192, 0)";
   }
   else if(parseInt(compliance2)<= 69 )
   {
   avgacccom2color = "#B44B4B";
   }
}
else
{
avgacccom2color = "gray";
}  
if(compliance3 !='' && compliance3 !='NA')
{   
   if(parseInt(compliance3)<=100 && parseInt(compliance3)>= 86)
   {
   avgacccom3color = "green";
   }
   else if(parseInt(compliance3)<= 85 && parseInt(compliance3)>= 70)
   {
   avgacccom3color = "rgb(255, 192, 0)";
   }
   else if(parseInt(compliance3)<= 69)
   {
   avgacccom3color = "#B44B4B";
   }
}  
else
{
avgacccom3color = "gray";
}   

var avgaccval1,avgaccval2,avgaccval3;
if(compliance1!='' && compliance1!='NA')
{
avgaccval1 = Math.round(compliance1);
}
else
{
avgaccval1=compliance1;
}
if(compliance2!='' && compliance2!='NA')
{
avgaccval2 = Math.round(compliance2);
}
else
{
avgaccval2=compliance2;
}
if(compliance3!='' && compliance3!='NA')
{
avgaccval3 = Math.round(compliance3);
}
else
{
avgaccval3=compliance3;
}
itemRowAvg += "<tr><td style='background-color:white;color:black;border:1px solid gray;'  width='52%'>OVERALL COMPLIANCE</td><td style='color:" + avgacccom1color + ";border:1px solid gray;'  width= '16%'>" + avgaccval1 + "</td><td style='color:" + avgacccom2color + ";border:1px solid gray;'  width= '16%'>" + avgaccval2 + "</td><td style='color:" + avgacccom3color + ";border:1px solid gray;'  width= '16%'>" + avgaccval3 + "</td></tr>";
itemRowAvg+="</table>";
itemRowAvg;
$("#divPracticeAccountWiseAvg").html(itemRowAvg);
 document.getElementById('tblPracticeAccountwiseAvg').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountwiseAvg').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountwiseAvg').style.fontSize ='larger';
 //document.getElementById('tblPracticeAccountwiseAvg').style.fontFamily ='Arial';
 document.getElementById('tblPracticeAccountwiseAvg').style.textAlign ='center';  
}

function AWFailure()
{
alert('Account wise failure');
}

function BindPracticeAccountWise(practice,practicename,accountaccess,compliance1,compliance2,compliance3) 
{
WService.AccountWiseValue(practice,accountaccess,accperiod1,accperiod2,accperiod3,AWSuccess,AWFailure);
}
         
function MonthName(month,year)
{
switch (month)
 {
    case '01':
        return 'JAN-' + year;
        break;
    case '02':
        return "FEB-"+ year;
        break;
    case '03':
        return"MAR-"+ year;
        break;
    case '04':
        return "APR-"+ year;
        break;
    case '05':
        return "MAY-"+ year;
        break;
    case '06':
        return "JUN-"+ year;
        break;
    case '07':
        return "JUL-"+ year;
        break;
    case '08':
        return" AUG-"+ year;
        break;        
    case '09':
        return "SEP-"+ year;
        break;        
    case '10':
        return "OCT-"+ year;
        break;        
    case '11':
        return "NOV-"+ year;
        break;   
    case '12':
        return "DEC-"+ year;
        break;                                        
}
}

 function ShowPracticeAccountWisePopup(obj) 
 {
     procperiod1 = accperiod1;
     procperiod2 = accperiod2;
     procperiod3 = accperiod3;
     var table = document.getElementById("tblPracticeAccountwise");
     var row = table.rows[obj.parentNode.rowIndex];
     var practice = row.cells[1].innerText;
     var practicename = row.cells[2].innerText.toUpperCase();
     account = row.cells[3].innerText;
     accountname = row.cells[4].innerText.toUpperCase();
     var prevCell = $(obj).closest('td').prev();
     accountPeriod = prevCell[0].innerText;
     complianceAccountValue = prevCell.prevObject[0].innerText;
     if (complianceAccountValue == '' || complianceAccountValue == 'NA') {
         complianceAccountValue = '0';
     }
     processValue = parseInt(complianceAccountValue);
     procAccountName = accountname;
     BindChartAccount(processValue, procAccountName, accountPeriod);//if i give 12 its working
     document.getElementById('spPracticeAccountHeader').innerHTML = practicename + ' - ' + accountname;
     compliance1 = row.cells[6].innerText;
     if (compliance1 == '') {
         compliance1 = '0';
     }

     compliance2 = row.cells[8].innerText;
     if (compliance2 == '') {
         compliance2 = '0';
     }

     compliance3 = row.cells[10].innerText;
     if (compliance3 == '') {
         compliance3 = '0';
     }

     PracticeAccountProcessWise(practice, practicename, account, accountname, compliance1, compliance2, compliance3);


     var popup = document.getElementById('divPopupPracticeAccount');
     popup.style.display = 'block';
     PracticeAccountProcessArrowCheck(procperiod1, procperiod2, procperiod3);
 }


 function PracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3)
   {
         BindPracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3);
   }

function PRSuccess(data)
{
var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
   if(procperiod1 <=totalperiod)
   {
   period1= allperiod[procperiod1-1];
   mon1 = period1.substring(6, 4);
   year1 = period1.substring(4,2);
   period1 = MonthName(mon1,year1);   
   }
   else
   {
   period1='';
   }
   if(procperiod2 <=totalperiod)
   {
   period2= allperiod[procperiod2-1];
   mon2 = period2.substring(6, 4);
   year2 = period2.substring(4,2);
   period2 = MonthName(mon2,year2);   
   }
   else
   {
   period2='';
   }
   if(procperiod3 <=totalperiod)
   {
   period3= allperiod[procperiod3-1];
   mon3 = period3.substring(6, 4);
   year3 = period3.substring(4,2);
   period3 = MonthName(mon3,year3);   
   }
   else
   {
   period3='';
   }
 document.getElementById('spPracticeAccountHeader').innerHTML = practicename + ' - ' + accountname;
 var itemRow="<table id='tblPracticeAccountProcessWise' border='1' style='font-family: Verdana;border-collapse: collapse;'>"; 
 itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;width:9%;border:1px solid gray;'>NO</td><td style='display:none;color:white;border:1px solid gray;'>PRACTICE</td><td style='display:none;color:white;border:1px solid gray;'>ACCOUNT</td><td style='display:none;color:white;border:1px solid gray;'>PROCESS</td><td style='color:white;width:49%;border:1px solid gray;'>PROCESS</td><td style='color:white;display:none;border:1px solid gray;'>period1</td><td style='color:white;width:14%;border:1px solid gray;'>"+period1+"</td><td style='color:white;display:none;border:1px solid gray;'>period2</td><td style='color:white;width:14%;border:1px solid gray;'>"+period2+"</td><td style='color:white;display:none;border:1px solid gray;'>period3</td><td style='color:white;width:14%;border:1px solid gray;'>"+period3+"</td></tr>";

 data=  $.parseJSON(data);
   
 
 var index;
 $.each(data,function(index,item){

 index= index+1;
       //COLOR 1
       
if((item.COMPLIANCE1!='NA')&&(item.COMPLIANCE1!=''))
{       
   if(parseInt(item.COMPLIANCE1)<=100 && parseInt(item.COMPLIANCE1)>= 86 )
   {
   proccom1color = "green";
   }
   else if(parseInt(item.COMPLIANCE1)<= 85 && parseInt(item.COMPLIANCE1)>= 70 )
   {
   proccom1color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE1)<= 69 )
   {
   proccom1color = "#B44B4B";
   }
}
else
{
   proccom1color = "Gray";
}    
    //COLOR2
if((item.COMPLIANCE2 != '')&&(item.COMPLIANCE2!='NA'))
{    
   if(parseInt(item.COMPLIANCE2)<=100 && parseInt(item.COMPLIANCE2)>= 86)
   {
   proccom2color = "green";
   }
   else if(parseInt(item.COMPLIANCE2)<= 85 && parseInt(item.COMPLIANCE2)>= 70)
   {
   proccom2color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE2)<= 69 )
   {
   proccom2color = "#B44B4B";
   }
}
else
{
   proccom2color = "Gray";
} 
    //COLOR 3
if((item.COMPLIANCE3 != '')&&(item.COMPLIANCE3!='NA'))
{    
   if(parseInt(item.COMPLIANCE3)<=100 && parseInt(item.COMPLIANCE3)>= 86 )
   {
   proccom3color = "green";
   }
   else if(parseInt(item.COMPLIANCE3)<= 85 && parseInt(item.COMPLIANCE3)>= 70 )
   {
   proccom3color = "rgb(255, 192, 0)";
   }
   else if(parseInt(item.COMPLIANCE3)<= 69 )
   {
   proccom3color = "#B44B4B";
   }
}
else
{
   proccom3color = "GRAY";
}   
if((item.PROCESS!='')&&(item.PROCESS=='1'))
{
   //pname = 'OI Compliance';
   pstandard = 'Compliance to project code release before/ within 5 days of project start date';
   pmethod ='(No.of conforming OI\'s for a month) /(Total OI\'s released for a month)*100'; 
}
else if((item.PROCESS!='')&&(item.PROCESS=='2'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to uploading of invoicing information for a T&M project before/ first Business day of the upcoming month';
   pmethod ='(No.of Invoices uploaded on time) /(Total no of invoices uploaded  for a month)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='3'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to tracking and reporting of agreed SLA\'s/KPI\'s on defined frequency';
   pmethod ='(No.of SlA\'s/KPI\'s tracked and reported)/(Total no.of SLA\'s/KPI\'s agreed)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='4'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to planning processes as per defined methodology ';
   pmethod ='(No of processes conforming) /(No of  processes audited)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='5'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'compliance to on boarding/ off boarding process for identified resource ';
   pmethod ='(count of resources complying) / (Total no of resources audited for the account)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='6'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to tracking and management of review comment';
   pmethod ='(Count of deliverables where review process is adhered)/(Total number of deliverables in a project) * 100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='7'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to  execution processes as per defined methodology ';
   pmethod ='(No of processes conforming) /(No of  processes audited)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='8'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to publishing closure intimation for the closed projects on time';
   pmethod ='(Count of closure intimation released)/(Total no of projects closed)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='9'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to completion of archival of a  closed project';
   pmethod ='(No of projects archived)/ (Total no of projects closure intimation received)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='10'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to effort tracking, reporting and variance analyzing';
   pmethod ='(No of processes conforming) /(No of  processes audited)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='15'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to configuration management process as per methodology';
   pmethod ='(No of samples conforming) / (Total number of samples audited)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='16'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Compliance to timely updation of skills/attending  trainings for an account';
   pmethod ='(count of resources complying)/(Total no of resources audited in an account)*100';
}
else 
{
   //pname = 'Invoice Compliance';
   pstandard = 'extra';
   pmethod ='Yet to describe';
}
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td id='tdindex'"+index+" style='border:1px solid gray;'>"+index+".</td><td style='display:none;border:1px solid gray;'>"+item.PRACTICE+"</td><td style='display:none;border:1px solid gray;'>"+item.ACCOUNT+"</td><td style='display:none;border:1px solid gray;'>"+item.PROCESS+"</td><td style='text-align:left; padding-left:1%;;border:1px solid gray;' class='ImageFormula'>"+item.PROCESS_NAME+"<div class='tooltipFormula' style='font-size:16px;'><table border='1' style='font-size:smaller;width:100%;border-collapse:collapse;'><tr><td style='text-align:center;font-weight:bold;'>PROCESS</td><td style='text-align:center;font-weight:bold;'>STANDARD</td><td style='text-align:center;font-weight:bold;'>METHOD OF MEASUREMENT</td></tr><tr><td>"+item.PROCESS_NAME+"</td><td>"+pstandard+"</td><td>"+pmethod+"</td></tr></table></td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD1+"</td><td style='color:"+proccom1color+";border:1px solid gray;' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE1+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD2+"</td><td style='color:"+proccom2color +";border:1px solid gray;'  onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE2+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD3+"</td><td style='color:"+proccom3color+";border:1px solid gray;'  width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE3+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td id='tdindex'"+index+" style='border:1px solid gray;'>"+index+".</td><td style='display:none;border:1px solid gray;'>"+item.PRACTICE+"</td><td style='display:none;border:1px solid gray;'>"+item.ACCOUNT+"</td><td style='display:none;border:1px solid gray;'>"+item.PROCESS+"</td><td style='text-align:left; padding-left:1%;;border:1px solid gray;'  class='ImageFormula'>"+item.PROCESS_NAME+"<div class='tooltipFormula' style='font-size:16px;'><table border='1' style='font-size:smaller;width:100%;border-collapse:collapse;'><tr><td style='text-align:center;font-weight:bold;'>PROCESS</td><td style='text-align:center;font-weight:bold;'>STANDARD</td><td style='text-align:center;font-weight:bold;'>METHOD OF MEASUREMENT</td></tr><tr><td>"+item.PROCESS_NAME+"</td><td>"+pstandard+"</td><td>"+pmethod+"</td></tr></table></td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD1+"</td><td style='color:"+proccom1color+";border:1px solid gray;'  onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE1+"</td><td style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD2+"</td><td style='color:"+proccom2color +";border:1px solid gray;'  onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE2+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none;border:1px solid gray;'>"+item.PERIOD3+"</td><td style='color:"+proccom3color+";border:1px solid gray;'  width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE3+"</td></tr>";
   }
  });        
 itemRow+="</table>";  

 $("#divPracticeAccountProcessWisePanel").html(itemRow);
 document.getElementById('divPracticeAccountProcess').style.display = 'table-cell';
 document.getElementById('tblPracticeAccountProcessWise').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountProcessWise').style.marginTop ='5%';
 document.getElementById('tblPracticeAccountProcessWise').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountProcessWise').style.fontSize ='larger';
 document.getElementById('tblPracticeAccountProcessWise').style.textAlign ='center';
 document.getElementById('tblPracticeAccountProcessWise').style.width = '100%';

//document.getElementById('tblPracticeAccountProcessWise').getElementsByTagName("td");
var cells = document.getElementById('tblPracticeAccountProcessWise').getElementsByTagName("td");
//for (var i = 0; i < cells.length; i++) {
//}
var itemRowAvg="<table id='tblPracticeAccountProcessWiseAvg' border='1' style='font-family: Verdana;width:90%;border-collapse: collapse;'>";   
if(compliance1 != '' & compliance1!='NA')
{
 if(parseInt(compliance1)<=100 && parseInt(compliance1)>= 86 )
   {
   avgproccom1color = "green";
   }
   else if(parseInt(compliance1)<= 85 && parseInt(compliance1)>= 70 )
   {
   avgproccom1color = "rgb(255, 192, 0)";
   }
   else if(parseInt(compliance1)<= 69 )
   {
   avgproccom1color = "#B44B4B";
   }
}
else
{
  avgproccom1color = "gray";
}   
if(compliance2 != '' & compliance2 !='NA')
{   
   if(parseInt(compliance2)<=100 && parseInt(compliance2)>= 86 )
   {
   avgproccom2color = "green";
   }
   else if(parseInt(compliance2)<= 85 && parseInt(compliance2)>= 70 )
   {
   avgproccom2color = "rgb(255, 192, 0)";
   }
   else if(parseInt(compliance2)<= 69)
   {
   avgproccom2color = "#B44B4B";
   }
}   
else
{
  avgproccom2color = "gray";
} 

if(compliance3 != '' && compliance3 !='NA' )
{
   if(parseInt(compliance3)<=100 && parseInt(compliance3)>= 86 )
   {
   avgproccom3color = "green";
   }
   else if(parseInt(compliance3)<= 85 && parseInt(compliance3)>= 70 )
   {
   avgproccom3color = "rgb(255, 192, 0)";
   }
   else if(parseInt(compliance3)<= 69 )
   {
   avgproccom3color = "#B44B4B";
   }
}   
else
{
 avgproccom3color = "gray";
} 

var avgval1,avgval2,avgval3;
if(compliance1!='' && compliance1!='NA')
{
avgval1= Math.round(compliance1);
}
else
{
avgval1=compliance1;
}
if(compliance2!=''  && compliance2!='NA')
{
avgval2= Math.round(compliance2);
}
else
{
avgval2=compliance2;
}
if(compliance3!=''  && compliance3!='NA')
{
avgval3= Math.round(compliance3);
}
else
{
avgval3=compliance3;
}
//itemRowAvg+="<tr style='background-color:rgb(14, 114, 139); font-weight:bold'><td style='width:48%'>a (%)</td></tr>";
itemRowAvg += "<tr><td style='background-color:white;color:black;border:1px solid gray;' width='58%'>OVERALL COMPLIANCE</td><td style='color:" + avgproccom1color + ";border:1px solid gray;' width= '14%;'>" + avgval1 + "</td><td  style='color:" + avgproccom2color + ";border:1px solid gray;' width= '14%;'>" + avgval2 + "</td><td  style='color:" + avgproccom3color + ";border:1px solid gray;' width= '14%;'>" + avgval3 + "</td></tr>";
itemRowAvg+="</table>";
 $("#divPracticeAccountProcessWiseAvg").html(itemRowAvg);
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.fontSize ='larger';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.width ='100%';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.textAlign ='center'; 
 
}

function PRFailure()
{
alert('Process wise failure');
}  

function BindPracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3) 
{
WService.ProcessWiseValue(practice,account,procperiod1,procperiod2,procperiod3,PRSuccess,PRFailure);
}

function PDSuccess(data)
{
 if(data.length==17)
              {
               //alert("Data not found");
              }
              else
              {
              data=  $.parseJSON(data);
              }
              exportData = data;
  
var itemRow;        
if(processdata=='1')
{
 itemRow="<table id='tblPracticeAccountProcessWiseData' border='1' style='font-family: Verdana;border-collapse:collapse;'>";  
 $.each(data,function(index,item){
   if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:white'><td style='color:black;width:10%'>No</td><td style='color:black;width:35%'>Project Description</td><td style='color:black;width:15%'>Project Codes</td><td style='color:black;width:15%'>Approval Alert Date</td><td style='color:black;width:15%'>Project Start Date</td><td style='color:black;width:10%'>Diff</td><td style='display:none'>Comments</td></tr>";
   }
   index= index+1;
 
   if((index%2)==0)
   {
    itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align: left; padding-left: 3%;'>"+item.Project_Description+"</td><td>"+item.Project_Codes+"</td><td>"+item.Approval_Alert+"</td><td>"+item.Start_Date+"</td><td>"+item.Diff+"</td><td style='display:none'></td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align: left; padding-left: 3%;'>"+item.Project_Description+"</td><td>"+item.Project_Codes+"</td><td>"+item.Approval_Alert+"</td><td>"+item.Start_Date+"</td><td>"+item.Diff+"</td><td style='display:none'></td></tr>";
   }
  });        
 itemRow+="</table>";  
}              
else if(processdata=='2')
{
 itemRow="<table id='tblPracticeAccountProcessWiseData' border='1' style='font-family: Verdana;border-collapse:collapse'>";  
 $.each(data,function(index,item){
  if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:white'><td style='color:black;width:10%;;border:1px solid gray'>No</td><td style='color:black;border:1px solid gray'>Title of Engagement</td><td style='color:black;border:1px solid gray'>Date Uploaded</td><td style='display:none;border:1px solid gray'>Comments</td></tr>";
   }
   index= index+1;
 
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white;width:10%'><td style='border:1px solid gray'>"+index+"</td><td style='width:50%;text-align:left;padding-left:3%;border:1px solid gray'>"+item.Title_Of_Enggagement+"</td><td style='width:40%;border:1px solid gray'>"+item.Date_Uploaded+"</td><td style='display:none;border:1px solid gray'></td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white;width:10%'><td style='border:1px solid gray'>"+index+"</td><td style='width:50%;text-align:left;padding-left:3%;border:1px solid gray'>"+item.Title_Of_Enggagement+"</td><td style='width:40%;border:1px solid gray'>"+item.Date_Uploaded+"</td><td style='display:none;border:1px solid gray'></td></tr>";
   }
  });        
 itemRow+="</table>";  
}
else 
{
   itemRow="<table id='tblPracticeAccountProcessWiseData' border='1' style='font-family: Verdana;border-collapse:collapse'>";  
 $.each(data,function(index,item){
  if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:white'><td style='color:black;width:10%'>No</td><td style='color:black;width:48%'>Audit Check Points</td><td style='color:black;width:13%'>Audit Date</td><td style='color:black;width:12%'>Status</td><td style='color:black;width:17%'>Audit By</td><td style='display:none'>Comments</td></tr>";

  }
   index= index+1;
 
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align:left; padding-left:3%'>"+item.Action_Point+"</td><td>"+item.Audit_Date+"</td><td style='text-align:left; padding-left:3%'>"+item.status+"</td><td>"+item.Audit_By+"</td><td style='display:none'></td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align:left; padding-left:3%'>"+item.Action_Point+"</td><td>"+item.Audit_Date+"</td><td style='text-align:left; padding-left:3%'>"+item.status+"</td><td>"+item.Audit_By+"</td><td style='display:none'></td></tr>";
   }
  });        
 itemRow+="</table>";  
}
$("#divProcessData").html(itemRow);
 document.getElementById('divPracticeAccountProcessData').style.display = 'table-cell';
 document.getElementById('tblPracticeAccountProcessWiseData').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountProcessWiseData').style.marginTop ='4%';
 document.getElementById('tblPracticeAccountProcessWiseData').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountProcessWiseData').style.fontSize ='larger';
 document.getElementById('tblPracticeAccountProcessWiseData').style.textAlign ='center';
 document.getElementById('tblPracticeAccountProcessWiseData').style.width = '90%';
 document.getElementById('imgClosePracticeAccountProcessData').style.display = 'block';
}

function PDFailure()
{

}

function BindPracticeAccountProcessWiseData (practice,account,period) 
 {
 processdata = process;
 WService.ProcessWiseData(practice,account,period,PDSuccess,PDFailure);
//       var response;
//            $.ajax({
//                type: "POST",
//                url: "WService.asmx/ProcessWiseData",
//                async: false,
//                data: "practice="+ practice+"&account="+account+"&process="+process+"&processname="+processname+"&period="+period,
//                dataType: "text", 
//              success: function (data) {
//              data = data.substr(76); 
//              data = data.slice(0,-9);
//             
// 
////JSONToCSVConvertor(data, "Process Compliance Report", true);
//  }
// });
 }  
            
 function ChangeImageEffects(div)
 {
  document.getElementById(div).style.cursor = 'pointer';
 }
 
 function RestoreImageEffects(div)
 {
  document.getElementById(div).style.cursor = 'hand';
 }
   
 function CategoryEffects(divCat)
 {
    document.getElementById (divCat).style.cursor = "pointer";
 }
    
 function CategoryEffectsRelease(divCat)
 {
   document.getElementById(divCat).style.fontSize ="16px";
 }        
 
 $('divPracticeProcessWisePanel', 'divPracticeAccountWisePanel').css('overflowY', 'auto'); 
   
function ClosePopup(img) 
{
    if(img == 'imgPracticeDetailsClose')
    {
    document.getElementById('divPopupPractice').style.display  = 'none';
    document.getElementById('divOrganization').style.display  = 'block';
    document.getElementById('divPractices').style.display  = 'block';
    document.getElementById('imgNextMonth').style.display = 'block';
    document.getElementById('divImage').style.backgroundColor  = 'white';
    document.getElementById('divResults').style.backgroundColor  = 'white';
    OrgChart();
    }
    else if(img == 'imgPracticeAccountDetailsClose')
    {
    document.getElementById('divPopupPracticeAccount').style.display  = 'none';
    BindChartPractice(parseInt(compliancePracticeValue),practicename,practicePeriod);
    }
    else if(img == 'imgCloseInstructions')
    {
    document.getElementById ("divInstructions").style.display ="none";
    document.getElementById ("divLoginInstructions").style.display ="none";
    document.getElementById ("divOrganization").style.display ="block";
    document.getElementById('divPractices').style.display  = 'block';
    document.getElementById('imgbtnProcess').style.display = 'none';
    document.getElementById('imgNextMonth').style.display = 'block';
    document.getElementById('divImage').style.backgroundColor  = 'white';
    document.getElementById('divResults').style.backgroundColor  = 'white';  
    OrgChart();
    }
    else if(img == 'imgClosePracticeAccountProcessData')
    {
    document.getElementById('divPracticeAccountProcessData').style.display  = 'none';
    BindChartAccount(processValue,procAccountName,accountPeriod);
    }
    else if(img == 'imgLoginInstructionsClose')
    {
    document.getElementById('divLoading').style.display = 'block';
    document.getElementById('divLoginInstructions').style.display  = 'none';
    document.getElementById('divOrganization').style.display  = 'block';
    document.getElementById('divPractices').style.display  = 'block';
    document.getElementById('imgNextMonth').style.display = 'block';
    document.getElementById('divImage').style.backgroundColor  = 'white';
    document.getElementById('divResults').style.backgroundColor  = 'white';
    document.getElementById('divHeaderTab').style.width  = '100%';
    OrgChart();
    }
    else if(img == 'imgCloseAuditReports')
    {
    document.getElementById('divAuditReports').style.display = 'none';
    document.getElementById('divLoading').style.display = 'block';
    document.getElementById('divLoginInstructions').style.display  = 'none';
    document.getElementById('divOrganization').style.display  = 'block';
    document.getElementById('divPractices').style.display  = 'block';
    document.getElementById('imgNextMonth').style.display = 'block';
    document.getElementById('divImage').style.backgroundColor  = 'white';
    document.getElementById('divResults').style.backgroundColor  = 'white';
    document.getElementById('divHeaderTab').style.width  = '100%';
    OrgChart();
    }
}

 function HelpShow()       
 {
     var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome== true)
    {
    document.getElementById('divInstructions').style.height = '76%';
    }
    else
    {
   document.getElementById('divInstructions').style.height = '74%';
    }
    document.getElementById ("divInstructions").style.display ="block";
    document.getElementById ("divOrganization").style.display ="none";
    document.getElementById ("divAuditReports").style.display ="none";
    document.getElementById ("divPopupPractice").style.display ="none";
    document.getElementById ("divPopupPracticeAccount").style.display ="none";
    document.getElementById ("divPracticeAccountProcessData").style.display ="none";
    document.getElementById('divPractices').style.display  = 'none';
    document.getElementById('imgbtnProcess').style.display = 'none';
    document.getElementById('imgNextMonth').style.display = 'none';
    document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
    document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';  
 }
 
 function AuditReportsShow()       
 {
    BindAuditTypes();
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome== true)
    {
    document.getElementById('divAuditReports').style.height = '74%';
    }
    else
    {
   document.getElementById('divAuditReports').style.height = '70%';
    }
    document.getElementById("divAuditReports").style.display ="block";
    document.getElementById("divInstructions").style.display ="none";
    document.getElementById("divLoginInstructions").style.display ="none";
    document.getElementById("divOrganization").style.display ="none";
    document.getElementById("divPopupPractice").style.display ="none";
    document.getElementById("divPopupPracticeAccount").style.display ="none";
    document.getElementById("divPracticeAccountProcessData").style.display ="none";
    document.getElementById('divPractices').style.display  = 'none';
    document.getElementById('imgbtnProcess').style.display = 'none';
    document.getElementById('imgNextMonth').style.display = 'none';
    document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
    document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';  
 }
 
 function ShowPracticeAccountProcessData(obj)
 {
 var tbl = document.getElementById('tblPracticeAccountProcessWiseData');
        if(tbl) tbl.parentNode.removeChild(tbl);

        var table = document.getElementById("tblPracticeAccountwise");
           var row =  table.rows[obj.parentNode.rowIndex];
           var practice = row.cells[1].innerText;
           var account = row.cells[3].innerText;
           var process = row.cells[4].innerText;
           var processname = row.cells[4].innerHTML.toString().split('<')[0];
           var prevCell = $(obj).closest('td').prev();
           var period= prevCell[0].innerText;
           var complianceProcessValue = prevCell.prevObject[0].innerText;
            
           var popup = document.getElementById('divPracticeAccountProcessData');
           if( prevCell.prevObject[0].innerText!='' && complianceProcessValue !='NA')
           {
           popup.style.display = 'block';
           
            var month = period.substring(6, 4);
            var yearr = period.substring(4,2);
            var monthName = MonthName(month,yearr);  
           
           document.getElementById("spDataHeader").innerHTML= practicename + ' - '+ processname.toUpperCase()+ ' ('+monthName+') - ' + complianceProcessValue + ' %';
           titleData = practicename + '_' + accountname + '_'+ processname.toUpperCase();
           BindPracticeAccountProcessWiseData(practice,account,period);
           }
           else
           {
           popup.style.display = 'none';
           alert("NA : Not Applicable");
           }
           
          
 }
 
 
 
 function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';    
    //Set Report title in first row or line
    
    //CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = "";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    //link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function ChangeBackgroundColor(obj) 
{
 obj.style.backgroundColor = 'rgb(104, 70, 199)';
 obj.style.color = 'white';
 obj.style.cursor = 'pointer';
 }

function RestoreBackgroundColorPractice(row)
{
RestoreCellValues("tblPracticewise");
 row.style.backgroundColor = 'white'; 
 row.style.cursor = 'hand';
}

function RestoreBackgroundColorAccount(row)
{
RestoreCellValues("tblPracticeAccountwise");
 row.style.backgroundColor = 'white'; 
 row.style.cursor = 'hand';
}

function RestoreBackgroundColorProcess(row)
{
RestoreCellValues("tblPracticeAccountProcessWise");
 row.style.backgroundColor = 'white'; 
 row.style.cursor = 'hand';
}

function ChangeBackgroundColorPractice(obj) 
{

 obj.style.backgroundColor = 'rgb(104, 70, 199)';
 obj.style.color = 'white';
 obj.style.cursor = 'pointer';


}

      
function RestoreCellValues(tblname) 
{
//var avoidPractice;
if(tblname == "tblPracticewise" ){
var cells = document.getElementById(tblname).getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
if((i%9) != 0)
 {
    if((cells[i].innerHTML =='NA')) {
       cells[i].style.color = "Gray";
   }
   if (cells[i].innerHTML <= 100 && cells[i].innerHTML >= 86) {
        cells[i].style.color = "green";
    }
    if(cells[i].innerHTML <= 85 && cells[i].innerHTML >= 70){
        cells[i].style.color = "rgb(255, 192, 0)";
    }   
    if(cells[i].innerHTML <= 69 ){
       cells[i].style.color = "#B44B4B";
    }
 }    
 }
} 
  
else if(tblname == "tblPracticeAccountwise"){
var cells = document.getElementById(tblname).getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
if((i%11) != 0)
 {
   if((cells[i].innerHTML =='NA')) {
       cells[i].style.color = "Gray";
   }
   if (cells[i].innerHTML <= 100 && cells[i].innerHTML >= 86) {
        cells[i].style.color = "green";
    }
    if(cells[i].innerHTML <= 85 && cells[i].innerHTML >= 70){
        cells[i].style.color = "rgb(255, 192, 0)";
    }   
    if(cells[i].innerHTML <= 69 ){
       cells[i].style.color = "#B44B4B";
    }
 }    
 }
 } 
 
 else if(tblname == "tblPracticeAccountProcessWise")
 {
var cells = document.getElementById(tblname).getElementsByTagName("td");
//var cel = document.getElementById('tdindex1').innerText;
//alert(cel);
for (var i = 0; i < cells.length; i++) 
{
if(cells[i].innerHTML.indexOf(".") == -1)
{
 if(cells[i].innerHTML =='NA') 
   {
       cells[i].style.color = "gray";
   }
   if (cells[i].innerHTML <= 100 && cells[i].innerHTML >= 86) 
    {
        cells[i].style.color = "green";
    }
    if(cells[i].innerHTML <= 85 && cells[i].innerHTML >= 70)
    {
        cells[i].style.color = "rgb(255, 192, 0)";
    }   
    if(cells[i].innerHTML <= 69 )
    {
       cells[i].style.color = "#B44B4B";
    }
  }  
 }
 } 
}
