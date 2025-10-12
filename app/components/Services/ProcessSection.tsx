
const ProcessSection = () => {
  const steps = [
    {
      number: '۱',
      title: 'مشاوره و تحلیل',
      description: 'ابتدا وضعیت فعلی کسب‌وکار شما را تحلیل کرده و نیازهای شما را بررسی می‌کنیم',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '۲',
      title: 'طراحی استراتژی',
      description: 'بر اساس تحلیل انجام شده، بهترین استراتژی را طراحی و ارائه می‌دهیم',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '۳',
      title: 'اجرا و پیاده‌سازی',
      description: 'استراتژی طراحی شده را با دقت و حرفه‌ای‌ترین شکل پیاده‌سازی می‌کنیم',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '۴',
      title: 'نظارت و بهینه‌سازی',
      description: 'عملکرد را مداوم رصد کرده و بهینه‌سازی‌های لازم را انجام می‌دهیم',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            فرآیند <span className="gradient-text">همکاری</span> ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            چگونه با عصر سئو همکاری کنید و به نتایج دلخواه برسید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group animate-fade-in">
              <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
