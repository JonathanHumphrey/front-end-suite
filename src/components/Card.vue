<template>
    <div class="wrapper">
       <div class="header">
        <slot name="header"></slot>
       </div> 
       <div class="body">
        <slot name="body"></slot>
       </div>
       <div class="footer">
        <slot name="footer"></slot>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.wrapper{
    background-color: white;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.4);
    color: black;
}
h1{
    color: green;
}
</style>