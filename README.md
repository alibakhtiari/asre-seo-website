# عصر سئو - Asre SEO Website

یک وب‌سایت بازاریابی دیجیتال حرفه‌ای برای ارائه خدمات سئو، تبلیغات گوگل، طراحی وب‌سایت و سایر خدمات دیجیتال مارکتینگ.

## درباره پروژه

این پروژه با استفاده از Next.js، Tailwind CSS و TypeScript ساخته شده و برای استقرار روی Vercel بهینه‌سازی شده‌است.

## تکنولوژی‌های استفاده شده

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **ESLint** - Code linting
- **Vercel** - Deployment platform

## نصب و راه‌اندازی

### پیش‌نیازها

- Node.js 18.x یا بالاتر
- npm یا yarn

### مراحل نصب

```sh
# کلون کردن مخزن
git clone <YOUR_GIT_URL>

# رفتن به دایرکتوری پروژه
cd asre-seo-website

# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev
```

### متغیرهای محیطی (Environment Variables)

برای عملکرد صحیح فرم تماس، باید یک فایل `.env.local` در ریشه پروژه ایجاد کنید و کلید API سرویس Resend را در آن قرار دهید:

```env
RESEND_API_KEY=re_123456789
```

## دستورالعمل‌های استفاده

### توسعه

```bash
npm run dev          # اجرای سرور توسعه محلی
npm run build        # ساخت پروژه برای تولید
npm run lint         # اجرای ESLint
npm run lint:fix     # رفع مشکلات ESLint
```

### ساختار پروژه

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout اصلی
│   ├── page.tsx          # صفحه اصلی
│   └── (sections)...     # صفحات مختلف
├── components/           # کامپوننت‌های React
├── public/               # فایل‌های استاتیک
├── tailwind.config.ts   # تنظیمات Tailwind
├── next.config.js       # تنظیمات Next.js
├── vercel.json          # تنظیمات Vercel
└── package.json         # وابستگی‌ها و اسکریپت‌ها
```

## استقرار

پروژه به طور خودکار روی Vercel مستقر می‌شود. هر کامیت به main branch موجب استقرار جدید خواهد شد.

### تنظیمات Vercel

فایل `vercel.json` شامل تنظیمات زیر است:
- Framework: Next.js
- Build command: `npm run build`
- Security headers
- Redirects

## راهنما

برای اطلاع از نحوه استفاده از ابزارها و فرمت کد، به فایل‌های زیر مراجعه کنید:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## لایسنس

این پروژه تحت لایسنس MIT منتشر شده‌است.
