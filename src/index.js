import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

registerServiceWorker();



let dataArray = [];

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75784847d8a1404aa2a52bacd32952c3';
axios.get(url).then(response => {
  dataArray = response.data.articles;
  console.log(dataArray[0].title);
  console.log(dataArray)
  ReactDOM.render(<DisplaySearch data={dataArray} />, document.getElementById('results'));
});

function DisplaySearch (props) {
  const results = props.data;
  const listTitle = results.map((results) =>
  <div key={results.publishedAt + 'art'}>
  <h1 key={results.publishedAt + 'ttl'}>{results.title}</h1>
  <p key={results.publishedAt + 'desc'}>{results.description}</p>
  </div>
);

return (
  listTitle
);
}
