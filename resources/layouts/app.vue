<script setup lang="ts">
import { useTheme } from 'vuetify'
import { VSonner, toast } from 'vuetify-sonner'
import 'vuetify-sonner/style.css'

defineOptions({ name: 'AppLayout' })

const theme = useTheme()
const flash = useProperty('flash')
const prefersDark = usePreferredDark()

watchImmediate(prefersDark, (val) => {
    theme.global.name.value = val ? 'dark' : 'light'
})

onMounted(() => {
    const val = flash.value
    if (val) {
        Object.keys(val).forEach((key) => {
            const msg = val[key as keyof typeof val]
            if (msg) toast(msg, { cardProps: { color: key } })
        })
    }
})
</script>

<template>
    <v-app :class="{ 'bg-grey-lighten-4': !theme.current.value.dark }">
        <v-sonner position="top-right" expand />
        <slot name="app" />
        <v-main scrollable>
            <slot />
        </v-main>
    </v-app>
</template>
