//spaceX.js file 
//const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));

// display the metadata of any individual from the dataset:
//d3.json("samples.json").then(function(data){
    //firstPerson = data.metadata[0];
    //Object.entries(firstPerson).forEach(([key, value]) =>
      //{console.log(key + ': ' + value);});
//});

//script.js file

//uses the d3.selectAll() method to create an event listener.
//Whenever there is a change to the HTML body, the updatePage()function is called
//d3.selectAll("body").on("change", updatePage);

//function updatePage() {
  //The function uses d3.selectAll() to select the dropdown menu, which has an id of selectOption
  //var dropdownMenu = d3.selectAll("#selectOption").node();
  //selectOption, is assigned the variable dropdownMenuID.
  //var dropdownMenuID = dropdownMenu.id;
  //Whenever a dropdown menu option is selected, its value is assigned the variable selectedOption
  //selectedOption is the option that is chosen by the user.
  //var selectedOption = dropdownMenu.value;

  //Each time updatePage() is triggered, the id value of the dropdown menu, as well as the value of the chosen menu option, are printed to the browser console.
  //console.log(dropdownMenuID);
  //console.log(selectedOption);
//};

//plots.js file 

//renders the initial visualization:
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];
  Plotly.newPlot("plot", data);
};

//when the user selects a dropdown menu option, the updatePlotly() function is called:
//id of dropdownMenu, the upDatePlotly() function is triggered.
d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
  var dropdownMenu = d3.select("#dropdownMenu");
  var dataset = dropdownMenu.property("value");

  //The x-axis values, or xData, remain the same. However, the y-axis values, or yData, depend on which dropdown menu option was selected
  var xData = [1, 2, 3, 4, 5];
  var yData = [];
  //The variable dataset is assigned to the value of the dropdown menu option selected by the user
  if (dataset === 'dataset1') {
    yData = [1, 2, 4, 8, 16];
  };

  if (dataset === 'dataset2') {
    yData = [1, 10, 100, 1000, 10000];
  };

  var trace = {
    x: [xData],
    y: [yData],
  };
//thePlotly.restyle() method defaults to accepting an object (trace in this case) as its data argument, rather than an array.
// method is used to re-render the page on the browser. This method is more efficient than calling the Plotly.newPlot()- beecause it's modifying istead of creating new chart
  Plotly.restyle("plot", trace);
};

init();
