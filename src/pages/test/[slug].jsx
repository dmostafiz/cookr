import { useRouter } from 'next/router'
import React from 'react'
import RouterParams from '../../Hooks/RouterParams'

export default function test() {

 const {slug} = RouterParams()

  return (
    <div>test page - { slug }</div>
  )
}
