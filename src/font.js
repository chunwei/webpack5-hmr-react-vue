import './font/iconfont.css';

(()=>{
  let elm=document.createElement('div');
  ['icon-31dianhua','icon-weixin','icon-youxiang','icon-camera','icon-brightness'].forEach(ic => {
    let i=document.createElement('span');
    i.className='iconfont '+ ic +' myIcon';
    elm.appendChild(i);
    i=null;
  });
  document.body.appendChild(elm)
  elm=null
})();