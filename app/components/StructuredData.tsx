'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

// Default structured data for the homepage
export function HomepageStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'عصر سئو',
    description: 'شرکت پیشرو در ارائه خدمات دیجیتال مارکتینگ، سئو، هوش مصنوعی و تبلیغات گوگل',
    url: 'https://asreseo.com',
    logo: 'https://asreseo.com/logo.png',
    image: 'https://asreseo.com/og-image.jpg',
    telephone: '+98-xxx-xxx-xxxx',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IR',
      addressRegion: 'Tehran',
      addressLocality: 'Tehran'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6892,
      longitude: 51.3890
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 35.6892,
        longitude: 51.3890
      },
      geoRadius: '50000'
    },
    services: [
      'خدمات سئو',
      'دیجیتال مارکتینگ',
      'تبلیغات گوگل',
      'طراحی وب‌سایت',
      'هوش مصنوعی',
      'اتوماسیون بازاریابی'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات دیجیتال مارکتینگ',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'خدمات سئو حرفه‌ای',
            description: 'بهینه‌سازی موتور جستجو و افزایش رتبه سایت'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'تبلیغات گوگل ادز',
            description: 'مدیریت و بهینه‌سازی کمپین‌های تبلیغاتی'
          }
        }
      ]
    }
  }

  return <StructuredData data={data} />
}

// Breadcrumb structured data
export function BreadcrumbStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'خانه',
        item: 'https://asreseo.com/'
      }
    ]
  }

  return <StructuredData data={data} />
}

// Organization structured data
export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'عصر سئو',
    url: 'https://asreseo.com',
    logo: 'https://asreseo.com/logo.png',
    description: 'شرکت پیشرو در خدمات دیجیتال مارکتینگ، سئو و هوش مصنوعی در ایران',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IR',
      addressRegion: 'Tehran',
      addressLocality: 'Tehran'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-xxx-xxx-xxxx',
      contactType: 'customer service',
      availableLanguage: ['Persian', 'English']
    },
    sameAs: [
      'https://instagram.com/asreseo',
      'https://t.me/asreseo',
      'https://linkedin.com/company/asreseo'
    ]
  }

  return <StructuredData data={data} />
}
