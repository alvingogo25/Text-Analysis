import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

let dataArray = [];

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75784847d8a1404aa2a52bacd32952c3';
axios.get(url).then(function(response) {
  dataArray = response.data.articles;
  console.log(dataArray[0].title);
});

function displaySearch (props) {
  return <h1>{props.title}</h1>
}

const element = <displaySearch title={dataArray[0].title} />
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h3>article title</h3>
//         <p>description</p>
//       </div>
//
//     );
//   }
// }

export default App;
