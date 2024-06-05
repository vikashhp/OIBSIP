function convert() {
  let celcius = document.getElementById("degree-input").value;
  let selectedType = document.getElementById("select");
  let ans = document.getElementById("ans");

  if (celcius == "") {
    alert("Please Enter any Number ...");
    location.reload();
  } else if (selectedType.value == "fahrenheit") {
    let far = Number.parseInt(celcius) * (9 / 5) + 32;
    ans.innerText = far.toFixed(3) + "F";
  } else if (selectedType.value == "kelvin") {
    let kel = Number.parseInt(celcius) + 273.15;
    ans.innerText = kel.toFixed(3) + "K";
  }
}
