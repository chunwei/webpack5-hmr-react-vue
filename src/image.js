import bgimg from './img/vue.svg';

(()=>{
  let elm=document.createElement('div')
  elm.id='reactiveElm'
  elm.className='imgBg'
  document.body.appendChild(elm)
  elm=null
})();

(()=>{
  let elm=document.createElement('img')
  elm.src=require('./img/react.svg')
  elm.width='100'
  //elm.src=bgimg  //两个方式都可以
  document.body.appendChild(elm)
  elm=null
})();