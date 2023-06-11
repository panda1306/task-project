const mytaskBoard = document.querySelector("#form");
const tasksContainer = document.querySelector("#tasks-container");
let missionArray = [];
loadMission();

function onSubmit(e) {
  e.preventDefault();
  const missionText = mytaskBoard.querySelector("#mission").value;
  const date = mytaskBoard.querySelector("#date").value;
  const time = mytaskBoard.querySelector("#time").value;


  const missionObj = {
    missionText: missionText,
    date: date,
    time: time,
  };

  missionArray.push(missionObj);
  saveMission();
  displayMission();
}

mytaskBoard.addEventListener("submit", onSubmit);

function displayMission() {
  let html = "";
  for (let i = 0; i < missionArray.length; i++) {
    html += `
    <div class="task-container">
    <i onClick="deleteItem(this)" class="closeIcon bi bi-x-square-fill" id=${i}></i>
        <div class="text">
            ${missionArray[i].missionText}
        </div>
   
        <div class="noteFooter">
            ${missionArray[i].date}
        </div>
       
        <div class="noteFooter">
            ${missionArray[i].time}
        </div>

    </div>
    `;
  }
  tasksContainer.innerHTML = html;
}

function deleteItem(element) {  
  const index = element.id;
  missionArray.splice(index, 1);
  saveMission();
  displayMission();
}

function saveMission() {
  localStorage.setItem("mission", JSON.stringify(missionArray));
}

function loadMission() {
  const stringMission = localStorage.getItem("mission");
  if (stringMission.length > 0 && stringMission != null) {
    missionArray = JSON.parse(stringMission);
  }
}
