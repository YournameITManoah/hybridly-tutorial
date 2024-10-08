<script lang="ts" setup>
import type {
    PagedParams,
    PagedResult,
    TimeLogWithProject,
    VDataTableOptions,
} from '~/resources/types'

defineOptions({ name: 'TimeLogIndex' })

useHead({ title: 'Time Logs' })

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Time Logs',
        href: route('time-log.index'),
        disabled: true,
    },
]

const groupBy = ref<any>([])
const headers = computed(() => {
    return [
        { title: 'Project', key: 'project.name' },
        { title: 'Date', key: 'date' },
        { title: 'Start Time', key: 'start_time' },
        { title: 'Stop Time', key: 'stop_time' },
        { title: 'Duration', key: 'duration', sortable: false },
    ].filter((h) => h.key !== groupBy.value[0]?.key)
})

const items = ref<TimeLogWithProject[]>([])
const totalItems = ref(0)
const isLoadingTable = ref(false)
const search = ref<string | undefined>()

const loadItems = async ({
    page,
    itemsPerPage,
    sortBy,
    search,
}: VDataTableOptions) => {
    isLoadingTable.value = true
    const params: PagedParams = {
        page,
        limit: itemsPerPage,
        sort: sortBy[0],
    }

    if (search) params.search = search

    try {
        const result = await window.axios<PagedResult<TimeLogWithProject>>(
            '/api/time-log/my',
            { params },
        )
        items.value = result.data.data
        totalItems.value = result.data.total
    } catch (e) {
        console.error(e)
    } finally {
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
                    v-model:group-by="groupBy"
                    :headers="headers"
                    :items="items"
                    :items-length="totalItems"
                    :loading="isLoadingTable"
                    :search="search"
                    @update:options="loadItems"
                >
                    <template #item.date="{ value }">
                        {{ formatDate(value) }}
                    </template>
                    <template #item.start_time="{ value }">
                        {{ formatTime(value) }}
                    </template>
                    <template #item.stop_time="{ value }">
                        {{ formatTime(value) }}
                    </template>
                    <template #item.duration="{ item }">
                        {{ formatDuration(item.start_time, item.stop_time) }}
                    </template>
                </v-data-table-server>
            </v-card-text>
        </v-card>
    </div>
</template>
