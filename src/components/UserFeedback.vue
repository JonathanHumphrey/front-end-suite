<script setup>
const submitFeedback = () => {
    let target = document.getElementById("feedback")
    console.log(target.value)
}
</script>

<template>
    <div class="user-feedback">
        <div class="user-input">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Enter Email">
        </div>
        <div class="user-input">
            <textarea name="feedback-area" id="feedback" cols="30" rows="5"></textarea>
        <button class="button" @click="submitFeedback()">Submit Feedback</button>
        </div>
    </div>
</template>

<style scoped>
.user-feedback{
    border: solid black;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.user-input{
    display: inherit;
    flex-direction: column;
}
textarea{
  border-radius: .5rem;
  resize: none;
}
input{
    border-radius: .5rem;
}
label{
    text-align: left;
}
.button {
  text-decoration: none;
  background-color: #80a4ed;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  color: #ffffff;
}
.button:hover {
  background-color: #bcd3f2;
}
</style>