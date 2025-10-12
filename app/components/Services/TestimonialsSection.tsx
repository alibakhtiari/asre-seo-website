
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'احمد محمدی',
      company: 'فروشگاه آنلاین رویا',
      text: 'همکاری با عصر سئو نقطه عطفی در کسب‌وکار ما بود. ترافیک سایت ما ۴۰۰٪ افزایش یافت و فروش آنلاین‌مان به طور چشمگیری رشد کرد.',
      avatar: '👨‍💼'
    },
    {
      name: 'فاطمه احمدی',
      company: 'کلینیک زیبایی نور',
      text: 'تیم عصر سئو با حرفه‌ای‌ترین شیوه ممکن کلینیک ما را در گوگل به رتبه‌های اول رساند. اکنون مشتریان زیادی از طریق اینترنت پیدا می‌کنیم.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'علی رضایی',
      company: 'شرکت ساختمانی پارس',
      text: 'مشاوره‌های عصر سئو بسیار ارزشمند بود. آن‌ها به ما کمک کردند تا استراتژی درستی برای حضور آنلاین‌مان تعریف کنیم.',
      avatar: '👷‍♂️'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            نظرات <span className="gradient-text">مشتریان</span> ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تجربه مشتریان راضی از همکاری با عصر سئو
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="text-4xl ml-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
