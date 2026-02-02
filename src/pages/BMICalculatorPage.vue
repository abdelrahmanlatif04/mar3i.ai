<script setup>
const KG_TO_POUND_CONVERSION = 2.20462;
const METER_TO_FT_CONVERSION = 3.28084;
let BMI = 0;
function getTextStatus() {
    if (!BMI) return 
    
    if (BMI <= 18.5) {
    return "Underweight";
  } else if (BMI <= 25) {
    return "Normal";
  } else if (BMI <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
</script>

<template>
  <div>
    <div class="text-5xl">BMI Calculator</div>
    BMI = weight in kgm / (height in meter) ^ 2
    <!-- <hr />
    < 18.5 
    <hr />
    18.5 - 25 normal
    <hr />
    25 - 30 overwight
    <hr />
    > 30 overwight
    <hr /> -->
  </div>
</template>

<style></style>
