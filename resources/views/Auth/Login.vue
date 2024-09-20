<script lang="ts" setup>
defineOptions({ name: 'LoginPage' })

useHead({ title: 'Login' })

defineProps<{
    status?: string | null
    canResetPassword?: boolean
}>()

const form = useForm({
    fields: {
        email: 'john@example.com',
        password: 'password',
        remember: false,
    },
})
</script>
<template layout="guest">
    <div>
        <v-card-title>Login</v-card-title>
        <v-form :disabled="form.processing" @submit.prevent="form.submit">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <email-field
                            v-model="form.fields.email"
                            :errors="form.errors.email"
                        />
                    </v-col>
                    <v-col cols="12">
                        <div
                            v-if="canResetPassword"
                            class="d-flex align-center justify-end"
                        >
                            <router-link
                                :href="route('password.request')"
                                class="text-caption text-decoration-none text-blue"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Forgot password?
                            </router-link>
                        </div>
                        <password-field
                            v-model="form.fields.password"
                            :errors="form.errors.password"
                            hint="current-password"
                        />
                    </v-col>
                    <v-col class="pa-0" cols="12">
                        <v-checkbox
                            v-model="form.fields.remember"
                            label="Remember me"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-btn
                            :loading="form.processing"
                            block
                            color="primary"
                            type="submit"
                        >
                            Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
