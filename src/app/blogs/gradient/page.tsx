import React from 'react'
import Post from '@/components/Post'

export default async function Page() {
  const path = 'blogs/gradient/gradients.html'
  return (
    <>
      <Post path={path} />
    </>
  )
}
