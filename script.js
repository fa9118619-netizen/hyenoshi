
const $ = s => document.querySelector(s);
const screens = [...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.remove('active'));$(id).classList.add('active')}

const introVideo = $('#introVideo');
const introVideos = ['intro1.mp4', 'intro2.mp4'];
let introIndex = 0;

function finishIntro() {
  show('#passcode');
}

function playIntro(index) {
  if (index >= introVideos.length) {
    finishIntro();
    return;
  }

  introIndex = index;
  introVideo.src = introVideos[introIndex];
  introVideo.load();

  const playPromise = introVideo.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
    });
  }
}

introVideo.addEventListener('ended', () => {
  playIntro(introIndex + 1);
});

introVideo.addEventListener('error', () => {
  playIntro(introIndex + 1);
});

$('#skipIntro').onclick = finishIntro;

$('#unmuteBtn').onclick = () => {
  introVideo.muted = false;
  introVideo.play().catch(() => {});
  $('#unmuteBtn').textContent = 'Sound on ♫';
};

playIntro(0);
const introVideo = $('#introVideo');
const introVideos = ['intro1.mp4', 'intro2.mp4'];
let introIndex = 0;

function finishIntro() {
  show('#passcode');
}

function playIntro(index) {
  if (index >= introVideos.length) {
    finishIntro();
    return;
  }

  introIndex = index;
  introVideo.src = introVideos[introIndex];
  introVideo.load();

  const playPromise = introVideo.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
    });
  }
}

introVideo.addEventListener('ended', () => {
  playIntro(introIndex + 1);
});

introVideo.addEventListener('error', () => {
  playIntro(introIndex + 1);
});

$('#skipIntro').onclick = finishIntro;

$('#unmuteBtn').onclick = () => {
  introVideo.muted = false;
  introVideo.play().catch(() => {});
  $('#unmuteBtn').textContent = 'Sound on ♫';
};

playIntro(0);const introVideo = $('#introVideo');
const introVideos = ['intro1.mp4', 'intro2.mp4'];
let introIndex = 0;

function finishIntro() {
  show('#passcode');
}

function playIntro(index) {
  if (index >= introVideos.length) {
    finishIntro();
    return;
  }

  introIndex = index;
  introVideo.src = introVideos[introIndex];
  introVideo.load();

  const playPromise = introVideo.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
    });
  }
}

introVideo.addEventListener('ended', () => {
  playIntro(introIndex + 1);
});

introVideo.addEventListener('error', () => {
  playIntro(introIndex + 1);
});

$('#skipIntro').onclick = finishIntro;

$('#unmuteBtn').onclick = () => {
  introVideo.muted = false;
  introVideo.play().catch(() => {});
  $('#unmuteBtn').textContent = 'Sound on ♫';
};

playIntro(0);const introVideo = $('#introVideo');
const introVideos = ['intro1.mp4', 'intro2.mp4'];
let introIndex = 0;

function finishIntro() {
  show('#passcode');
}

function playIntro(index) {
  if (index >= introVideos.length) {
    finishIntro();
    return;
  }

  introIndex = index;
  introVideo.src = introVideos[introIndex];
  introVideo.load();

  const playPromise = introVideo.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
    });
  }
}

introVideo.addEventListener('ended', () => {
  playIntro(introIndex + 1);
});

introVideo.addEventListener('error', () => {
  playIntro(introIndex + 1);
});

$('#skipIntro').onclick = finishIntro;

$('#unmuteBtn').onclick = () => {
  introVideo.muted = false;
  introVideo.play().catch(() => {});
  $('#unmuteBtn').textContent = 'Sound on ♫';
};

playIntro(0);const introVideo = $('#introVideo');
const introVideos = ['intro1.mp4', 'intro2.mp4'];
let introIndex = 0;

function finishIntro() {
  show('#passcode');
}

function playIntro(index) {
  if (index >= introVideos.length) {
    finishIntro();
    return;
  }

  introIndex = index;
  introVideo.src = introVideos[introIndex];
  introVideo.load();

  const playPromise = introVideo.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
    });
  }
}

introVideo.addEventListener('ended', () => {
  playIntro(introIndex + 1);
});

introVideo.addEventListener('error', () => {
  playIntro(introIndex + 1);
});

$('#skipIntro').onclick = finishIntro;

$('#unmuteBtn').onclick = () => {
  introVideo.muted = false;
  introVideo.play().catch(() => {});
  $('#unmuteBtn').textContent = 'Sound on ♫';
};

playIntro(0);

let pin='';
const dots=[...document.querySelectorAll('#pinDots span')];
function drawPin(){dots.forEach((d,i)=>d.classList.toggle('filled',i<pin.length))}
document.querySelectorAll('[data-key]').forEach(k=>k.onclick=()=>{
  if(pin.length<4){pin+=k.dataset.key;drawPin()}
  if(pin.length===4)setTimeout(checkPin,180)
});
$('#clearPin').onclick=()=>{pin=pin.slice(0,-1);drawPin();$('#pinMessage').textContent=''};
$('#submitPin').onclick=checkPin;
function checkPin(){
  if(pin==='3017'){
    $('#pinMessage').textContent='Welcome, my love ❤️';
    setTimeout(()=>show('#album'),700);
  }else{
    $('#pinMessage').textContent='Wrong Passcode ❤️';
    document.querySelector('.passcode-card').animate([{transform:'translateX(0)'},{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'translateX(0)'}],{duration:350});
    pin='';drawPin();
  }
}

const photos=window.NOSHI_DATA.photos;
let photoIndex=0, autoSlide;
const img=$('#albumImage'), counter=$('#albumCounter');
const dotsWrap=$('#albumDots');
photos.forEach((_,i)=>{const d=document.createElement('span');d.onclick=()=>setPhoto(i);dotsWrap.appendChild(d)});
function setPhoto(i){
  photoIndex=(i+photos.length)%photos.length;
  img.classList.add('switching');
  setTimeout(()=>{img.src=photos[photoIndex];counter.textContent=`${photoIndex+1} / ${photos.length}`;img.classList.remove('switching');updateAlbumDots()},250);
}
function updateAlbumDots(){[...dotsWrap.children].forEach((d,i)=>d.classList.toggle('active',i===photoIndex))}
updateAlbumDots();
$('#prevPhoto').onclick=()=>setPhoto(photoIndex-1);
$('#nextPhoto').onclick=()=>setPhoto(photoIndex+1);
autoSlide=setInterval(()=>{if($('#album').classList.contains('active'))setPhoto(photoIndex+1)},4200);
$('#toHeart').onclick=()=>show('#heartGame');

let heartClicks=0;
const heart=$('#movingHeart'), arena=$('#heartArena');
heart.onclick=()=>{
  heartClicks++;
  $('#heartCount').textContent=`${heartClicks} / 5`;
  heart.animate([{transform:'translate(-50%,-50%) scale(1)'},{transform:'translate(-50%,-50%) scale(1.35)'},{transform:'translate(-50%,-50%) scale(1)'}],{duration:280});
  burstHearts();
  if(heartClicks>=5){
    $('#heartHint').textContent='You found every piece of my heart ❤️';
    setTimeout(()=>show('#bookScreen'),900);
    return;
  }
  const pad=14;
  heart.style.left=`${pad+Math.random()*(100-pad*2)}%`;
  heart.style.top=`${pad+Math.random()*(100-pad*2)}%`;
};

const pages=window.NOSHI_DATA.pages;
let page=0,touchStart=0;
function renderPage(next,dir=1){
  if(next<0||next>=pages.length)return;
  const el=$('#bookPage');
  el.classList.add(dir>0?'turn-left':'turn-right');
  setTimeout(()=>{page=next;el.innerHTML=pages[page];el.scrollTop=0;el.className='book-page';$('#pageNumber').textContent=`Page ${page+1} of ${pages.length}`},360);
}
$('#nextPage').onclick=()=>renderPage(page+1,1);
$('#prevPage').onclick=()=>renderPage(page-1,-1);
$('#book').addEventListener('touchstart',e=>touchStart=e.changedTouches[0].clientX,{passive:true});
$('#book').addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-touchStart;
  if(Math.abs(dx)>45)renderPage(page+(dx<0?1:-1),dx<0?1:-1)
},{passive:true});

function burstHearts(){
  for(let i=0;i<7;i++){
    const s=document.createElement('div');s.textContent='❤';s.style.position='fixed';s.style.left=`${heart.getBoundingClientRect().left+30}px`;s.style.top=`${heart.getBoundingClientRect().top+30}px`;s.style.color='#ff91b8';s.style.zIndex=50;s.style.pointerEvents='none';document.body.appendChild(s);
    s.animate([{transform:'translate(0,0) scale(.7)',opacity:1},{transform:`translate(${(Math.random()-.5)*150}px,${-60-Math.random()*100}px) scale(1.2)`,opacity:0}],{duration:900});
    setTimeout(()=>s.remove(),950)
  }
}
setInterval(()=>{
  const s=document.createElement('i');s.className='spark';s.style.left=Math.random()*100+'vw';s.style.bottom='-10px';s.style.animationDuration=(5+Math.random()*6)+'s';$('#sparkles').appendChild(s);setTimeout(()=>s.remove(),12000)
},420);
