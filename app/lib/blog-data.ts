export const blogPosts = {
    'seo-guide-2024': {
        id: 1,
        title: "راهنمای کامل سئو تکنیکال 2024",
        excerpt: "آموزش جامع سئو تکنیکال برای بهبود رتبه‌بندی وب‌سایت در گوگل",
        description: "آموزش جامع سئو تکنیکال برای بهبود رتبه‌بندی وب‌سایت در گوگل",
        author: "تیم عصر سئو",
        date: "2024-01-15",
        readTime: "15 دقیقه خواندن",
        tags: ["سئو تکنیکال", "بهینه‌سازی", "گوگل"],
        category: "آموزش سئو",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
        slug: "seo-guide-2024",
        featured: true,
        content: "محتوای کامل مقاله سئو تکنیکال..."
    },
    'google-ads-guide-2024': {
        id: 2,
        title: "راهنمای گوگل ادز 2024",
        excerpt: "نحوه راه‌اندازی و بهینه‌سازی کمپین‌های تبلیغاتی گوگل ادز",
        description: "نحوه راه‌اندازی و بهینه‌سازی کمپین‌های تبلیغاتی گوگل ادز",
        author: "علی احمدی",
        date: "2024-01-10",
        readTime: "12 دقیقه خواندن",
        tags: ["گوگل ادز", "تبلیغات", "بازاریابی"],
        category: "تبلیغات",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80",
        slug: "google-ads-guide-2024",
        content: "محتوای کامل مقاله گوگل ادز..."
    },
    'digital-marketing-trends-2024': {
        id: 3,
        title: "ترندهای دیجیتال مارکتینگ 2024",
        excerpt: "جدیدترین روندها و تکنیک‌های دیجیتال مارکتینگ در سال 2024",
        description: "جدیدترین روندها و تکنیک‌های دیجیتال مارکتینگ در سال 2024",
        author: "سارا کریمی",
        date: "2024-01-05",
        readTime: "10 دقیقه خواندن",
        tags: ["دیجیتال مارکتینگ", "ترندها", "استراتژی"],
        category: "بازاریابی",
        image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        slug: "digital-marketing-trends-2024",
        content: "محتوای کامل مقاله ترندهای دیجیتال مارکتینگ..."
    }
}

export function getBlogPost(slug: string) {
    return blogPosts[slug as keyof typeof blogPosts]
}

export function getAllBlogPosts() {
    return Object.values(blogPosts)
}
