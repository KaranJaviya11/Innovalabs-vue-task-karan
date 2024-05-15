<template>
    <div>
        <div style="margin-top: 10px;">
            <span style="margin-right: 10px;">Enter Message To Send Child (From Parent)</span>
            <span><input type="text" v-model="parentToChild"/></span>
        </div>
        <div style="margin-top: 10px;">
            <QuestionChild1 :message="parentToChild" @childToParentData="(dt)=> childToParent = dt" @childToChildData="(dt)=> childToChild = dt"/>
        </div>
        <div style="margin-top: 10px;">
            <div>Message recive from the child component:: {{ childToParent }}</div>
        </div>
        <div style="margin-top: 10px;">
            <QuestionChild2 :message="childToChild"/>
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue'; 
    import QuestionChild1 from '@/components/Question1/Question1Child1.vue';
    import QuestionChild2 from '@/components/Question1/Question1Child2.vue';
    const parentToChild = ref('');
    const childToParent = ref('');
    const childToChild = ref('');
</script>