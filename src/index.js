import './scss/_margarita.scss'

import MaAlert from './components/MaAlert'
import MaButton from './components/MaButton'
import MaCard from './components/MaCard'
import MaDatagrid from './components/MaDatagrid'
import MaGridColumn from './components/MaGridColumn'
import MaGridContainer from './components/MaGridContainer'
import MaGridRow from './components/MaGridRow'
import MaIcon from './components/MaIcon'
import MaOption from './components/MaOption'
import MaPagination from './components/MaPagination'
import MaPill from './components/MaPill'
import MaRange from './components/MaRange'
import MaSelect from './components/MaSelect'
import MaSidebar from './components/MaSidebar'
import MaTextField from './components/MaTextField'
import MaStack from './components/MaStack'
import { markdown, markdownSSR } from './directives/markdown'
import responsivePlugin from './plugins/responsivePlugin'

export {
  MaAlert,
  MaButton,
  MaCard,
  MaDatagrid,
  MaGridColumn,
  MaGridContainer,
  MaGridRow,
  MaIcon,
  MaOption,
  MaPagination,
  MaPill,
  MaRange,
  MaSelect,
  MaSidebar,
  MaStack,
  MaTextField,
  markdown,
  markdownSSR,
  responsivePlugin,
}

function install(Vue) {
  Vue.use(responsivePlugin)

  Vue.component('MaAlert', MaAlert)
  Vue.component('MaButton', MaButton)
  Vue.component('MaCard', MaCard)
  Vue.component('MaDatagrid', MaDatagrid)
  Vue.component('MaGridColumn', MaGridColumn)
  Vue.component('MaGridContainer', MaGridContainer)
  Vue.component('MaGridRow', MaGridRow)
  Vue.component('MaIcon', MaIcon)
  Vue.component('MaOption', MaOption)
  Vue.component('MaPagination', MaPagination)
  Vue.component('MaPill', MaPill)
  Vue.component('MaRange', MaRange)
  Vue.component('MaSelect', MaSelect)
  Vue.component('MaSidebar', MaSidebar)
  Vue.component('MaStack', MaStack)
  Vue.component('MaTextField', MaTextField)

  Vue.directive('markdown', markdown)
}

export default { install }
