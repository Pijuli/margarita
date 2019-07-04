import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import GridColumn from '@margarita/components/GridColumn'

import TextInput from '@margarita/components/TextInput'
import ButtonInput from '@margarita/components/ButtonInput'
import IconBase from '@margarita/components/IconBase'
import notes from './TextInput.md'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const ICONS = [
  'AddContract',
  'Arrow',
  'ArrowToEnd',
  'BulbOn',
  'Close',
  'DetailsContract',
  'DownloadContract',
  'Exit',
  'Gas',
  'Link',
  'Logo',
  'LongArrow',
  'Phone',
  'Plug',
  'User',
]

const TRIGGERED_MSG = 'Triggered event:'
const CHANGED_MSG = 'Changed property:'

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .add(
    'TextInput',
    () => {
      const disabled = boolean('Disable', false)
      const errorMessage = text('Error msg', 'You have an error')
      const hasError = boolean('Has error', false)
      const label = text('Label', 'Label')
      const offset = select('Offset', [0, ...GRID_ARRAY], 4)
      const placeholder = text('Placeholder', 'Placeholder')
      const size = select('Size', GRID_ARRAY, 4)
      const value = text('Value', '')
      const icon = select('Icon', ['', ...ICONS], '')
      const siblingLabel = text('Sibling label', '')

      return {
        components: { TextInput, GridColumn, IconBase, ButtonInput },

        template: `
        <grid-column :class="getClass">
          <text-input
            id="my-text-input"
            :errorMessage="errorMessage"
            :disabled="disabled"
            :hasError="hasError"
            :label="label"
            :placeholder="placeholder"
            v-model="value"
            @blur="onBlur"
          >
            <button-input
              v-if="siblingLabel"
              href="#"
              category="no-background"
              style="flex: 0 1 100%; margin-left: 1rem;"
              slot="labelSibling"
              v-text="siblingLabel"
            />
            <button-input
              v-if="icon"
              slot="inputSibling"
            >
              <icon-base
                :icon="icon"
                width="16"
                height="16"
              />
            </button-input>
          </text-input>
        </grid-column>`,

        computed: {
          getClass() {
            const classes = [`grid-col--${this.size}`]
            const offset = Number(this.offset)

            if (offset) classes.push(`grid-col--offset-${offset}`)
            return classes
          },
        },

        props: {
          disabled: {
            default: disabled,
          },
          errorMessage: {
            default: errorMessage,
          },
          hasError: {
            default: hasError,
          },
          label: {
            default: label,
          },
          placeholder: {
            default: placeholder,
          },
          offset: {
            default: offset,
          },
          size: {
            default: size,
          },
          textValue: {
            default: value,
          },
          icon: {
            default: icon,
          },
          siblingLabel: {
            default: siblingLabel,
          },
        },

        data() {
          return {
            value: this.textValue,
          }
        },

        methods: {
          onBlur: action(`${TRIGGERED_MSG} blur`),
        },

        watch: {
          textValue(newValue) {
            this.value = newValue
          },
          value: action(`${CHANGED_MSG} value`),
        },
      }
    },
    { notes }
  )