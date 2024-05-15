<template>
    <div>Home Page</div>
    <div>
        <button @click="$router.push({name: 'question1'})">Go to Question1</button>
        <button @click="$router.push({name: 'question2'})">Go to Question2</button>
        <button @click="$router.push({name: 'question3'})">Go to Question3</button>
    </div>
</template>
<script setup>

</script>