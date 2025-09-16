import { useState, useEffect, useCallback } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
  content?: string;
  keyTakeaways?: string[];
  tableOfContents?: { title: string; id: string; level: number }[];
  faqs?: { question: string; answer: string }[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "راهنمای کامل سئو تکنیکال 2024",
    excerpt: "آموزش جامع سئو تکنیکال برای بهبود رتبه‌بندی وب‌سایت در گوگل",
    author: "تیم عصر سئو",
    date: "2024-01-15",
    readTime: "15 دقیقه خواندن",
    tags: ["سئو تکنیکال", "بهینه‌سازی", "گوگل"],
    category: "آموزش سئو",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    slug: "seo-guide-2024",
    featured: true
  },
  {
    id: 2,
    title: "راهنمای گوگل ادز 2024",
    excerpt: "نحوه راه‌اندازی و بهینه‌سازی کمپین‌های تبلیغاتی گوگل ادز",
    author: "علی احمدی",
    date: "2024-01-10",
    readTime: "12 دقیقه خواندن",
    tags: ["گوگل ادز", "تبلیغات", "بازاریابی"],
    category: "تبلیغات",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80",
    slug: "google-ads-guide-2024"
  },
  {
    id: 3,
    title: "ترندهای دیجیتال مارکتینگ 2024",
    excerpt: "جدیدترین روندها و تکنیک‌های دیجیتال مارکتینگ در سال 2024",
    author: "سارا کریمی",
    date: "2024-01-05",
    readTime: "10 دقیقه خواندن",
    tags: ["دیجیتال مارکتینگ", "ترندها", "استراتژی"],
    category: "بازاریابی",
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    slug: "digital-marketing-trends-2024"
  }
];

const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts(BLOG_POSTS);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200; // Persian reading speed
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} دقیقه خواندن`;
  };

  const getPostBySlug = useCallback(async (slug: string) => {
    const post = posts.find(p => p.slug === slug);
    if (!post) return null;

    try {
      const response = await fetch(`/blog/${slug}.md`);
      if (!response.ok) return post;
      
      const mdContent = await response.text();

      // Parse frontmatter and content
      const frontmatterMatch = mdContent.match(/^---\n(.*?)\n---\n(.*)$/s);
      if (!frontmatterMatch) return post;

      let content = frontmatterMatch[2];
      
      // Extract key takeaways and remove from content
      const keyTakeawaysMatch = content.match(/## نکات کلیدی\n\n(.*?)\n\n##/s);
      const keyTakeaways = keyTakeawaysMatch 
        ? keyTakeawaysMatch[1].split('\n').filter(line => line.startsWith('- ')).map(line => line.substring(2).trim())
        : [];
      
      // Remove key takeaways section from content
      if (keyTakeawaysMatch) {
        content = content.replace(/## نکات کلیدی\n\n.*?\n\n##/s, '##');
      }

      // Extract table of contents and remove from content
      const headingRegex = /^(#{1,6})\s+(.+?)(?:\s+\{#([^}]+)\})?$/gm;
      const tableOfContents: { title: string; id: string; level: number }[] = [];
      let match;
      
      // Reset regex for fresh start
      headingRegex.lastIndex = 0;
      
      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const title = match[2].trim();
        const id = match[3] || title.toLowerCase().replace(/\s+/g, '-');
        
        if (level >= 2 && title !== 'نکات کلیدی' && title !== 'سوالات متداول') {
          tableOfContents.push({ title, id, level });
        }
      }

      // Extract FAQs and remove from content
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
        
        // Remove FAQs section from content
        content = content.replace(/## سوالات متداول\n\n.*$/s, '');
      }

      // Calculate reading time
      const readTime = calculateReadingTime(content);

      return {
        ...post,
        content: content.trim(),
        keyTakeaways,
        tableOfContents,
        faqs,
        readTime
      };
    } catch (error) {
      console.error('Error loading post:', error);
      return null;
    }
  }, [posts]);

  return {
    posts,
    loading,
    getPostBySlug
  };
};

export default useBlogPosts;