<script lang="ts" setup>
withDefaults(
    defineProps<{
        hint: 'current-password' | 'new-password' | 'cc-number' | 'cc-csc'
        label?: string
        icon?: string
        errors?: string
    }>(),
    {
        label: 'Password',
        icon: 'mdi-lock-outline',
        errors: undefined,
    },
)

const model = defineModel<string | null>()
const showPassword = ref(false)
</script>

<template>
    <v-text-field
        v-model="model"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :autocomplete="hint"
        :error-messages="errors"
        :label="label"
        :prepend-inner-icon="icon"
        :type="showPassword ? 'text' : 'password'"
        @click:append-inner="showPassword = !showPassword"
    />
</template>
