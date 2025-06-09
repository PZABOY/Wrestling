let allSuperstars = [];   

function addSuperstar() {
  pushItem();
  saveAddSuperstars();
  displayAllSuperstars();
}
function loadData(){
  loadAllSuperstar();
  displayAllSuperstars();
  }

function pushItem() {
  const nameTextBox = document.getElementById("nameTextBox");
  const imageUrlTextBox = document.getElementById("imageUrlTextBox");
  const storyTextBox = document.getElementById("storyTextBox");
  const youtubeUrlTextBox = document.getElementById("youtubeUrlTextBox");


  const name = nameTextBox.value;
  const story = storyTextBox.value;
  const imageUrl = imageUrlTextBox.value; 
  const youtubeUrl = youtubeUrlTextBox.value; 

  const superstar = { name, story, imageUrl, youtubeUrl };

  allSuperstars.push(superstar);
}

function displayAllSuperstars() {
  const containerTableBody = document.getElementById("containerTableBody");
  let content = ""; 
  for (const superstar of allSuperstars) {
    const tr = `
      <tr>
        <td>${superstar.name}</td>
         <td>
          <img src="${superstar.imageUrl}" class="superstar-image">
       </td>
        <td>${superstar.story}</td>
          <td>
          <a href="${superstar.youtubeUrl}" target="_blank">Watch Video</a>
       </td>
      </tr>
    `;
    content += tr;
  }
  containerTableBody.innerHTML = content;
}

function saveAddSuperstars() {
  const json =JSON.stringify(allSuperstars);
  localStorage.setItem("superstars", json);

}

function loadAllSuperstar() {
  const json = localStorage.getItem("superstars");
  if(json){
    allSuperstars = JSON.parse (json)
  }

}