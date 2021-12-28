import {fx,title} from './title';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './ReactApp.jsx';
import Vue from 'vue';
import VueApp from './VueApp.vue'
import ClassA from './hello'
import './css/title.css'
import './css/title.less'
import './image';
import './font'

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
  elm.className='title bigTitle'
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

const classA= new ClassA()
const r=await classA.doPromis()
console.log(r)

// test dev-server proxy
const res=await fetch('/api/rate_limit',{
  headers:{"Accept":"application/vnd.github.v3+json"}
})
console.log(await res.json())