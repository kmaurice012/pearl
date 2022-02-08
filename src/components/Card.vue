<template>
    <div>
       <div id="game">
<div id="cont">
        <h3>Game of The Week</h3>
        <div>
          <h4>Need For Speed</h4>

          <p>
            Need for Speed Payback is a racing video game developed by Ghost
            Games and published by Electronic Arts for Microsoft Windows,
            PlayStation 4 and Xbox One. It is the twenty-third installment in
            the Need for Speed series. Need for Speed Payback is a racing video
            game developed by Ghost Games and published by Electronic Arts for
            Microsoft Windows, PlayStation 4 and Xbox One. It is the
            twenty-third installment in the Need for Speed series. Need for
            Speed Payback is a racing video game developed by Ghost Games and
            published by Electronic Arts for Microsoft Windows, PlayStation 4
            and Xbox One. It is the twenty-third installment in the Need for
            Speed series. Need for Speed Payback is a racing video game
            developed by Ghost Games and published by Electronic Arts for
            Microsoft Windows, PlayStation 4 and Xbox One. It is the
            twenty-third installment in the Need for Speed series.
          </p>
        </div>
      </div>
       </div>
    </div>
</template>

<script>
    export default {
      name: "card",
  props: {
  
  },   
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Aldrich' );
@import url("https://fonts.googleapis.com/css?family=Abel");
@import url("https://fonts.googleapis.com/css?family=Bangers");
#game {
  width: 700px;
  height: 400px;
  background-color: black;
  margin-left: 80px;
  border-radius: 30px;
}
#cont {
  display: flex;
}
h3 {
font-family: 'Aldrich';
  color: white;
  margin-top: 30px;
  font-size: 35px;
  margin-left: 5px;
  writing-mode: vertical-rl;
}
h4 {
  color: white;
  font-family: "Bangers";
  font-size: 25px;
  margin-right: 50px;
}
p {
  color: white;
  font-family: "Abel";
}
</style>