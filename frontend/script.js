

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("all");
  
    if (selectElement) {
      for (const country of countries) {
        const optionElement = document.createElement("option")
        optionElement.textContent = country.name.common
        optionElement.value = country.name.common
        selectElement.appendChild(optionElement)
      }
    }
  });