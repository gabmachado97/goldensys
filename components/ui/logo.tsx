import Link from 'next/link'
import goldenLogo from '@/public/images/logos/golden.svg';
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
        <Image
                      src={goldenLogo}
                      width={48}
                      height={48}
                      alt={"Logo"}
                    />
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
    </Link>
  )
}
