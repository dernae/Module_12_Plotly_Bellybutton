function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}


// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata);
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    console.log(resultArray);
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

        // D2: 3. Use Plotly to plot the data with the layout.
    var wfreq = result.wfreq;
    var data = {
      domain: { x: [0, 10], y: [0, 10] },
      value: wfreq,
      title:{text:"Belly Button Washing Frequency: Scrubs per Week", font: {size:24}, subtitle: {text: "Scrubs per Week" }},
      
      type: "indicator",
      mode: "gauge+number",
      gauge: {
      axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "black" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 2], color: "red" },
        { range: [2, 4], color: "orange" },
        { range: [4, 6], color: "yellow" },
        { range: [6, 8], color: "lightgreen" },
        { range: [8, 10], color: "darkgreen" }
      ]
    }
    };
      
      // 4. Create the trace for the gauge chart.
      var gaugeData = [data];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = 
        { width: 550, height: 350, margin: { t: 0, b: 0 }, 

        paper_bgcolor: "lightgreen",
        font: { color: "black", family:"Arial" }
      };

      

      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
}
// 1. Create the buildCharts function.
//sample that is selected from the dropdown menu.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var chartdata = data.samples;
    console.log(chartdata);
    
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var charesultArray = chartdata.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var chartResult = charesultArray[0];
    console.log(charesultArray);
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var sample_values = chartResult.sample_values;
    console.log(sample_values)
    var otu_ids = chartResult.otu_ids; 
    var otu_labels = chartResult.otu_labels;
  
    // Sort the data array using the greekSearchResults value
    // Slice the first 10 objects for plotting
    var newotu_ids= otu_ids.slice(0,11);
    console.log(newotu_ids);
    console.log(newotu_ids.sort(function(a,b){
      return parseFloat(newotu_ids.b) - parseFloat(newotu_ids.a);
    }));
    var newsample_values= sample_values.slice(0,10);
    var newotu_labels= otu_labels.slice(0,11);
    //var slicecharesult = charesult.slice(0, 10);
    // Reverse the array due to Plotly's defaults


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = {
      y: newotu_ids.sort((a,b) => b - a), 
      x: newsample_values.sort((a,b) => b - a),
      text: newotu_labels.sort((a,b) => b - a),
     // name: "Top 10 Bacteria Cultures Found",
      type: "bar", 
      orientation: "h"

    }

    // 8. Create the trace for the bar chart. 
    var barData = [yticks];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Bacteria Cultures Found",
     paper_bgcolor: "lightgreen",
     //what I tried to increase bar thickness
     //options: {
      //scales: {
       // xAxes: [{
        //  barThickness: 100,  // number (pixels) or 'flex'
        //  maxBarThickness: 105 // number (pixels)
      //  }]
     // }
   // },
   //AND
   plotOptions: {
    series: {
        pointWidth: 15
    }
    },
     margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100,
    }
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("plot", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var trace = {
      x: otu_ids, 
      y: sample_values,
      text: otu_labels, 
      mode: 'markers',
      marker: {
        color: otu_ids,
        //['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        size: sample_values
      }
    };
    var bubbleData = [trace];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title:{
        text: "Bacteria Cultures Per Sample"
      },
      paper_bgcolor: "lightgreen",
      xaxis: {
        title:"OTU ID"
      },
      showlegend: false,
      height: 800,
      width: 1200
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);


  });
}

