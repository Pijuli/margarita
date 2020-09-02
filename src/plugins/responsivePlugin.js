import Vue from 'vue'
import { breakpoint, breakpointsEnum } from '../tokens'

export default {
  install(vue) {
    vue.prototype.$layout = Vue.observable({ currentBreakpoint: null })
    vue.prototype.$layout.getResponsivePropValue = getResponsivePropValue

    if (process.server) return

    const tabletQuery = minWidthQuery(breakpoint.tablet)
    const desktopQuery = minWidthQuery(breakpoint.desktop)

    // As per docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList#Methods
    tabletQuery.addEventListener('change', updateCurrentBreakpoint)
    desktopQuery.addEventListener('change', updateCurrentBreakpoint)

    updateCurrentBreakpoint()

    function updateCurrentBreakpoint() {
      const newBreakpoint = getCurrentBreakpoint(tabletQuery, desktopQuery)

      if (newBreakpoint !== vue.prototype.$layout.currentBreakpoint) {
        vue.prototype.$layout.currentBreakpoint = newBreakpoint
      }
    }

    function getResponsivePropValue(responsiveProp) {
      const normalizedResponsiveProp = normalizeResponsiveProp(responsiveProp)
      const { currentBreakpoint } = vue.prototype.$layout
      const index = Object.values(breakpointsEnum).indexOf(currentBreakpoint)

      return normalizedResponsiveProp[index]
    }
  },
}

/**
 * Normalizes `value` to a same-length array to easily grab the right responsive prop.
 */
function normalizeResponsiveProp(value) {
  const valueToArray = Array.isArray(value) ? value : [value]

  return Array(3)
    .fill('')
    .map((_, i) => valueToArray[i] || valueToArray[valueToArray.length - 1])
}

function minWidthQuery(breakpoint) {
  return window.matchMedia(`(min-width: ${breakpoint}px)`)
}

function getCurrentBreakpoint(tabletQuery, desktopQuery) {
  if (desktopQuery.matches) {
    return breakpointsEnum.desktop
  }

  if (tabletQuery.matches) {
    return breakpointsEnum.tablet
  }

  return breakpointsEnum.mobile
}