<script setup lang="ts">
import { useTheme } from 'vuetify'

defineOptions({ name: 'AppLayout' })

const theme = useTheme()
const prefersDark = usePreferredDark()

watchImmediate(prefersDark, (val) => {
    theme.global.name.value = val ? 'dark' : 'light'
})

onMounted(() => {
    console.log('App mounted')
})
</script>

<template>
    <v-app :class="{ 'bg-grey-lighten-4': !theme.current.value.dark }">
        <slot name="app" />
        <v-main scrollable>
            <slot />
        </v-main>
    </v-app>
</template>
