import Image from 'next/image'

export default function BentoHeader({
  image,
  width,
}: {
  image: string
  width: number
}) {
  return (
    <div className='flex h-full items-center justify-start'>
      <Image
        src={image}
        alt=''
        height={0}
        width={width}
        className='rounded-lg max-h-full max-w-full'
      />
    </div>
  )
}
