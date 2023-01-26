const kits= ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach(kit=>{
  const btnEl = document.createElement("button");
  containerEl.appendChild(btnEl);
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(" + kit + ".png)";
  btnEl.classList.add("btn");
  const audioEl = document.createElement("audio");
  audioEl.src = "projects_drum-kits_sounds_" + kit + ".mp3"; 
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", ()=>{
    audioEl.play();
  });
  window.addEventListener("keydown", (event)=>{
    if(event.key == kit.slice(0,1)){
      audioEl.play();
      btnEl.style.transform = "scale(0.9)";
      setTimeout(()=>{
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});