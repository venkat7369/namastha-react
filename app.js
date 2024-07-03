import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{ id: "parent"}, [
    React.createElement("div", {id: "child" }, [
        React.createElement("h1", {}, "this is reaqct cousr"),
        React.createElement("h2", {}, "I am h2 tag")  
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "i am a h1 tag"),
        React.createElement("h2", {}, "i am h2 tag"),
    ]),
]);


console.log(parent);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);





//parent is an object which is known as elemnet 
//it becomes the html when it comes to browser