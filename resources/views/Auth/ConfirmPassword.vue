<script lang="ts" setup>
useHead({ title: 'Confirm Password' })

defineProps<{
    status?: string | null
}>()

const form = useForm({
    fields: {
        password: '',
    },
})
const showPassword = ref(false)
</script>

<template layout="guest">
    <div>
        <v-card-title>Confirm Password</v-card-title>
        <v-form @submit.prevent="form.submit">
            <div class="text-subtitle-2 text-medium-emphasis mb-4">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>
            <v-text-field
                v-model="form.fields.password"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :error-messages="form.errors.password"
                :type="showPassword ? 'text' : 'password'"
                density="compact"
                placeholder="Password"
                variant="outlined"
                @click:append-inner="showPassword = !showPassword"
            />
            <v-btn
                :loading="form.processing"
                block
                class="mt-4"
                color="primary"
                type="submit"
            >
                Confirm
            </v-btn>
        </v-form>
    </div>
</template>
