<script lang="ts" setup>
useHead({ title: 'Email Verification' })

const props = defineProps<{
    status?: string | null
}>()

const form = useForm({
    fields: [],
})

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
)
</script>

<template layout="guest">
    <div>
        <v-card-title>Email Verification</v-card-title>
        <v-form :disabled="form.processing" @submit.prevent="form.submit">
            <div class="text-subtitle-2 text-medium-emphasis mb-4">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>
            <v-alert v-if="verificationLinkSent" class="mb-4">
                A new verification link has been sent to the email address you
                provided during registration.
            </v-alert>
            <div class="d-flex justify-space-between align-center">
                <v-btn :loading="form.processing" color="primary" type="submit">
                    Resend Verification Email
                </v-btn>
                <router-link
                    :href="route('logout')"
                    class="text-black"
                    method="post"
                >
                    Log Out
                </router-link>
            </div>
        </v-form>
    </div>
</template>
