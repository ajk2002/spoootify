const container = document.getElementById('playlist');

function rowHtml(song){
  return `
    <a href="player.html?id=${encodeURIComponent(song.id)}" class="row">
      <img class="cover-sm" src="${song.cover}" alt="">
      <div>
        <div class="title">${song.title}</div>
        <div class="subtle">${song.duration}</div>
      </div>
      <div class="len">${song.duration}</div>
    </a>
  `;
}

function render(){
  if(!Array.isArray(SONGS) || SONGS.length === 0){
    container.innerHTML = `<div style="padding:28px">No songs yet. Add them in <code>data.js</code>.</div>`;
    return;
  }
  container.innerHTML = SONGS.map(rowHtml).join('');
}
render();
