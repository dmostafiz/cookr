import { useRouter } from 'next/router'

export default function RouterParams() {
    const router = useRouter()
    return router.query
}
