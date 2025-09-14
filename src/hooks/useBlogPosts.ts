import { useState, useEffect } from 'react';

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
  slug: string;
  content?: string;
  keyTakeaways?: string[];
  tableOfContents?: { title: string; id: string; level: number }[];
  faqs?: { question: string; answer: string }[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: 'راهنمای کامل سئو برای مبتدیان ۲۰۲۴',
    excerpt: 'یادگیری اصول اولیه سئو و بهینه‌سازی وب‌سایت برای موتورهای جستجو',
    category: 'آموزش سئو',
    author: 'تیم عصر سئو',
    date: '2024-01-15',
    readTime: '۱۰ دقیقه',
    image: '/placeholder.svg',
    featured: true,
    tags: ['سئو', 'بهینه‌سازی', 'موتورهای جستجو', 'آموزش'],
    slug: 'seo-guide-2024'
  },
  {
    title: 'نحوه افزایش ترافیک وب‌سایت با تبلیغات گوگل',
    excerpt: 'استراتژی‌های موثر برای راه‌اندازی کمپین‌های تبلیغاتی موفق در گوگل ادز',
    category: 'گوگل ادز',
    author: 'احمد محمدی',
    date: '2024-01-12',
    readTime: '۸ دقیقه',
    image: '/placeholder.svg',
    featured: false,
    tags: ['گوگل ادز', 'تبلیغات', 'PPC', 'بازاریابی دیجیتال'],
    slug: 'google-ads-guide-2024'
  },
  {
    title: 'ترندهای دیجیتال مارکتینگ در سال ۲۰۲۴',
    excerpt: 'بررسی آخرین ترندها و روش‌های نوین بازاریابی دیجیتال',
    category: 'دیجیتال مارکتینگ',
    author: 'سارا احمدی',
    date: '2024-01-10',
    readTime: '۱۲ دقیقه',
    image: '/placeholder.svg',
    featured: false,
    tags: ['دیجیتال مارکتینگ', 'ترندها', 'هوش مصنوعی', 'شخصی‌سازی'],
    slug: 'digital-marketing-trends-2024'
  }
];

const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadPosts = async () => {
      try {
        // In a real app, this would fetch from an API or read MD files
        await new Promise(resolve => setTimeout(resolve, 500));
        setPosts(BLOG_POSTS);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
      // In a real app, this would fetch the MD file content
      const response = await fetch(`/blog/${slug}.md`);
      if (!response.ok) return null;
      
      const mdContent = await response.text();
      const post = posts.find(p => p.slug === slug);
      
      if (!post) return null;

      // Parse frontmatter and content
      const frontmatterMatch = mdContent.match(/^---\n(.*?)\n---\n(.*)$/s);
      if (!frontmatterMatch) return post;

      const content = frontmatterMatch[2];
      
      // Extract key takeaways
      const keyTakeawaysMatch = content.match(/## نکات کلیدی\n\n(.*?)\n\n##/s);
      const keyTakeaways = keyTakeawaysMatch 
        ? keyTakeawaysMatch[1].split('\n').filter(line => line.startsWith('- ')).map(line => line.substring(2).trim())
        : [];

      // Extract table of contents
      const headingRegex = /^(#{1,6})\s+(.+?)(?:\s+\{#([^}]+)\})?$/gm;
      const tableOfContents: { title: string; id: string; level: number }[] = [];
      let match;
      
      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const title = match[2].trim();
        const id = match[3] || title.toLowerCase().replace(/\s+/g, '-');
        
        if (level >= 2) {
          tableOfContents.push({ title, id, level });
        }
      }

      // Extract FAQs
      const faqsMatch = content.match(/## سوالات متداول\n\n(.*?)(?:\n##|$)/s);
      const faqs: { question: string; answer: string }[] = [];
      
      if (faqsMatch) {
        const faqContent = faqsMatch[1];
        const faqRegex = /### (.+?)\n(.+?)(?=\n###|\n##|$)/gs;
        let faqMatch;
        
        while ((faqMatch = faqRegex.exec(faqContent)) !== null) {
          faqs.push({
            question: faqMatch[1].trim(),
            answer: faqMatch[2].trim()
          });
        }
      }

      return {
        ...post,
        content,
        keyTakeaways,
        tableOfContents,
        faqs
      };
    } catch (error) {
      console.error('Error loading post:', error);
      return null;
    }
  };

  return {
    posts,
    loading,
    getPostBySlug
  };
};

export default useBlogPosts;