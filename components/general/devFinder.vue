<template>
    <section class="flex flex-col gap-4">
            <userForm @emit-user-data="manageDevInfo" key="userForm"></userForm>
            <resultFinder :dev-info="dev" key="resultFinder"></resultFinder>

    </section>

</template>

<script setup>

const dev = ref(null);

const manageDevInfo = (e) => {
    dev.value = e;
}

</script>

