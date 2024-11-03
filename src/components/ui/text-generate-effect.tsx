'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/utils/cn'

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  let wordsArray = words.split(' ')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    )
    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        },
      )
    }
  }, [isInView, scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className='dark:text-white text-black opacity-0'>
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className={cn('font-bold', className)}>
      <div className='mt-4'>
        <div className=' dark:text-white text-black text-6xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
