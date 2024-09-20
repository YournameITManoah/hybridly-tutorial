<script lang="ts" setup>
import type { RouteName } from 'hybridly'

interface NavItem {
    title: string
    icon: string
    name: RouteName
    exact?: boolean
}

const navigation: NavItem[] = [
    {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard',
        name: 'dashboard',
    },
]
</script>

<template>
    <v-list nav>
        <!-- List Menu -->
        <router-link
            v-for="(item, key) in navigation"
            :key="key"
            :href="route(item.name)"
            as="div"
        >
            <v-list-item
                :class="{
                    'v-list-item--active': router.current.name === item.name,
                }"
                :exact="item.exact"
                :prepend-icon="item.icon"
                :title="item.title"
                link
            />
        </router-link>
    </v-list>
</template>
