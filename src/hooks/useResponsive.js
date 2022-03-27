import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { responsive } from 'shop-config'

const DEFAULT_ITEMS = 2

const BREAKPOINTS = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const useResponsive = ({ ...props }) => {

  const theme = useTheme();

  const [breakpoint, setBreakpoint] = useState("desktop")
  const [breakpointWidth, setBreakpointWidth] = useState(BREAKPOINTS.lg)
  const [itemWidth, setItemWidth] = useState(BREAKPOINTS.lg)
  const [itemsPerCarousel, setItemsPerCarousel] = useState(DEFAULT_ITEMS)

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.between('md','lg'))
  const isDesktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'))
  const isSuperLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const setResponsiveBreakpoint = () => {
    if(isMobile){
      setBreakpoint("mobile")
      setBreakpointWidth(BREAKPOINTS.sm)
    }
    if(isTablet){
      setBreakpoint("tablet");
      setBreakpointWidth(BREAKPOINTS.md)
    }
    if(isDesktop){
      setBreakpoint("desktop")
      setBreakpointWidth(BREAKPOINTS.lg)
    }
    if(isSuperLargeDesktop){
      setBreakpoint("superLargeDesktop")
      setBreakpointWidth(BREAKPOINTS.xl)
    }
  }

  useEffect(() => {
    let numItems = responsive[breakpoint].items || DEFAULT_ITEMS
    setItemsPerCarousel(numItems)
    setItemWidth(parseInt( breakpointWidth / itemsPerCarousel))
  }, [breakpointWidth, itemsPerCarousel])

  useLayoutEffect(() => {
    setResponsiveBreakpoint()
  }, [isMobile, isTablet, isDesktop, isSuperLargeDesktop])

  return {
    breakpoint,
    itemWidth,
    itemsPerCarousel,
    isMobile,
    isTablet,
    isDesktop,
    isSuperLargeDesktop,
  }
}

export default useResponsive
