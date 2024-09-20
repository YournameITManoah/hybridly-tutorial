<script setup lang="ts">
import AppLayout from '@/layouts/app.vue'
import { useDisplay } from 'vuetify'

defineOptions({ name: 'DefaultLayout' })

const { mobile } = useDisplay()
const drawer = ref(!mobile.value)

const user = useProperty('security.user')

watch(mobile, (val) => {
    if (!val) drawer.value = true
})
</script>

<template>
    <app-layout>
        <template #app>
            <v-navigation-drawer
                v-model="drawer"
                :permanent="!mobile"
                :rail="!mobile"
                expand-on-hover
            >
                <v-list>
                    <v-list-item
                        :subtitle="user?.email"
                        :title="user?.name"
                        prepend-icon="mdi-account"
                    >
                        <template #append>
                            <v-list-item-action>
                                <router-link
                                    :href="route('logout')"
                                    as="button"
                                    method="post"
                                >
                                    <v-icon icon="mdi-logout" />
                                </router-link>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                </v-list>
                <v-divider />
                <navigation-menu />
            </v-navigation-drawer>
            <v-app-bar color="primary">
                <v-app-bar-nav-icon
                    v-if="mobile"
                    @click.stop="drawer = !drawer"
                />
                <v-toolbar-title text="Laravel" />
            </v-app-bar>
        </template>
        <v-container>
            <slot />
        </v-container>
    </app-layout>
</template>
