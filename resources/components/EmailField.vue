<script lang="ts" setup>
withDefaults(
  defineProps<{
    label?: string
    icon?: string
    errors?: string
  }>(),
  {
    label: 'Email',
    icon: 'mdi-email-outline',
    errors: undefined,
  },
)

const model = defineModel<string | null>()
</script>

<template>
  <v-text-field
    v-model="model"
    :error-messages="errors"
    :label="label"
    :prepend-inner-icon="icon"
    autocomplete="username"
    type="email"
  />
</template>
