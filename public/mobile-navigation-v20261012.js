(() => {
 const button=document.getElementById('mobile-menu');
 const nav=document.getElementById('main-navigation');
 if(!button||!nav)return;
 const mobile=window.matchMedia('(max-width:760px)');
 const setOpen=open=>{nav.hidden=!open;button.setAttribute('aria-expanded',String(open));};
 const resize=()=>{button.hidden=!mobile.matches;setOpen(!mobile.matches);};
 button.addEventListener('click',()=>setOpen(nav.hidden));
 nav.addEventListener('click',event=>{if(mobile.matches&&event.target.closest('a,button'))setOpen(false);});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobile.matches&&!nav.hidden){setOpen(false);button.focus();}});
 mobile.addEventListener('change',resize);resize();
})();
