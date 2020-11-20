import { storiesOf } from '@storybook/vue'

import MaHidden from '@margarita/components/MaHidden'

storiesOf('Hidden', module)
  .add('Hidden', () => {
    return {
      components: { MaHidden },
      template: `
        <div>
          <ma-hidden below="tablet">1. I'm hidden below tablet!</ma-hidden>
          <ma-hidden below="desktop">2. I'm hidden below desktop!</ma-hidden>
          <ma-hidden above="mobile">3. I'm hidden above mobile!</ma-hidden>
          <ma-hidden above="tablet">4. I'm hidden above tablet!</ma-hidden>
        </div>
      `,
    }
  })
  .add('Hidden inline', () => {
    return {
      components: { MaHidden },
      template: `
        <p>
          Hidden
            <b>
              <ma-hidden inline below="tablet">below</ma-hidden>
              <ma-hidden inline above="mobile">above</ma-hidden>
            </b>
          tablet.
        </p>
      `,
    }
  })
