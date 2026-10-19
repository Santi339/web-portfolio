(function(){
  var icons=[
    ["Home","#ff8a65",'<path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>'],
    ["Mail","#ffb703",'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>', "mailto:sareliz@csustan.edu"],
    ["Favorites","#f06595",'<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>'],
    ["Music","#a98bf0",'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>']
  ];
  var scene=document.getElementById("scene"), dock=document.getElementById("dock");
  var calm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function rnd(a,b){return a+Math.random()*(b-a)}

  function wavePath(amp,phase){
    var d="M0 "+(20+amp*Math.sin(phase));
    for(var x=20;x<=3200;x+=20){d+=" L"+x+" "+(20+amp*Math.sin(x/400*Math.PI*2+phase)).toFixed(2)}
    return d+" L3200 40 L0 40 Z";
  }
  document.getElementById("w1").setAttribute("d",wavePath(6,0));
  document.getElementById("w2").setAttribute("d",wavePath(5,1.7));

  var items=icons.map(function(ic){
    var b=document.createElement("button");
    b.className="float"; b.type="button"; b.setAttribute("aria-label",ic[0]); b.title=ic[0];
    b.style.setProperty("--a",rnd(5,10).toFixed(1)+"px");
    b.style.setProperty("--r",rnd(2,5).toFixed(1)+"deg");
    b.style.setProperty("--d",rnd(2.8,4.4).toFixed(2)+"s");
    b.style.setProperty("--d2",rnd(4,6.5).toFixed(2)+"s");
    b.style.setProperty("--delay",(-rnd(0,5)).toFixed(2)+"s");
    var svg='<svg viewBox="0 0 24 24" aria-hidden="true">'+ic[2]+'</svg>';
    b.innerHTML='<span class="dip"><span class="bob">'+
      '<span class="tile" style="--c:'+ic[1]+'">'+svg+'</span>'+
      '<span class="tile mirror" aria-hidden="true" style="--c:'+ic[1]+'">'+svg+'</span>'+
      '</span></span>';
    var dip=b.querySelector(".dip");
    b.addEventListener("click",function(){
      dip.classList.remove("splash"); void dip.offsetWidth; dip.classList.add("splash");
    });
    dip.addEventListener("animationend",function(){dip.classList.remove("splash")});
    dock.appendChild(b);
    return b;
  });

  var root=document.documentElement, tbtn=document.getElementById("themeToggle");
  var sun='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>';
  function current(){return root.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}
  function paint(){
    var dark=current()==="dark";
    tbtn.innerHTML=dark?sun:moon;
    tbtn.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
    tbtn.title=dark?"Light mode":"Dark mode";
  }
  try{var saved=localStorage.getItem("theme"); if(saved)root.setAttribute("data-theme",saved)}catch(e){}
  paint();
  tbtn.addEventListener("click",function(){
    var next=current()==="dark"?"light":"dark";
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("theme",next)}catch(e){}
    paint();
  });

})();
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

});