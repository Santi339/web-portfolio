(function(){
  var icons=[
    ["Projects","#5ad1b0",'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>', "projects.html"],
    ["Mail","#ffb703",'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>', "mailto:sareliz@csustan.edu"],
    ["Thing I Like","#f06595",'<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>', "about.html"],
    ["Art","#a98bf0",'<path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/><path d="M14.5 17.5 4.5 15"/>', "art.html"]
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
    var b=document.createElement("a");
    b.className="float";
    b.href=ic[3];
    b.target="_blank"; b.rel="noopener";
    b.setAttribute("aria-label",ic[0]); b.title=ic[0];
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