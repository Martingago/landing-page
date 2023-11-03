<template>
    <form action="" autocomplete="off" class="flex gap-1 md:gap-3 rounded border-black border-2  p-1 md:p-2">
        <div class="flex grow">
            <label class="py-2 px-1 md:px-2" for="searchUser">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </label>
            <input v-model="userInput" class="w-full p-2 focus:outline-none" type="text" name="buscarUsuario"
                id="searchUser" placeholder="Buscar usuario en Github...">
        </div>

        <button @click="search"
            class="border-black border-1 rounded bg-blue-600 py-2 px-5 text-white font-semibold ">Buscar</button>
    </form>
</template>

<script setup>
 
const userInput = ref("");

const search = async (e) => {
    e.preventDefault();
   const datos = await searchUser(userInput.value.trim());
   console.log("datosUsuarios: ", datos);


}

</script>