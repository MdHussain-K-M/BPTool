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
    
  function ExportExcel()
  {
   JSONToCSVConvertor(exportData,titleData,true);
  }
   function LoginInstruction()
    {
    document.getElementById ("divInstructions").style.display ="block";
    document.getElementById ("divOrganization").style.display ="none";
    document.getElementById('divPractices').style.display  = 'none';
    document.getElementById('imgbtnProcess').style.display = 'none';
    document.getElementById('imgNextMonth').style.display = 'none';
    document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
    document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';    
    }

   //Chart Practice
     function OrgChart () {
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
         type: 'solidgauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    
	    title: {
	        text: 'ORGANIZATION COMPLIANCE'
	    },
	    
	    pane: {
	        startAngle: -360,
	        endAngle: 360,
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
	            backgroundColor: 'white',
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
	            text: organization
	        },
	        plotBands: [{
	            from: 0,
	            to: 70,
	            color: '0000FF' // #B44B4B
	        }, {
	            from: 70,
	            to: 85,
	            color: '0000FF' // rgb(71, 67, 219)
	        }, {
	            from: 85,
	            to: 100,
	            color: '0000FF' // green
	        }]        
	    },
	
	    series: [{
	        name: organization,
	        data: [parseInt(datt)],
	        tooltip: {
	            valueSuffix: ' %'
	        }
	    }]
	
	}, function(){});

var practicetext;
for (i = 0; i < 11; i++) { 
if(i==0)
{
comValue = practice1;
document.getElementById("spPractice1").innerHTML='ADMIN';
}
else if(i==1)
{
comValue = practice2;
document.getElementById("spPractice2").innerHTML ='CMG';
}
else if(i==2)
{
comValue = practice3;
document.getElementById("spPractice3").innerHTML ='DELIVERY';
}
else if(i==3)
{
comValue = practice4;
document.getElementById("spPractice4").innerHTML ='IT';
}
else if(i==4)
{
comValue = practice5;
document.getElementById("spPractice5").innerHTML ='L&D';
}
else if(i==5)
{
comValue = practice6;
document.getElementById("spPractice6").innerHTML ='LEGAL';
}

else if (i == 6) {
    comValue = practice7;
    document.getElementById("spPractice7").innerHTML = 'PEOPLE SERVICE';
}
    
else if(i==7)
{
comValue = practice8;
document.getElementById("spPractice8").innerHTML ='PROCESS';
}

else if (i == 8) {
    comValue = practice9;
    document.getElementById("spPractice9").innerHTML = 'RMG';
}

else if (i == 9) {
    comValue = practice10;
    document.getElementById("spPractice10").innerHTML = 'TRAVEL';
}
    PracticeWiseChart('divPractice'+(i+1),comValue,practicetext);
 }
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
     $('#'+div).highcharts({
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
	        startAngle: -175,
	        endAngle: 175,
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
	            to: 70,
	            color: '#B44B4B' // #B44B4B
	        }, {
	            from: 70,
	            to: 85,
	            color: 'rgb(71, 67, 219)' // rgb(71, 67, 219)
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
	
	}, function(){});
}

//Chart Account
 function BindChartPractice(value,practicename) {
     var organization;
     var monthnamealert= allperiod[accperiod1-1];
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
	    
	    title: {
	        text:  'COMPLIANCE'
	    },
	    
	    pane: {
	        startAngle: -300,
	        endAngle: 300,
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
	            text: organization
	        },
	        plotBands: [{
	            from: 0,
	            to: 70,
	            color: '#B44B4B' // #B44B4B
	        }, {
	            from: 70,
	            to: 85,
	            color: 'rgb(71, 67, 219)' // rgb(71, 67, 219)
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
function BindChartAccount(value,accountname) {
     var organization;
     var monthnamealert= allperiod[procperiod1-1];
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
	        text: 'COMPLIANCE'
	    },
	    
	    pane: {
	        startAngle: -10,
	        endAngle: 10,
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
	            backgroundColor: '#6846c7',
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
	            text: organization
	        },
	        plotBands: [{
	            from: 0,
	            to: 70,
	            color: '#B44B4B' // #B44B4B
	        }, {
	            from: 70,
	            to: 85,
	            color: 'rgb(71, 67, 219)' // rgb(71, 67, 219)
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
      
       $.ajax({
                type: "POST",
                url: "WService.asmx/AccountWiseAverage",
                async: false,
                data: "practice="+ practice +"&prd1= "+accperiod1+"&prd2="+accperiod2+ "&prd3= "+accperiod3, 
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
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
            }
           });
           
     PracticeAccountArrowCheck(accperiod1,accperiod2,accperiod3);
     PracticeAccountWise(practice,practicename,compliance1,compliance2,compliance3);
      }
    
    //Month Change Proocess 
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
       
           $.ajax({
                type: "POST",
                url: "WService.asmx/ProcessWiseAverage",
                async: false,
                data: "practice="+ practice +"&account="+account+"&prd1= "+procperiod1+"&prd2="+procperiod2+ "&prd3= "+procperiod3, 
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
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
            }
           });       
    // PracticeAccountProcessArrowCheck(procperiod1,procperiod2,procperiod3);
     PracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3);
   }
    
    //Arrow Check Practice
    function PracticeArrowCheck(period1,period2,period3)
   {
      if(period3 >= totalperiod)
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
      if(period3 >= totalperiod)
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
      if(period3 >= totalperiod)
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
   
//Total Count Period   
function TotalPeriod()
{
 var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/TotalPeriod",
                async: false,
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
              data=  $.parseJSON(data);
               
             $.each(data,function(index,item){
              if(index==0)
              {
               totalperiod= item.Column1;
              } 
              });
            }
           });
AllPeriod();           
}  

//All Period   
function AllPeriod()
{
 var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/AllPeriod",
                async: false,
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
              data=  $.parseJSON(data);

     $.each(data,function(index,item){
     allperiod[index]=item.PERIOD;
         });       
       }
   });
}  
   
//AccessRights   
function AccessRights(empcode)
{
 var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/AccessRights",
                async: false,
                data: "empcode="+ empcode, 
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
              data=  $.parseJSON(data);
             
 $.each(data,function(index,item){
 accesspractice = item.DB_AR_PRACTICE;
 accessaccounts = item.DB_AR_ACCOUNTS;
 });             
  }             
});
}     
    
//PracticeWiseValue        
function PracticeWise(period1,period2,period3)
{
var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/PracticeWiseValue",
                async: false,
                data: "period1="+ period1 +"&period2="+ period2 +"&period3="+period3, 
                dataType: "text", 
              success: function (data) {
              var tempdata = new Array();
             tempdata = data.split('#');
             tempdata[0] = tempdata[0].substr(76); 
             tempdata[0]=  $.parseJSON(tempdata[0]);
               
 var itemRow="<table id='tblPracticewise' border='1' class='colorMe' style='font-family: Verdana;width:100%'>";  
  $.each(tempdata[0],function(index,item){

  var val1,val2,val3;  
  if(index==0)
   {
   var mon1,year1,mon2,year2,mon3,year3;
   
   
if(period1 <= totalperiod)
{
       period1= allperiod[period1-1];
       mon1 = period1.substring(6, 4);
       year1 = period1.substring(4,2);
       period1 = MonthName(mon1,year1);
}      
else
{
period1=''
}
if(period2 <= totalperiod)
{
   period2 = allperiod[period2-1];
   mon2 = period2.substring(6, 4);
   year2 = period2.substring(4,2);
   period2 = MonthName(mon2,year2);
}
else
{
period2='';   
}
if(period3<=totalperiod)
{
   period3 = allperiod[period3-1];
   mon3 = period3.substring(6, 4);
   year3 = period3.substring(4,2);
   period3 = MonthName(mon3,year3);
}
else
{
period3='';
}
  
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td width='10%' style='color: #dde3e4;font-weight:bold'>NO</td><td width='10%' style='color: #dde3e4;font-weight:bold;display:none'>PRACTICE ID</td><td width='33%' style='color: #dde3e4;font-weight:bold;'>PRACTICE</td><td width='10%' style='color: #dde3e4;font-weight:bold;display:none'>PERIOD1</td><td width='20%' style='color: #dde3e4;font-weight:bold;'>"+period1+"</td><td width='10%' style='color: #AFC0CA;font-weight:bold;display:none'>PERIOD2</td><td width='20%' style='color: #dde3e4;font-weight:bold;'>"+period2+"</td><td width='10%' style='color: #dde3e4;font-weight:bold;display:none'>PERIOD3</td><td width='20%' style='color: #dde3e4;font-weight:bold'>"+period3+"</td></tr>";
   }
   index= index+1;
   if(item.MON1 !='')
   {
   val1= Math.round(item.MON1);
   }
   else
   {
   val1='';
   }
   if(item.MON2 !='')
   {
   val2= Math.round(item.MON2);
   }
   else
   {
   val2='';
   }
   if(item.MON3 !='')
   {
   val3= Math.round(item.MON3);
   }
   else
   {
   val3='';
   }   
      
   //COLOR 1
 if(item.MON1 != '')
   {
   if(val1 <=100 && val1 >= 86 )
   {
   com1color = "green";
   }
   else if(val1 <= 85 && val1 >= 70 )
   {
   com1color = "rgb(71, 67, 219)";
   }
   else if(val1 <= 69 )
   {
   com1color = "#B44B4B";
   }
 }
   
    //COLOR2
 if(item.MON2 != '')
 {
   if(val2 <=100 && val2 >= 86 )
   {
   com2color = "green";
   }
   else if(val2 <= 85 && val2 >= 70 )
   {
   com2color = "rgb(71, 67, 219)";
   }
   else if(val2 <= 69 )
   {
   com2color = "#B44B4B";
   }
 }

    //COLOR 3
 if(item.MON3 != '')
 {    
   if(val3 <=100 && val3 >= 86 )
   {
   com3color = "green";
   }
   else if(val3 <= 85 && val3 >= 70 )
   {
   com3color = "rgb(71, 67, 219)";
   }
   else if(val3 <= 69 )
   {
   com3color = "#B44B4B";
   }
 }

//Practice dials
 if(index==1)
 {
 if(item.MON1!='')
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
  if(item.MON1!='')
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
 if(item.MON1!='')
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
  if(item.MON1!='')
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
  if(item.MON1!='')
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
  if(item.MON1!='')
 {
 practice6= Math.round(item.MON1);
 }
  else
 {
 practice6='0';
 }
 }      

if((index%2)==0)
   {
    itemRow+="<tr id='trid"+index+"' style='background-color:white'><td width='10%' >"+index+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.ID+"</td><td style='text-align:left; padding-left:5%'>"+item.PRACTICE+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD1+"</td><td style='font-weight:bold;color:"+com1color+"' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)')>"+val1+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD2+"</td><td style='font-weight:bold;color:"+com2color+"' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val2+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD3+"</td><td style='font-weight:bold;color:"+com3color+"' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val3+"</td></tr>";
   }
   else
   {
   itemRow+="<tr id='trid"+index+"' style='background-color:white;'><td width='10%'>"+index+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.ID+"</td><td style='text-align:left; padding-left:5%'>"+item.PRACTICE+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD1+"</td><td style='font-weight:bold;color:"+com1color+"' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val1+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD2+"</td><td style='font-weight:bold;color:"+com2color+"' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val2+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD3+"</td><td style='font-weight:bold;color:"+com3color+"' onmouseover='ChangeBackgroundColorPractice(this)' onmouseout='RestoreBackgroundColorPractice(this)' onclick='PracticePopup(this)'>"+val3+"</td></tr>";
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
tempdata[1] = tempdata[1].slice(0,-9);
tempdata[1] = $.parseJSON(tempdata[1]);
var com1color;
var com2color;
var com3color;
var itemRow="<table id='tblPracticewiseAverage' border='1' style='font-family: Verdana;width:100%'>";  
  $.each(tempdata[1],function(index,item){
   if(index==0)
   {
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td colspan='2' width='10%' style='color:white;font-weight:bold;display:none;'>AVERAGE</td><td width='33%' style='color:white;font-weight:bold;display:none;'>AVERAGE1</td><td width='10%' style='color:white;font-weight:bold;display:none'>AVERAGE2</td><td width='20%' style='color:white;font-weight:bold;display:none;'>AVERAGE3</td></tr>";
   }
   index= index+1;
//   if(period ==1 )
//   {
//   orgRecentCompliance = item.COMPLIANCE1;
//   }
if(item.COMPLIANCE1 != '')
 {  
   if(parseInt(item.COMPLIANCE1)<=100 && parseInt(item.COMPLIANCE1)>= 86 )
   {
   avgcom1color = "green";
   }
   else if(parseInt(item.COMPLIANCE1)<= 85 && parseInt(item.COMPLIANCE1)>= 70 )
   {
   avgcom1color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE1)<= 69 )
   {
   avgcom1color = "#B44B4B";
   }
 }  
   
 if(item.COMPLIANCE2!= '')
 {    
   if(parseInt(item.COMPLIANCE2)<=100 && parseInt(item.COMPLIANCE2)>= 86 )
   {
   avgcom2color = "green";
   }
   else if(parseInt(item.COMPLIANCE2)<= 85 && parseInt(item.COMPLIANCE2)>= 70 )
   {
   avgcom2color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE2)<= 69 )
   {
   avgcom2color = "#B44B4B";
   }
 } 
 
 if(item.COMPLIANCE3 != '')
 { 
    if(parseInt(item.COMPLIANCE3)<=100 && parseInt(item.COMPLIANCE3)>= 86 )
   {
   avgcom3color = "green";
   }
   else if(parseInt(item.COMPLIANCE3)<= 85 && parseInt(item.COMPLIANCE3)>= 70 )
   {
   avgcom3color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE3)<= 69 )
   {
   avgcom3color = "#B44B4B";
   }
 }  
 var avgval1,avgval2,avgval3;
 if(item.COMPLIANCE1!='')
 {
 avgval1= parseInt(item.COMPLIANCE1);
 }
 else
 {
 avgval1='';
 }
 if(item.COMPLIANCE2!='')
 {
 avgval2= parseInt(item.COMPLIANCE2);
 }
 else
 {
 avgval2='';
 }
 if(item.COMPLIANCE3!='')
 {
 avgval3= parseInt(item.COMPLIANCE3);
 }
 else
 {
 avgval3='';
 }
  if((index%2)==0)
   {
   itemRow+="<tr style='font-weight:bold'><td style='text-align:center;width: 43%;background-color:rgb(104, 70, 199);color:white'>AVERAGE (%)</td><td style='WIDTH: 20%;color:"+avgcom1color+"'>"+avgval1+"</td><td style='WIDTH: 20%;color:"+avgcom2color+"'>"+avgval2+"</td><td style='width:20%;color:"+avgcom3color+"'>"+avgval3+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='font-weight:bold;'><td style='text-align:center;width: 43%;background-color:rgb(104, 70, 199);color:white'>AVERAGE (%)</td><td style='WIDTH: 20%;color:"+avgcom1color+"'>"+avgval1+"</td><td style='WIDTH: 20%;color:"+avgcom2color+"'>"+avgval2+"</td><td style='width:20%;color:"+avgcom3color+"'>"+avgval3+"</td></tr>";
   }
  });        
 itemRow+="</table>";  
 $("#divPracticeWiseAvg").html(itemRow);
 document.getElementById('tblPracticewiseAverage').style.margin ='0px auto';
 document.getElementById('tblPracticewiseAverage').style.fontFamily ='Calibri';
 document.getElementById('tblPracticewiseAverage').style.fontSize ='larger';
 document.getElementById('tblPracticewiseAverage').style.textAlign ='center';             
   }
 });
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
            var period= prevCell[0].innerText;
            compliancePracticeValue = prevCell.prevObject[0].innerText;
            compliance1= row.cells[4].innerText;
            compliance2= row.cells[6].innerText;
            compliance3= row.cells[8].innerText;
 
if(accesspractice == 0)
{       
        var popup = document.getElementById('divPopupPractice');
        document.getElementById('divOrganizations').style.backgroundColor = 'black';
        document.getElementById('divOrganization').style.display  = 'none';
        document.getElementById('divPractices').style.display  = 'none';
        document.getElementById('imgbtnProcess').style.display = 'none';
        //document.getElementById('imglegend').style.display = 'none';
        document.getElementById('imgNextMonth').style.display = 'none';
        document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
        document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';
        popup.style.display = 'block';
         
        document.getElementById('divPracticeAccountWisePanel').style.display = 'inline';

        BindChartPractice(parseInt(compliancePracticeValue),practicename);//if i give 12 its working
        glbpractice = practice;
        glbpracticename = practicename;
        glbperiod = period;
        PracticeAccountWise(practice,practicename,compliance1,compliance2,compliance3);
        PracticeAccountArrowCheck(period1,period2,period3);
 }
else
{
if(accesspractice == practice)
{
 var popup = document.getElementById('divPopupPractice');
        document.getElementById('divOrganizations').style.backgroundColor = 'black';
        document.getElementById('divOrganization').style.display  = 'none';
        document.getElementById('imgbtnProcess').style.display = 'none';
        document.getElementById('divPractices').style.display  = 'none';
        //document.getElementById('imglegend').style.display = 'none';
        document.getElementById('imgNextMonth').style.display = 'none';
        document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
        document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';
        popup.style.display = 'block';
         
        document.getElementById('divPracticeAccountWisePanel').style.display = 'inline';

        BindChartPractice(parseInt(compliancePracticeValue),practicename);//if i give 12 its working
        glbpractice = practice;
        glbpracticename = practicename;
        glbperiod = period;
        PracticeAccountWise(practice,practicename,compliance1,compliance2,compliance3);
        PracticeAccountArrowCheck(period1,period2,period3);
}
else
{
alert("You can see the details of your own practice");
}
}
}

function PracticeAccountWise(practice,practicename,compliance1,compliance2,compliance3)
{
      BindPracticeAccountWise(practice,practicename,compliance1,compliance2,compliance3);
}

function BindPracticeAccountWise(practice,practicename,compliance1,compliance2,compliance3) {
          var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/AccountWiseValue",
                async: false,
                data: "practice="+ practice +"&accountaccess=" + accessaccounts +"&prd1= "+accperiod1+"&prd2="+accperiod2+ "&prd3= "+accperiod3, 
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
              data=  $.parseJSON(data);
    
    document.getElementById('spPracticeProcessWiseHeader').innerHTML = practicename.toUpperCase();
    
 var itemRow="<table id='tblPracticeAccountwise' border='1' class='sortable' style='font-family: Verdana;'>";  
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
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;font-weight:bold;width:10%'>NO</td><td style='color:white;font-weight:bold;display:none;'>PRACTICE ID</td><td style='color:white;font-weight:bold;display:none'>PRACTICE NAME</td><td style='color:white;font-weight:bold;display:none'>ACCOUNT ID</td><td style='color:white;font-weight:bold;width:42%'>ACCOUNT</td><td style='color:white;font-weight:bold;display:none'>PERIOD1</td><td style='color:white;font-weight:bold;width:16%'>"+period1+"</td><td style='color:white;font-weight:bold;display:none'>PERIOD2</td><td style='color:white;font-weight:bold;width:16%'>"+period2+"</td><td style='color:white;font-weight:bold;display:none'>PERIOD3</td><td style='color:white;font-weight:bold;width:16%'>"+period3+"</td></tr>";
   }
   index= index+1;
    
   //COLOR 1
if(item.COMPLIANCE1 != '')
{    
   if(parseInt(item.COMPLIANCE1)<=100 && parseInt(item.COMPLIANCE1)>= 86 )
   {
   acccom1color = "green";
   }
   else if(parseInt(item.COMPLIANCE1)<= 85 && parseInt(item.COMPLIANCE1)>= 70 )
   {
   acccom1color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE1)<= 69 )
   {
   acccom1color = "#B44B4B";
   }
}
else
{
   acccom1color = "black";
} 
 //COLOR2
if(item.COMPLIANCE2 != '')
{        
   if(parseInt(item.COMPLIANCE2)<=100 && parseInt(item.COMPLIANCE2)>= 86 )
   {
   acccom2color = "green";
   }
   else if(parseInt(item.COMPLIANCE2)<= 85 && parseInt(item.COMPLIANCE2)>= 70 )
   {
   acccom2color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE2)<= 69 )
   {
   acccom2color= "#B44B4B";
   }
}
else
{
   acccom2color = "black";
} 
    //COLOR 3
if(item.COMPLIANCE3 != '')
{        
   if(parseInt(item.COMPLIANCE3)<=100 && parseInt(item.COMPLIANCE3)>= 86 )
   {
   acccom3color = "green";
   }
   else if(parseInt(item.COMPLIANCE3)<= 85 && parseInt(item.COMPLIANCE3)>= 70 )
   {
   acccom3color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE3)<= 69 )
   {
   acccom3color = "#B44B4B";
   }
}
else
{
   acccom3color = "black";
} 
   
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PRACTICE_ID+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PRACTICE_NAME+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none'>"+item.ACCOUNT_ID+"</td><td  style='text-align:left; padding-left:5%;'>"+item.ACCOUNT_NAME+"</td><td width='50%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD1+"</td><td style='font-weight:bold;color:"+acccom1color+"' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountWisePopup(this)'>"+item.COMPLIANCE1+"</td><td width='50%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD2+"</td><td style='font-weight:bold;color:"+acccom2color+"' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountWisePopup(this)'>"+item.COMPLIANCE2+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD3+"</td><td style='font-weight:bold;color:"+acccom3color+"' width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountWisePopup(this)'>"+item.COMPLIANCE3+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PRACTICE_ID+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PRACTICE_NAME+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none'>"+item.ACCOUNT_ID+"</td><td style='text-align:left; padding-left:5%;'>"+item.ACCOUNT_NAME+"</td><td width='50%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD1+"</td><td style='font-weight:bold;color:"+acccom1color+"' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountWisePopup(this)'>"+item.COMPLIANCE1+"</td><td width='50%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD2+"</td><td style='font-weight:bold;color:"+acccom2color+"' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountWisePopup(this)'>"+item.COMPLIANCE2+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD3+"</td><td style='font-weight:bold;color:"+acccom3color+"' width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorAccount(this)' onclick='ShowPracticeAccountWisePopup(this)'>"+item.COMPLIANCE3+"</td></tr>";
   }
  });        
 itemRow+="</table>";  

 $("#divPracticeAccountWisePanel").html(itemRow);
 document.getElementById('divPracticeProcessWise').style.display = 'table';
 document.getElementById('divPracticeProcessWise').style.maxHeight = '350px';
 document.getElementById('divPracticeProcessWise').style.overflowY = 'auto';
 document.getElementById('divPracticeProcessWise').style.display = 'table-cell';
 document.getElementById('tblPracticeAccountwise').style.margin ='0 auto';
     var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome== true)
    {
    document.getElementById('tblPracticeAccountwise').style.marginTop ='0%';
    //document.getElementById ("imgClose").style.marginLeft ="-1%";
    }
    else
    {
    document.getElementById('tblPracticeAccountwise').style.marginTop ='0%';
//    document.getElementById ("divCat5").style.width ="20.5%";
//    document.getElementById ("imgClose").style.marginLeft ="-1%px";
    }
 document.getElementById('tblPracticeAccountwise').style.height ='auto';
  document.getElementById('tblPracticeAccountwise').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountwise').style.fontSize ='larger';
 document.getElementById('tblPracticeAccountwise').style.textAlign ='center';
 document.getElementById('tblPracticeAccountwise').style.width ='100%';
  
var itemRowAvg="<table id='tblPracticeAccountwiseAvg' border='1' style='font-family: Verdana;width:100%'>";   
if(compliance1 !='')
{
 if(parseInt(compliance1)<=100 && parseInt(compliance1)>= 86 )
   {
   avgacccom1color = "green";
   }
   else if(parseInt(compliance1)<= 85 && parseInt(compliance1)>= 70 )
   {
   avgacccom1color = "rgb(71, 67, 219)";
   }
   else if(parseInt(compliance1)<= 69 )
   {
   avgacccom1color = "#B44B4B";
   }
} 
else
{
avgacccom1color = "black";
}  
if(compliance2 !='')
{   
   if(parseInt(compliance2)<=100 && parseInt(compliance2)>= 86 )
   {
   avgacccom2color = "green";
   }
   else if(parseInt(compliance2)<= 85 && parseInt(compliance2)>= 70 )
   {
   avgacccom2color = "rgb(71, 67, 219)";
   }
   else if(parseInt(compliance2)<= 69 )
   {
   avgacccom2color = "#B44B4B";
   }
}
else
{
avgacccom2color = "black";
}  
if(compliance3 !='')
{   
   if(parseInt(compliance3)<=100 && parseInt(compliance3)>= 86)
   {
   avgacccom3color = "green";
   }
   else if(parseInt(compliance3)<= 85 && parseInt(compliance3)>= 70)
   {
   avgacccom3color = "rgb(71, 67, 219)";
   }
   else if(parseInt(compliance3)<= 69)
   {
   avgacccom3color = "#B44B4B";
   }
}  
else
{
avgacccom3color = "black";
}   

var avgaccval1,avgaccval2,avgaccval3;
if(compliance1!='')
{
avgaccval1 = Math.round(compliance1);
}
else
{
avgaccval1='';
}
if(compliance2!='')
{
avgaccval2 = Math.round(compliance2);
}
else
{
avgaccval2='';
}
if(compliance3!='')
{
avgaccval3 = Math.round(compliance3);
}
else
{
avgaccval3='';
}
itemRowAvg+="<tr style='font-weight:bold'><td style='background-color:rgb(104, 70, 199);color:white'  width='52%'>AVERAGE (%)</td><td style='color:"+avgacccom1color+"'  width= '16%'>"+avgaccval1+"</td><td style='color:"+avgacccom2color+"'  width= '16%'>"+avgaccval2+"</td><td style='color:"+avgacccom3color+"'  width= '16%'>"+avgaccval3+"</td></tr>";          
itemRowAvg+="</table>";
itemRowAvg;
$("#divPracticeAccountWiseAvg").html(itemRowAvg);
 document.getElementById('tblPracticeAccountwiseAvg').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountwiseAvg').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountwiseAvg').style.fontSize ='larger';
 //document.getElementById('tblPracticeAccountwiseAvg').style.fontFamily ='Arial';
 document.getElementById('tblPracticeAccountwiseAvg').style.textAlign ='center';  
    }
   });
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
            var row =  table.rows[obj.parentNode.rowIndex];
            var practice = row.cells[1].innerText;
            var practicename = row.cells[2].innerText.toUpperCase();
            account = row.cells[3].innerText;
            accountname = row.cells[4].innerText.toUpperCase();
            var prevCell = $(obj).closest('td').prev();
            var period= prevCell[0].innerText;
            complianceAccountValue = prevCell.prevObject[0].innerText;
            processValue = parseInt(complianceAccountValue);
            procAccountName = accountname;
            BindChartAccount(processValue,procAccountName);//if i give 12 its working
            document.getElementById('spPracticeAccountHeader').innerHTML = practicename + ' - ' + accountname;
            compliance1= row.cells[6].innerText;
            compliance2= row.cells[8].innerText;
            compliance3= row.cells[10].innerText;
            
            PracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3);
            
 
           var popup = document.getElementById('divPopupPracticeAccount');
           popup.style.display = 'block';
           PracticeAccountProcessArrowCheck(procperiod1,procperiod2,procperiod3);
 }
 
 function PracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3)
   {
      BindPracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3);
   }
  
function BindPracticeAccountProcessWise(practice,practicename,account,accountname,compliance1,compliance2,compliance3) {
          var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/ProcessWiseValue",
                async: false,
                data: "practice="+ practice +"&account="+account+"&prd1="+ procperiod1 + "&prd2="+ procperiod2 + "&prd3="+procperiod3, 
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
               data=  $.parseJSON(data);
    
document.getElementById('spPracticeAccountHeader').innerHTML = practicename + ' - ' + accountname;
 
 var itemRow="<table id='tblPracticeAccountProcessWise' border='1' style='font-family: Verdana;'>";  
 $.each(data,function(index,item){
   if(index==0)
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
   
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;font-weight:bold;width:10%'>NO</td><td style='display:none'>PRACTICE</td><td style='display:none'>ACCOUNT</td><td style='display:none'>PROCESS</td><td style='color:white;font-weight:bold;width:42%'>PROCESS</td><td style='color:white;font-weight:bold;display:none'>period1</td><td style='color:white;font-weight:bold;width:16%'>"+period1+"</td><td style='color:white;font-weight:bold;display:none'>period2</td><td style='color:white;font-weight:bold;width:16%'>"+period2+"</td><td style='color:white;font-weight:bold;display:none'>period3</td><td style='color:white;font-weight:bold;width:16%'>"+period3+"</td></tr>";
   }
   index= index+1;
       //COLOR 1
if(item.COMPLIANCE1 != '')
{       
   if(parseInt(item.COMPLIANCE1)<=100 && parseInt(item.COMPLIANCE1)>= 86 )
   {
   proccom1color = "green";
   }
   else if(parseInt(item.COMPLIANCE1)<= 85 && parseInt(item.COMPLIANCE1)>= 70 )
   {
   proccom1color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE1)<= 69 )
   {
   proccom1color = "#B44B4B";
   }
}
else
{
   proccom1color = "black";
}    
    //COLOR2
if(item.COMPLIANCE2 != '')
{    
   if(parseInt(item.COMPLIANCE2)<=100 && parseInt(item.COMPLIANCE2)>= 86 )
   {
   proccom2color = "green";
   }
   else if(parseInt(item.COMPLIANCE2)<= 85 && parseInt(item.COMPLIANCE2)>= 70 )
   {
   proccom2color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE2)<= 69 )
   {
   proccom2color = "#B44B4B";
   }
}
else
{
   proccom2color = "black";
} 
    //COLOR 3
if(item.COMPLIANCE3 != '')
{    
   if(parseInt(item.COMPLIANCE3)<=100 && parseInt(item.COMPLIANCE3)>= 86 )
   {
   proccom3color = "green";
   }
   else if(parseInt(item.COMPLIANCE3)<= 85 && parseInt(item.COMPLIANCE3)>= 70 )
   {
   proccom3color = "rgb(71, 67, 219)";
   }
   else if(parseInt(item.COMPLIANCE3)<= 69 )
   {
   proccom3color = "#B44B4B";
   }
}
else
{
   proccom3color = "black";
}   
if((item.PROCESS!='')&&(item.PROCESS=='1'))
{
   //pname = 'OI Compliance';
   pstandard = 'Project code will be generated before project start date or 5 days with in the project start date';
   pmethod ='(No. of project codes within the agreed SLA / Total number of project codes released for the month)*100';
}
else if((item.PROCESS!='')&&(item.PROCESS=='2'))
{
   //pname = 'Invoice Compliance';
   pstandard = 'Project code will be generated before project start date or 5 days with in the project start date';
   pmethod ='(No. of project codes within the agreed SLA / Total number of project codes released for the month)*100';
}
else 
{
   //pname = 'Invoice Compliance';
   pstandard = 'Project code will be generated before project start date or 5 days with in the project start date';
   pmethod ='(No. of project codes within the agreed SLA / Total number of project codes released for the month)*100';
}
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='display:none'>"+item.PRACTICE+"</td><td style='display:none'>"+item.ACCOUNT+"</td><td style='display:none'>"+item.PROCESS+"</td><td style='text-align:left; padding-left:2%;' class='ImageFormula'>"+item.PROCESS_NAME+"<div class='tooltipFormula' style='font-size:16px;'><table border='1' style='font-size:smaller;width:100%'><tr><td style='text-align:center;font-weight:bold;'>PROCESS</td><td style='text-align:center;font-weight:bold;'>STANDARD</td><td style='text-align:center;font-weight:bold;'>METHOD OF MEASUREMENT</td></tr><tr><td>"+item.PROCESS_NAME+"</td><td>"+pstandard+"</td><td>"+pmethod+"</td></tr></table></td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD1+"</td><td style='font-weight:bold;color:"+proccom1color+"' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE1+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD2+"</td><td style='font-weight:bold;color:"+proccom2color +"'  onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE2+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD3+"</td><td style='font-weight:bold;color:"+proccom3color+"'  width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE3+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='display:none'>"+item.PRACTICE+"</td><td style='display:none'>"+item.ACCOUNT+"</td><td style='display:none'>"+item.PROCESS+"</td><td style='text-align:left; padding-left:2%;'  class='ImageFormula'>"+item.PROCESS_NAME+"<div class='tooltipFormula' style='font-size:16px;'><table border='1' style='font-size:smaller;width:100%'><tr><td style='text-align:center;font-weight:bold;'>PROCESS</td><td style='text-align:center;font-weight:bold;'>STANDARD</td><td style='text-align:center;font-weight:bold;'>METHOD OF MEASUREMENT</td></tr><tr><td>"+item.PROCESS_NAME+"</td><td>"+pstandard+"</td><td>"+pmethod+"</td></tr></table></td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD1+"</td><td style='font-weight:bold;color:"+proccom1color+"'  onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE1+"</td><td style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD2+"</td><td style='font-weight:bold;color:"+proccom2color +"'  onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE2+"</td><td width='20%' style='text-align:left; padding-left:5%;display:none'>"+item.PERIOD3+"</td><td style='font-weight:bold;color:"+proccom3color+"'  width='20%' onmouseover='ChangeBackgroundColor(this)' onmouseout='RestoreBackgroundColorProcess(this)' onclick='ShowPracticeAccountProcessData(this)'>"+item.COMPLIANCE3+"</td></tr>";
   }
  });        
 itemRow+="</table>";  

 $("#divPracticeAccountProcessWisePanel").html(itemRow);
 document.getElementById('divPracticeAccountProcess').style.display = 'table-cell';
 document.getElementById('tblPracticeAccountProcessWise').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountProcessWise').style.marginTop ='5%';
 document.getElementById('tblPracticeAccountProcessWise').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountProcessWise').style.fontSize ='larger';
 //document.getElementById('tblPracticeAccountProcessWise').style.fontFamily ='Arial';
 document.getElementById('tblPracticeAccountProcessWise').style.textAlign ='center';
 document.getElementById('tblPracticeAccountProcessWise').style.width = '100%';

var itemRowAvg="<table id='tblPracticeAccountProcessWiseAvg' border='1' style='font-family: Verdana;width:90%'>";   
if(compliance1 != '')
{
 if(parseInt(compliance1)<=100 && parseInt(compliance1)>= 86 )
   {
   avgproccom1color = "green";
   }
   else if(parseInt(compliance1)<= 85 && parseInt(compliance1)>= 70 )
   {
   avgproccom1color = "rgb(71, 67, 219)";
   }
   else if(parseInt(compliance1)<= 69 )
   {
   avgproccom1color = "#B44B4B";
   }
}
else
{
  avgproccom1color = "black";
}   
if(compliance2 != '')
{   
   if(parseInt(compliance2)<=100 && parseInt(compliance2)>= 86 )
   {
   avgproccom2color = "green";
   }
   else if(parseInt(compliance2)<= 85 && parseInt(compliance2)>= 70 )
   {
   avgproccom2color = "rgb(71, 67, 219)";
   }
   else if(parseInt(compliance2)<= 69)
   {
   avgproccom2color = "#B44B4B";
   }
}   
else
{
  avgproccom2color = "black";
} 
if(compliance3 != '')
{
   if(parseInt(compliance3)<=100 && parseInt(compliance3)>= 86 )
   {
   avgproccom3color = "green";
   }
   else if(parseInt(compliance3)<= 85 && parseInt(compliance3)>= 70 )
   {
   avgproccom3color = "rgb(71, 67, 219)";
   }
   else if(parseInt(compliance3)<= 69 )
   {
   avgproccom3color = "#B44B4B";
   }
}   
else
{
 avgproccom3color = "black";
} 

var avgval1,avgval2,avgval3;
if(compliance1!='')
{
avgval1= Math.round(compliance1);
}
else
{
avgval1='';
}
if(compliance2!='')
{
avgval2= Math.round(compliance2);
}
else
{
avgval2='';
}
if(compliance3!='')
{
avgval3= Math.round(compliance3);
}
else
{
avgval3='';
}
//itemRowAvg+="<tr style='background-color:rgb(14, 114, 139); font-weight:bold'><td style='width:48%'>a (%)</td></tr>";
itemRowAvg+="<tr style='font-weight:bold'><td style='background-color:rgb(104, 70, 199);color:white' width='52%'>AVERAGE (%)</td><td style='color:"+avgproccom1color+"' width= '16%;'>"+avgval1+"</td><td  style='color:"+avgproccom2color+"' width= '16%;'>"+avgval2+"</td><td  style='color:"+avgproccom3color+"' width= '16%;'>"+avgval3+"</td></tr>";          
itemRowAvg+="</table>";
 $("#divPracticeAccountProcessWiseAvg").html(itemRowAvg);
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.margin ='0 auto';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.fontFamily ='Calibri';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.fontSize ='larger';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.width ='100%';
 document.getElementById('tblPracticeAccountProcessWiseAvg').style.textAlign ='center'; 
 if((avgval1 =='')&&(avgval2=='')&&(avgval3==''))         
 {
    //document.getElementById('tblPracticeAccountProcessWiseAvg').style.display ='none';
 }
 else
 {
   //document.getElementById('tblPracticeAccountProcessWiseAvg').style.display ='block';
 }
    }
   });
  }

function BindPracticeAccountProcessWiseData (practice,account,process,processname,period) 
 {
     var response;
            $.ajax({
                type: "POST",
                url: "WService.asmx/ProcessWiseData",
                async: false,
                data: "practice="+ practice+"&account="+account+"&process="+process+"&processname="+processname+"&period="+period,
                dataType: "text", 
              success: function (data) {
              data = data.substr(76); 
              data = data.slice(0,-9);
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
if(process=='1')
{
 itemRow="<table id='tblPracticeAccountProcessWiseData' border='1' style='font-family: Verdana;'>";  
 $.each(data,function(index,item){
   if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;font-weight:bold;width:10%'>NO</td><td style='color:white;font-weight:bold;width:35%'>Project Description</td><td style='color:white;font-weight:bold;width:15%'>Project Codes</td><td style='color:white;font-weight:bold;width:15%'>Approval Alert</td><td style='color:white;font-weight:bold;width:15%'>Start Date</td><td style='color:white;font-weight:bold;width:10%'>Diff</td></tr>";
   }
   index= index+1;
 
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td>"+item.Project_Description+"</td><td>"+item.Project_Codes+"</td><td>"+item.Approval_Alert+"</td><td>"+item.Start_Date+"</td><td>"+item.Diff+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td>"+item.Project_Description+"</td><td>"+item.Project_Codes+"</td><td>"+item.Approval_Alert+"</td><td>"+item.Start_Date+"</td><td>"+item.Diff+"</td></tr>";
   }
  });        
 itemRow+="</table>";  
}              
else if(process=='2')
{
 itemRow="<table id='tblPracticeAccountProcessWiseData' border='1' style='font-family: Verdana;'>";  
 $.each(data,function(index,item){
  if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;font-weight:bold;width:10%'>NO</td><td style='color:white;font-weight:bold;'>Title of Engagement</td><td style='color:white;font-weight:bold;'>Date Uploaded</td></tr>";
   }
   index= index+1;
 
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white;width:10%'><td>"+index+"</td><td style='width:50%;text-align:left;padding-left:3%'>"+item.Title_Of_Enggagement+"</td><td style='width:40%'>"+item.Date_Uploaded+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white;width:10%'><td>"+index+"</td><td style='width:50%;text-align:left;padding-left:3%'>"+item.Title_Of_Enggagement+"</td><td style='width:40%'>"+item.Date_Uploaded+"</td></tr>";
   }
  });        
 itemRow+="</table>";  
}
else 
{
   itemRow="<table id='tblPracticeAccountProcessWiseData' border='1' style='font-family: Verdana;'>";  
 $.each(data,function(index,item){
  if(index==0)
   {
   var mon1,mon2,mon3,year1,year2,year3;
   var period1,period2,period3;
    
   itemRow+="<tr style='background-color:rgb(104, 70, 199)'><td style='color:white;font-weight:bold;width:10%'>NO</td><td style='color:white;font-weight:bold;width:60%'>Action Point</td><td style='color:white;font-weight:bold;width:30%'>Audit By</td></tr>";
   }
   index= index+1;
 
   if((index%2)==0)
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align:left; padding-left:3%'>"+item.Action_Point+"</td><td>"+item.Audit_By+"</td></tr>";
   }
   else
   {
   itemRow+="<tr style='background-color:white'><td>"+index+"</td><td style='text-align:left; padding-left:3%'>"+item.Action_Point+"</td><td>"+item.Audit_By+"</td></tr>";
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
 
//JSONToCSVConvertor(data, "Process Compliance Report", true);
  }
 });
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
    //document.getElementById('imglegend').style.display = 'block';
    document.getElementById('imgNextMonth').style.display = 'block';
    document.getElementById('divImage').style.backgroundColor  = 'white';
    document.getElementById('divResults').style.backgroundColor  = 'white';
    OrgChart();
    }
    else if(img == 'imgPracticeAccountDetailsClose')
    {
    document.getElementById('divPopupPracticeAccount').style.display  = 'none';
    BindChartPractice(parseInt(compliancePracticeValue),practicename);
    }
    else if(img == 'imgCloseInstructions')
    {
    document.getElementById ("divInstructions").style.display ="none";
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
    BindChartAccount(processValue,procAccountName);
    }
}
 function HelpShow()       
 {
    document.getElementById ("divInstructions").style.display ="block";
    document.getElementById ("divOrganization").style.display ="none";
    document.getElementById('divPractices').style.display  = 'none';
    document.getElementById('imgbtnProcess').style.display = 'none';
    document.getElementById('imgNextMonth').style.display = 'none';
    document.getElementById('divImage').style.backgroundColor  = 'rgb(63, 65, 65)';
    document.getElementById('divResults').style.backgroundColor  = 'rgb(63, 65, 65)';  
    OrgChart();
 }
 function ShowPracticeAccountProcessData(obj)
 {
           var table = document.getElementById("tblPracticeAccountProcessWise");
           var row =  table.rows[obj.parentNode.rowIndex];
           var practice = row.cells[1].innerText;
           var account = row.cells[2].innerText;
            var process = row.cells[3].innerText;
            var processname = row.cells[4].innerText;
            var prevCell = $(obj).closest('td').prev();
            var period= prevCell[0].innerText;
  
           var popup = document.getElementById('divPracticeAccountProcessData');
           if( prevCell.prevObject[0].innerText!='')
           {
           popup.style.display = 'block';
           }
           else
           {
           popup.style.display = 'none';
           alert("Data not found");
           } 
           document.getElementById("spDataHeader").innerHTML= practicename + ' - '+ processname.toUpperCase();
           
            titleData = practicename + '_' + accountname + '_'+ processname.toUpperCase();
                
           BindPracticeAccountProcessWiseData(practice,account,process,processname,period);
          
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
if(accesspractice==0)
{
 obj.style.backgroundColor = 'rgb(104, 70, 199)';
 obj.style.color = 'white';
 obj.style.cursor = 'pointer';
 }
else
{
var table = document.getElementById("tblPracticewise");
            var currow =  table.rows[obj.parentNode.rowIndex];
            var curpractice = currow.cells[1].innerText;
            var curaccount = currow.cells[3].innerText;
 if(curpractice == accesspractice)
 {
 obj.style.backgroundColor = 'rgb(104, 70, 199)';
 obj.style.color = 'white';
 obj.style.cursor = 'pointer';
 }
} 
}

      
function RestoreCellValues(tblname) 
{
//var avoidPractice;
if(tblname == "tblPracticewise" ){
var cells = document.getElementById(tblname).getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
if((i%9) != 0)
 {
   if (cells[i].innerHTML <= 100 && cells[i].innerHTML >= 86) {
        cells[i].style.color = "green";
    }
    if(cells[i].innerHTML <= 85 && cells[i].innerHTML >= 70){
        cells[i].style.color = "rgb(71, 67, 219)";
    }   
    if(cells[i].innerHTML <= 69 ){
       cells[i].style.color = "#B44B4B";
    }
 }    
 }
} 
  
else if((tblname == "tblPracticeAccountwise")||(tblname == "tblPracticeAccountProcessWise") ){
var cells = document.getElementById(tblname).getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
if((i%11) != 0)
 {
   if (cells[i].innerHTML <= 100 && cells[i].innerHTML >= 86) {
        cells[i].style.color = "green";
    }
    if(cells[i].innerHTML <= 85 && cells[i].innerHTML >= 70){
        cells[i].style.color = "rgb(71, 67, 219)";
    }   
    if(cells[i].innerHTML <= 69 ){
       cells[i].style.color = "#B44B4B";
    }
 }    
 }
 } 
}


//Organization Value
   jQuery.extend({
    getValues: function() {
        var result = null;
        $.ajax({
            url: "WService.asmx/Organization",
            async: false,
            type: 'POST',
            dataType: 'text',
            async: false,
            success: function(data) {
                result = data;
            }
        });
       return result;
    }
});


var datt = $.getValues();
datt = datt.substr(92); 
datt = datt.slice(0,-12);
datt = Math.round(datt);
