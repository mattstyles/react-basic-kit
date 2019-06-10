
/**
 * Scrollable wraps and supplies a scroll event to with the size of the current
 * viewport. Children can then determine their visibility and react how they wish.
 */

import React, { useState, useEffect, useRef, useContext, createContext } from 'react'
import { scroll } from 'raid-streams/screen'

import { View } from './'
import { errLog, noop } from '../utils'

export const ScrollContext = createContext()
export const ScrollConsumer = ScrollContext.Consumer

/**
 * HOC to create child elements that can respond to scroll events
 */
export const createScrollTarget = Component => {
  return props => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const viewport = useContext(ScrollContext)

    useEffect(() => {
      // Just measure top for visibility
      // @TODO proper bounds check for any visibility
      if (!viewport || !ref || !ref.current) {
        return
      }
      const top = ref.current.offsetTop
      setIsVisible(top >= viewport[1] && top <= viewport[3])
    })

    // @TODO do we need this span, just to apply a ref?
    return (
      <span ref={ref}>
        <Component {...props} isVisible={isVisible} />
      </span>
    )
  }
}

/**
 * Utility to create a viewport
 * [left, top, right, bottom]
 */
const createViewport = el => event => {
  const { payload: { top, left } } = event
  const {
    offsetHeight: height,
    offsetWidth: width
  } = el

  return [
    left,
    top,
    left + width,
    top + height
  ]
}

/**
 * Scroll observable hook
 */
const useScrollObservable = ref => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const obs = scroll({ el: ref.current })
      .map(createViewport(ref.current))

    const subscription = obs.subscribe({
      next: setValue,
      complete: noop,
      err: errLog
    })

    // Set initial value from parent dimensions
    setValue([
      ref.current.offsetLeft,
      ref.current.offsetTop,
      ref.current.offsetLeft + ref.current.offsetWidth,
      ref.current.offsetTop + ref.current.offsetHeight
    ])

    return () => {
      subscription.unsubscribe()
    }
  }, [ref])

  return [value]
}

export const Scrollable = props => {
  const ref = useRef(null)
  const [value] = useScrollObservable(ref)

  return (
    <ScrollContext.Provider value={value}>
      <View {...props} ref={ref}>
        {props.children}
      </View>
    </ScrollContext.Provider>
  )
}