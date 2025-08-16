
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>درباره ما | عصر سئو</title>
        <meta name="description" content="آشنایی با تیم متخصص عصر سئو و تجربه چندین ساله ما در زمینه دیجیتال مارکتینگ، سئو و طراحی وب‌سایت." />
        <meta name="keywords" content="درباره عصر سئو, تیم متخصص سئو, تجربه دیجیتال مارکتینگ" />
        <link rel="canonical" href="https://asreseo.com/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          {/* Hero Section */}
          <div className="container-custom">
            <div className="text-center animate-fade-in mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                درباره <span className="gradient-text">عصر سئو</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                ما تیمی از متخصصان باتجربه در حوزه دیجیتال مارکتینگ هستیم که با بهره‌گیری از جدیدترین تکنولوژی‌ها و هوش مصنوعی، کسب‌وکارها را به موفقیت می‌رسانیم.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">مأموریت ما</h2>
                <p className="text-muted-foreground leading-relaxed">
                  کمک به کسب‌وکارهای ایرانی برای رسیدن به حضور قدرتمند در دنیای دیجیتال و افزایش فروش آنلاین از طریق استراتژی‌های نوآورانه و مبتنی بر داده.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">چشم‌انداز ما</h2>
                <p className="text-muted-foreground leading-relaxed">
                  تبدیل شدن به پیشروترین آژانس دیجیتال مارکتینگ در ایران و منطقه با تمرکز بر هوش مصنوعی و تکنولوژی‌های پیشرفته.
                </p>
              </div>
            </div>

            {/* Our Story */}
            <div className="mb-20 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">داستان ما</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    عصر سئو در سال ۱۳۹۸ با هدف ارائه خدمات تخصصی سئو و دیجیتال مارکتینگ به کسب‌وکارهای ایرانی شروع به فعالیت کرد. از همان ابتدا، تمرکز ما بر کیفیت، نوآوری و نتیجه‌محوری بوده است.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    طی این سال‌ها، ما بیش از ۵۰۰ پروژه موفق انجام داده‌ایم و به صدها کسب‌وکار کمک کرده‌ایم تا در فضای آنلاین حضور قدرتمندی داشته باشند. با پیشرفت تکنولوژی و ظهور هوش مصنوعی، ما نیز خدمات خود را به‌روزرسانی کرده و امروز یکی از پیشگامان استفاده از AI در دیجیتال مارکتینگ هستیم.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    امروز، عصر سئو نه تنها در زمینه سئو و طراحی وب‌سایت فعالیت می‌کند، بلکه طیف وسیعی از خدمات شامل تولید محتوا با هوش مصنوعی، چت‌بات فارسی، تحلیل رفتار کاربران و اتوماسیون بازاریابی ارائه می‌دهد.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+500</div>
                <div className="text-muted-foreground">پروژه موفق</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">+300</div>
                <div className="text-muted-foreground">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6</div>
                <div className="text-muted-foreground">سال تجربه</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">پشتیبانی</div>
              </div>
            </div>

            {/* Values */}
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ارزش‌های ما</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">کیفیت</h3>
                  <p className="text-muted-foreground">تعهد به ارائه بالاترین کیفیت در تمام خدمات</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">نوآوری</h3>
                  <p className="text-muted-foreground">استفاده از آخرین تکنولوژی‌ها و روش‌های نوین</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">همکاری</h3>
                  <p className="text-muted-foreground">کار تیمی و شراکت راستین با مشتریان</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
