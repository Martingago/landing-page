<template>
    <article class="flex gap-5  text-white  rounded-lg p-10 bg-slate-800">
        <!-- <pre>{{ devInfo }}</pre> -->
        <aside>
            <img class="rounded-full w-28" :src="devInfo.avatar_url"
                :alt="`Foto de perfil del usuario de github llamado ${devInfo.name}`">
        </aside>
        <div class="grow">
            <header class="flex flex-col w-full h-32">
                <div class="flex justify-between items-end gap-2">
                    <h2 class="text-2xl font-bold">{{ devInfo.name }}</h2>
                    <p class="text-sm">Joined: {{ formatearFecha(devInfo.created_at) }}</p>
                </div>
        
                <NuxtLink class="text-blue-500 mb-3 w-fit" :to="devInfo.html_url" target="_blank" >@{{ devInfo.login }}</NuxtLink>
                <p :class="{'text-slate-500' : !devInfo.bio }" class="mb-2">{{ devInfo.bio ? devInfo.bio : 'This profile has no bio' }}</p>

            </header>
            <main class="p-3 bg-slate-900 rounded flex justify-around">

                <p class="text-center">Repos <br> <span class="text-xl font-bold">{{ devInfo.public_repos }}</span></p>

                <p class="text-center">Followers: <br><span class="text-xl font-bold" >{{ devInfo.followers }}</span></p>

                <p class="text-center">Following: <br> <span class="text-xl font-bold">{{ devInfo.following }}</span></p>
            </main>
            <footer class="mt-7 grid grid-cols-2 gap-y-3">
                <p :class="{'text-slate-500' : !devInfo.location}">
                    <font-awesome-icon :icon="['fas', 'location-dot']" /> 
                    {{ devInfo.location ? devInfo.location : 'Not available' }}
                </p>
                <p :class="{'text-slate-500' : !devInfo.twitter_username}">
                    <font-awesome-icon :icon="['fab', 'twitter']" /> 
                    {{ devInfo.twitter_username ? devInfo.twitter_username : 'Not available' }}
                </p>
                <p :class="{'text-slate-500' : !devInfo.blog}"><font-awesome-icon :icon="['fas', 'link']" /> 
                    {{ devInfo.blog ? devInfo.blog : 'Not available' }}
                </p>
                <p :class="{'text-slate-500' : !devInfo.company}">
                    <font-awesome-icon :icon="['fas', 'building']" />
                     {{ devInfo.company ? devInfo.company : 'Not available' }}
                </p>
            </footer>
        </div>

    </article>
</template>

<script setup>
const props = defineProps({
    devInfo: Object
})

const formatearFecha = (value) => {
    const fecha = new Date(value);
    return fecha.toLocaleString('es-ES', {
        day: '2-digit', // día del mes
    month: 'long',  // nombre del mes
    year: 'numeric' // año
    })
}

</script>