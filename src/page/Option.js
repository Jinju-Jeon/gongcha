import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Option() {
  console.log(useLocation())
  return (
    <div>Option</div>
  )
}
