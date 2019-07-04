import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  select,
  text,
  boolean,
  number,
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import notes from './ButtonInput.md'
import GridColumn from '@margarita/components/GridColumn'
import GridRow from '@margarita/components/GridRow'
import ButtonInput from '@margarita/components/ButtonInput'
import IconBase from '@margarita/components/IconBase'

const BUTTON_CATEGORIES = [
  'primary',
  'secondary',
  'tertiary',
  'gradient',
  'no-background',
]
const ICONS_BUTTON = [
  'AddContract',
  'Arrow',
  'ArrowToEnd',
  'BulbOn',
  'Close',
  'DetailsContract',
  'DownloadContract',
  'EditContract',
  'Exit',
  'Gas',
  'Link',
  'Logo',
  'LongArrow',
  'None',
  'Phone',
  'Plug',
  'User',
]

const HTML_TAGS = ['button', 'a']

storiesOf('ButtonInput', module)
  .addDecorator(withKnobs)
  .add(
    'ButtonInput',
    () => {
      const category = select('Categories', BUTTON_CATEGORIES, 'primary')
      const textButton = text('Text', 'Click me')
      const loading = boolean('Loading', false)
      const icon = select('Icons', ICONS_BUTTON, 'None')
      const iconSize = number('Icon height size in px', 18)
      const fluid = boolean('Fluid', false)
      const rounded = boolean('Rounded', false)
      const ariaLabel = text('Aria Label', '')
      const disabled = boolean('Disabled', false)
      const tag = select('HTML tag', HTML_TAGS, 'button')

      return {
        components: { ButtonInput, GridColumn, GridRow, IconBase },

        template: `
      <div>
        <h2>Dynamic button:</h2>
        <grid-row>
          <grid-column
            class="grid-col--3"
          >
            <button-input
              @click="action"
              :text="text"
              :rounded="rounded"
              :category="category"
              :tag="tag"
              :fluid="fluid"
              :disabled="disabled"
              :loading="loading"
              :aria-label="ariaLabel"
            >
              <template v-if="text">
                {{ text }}
              </template>
              <icon-base
                v-if="getIcon"
                :width="iconSize"
                :height="iconSize"
                :icon="icon"
              />
            </button-input>
          </grid-column>
        </grid-row>

        <h2>Examples:</h2>
        <grid-row>
          <grid-column
            class="grid-col--3"
            align-start
          >
            <button-input
              category="gradient"
            >
            This is a button with text only
            </button-input>
          </grid-column>
          <grid-column
            class="grid-col--1"
            align-start
          >
            <button-input
              aria-label="Download PDF"
              rounded
              category="primary"
            >
              <icon-base
                icon="DownloadContract"
                width="35"
                height="35"
              />
            </button-input>
          </grid-column>
          <grid-column
            class="grid-col--3"
            align-start
          >
            <button-input>
              This is a button with text and icon
              <icon-base
                icon="Arrow"
              />
            </button-input>
          </grid-column>
          <grid-column
            class="grid-col--3"
            align-start
          >
            <button-input
              category="no-background"
              href="https://www.holaluz.com/"
              tag="a"
            >
              This is a link with text and icon
              <icon-base
                icon="Exit"
              />
            </button-input>
          </grid-column>
        </grid-row>
      </div>`,

        computed: {
          getIcon() {
            return this.icon === 'None' ? null : this.icon
          },
        },

        props: {
          ariaLabel: {
            default: ariaLabel,
          },
          disabled: {
            default: disabled,
          },
          fluid: {
            default: fluid,
          },
          icon: {
            default: icon,
          },
          iconSize: {
            default: iconSize,
          },
          loading: {
            default: loading,
          },
          rounded: {
            default: rounded,
          },
          tag: {
            default: tag,
          },
          text: {
            default: textButton,
          },
          category: {
            default: category,
          },
        },

        methods: {
          action: action('clicked'),
        },
      }
    },
    { notes }
  )