//code that creates a dropdown menu of ID numbers dynamically.

function init() {
    //init(), the d3.select() method is used to select the dropdown menu, which has an id of #selDataset
    var selector = d3.select("#selDataset");
    //d3.json() method is used to read the data from samples.json
    //data from the entire JSON file is assigned the (arbitrary) argument name data
    d3.json("samples.json").then((data) => {
      console.log(data);
      //names array, as seen from console.log(data), contains the ID numbers of all the study participants. ]
      //variable sampleNames is assigned to this array.
      var sampleNames = data.names;
      //The dropdown menu is assigned to the variable selector
      //forEach() method is called on the sampleNames array - For each element in the array, a dropdown menu option is appended.
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  //optionChanged takes in an argument, named newSample, and logs it to the browser console
  //newSample refers to the value of the selected menu option.
  //this.value(in html) and newSample(in .js) are equivalent.
  function optionChanged(newSample) {
    //These two functions will use the ID number to create that specific individual's information panel and charts, respectively.
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  //takes in sample, or an ID number, as its argument
  //when a dropdown menu option is selected, the ID number is passed in as sample
  function buildMetadata(sample) {
    //d3.json() pulls in the entire dataset contained in samples.json. Once the dataset is read in, it is referred to as data
    d3.json("samples.json").then((data) => {
      //metadata array in the dataset (data.metadata) is assigned the variable metadata.
      var metadata = data.metadata;
      //filter() method is called on the metadata array to filter for an object in the array whose id property matches the ID number passed into buildMetadata() as sample
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // (resultArray[0]) is selected and assigned the variable result.
      var result = resultArray[0];
      //The id of the Demographic Info panel is sample-metadata
      var PANEL = d3.select("#sample-metadata");
     
      //PANEL.html("") ensures that the contents of the panel are cleared when another ID number is chosen from the dropdown menu
      PANEL.html("");
      //append() and text() methods are chained to append a H6 heading to the panel and print the location of the volunteer to the panel
      //what I tried first 
      //PANEL.append("h6").text(result.id);
      //PANEL.append("h6").text(result.ethnicity);
      //PANEL.append("h6").text(result.gender);
      //PANEL.append("h6").text(result.age);
     // PANEL.append("h6").text(result.location);
     // PANEL.append("h6").text(result.bbtype);
     // PANEL.append("h6").text(result.wfreq);
     Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }