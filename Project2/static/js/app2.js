window.onload=ttt();



function ttt(l=3,j=5) {  
  console.log(l)
  var myConfig1 = {
    type: "bar",
    plotarea: {
    adjustLayout:true,
    
    },
    scaleX: {
      label:{
        text:"Year"
        },
      labels:["2010","2011","2012","2013","2014","2015","2016","2017", "2018"] 
      },
    scaleY: {
      label: {
        text:"% of unoccupied homes"
      },
    },
      series:[        
        {
            values: l,
            backgroundColor:"#58a1a5",
            alpha:1
        }            
        ]
      };
  
      var myChart1 = {"type":"line","series":[{"values":j}] };
   
    zingchart.render({ 
        id : 'myChart', 
        data : myConfig1, 
        height: "100%", 
        width: "100%" 
      });
      zingchart.render({
        id:'chartDiv11',
        data:myChart1,
        height: 300,
        width: 700
      });
    
  };

