interface VFormRefError {
    id: string | number
    errorMessages: string[]
}

export interface VFormRef {
    errors: VFormRefError[]
    isDisabled: boolean
    isReadonly: boolean
    isValid: boolean
    isValidating: boolean
    items: {
        id: string | number
        validate: () => Promise<string[]>
        reset: () => Promise<void>
        resetValidation: () => Promise<void>
        vm: Raw<ComponentInternalInstance>
        isValid: boolean | null
        errorMessages: string[]
    }[]
    reset: () => void
    resetValidation: () => void
    validate: () => Promise<{
        valid: boolean
        errors: VFormRefError[]
    }>
}
