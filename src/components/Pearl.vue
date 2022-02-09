<template>
  <div>
    <!-- <img src="../assets/test.png"> -->
    <div id="back">
      <div class="test">
        <h>WE`VE GOT THE DOPEST GAME TOURNAMENTS OUT THERE</h>
        <div
          style="
            width: 700px;
            height: auto;
            margin-left: 200px;
            margin-top: 40px;
          "
        >
          <p style="display: flexbox">
            Arrays have an includes method that checks whether a given value
            exists in the array. The function uses that to determine whether the
            event name it is interested in is part of the event list for a given
            day. Computer programming is essential in our world today, running
            the systems for almost every device we use. Computer programming
            languages allow us to tell machines what to do. Machines and humans
            “think” very differently, so programming languages are necessary to
            bridge that gap. The first computer programming language was created
            in 1883, when a woman named Ada Lovelace worked with Charles Babbage
            on his very early mechanical computer, the Analytical Engine. While
            Babbage was concerned with simply computing numbers, Lovelace saw
            that the numbers the computer worked with could represent something
            other than just amounts of things. She wrote an algorithm for the
            Analytical Engine that was the first of its kind. Because of her
            contribution, Lovelace is credited with creating the first computer
            programming language. As different needs have arisen and new devices
            have been created, many more languages have followed.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pearl",
  props: {},
  data: () => ({
    image: "pearl/public/test.png",
  }),
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Audiowide");
#back {
  background-image: url("../assets/test.png");
  height: 450px;
  display: flex;
  width: 100%;
}
.test {
  margin-left: 350px;
}
h {
  color: black;
  font-size: 30px;
  /* margin-left: 100px; */
  font-family: "Audiowide", sans-serif;
}
p {
    font-family: "Audiowide", sans-serif;
}
</style>