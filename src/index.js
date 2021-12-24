import {fx,title} from './title';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './ReactApp.jsx';
import Vue from 'vue';
import VueApp from './VueApp.vue'

if(module.hot){
  module.hot.accept('./title',()=>{
    fx()
    document.getElementById('reactiveElm').innerText=title
    console.log('title.js updated');
  })
}

(()=>{
  let elm=document.createElement('div')
  elm.id='reactiveElm'
  elm.innerText=title
  document.body.appendChild(elm)
  elm=null

  console.log(typeof fx)
  fx()
})()

ReactDOM.render(<ReactApp />,document.getElementById('root'));

new Vue({
  render : h=>h(VueApp)
}).$mount("#app")