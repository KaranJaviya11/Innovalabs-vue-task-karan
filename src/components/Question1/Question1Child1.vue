<template>
    <div>
        <div style="margin-top: 10px;">
            <span style="margin-right: 10px;">Enter Message To Send Parent (From Child)</span>
            <span><input type="text" v-model="childToParent" @input="childMessageForParent"/></span>
        </div>
        <div style="margin-top: 10px;">
            <span style="margin-right: 10px;">Enter Message To Send Sibling (Child to Child)</span>
            <span><input type="text" v-model="childTochild" @input="childMessageForSibbling"/></span>
        </div>
        <div>Message recive from the parent component:: {{ message }}</div>
    </div>
</template>
<script setup>
    import {defineProps,defineEmits,ref} from 'vue';

    defineProps({
        message: {
            type: String,
            default: ""
        }
    })
    
    const childToParent = ref('');
    const childTochild = ref('');
    const emits = defineEmits(['childToParentData','childToChildData']);

    function childMessageForParent() {
        emits('childToParentData', childToParent.value)
    }
    function childMessageForSibbling() {
        emits('childToChildData', childTochild.value)
    }
</script>