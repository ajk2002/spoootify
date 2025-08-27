// Get song id from ?id=
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const song = (SONGS || []).find(s => s.id === id) || SONGS[0];

const audio = document.getElementById('audio');
const titleEl = document.getElementById('title');
const coverEl = document.getElementById('cover');
const playPauseBtn = document.getElementById('playPause');
const seek = document.getElementById('seek');
const currentEl = document.getElementById('current');
const durationEl = document.getElementById('duration');
const vol = document.getElementById('volume');
const lyricsBox = document.getElementById('lyrics');

if(!song){ document.body.innerHTML = '<p style="padding:24px">No song found.</p>'; throw new Error('No song'); }

titleEl.textContent = song.title;
coverEl.src = song.cover;
audio.src = song.audio;
vol.value = 0.9; audio.volume = 0.9;

// Build lyrics (timestamped highlight if provided)
let timed = (song.lyrics && song.lyrics.timed) ? song.lyrics.timed.slice().sort((a,b)=>a.t-b.t) : null;
if(timed){
  lyricsBox.innerHTML = timed.map((l,i)=>`<div class="lyric-line" data-i="${i}">${l.line}</div>`).join('');
}else{
  const text = (song.lyrics && song.lyrics.text) ? song.lyrics.text : '';
  lyricsBox.textContent = text;
}

function fmt(sec){
  sec = Math.max(0, sec|0);
  const m = (sec/60)|0, s = sec%60;
  return `${m}:${s.toString().padStart(2,'0')}`;
}

audio.addEventListener('loadedmetadata', ()=>{
  durationEl.textContent = fmt(audio.duration);
});

let seeking = false;
audio.addEventListener('timeupdate', ()=>{
  if(!seeking){
    seek.value = (audio.currentTime / (audio.duration||1)) * 100;
  }
  currentEl.textContent = fmt(audio.currentTime);

  if(timed){
    // find last line whose t <= current time
    let idx = 0;
    for(let i=0;i<timed.length;i++){
      if(audio.currentTime + 0.10 >= timed[i].t) idx = i; else break;
    }
    document.querySelectorAll('.lyric-line').forEach((el,i)=>{
      el.classList.toggle('active', i===idx);
      if(i===idx){
        // scroll into view smoothly
        el.scrollIntoView({block:'nearest', behavior:'smooth'});
      }
    });
  }
});

// controls
playPauseBtn.addEventListener('click', ()=>{
  if(audio.paused){ audio.play(); playPauseBtn.textContent = 'Pause'; }
  else { audio.pause(); playPauseBtn.textContent = 'Play'; }
});
audio.addEventListener('play', ()=> playPauseBtn.textContent = 'Pause');
audio.addEventListener('pause', ()=> playPauseBtn.textContent = 'Play');

seek.addEventListener('input', ()=>{ seeking = true; });
seek.addEventListener('change', ()=>{
  audio.currentTime = (seek.value/100) * (audio.duration||0);
  seeking = false;
});
vol.addEventListener('input', ()=> audio.volume = parseFloat(vol.value));
