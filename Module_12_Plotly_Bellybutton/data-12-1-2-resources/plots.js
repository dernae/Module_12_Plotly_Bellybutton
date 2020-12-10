//line graphs
//Plotly.newPlot("plotArea", [{x:[5,10,15],y:[10,20,30]}]);
//Plotly.newPlot("plotArea", [{x:[1,2,3], y:[10,20,30]}]);

// bar chart 
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 Plotly.newPlot("plotArea", [trace]);

 // Alternative 
 //var trace = [{
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//}];

//Plotly.newPlot("plotArea", trace)

//updated bar chart with title
//var trace = {
   // x: ["burrito", "pizza", "chicken"],
   // y: [10, 18, 5],
    //type: "bar"
//};
//to create a title, x -axis title and y-axis title
//var layout = {
   // title: "Luncheon Survey",
    //xaxis: {title: "Food Option"},
    //yaxis: {title: "Number of Respondents"}
//};
//Plotly.newPlot("plotArea", [trace], layout);

//"bar" chart of popular beverages in a nonalcoholic bar, as well. 
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   //another way to declare trace
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

   //creating a pie chart of the bar data
//'LABELS' AND 'VALUES'used in place of x and y's in pie charts
   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

   //creating a scatter plot of the bar data 

   var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter'
   };
   var data = [trace];
   var layout = {
    title: "'scatter' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


   //using the map method - method transforms every element of the original array, 
   //example in which all the numbers of an array are doubled:

var numbers = [1,2,3,4,5];
//when map is called, it calls the anonymous function
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

//alternative 1 
var doubled = numbers.map(function(integer) {
    return integer * 2;
    });

// alternative 2 
var doubled = numbers.map(function(carPrice) {
    return carPrice * 2;
    });

//using arrow function 
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

//using .map() to extract a specific property from each object in an array 

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// filter() method returns an array of values that meet certain criteria.
//this function returns integers larger than 1 

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// sorting list using sort() and arrow functions 
// when the subtraction of the two elements are positive, order is reveresed. process is repeated till the array is sorted 
//ascending order 
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
//descending order 
  //.reverese() also works. see 12-2-2
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);

//using the slice() method to return the first two elements of the integer array 
var integers = [0,1,2,3,4,5];
//the slice()method begins selecting the array at index position 0, and stops right
// before reaching index position 2. So here, it returns elements at index positions 0 and 1, but not 2.
var slice1 = integers.slice(0,2);


//To slice the end of an array 
