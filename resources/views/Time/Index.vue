<script lang="ts" setup>
defineOptions({ name: 'TimeLogIndex' })

useHead({ title: 'Time Logs' })

const breadcrumbs = [
    {
        title: 'Time Logs',
        href: route('time-log.index'),
        disabled: true,
    },
]

const headers = [
    { title: 'Project', key: 'project.name' },
    { title: 'Start Time', key: 'start_time' },
    { title: 'Stop Time', key: 'stop_time' },
]

const items = ref([])
const totalItems = ref(0)
const isLoadingTable = ref(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options = ref<any>({})
const search = ref<string | undefined>()

const loadItems = async () => {
    isLoadingTable.value = true
    const { page, itemsPerPage, sortBy, search } = options.value
    const params = {
        page,
        search: undefined,
        limit: itemsPerPage,
        sort: sortBy[0],
    }

    if (search) params.search = search

    try {
        const result = await window.axios('/api/time-log', {
            params,
        })
        items.value = result.data.data
        totalItems.value = result.data.total
        isLoadingTable.value = false
    } catch (e) {
        console.error(e)
        isLoadingTable.value = false
    }
}
</script>

<template layout>
    <div>
        <div class="mb-5">
            <h5 class="text-h5 font-weight-bold">Time Logs</h5>
            <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
        </div>
        <v-card>
            <v-card-text>
                <v-data-table-server
                    v-model:options="options"
                    :headers="headers"
                    :items="items"
                    :items-length="totalItems"
                    :loading="isLoadingTable"
                    :search="search"
                    @update:options="loadItems"
                ></v-data-table-server>
            </v-card-text>
        </v-card>
    </div>
</template>
