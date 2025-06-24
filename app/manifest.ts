import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '桜並木駅前の整骨院 | 交通事故治療専門',
    short_name: '桜並木整骨院',
    description: '福岡市博多区の交通事故治療専門整骨院。自己負担0円で安心の治療をご提供します。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}