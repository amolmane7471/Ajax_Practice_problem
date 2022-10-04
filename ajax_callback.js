let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeAJAXCall(methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(methodType + " State Changed Called. Ready State: " + xhr.readyState + " | Status: " + xhr.status)
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText)
            }
            else if (xhr.status >= 400) {
                console.log("\nHandle 400 Client Error OR 500 Server Error");
            }
        }
    }
    xhr.open(methodType, url, async);

    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }
    else {
        xhr.send(); //to make httprequest to the server
    }
    console.log(methodType + " Request sent to server ");
}
//read data 
const getURL = "http://127.0.0.1:3001/employee/3";
function getUserDetails(data) {
    console.log("get user data: " + data);
}
makeAJAXCall("GET", getURL, getUserDetails);

//delete data
const deleteURL = "http://localhost:3001/employee/2";
function userDeleted(data) {
    console.log("User Deleted : "+ data);
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);

//insert data
const postURL = "http://localhost:3001/employee";
const emplData = { "name": "Mehul", "salary": "400000" };
function userAdded(data) {
    console.log("User Added: " + data);
}
makeAJAXCall("POST", postURL, userAdded, true, emplData);
