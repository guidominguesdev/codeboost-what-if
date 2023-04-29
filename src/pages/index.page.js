import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function PageDefault() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
