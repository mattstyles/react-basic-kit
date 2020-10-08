
import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { sx, fit, getTransition } from '@raid-ui/core'
import { Box } from '@raid-ui/container'

import { variants } from './image.variants'
import { RawImage } from './rawImage'

const ImageComponent = styled(RawImage)(
  props => css({
    transition: getTransition('opacity', props.transitionDuration || 'main')(props)
  }),
  fit
)
ImageComponent.displayName = 'ImageComponent'

const Fade = styled(Box)(
  props => css({
    opacity: props.isShowing ? 1 : 0,
    transition: getTransition('opacity', props.transitionDuration || 'main')(props)
  }),
  fit
)
Fade.defaultProps = {
  isShowing: false
}
Fade.displayName = 'ImageFade'

const Frame = styled(Box)(
  props => css({
    position: 'relative',
    width: props.width || props.size || 'full',
    height: props.height || props.size || 'full',
    overflow: 'hidden'
  }),
  variants,
  sx
)
Frame.displayName = 'ImageFrame'

const statusStates = {
  loading: 'loading',
  success: 'success',
  failed: 'failed'
}

const pickView = (src, Comp) => {
  return (props) => (
    <Fade {...props}>
      {src ? <RawImage src={src} /> : Comp}
    </Fade>
  )
}

export const Image = ({
  loadingSrc,
  fallbackSrc,
  loadingComponent,
  fallbackComponent,
  transitionDuration,
  size,
  width,
  height,
  cover,
  alt,
  variant,
  sx,
  ...more
}) => {
  const [status, setStatus] = useState(statusStates.loading)
  const [isShowing, setShowing] = useState(false)
  let showingTimeout = null

  useEffect(() => {
    return () => {
      if (showingTimeout) {
        clearTimeout(showingTimeout)
      }
    }
  }, [])

  const LoadingComponent = pickView(loadingSrc, loadingComponent)
  const FallbackComponent = pickView(fallbackSrc, fallbackComponent)

  if (!alt && (process.env !== 'PROD' || process.env !== 'PRODUCTION')) {
    console.warn('Image does not contain alt text', more.src)
  }

  return (
    <Frame size={size} width={width} height={height} sx={sx} variant={variant}>
      <ImageComponent
        {...more}
        sx={{
          opacity: status === statusStates.success ? 1 : 0,
          zIndex: 1,
          objectFit: cover
        }}
        alt={alt}
        transitionDuration={transitionDuration}
        onLoad={event => {
          setStatus(statusStates.success)
          // onTransitionEnd is too flaky, and its possible it will never happen
          // @TODO how to cancel this call back on dismount?
          showingTimeout = setTimeout(() => {
            setShowing(true)
          }, transitionDuration)
        }}
        onError={event => {
          setStatus(statusStates.failed)
          setShowing(true)
        }}
      />
      {!isShowing && (
        <LoadingComponent
          transitionDuration={transitionDuration}
          isShowing
        />
      )}
      {status === statusStates.failed && (
        <FallbackComponent
          isShowing
        />
      )}
    </Frame>
  )
}
Image.propTypes = {
  loadingSrc: propTypes.string,
  fallbackSrc: propTypes.string,
  cover: propTypes.string,
  size: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  width: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  height: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  alt: propTypes.string,
  sx: propTypes.object
}
Image.defaultProps = {
  loadingSrc: null,
  fallbackSrc: null,
  loadingComponent: null,
  fallbackComponent: null,
  cover: 'cover',
  alt: ''
}
Image.displayName = 'JohnLennon'
