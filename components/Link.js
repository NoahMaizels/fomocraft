import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()
  let className = children.props.className || ''
  if (router.pathname === href || (href === "/blog" && router.pathname.slice(0,5) === "/blog")) {
    className = `${className} selected`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}