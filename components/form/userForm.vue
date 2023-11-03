<template>
<form action="" class="flex gap-3 rounded border-black border-2 p-2">
    <div class="flex grow">
        <label class="p-2" for="searchUser">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </label>
        <input class="w-full p-2 focus:outline-none" type="text" name="buscarUsuario" id="searchUser" placeholder="Buscar usuario en Github...">
    </div>

    <button class="border-black border-1 rounded bg-blue-600 py-2 px-5 text-white font-semibold ">Buscar</button>
</form>

</template>