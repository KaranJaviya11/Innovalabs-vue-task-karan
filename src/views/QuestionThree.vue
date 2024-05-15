<template>
    <div>
        Question3
        <form @submit.prevent="handleSubmit">
        <div v-for="(block, index) in blocks.blocks" :key="index" class="form-block">
            <label :for="block.token">{{ block.props.title }}</label>
            <template v-if="block.type === 'text'">
            <input :type="block.type" :id="block.token" v-model="formData[block.token]" :placeholder="block.props.placeholder">
            </template>
            <template v-else-if="block.type === 'checkbox'">
            <input :type="block.type" :id="block.token" v-model="formData[block.token]">
            </template>
            <template v-else-if="block.type === 'date'">
            <input :type="block.type" :id="block.token" v-model="formData[block.token]" :placeholder="block.props.placeholder">
            </template>
            <template v-else-if="block.type === 'email'">
            <input :type="block.type" :id="block.token" v-model="formData[block.token]" :placeholder="block.props.placeholder">
            </template>
            <template v-else-if="block.type === 'password'">
            <input :type="block.type" :id="block.token" v-model="formData[block.token]" :placeholder="block.props.placeholder">
            </template>
            <template v-else-if="block.type === 'number'">
            <input :type="block.type" :id="block.token" v-model="formData[block.token]" :placeholder="block.props.placeholder">
            </template>
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';

    const formData = ref({});

    const blocks = ref({
        blocks: [
            {
                token: "PERSON_NAME",
                type: "text",
                props: {
                    title: "Enter your name",
                    required: true,
                    placeholder: "Enter your name"
                }
            },
            {
                token: "IS_PERSON_MINOR",
                type: "checkbox",
                props: {
                    title: "IS the current person minor?",
                    default: false
                }
            },
            {
                token: "PERSON_DOB",
                type: "date",
                props: {
                    title: "Enter your BOD",
                    required: "IS_PERSON_MINOR",
                    placeholder: "e.g 01/01/2000"
                }
            },
        ]
    });
    
    onMounted(()=>{
        blocks.value.blocks.forEach((ele)=>{
            if(ele.type == 'text' || ele.type == 'date' || ele.type == 'email' || ele.type == 'password'){
                formData.value[ele.token] = ''
            } else if (ele.type == 'checkbox') {
                formData.value[ele.token] = ele.props.default
            } else if (ele.type == 'number') {
                formData.value[ele.token] = null
            }
        })
    })

    const handleSubmit = () => {
        let isValid = true;
        let requiredFields = [];
        blocks.value.blocks.forEach(block => {
            let fieldRequird;
            if (block.props.required === true || block.props.required === false) {
                fieldRequird = block.props.required
            } else {
                fieldRequird = formData.value[block.props.required]
            }
            if (fieldRequird && !formData.value[block.token]) {
                isValid = false;
                requiredFields.push(block.props.title);
            }
        });

        if (isValid) {
            alert("YOur Form is submitted succesfully", formData.value);
        } else {
            alert(`Please fill ${requiredFields.join(",")} fields.`);
        }
    };
</script>
<style scoped>
.form-block {
  margin-bottom: 1rem;
}
</style>