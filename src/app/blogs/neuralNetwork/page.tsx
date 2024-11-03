import Post from '@/components/Post'
import React from 'react'

export default async function Page() {
  const path = 'blogs/neural_network/neural_network.html'
  return (
    <div>
      <Post path={path} />
    </div>
  )
}
