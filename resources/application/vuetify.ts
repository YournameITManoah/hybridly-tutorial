import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const input = { color: 'primary', hideDetails: 'auto' }

const vuetify = createVuetify({
    components: {
        ...components,
    },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    defaults: {
        VAlert: { ...input, type: 'info' },
        VAutocomplete: { ...input },
        VBtnToggle: { ...input },
        VCheckbox: { ...input },
        VCombobox: { ...input },
        VDatePicker: { ...input, showAdjacentMonths: true },
        VField: { ...input },
        VFileInput: { ...input },
        VOtpInput: { ...input },
        VProgressLinear: { ...input },
        VSelect: { ...input },
        VSelectionControl: { ...input },
        VSlider: { ...input },
        VSwitch: { ...input },
        VTabs: { ...input, showArrows: true },
        VTextarea: { ...input, rows: 4 },
        VTextField: { ...input },
    },
})

export default vuetify
