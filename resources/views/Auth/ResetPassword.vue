<script lang="ts" setup>
useHead({ title: 'Reset Password' })

const props = defineProps<{
    email: string
    token: string
}>()

const form = useForm({
    fields: {
        token: props.token,
        email: props.email,
        password: '',
        password_confirmation: '',
    },
})
</script>

<template layout="guest">
    <div>
        <v-card-title>Reset Password</v-card-title>
        <v-form :disabled="form.processing" @submit.prevent="form.submit">
            <v-col>
                <email-field
                    v-model="form.fields.email"
                    :errors="form.errors.email"
                />
            </v-col>
            <v-col>
                <password-field
                    v-model="form.fields.password"
                    :errors="form.errors.password"
                    hint="new-password"
                />
            </v-col>
            <v-col>
                <password-field
                    v-model="form.fields.password_confirmation"
                    :errors="form.errors.password_confirmation"
                    hint="new-password"
                    label="Password Confirmation"
                />
            </v-col>
            <v-col cols="12">
                <v-btn
                    :loading="form.processing"
                    block
                    color="primary"
                    type="submit"
                >
                    Reset Password
                </v-btn>
            </v-col>
        </v-form>
    </div>
</template>
