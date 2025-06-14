// Load saved vehicles from localStorage
window.addEventListener("load", function () {
    const savedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    savedVehicles.forEach(addVehicleToList);
  });
  
  document.getElementById("vehicleForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("vehicleName").value.trim();
    if (name) {
      addVehicleToList(name);
      saveVehicle(name);
      document.getElementById("vehicleName").value = "";
    }
  });
  
  function addVehicleToList(name) {
    const li = document.createElement("li");
    li.textContent = name;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
      li.remove();
      deleteVehicle(name);
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("vehicleList").appendChild(li);
  }
  
  function saveVehicle(name) {
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicles.push(name);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }
  
  function deleteVehicle(name) {
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicles = vehicles.filter(v => v !== name);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }