import React, { Component } from 'react';
import axios from 'axios';


const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75784847d8a1404aa2a52bacd32952c3';
axios.get(url).then(response => console.log(response));

console.log(response);
export default News
