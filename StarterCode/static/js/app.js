// from data.js

// A global variable that will hold the data that the table ought to be displaying
var tableData = data;

// BUILD TABLE
// This function will populate the table with the initial data, as well as fill the table with any filtered results

// Create a variable for the table body
var tbody = document.querySelector("tbody");

function buildTable() {
// Clear old data    
    tbody.innerHTML = "";

// Loop through the data to extract each row's information, and the cell information that will build those rows    
    for (var x = 0; x < tableData.length; x++) {
        var entry = tableData[x];
        // console.log("entry")
        // console.log(entry)
        var keys = Object.keys(entry);
        // console.log("keys")
        // console.log(keys)

// Create the empty row
        var row = tbody.insertRow(x);

// Cycle through each key value pair in each entry
        for (var y = 0; y < keys.length; y++) {
// Create empty cell           
            var cell = row.insertCell(y);

// Inject data into cell            
            var key = keys[y];
            // console.log("value")
            var value = entry[key];
            // console.log(value)
            cell.innerText = value;
        };
    };
};

// Build the table when the site is loaded
buildTable();

// Get the button events to work
var search = document.querySelector("#filter-btn");

// Add event listener to the search button
search.addEventListener("click", filter);

// Create a function to filter the data by date

function filter() {
    console.log("Performing search")
// Clear old data    
    tbody.innerHTML = "";

// Grab the date that we're filtering with    
    var filterDate = document.querySelector("#datetime").value;
    console.log(filterDate);
// Loop through the data to extract each row's information, and the cell information that will build those rows    
    for (var x = 0; x < tableData.length; x++) {
        var entry = tableData[x];
        // console.log("entry")
        // console.log(entry)
        var keys = Object.keys(entry);
        // console.log("keys")
        // console.log(keys)

        if (entry["datetime"] === filterDate) {    
// Create the empty row
            var row = tbody.insertRow(x);

// Cycle through each key value pair in each entry
            for (var y = 0; y < keys.length; y++) {
// Create empty cell           
                var cell = row.insertCell(y);

// Inject data into cell            
                var key = keys[y];
            // console.log("value")
                var value = entry[key];
            // console.log(value)
                cell.innerText = value;
            };
        };
    };
};