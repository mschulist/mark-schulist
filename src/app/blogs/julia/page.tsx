import React from 'react'
import Post from '@/components/Post'

export default async function Page() {
  const path = 'blogs/julia/julia.html'
  return (
    <div>
      <Post path={path} />
    </div>
  )
}
