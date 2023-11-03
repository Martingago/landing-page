<template>
    <form  autocomplete="off" class="flex text-white gap-1 md:gap-3 rounded-lg bg-slate-800  p-1 md:p-2">
        <div class="flex grow">
            <label class="py-2 px-1 md:px-2 text-blue-600 text-2xl" for="searchUser">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </label>
            <input v-model="userInput" class="w-full bg-transparent p-2 focus:outline-none" type="text" name="buscarUsuario"
                id="searchUser" placeholder="Buscar usuario en Github...">
        </div>

        <button @click="search"
            class="border-black border-1 rounded-lg bg-blue-600 py-2 px-5 text-white font-semibold ">Buscar</button>
    </form>
</template>

<script setup>
 
const emits = defineEmits(['emit-user-data']) 
const userInput = ref("");

const search = async (e) => {
    e.preventDefault();
   const datos = await searchUser(userInput.value.trim());
   console.log(datos)
   emits('emit-user-data', datos);
}

</script>
