document.getElementById("vehicleForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("vehicleName").value;
    if (name) {
      const li = document.createElement("li");
      li.textContent = name;
      document.getElementById("vehicleList").appendChild(li);
      document.getElementById("vehicleName").value = "";
    }
  });