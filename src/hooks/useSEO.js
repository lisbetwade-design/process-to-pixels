import { useEffect } from 'react'

const SITE_URL = 'https://processtopixels.studio'
const OG_IMAGE = 'https://processtopixels.studio/og-image.png'

export default function useSEO({ title, description, path = '/', structuredData }) {
  useEffect(() => {
    document.title = title

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    const canonical = `${SITE_URL}${path}`

    // Standard
    setMeta('description', description)
    setMeta('robots', 'index, follow')
    setMeta('author', 'Lisa Demchenko')

    // Canonical
    setLink('canonical', canonical)

    // Open Graph
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', 'Process to Pixels', 'property')
    setMeta('og:image', OG_IMAGE, 'property')
    setMeta('og:image:width', '1200', 'property')
    setMeta('og:image:height', '630', 'property')
    setMeta('og:locale', 'en_US', 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', OG_IMAGE)
    setMeta('twitter:creator', '@lisaprocesspixels')

    // Structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(s => s.remove())

    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [title, description, path, structuredData])
}
