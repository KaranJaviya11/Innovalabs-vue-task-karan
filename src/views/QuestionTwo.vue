<template>
    <div>
        Question2
    </div>
    <div>
        <input type="text" v-model="search" @input="filterUsers" placeholder="Search...">
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>address</th>
                    <th>geolocation (lat,lng)</th>
                    <th>companyName</th>
                    <th>companycatchPhrase</th>
                    <th>companybs</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="user in paginatedUsers" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.website }}</td>
                    <td>{{ `${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}` }}</td>
                    <td>{{ `(${user.address.geo.lat} ${user.address.geo.lng})` }}</td>
                    <td>{{ user.company.name }}</td>
                    <td>{{ user.company.catchPhrase }}</td>
                    <td>{{ user.company.bs }}</td>

                </tr>
            </tbody>
        </table>
    <div>
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>
<script setup>
    import { onMounted,computed, onBeforeUnmount,ref } from 'vue';
    import { useStore } from 'vuex';

    const  { getters, dispatch, commit } = useStore();
    const search = ref('');
    const currentPage = computed(() => getters['userData/getCurrentPage']);
    const paginatedUsers = computed(() => getters['userData/paginatedUsers']);
    const totalPages = computed(() => getters['userData/totalPages']);

    const previousPage = () => {
      commit('userData/setCurrentPage', currentPage.value - 1);
    };

    const nextPage = () => {
      commit('userData/setCurrentPage', currentPage.value + 1);
    };

    const filterUsers = () => {
        commit('userData/filterUsers');
        dispatch('userData/setCurrentPage0');
        commit('userData/setSearchQuery', search);
    };

    onMounted(() => {
        if (paginatedUsers.value.length === 0) {
            dispatch('userData/fetchUsers');
        }
    });

    onBeforeUnmount(() => {
        dispatch('userData/setCurrentPage0');
    })
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    thead {
        background-color: #f2f2f2;
    }

    thead th {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tbody td {
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
    tfoot {
        background-color: #f2f2f2;
    }

    tfoot td {
        padding: 8px;
        border-top: 1px solid #ddd;
    }

</style>