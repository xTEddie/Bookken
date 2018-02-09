function getChromecastBackground() {
  let url = "https://raw.githubusercontent.com/dconnolly/chromecast-backgrounds/master/backgrounds.json";

  fetch(url).then((response) => {    
    return response.json();
  }).then((json) => {    
    let {length} = json;
    let randomNumber = Math.floor((Math.random() * length) + 0);
    return json[randomNumber];    
  })
  .catch((error) => {
    console.log(error);
    return;
  })
  .then((background) => {    
    document.body.style.backgroundImage = `url('${background.url}')`;
  })
}

let interval = 8000;
getChromecastBackground();
setInterval(() => {
  getChromecastBackground()
}, interval);
