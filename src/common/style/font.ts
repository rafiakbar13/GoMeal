import { Poppins } from 'next/font/google'

export const PoppinsFont = Poppins({
    variable: '--font-poppins',
    subsets: ['latin-ext'],
    display: 'fallback',
    weight: ['400', '500', '600', '700'],
})