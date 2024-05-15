<template>
    <div>
        <div>Message recive from the Sibling component (Child to child):: {{ message }}</div>
    </div>
</template>
<script setup>
    import {defineProps} from 'vue';

    defineProps({
        message: {
            type: String,
            default: ""
        }
    })
</script>