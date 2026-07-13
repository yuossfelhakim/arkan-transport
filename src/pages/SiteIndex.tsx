import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { 
  Home as HomeIcon, 
  Info, 
  Briefcase, 
  Truck, 
  Users, 
  Phone, 
  ArrowLeft, 
  ArrowRight,
  Compass,
  Layers,
  MapPin,
  CheckCircle2
} from 'lucide-react'

export default function SiteIndex() {
  const { t, isRtl } = useLanguage()

  const pages = [
    {
      title: t('الصفحة الرئيسية', 'Home Page'),
      path: '/',
      icon: HomeIcon,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      description: t(
        'الصفحة التعرفية الكبرى لشركة أركان ترافيل - تحتوي على البانر الرئيسي التفاعلي، أرقام الإنجازات، الميزات التنافسية، ونبذة عن الأسطول والخدمات.',
        'The main showcase page of Arkan Travel - features interactive main hero, company achievements stats, competitive advantages, fleet preview, and services.'
      ),
      highlights: [
        t('البانر الترحيبي التفاعلي', 'Interactive Hero Section'),
        t('أرقام الإنجازات والنمو', 'Achievements & Growth Stats'),
        t('الميزات التنافسية للشركة', 'Core Values & Advantages'),
        t('شركاء النجاح', 'Corporate Success Partners')
      ]
    },
    {
      title: t('من نحن (قصة الشركة)', 'About Us Page'),
      path: '/about',
      icon: Info,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      description: t(
        'صفحة تعريفية شاملة برؤية ورسالة أركان ترافيل وقيمها الأساسية مع استعراض هيكل الإدارة والأهداف المستقبلية لخدمات النقل الذكي.',
        'Comprehensive overview of Arkan Travel\'s vision, mission, and core values, along with corporate management structures and future transit goals.'
      ),
      highlights: [
        t('الرؤية والرسالة والهدف', 'Vision, Mission, and Focus'),
        t('رحلة التأسيس والنمو', 'Corporate Evolution History'),
        t('إجراءات السلامة والأمان', 'Safety Protocols & Guidelines'),
        t('لماذا تختار أركان ترافيل', 'Why Choose Arkan Travel')
      ]
    },
    {
      title: t('دليل الخدمات الكامل', 'Our Services Page'),
      path: '/services',
      icon: Briefcase,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      description: t(
        'استعراض تفصيلي لخدمات نقل الموظفين، نقل العمال والمصانع، الرحلات الخاصة، والحلول اللوجستية المخصصة للمؤسسات الكبرى.',
        'Detailed catalog of employee shuttle services, labor & factory commutes, private excursions, and custom enterprise logistics.'
      ),
      highlights: [
        t('نقل الموظفين والشركات', 'Corporate Employee Shuttles'),
        t('نقل العمال والمصانع والخدمات', 'Industrial Shuttles'),
        t('الرحلات الخاصة والتوصيل', 'Private Outings & Excursions'),
        t('نقل كبار الشخصيات', 'VIP & Executive Chauffeur')
      ]
    },
    {
      title: t('أسطول السيارات المتطور', 'Our Fleet Page'),
      path: '/fleet',
      icon: Truck,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      description: t(
        'معرض حي وحصري للسيارات والحافلات الحديثة التي نعتمد عليها في نقل الركاب يومياً - من الميني باص إلى الأتوبيسات السياحية الفاخرة.',
        'Interactive dynamic showcase of current modern vehicles and coaches in daily service - from mini-buses to luxury tourism coaches.'
      ),
      highlights: [
        t('حافلات سياحية 50 راكب', '50-Seater Tourism Coaches'),
        t('ميني باصات 33 و 28 راكب', '33 & 28 Seater Mini-Buses'),
        t('ميكروباصات تويوتا هايس الحديثة', 'Toyota Hiace Micro-buses'),
        t('معايير الصيانة والتعقيم', 'Maintenance & Hygiene Standards')
      ]
    },
    {
      title: t('شركاء النجاح والعملاء', 'Our Clients Page'),
      path: '/clients',
      icon: Users,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
      description: t(
        'شركاء وعملاء أركان ترافيل الذين نعتز بثقتهم يومياً، مع استعراض قصص النجاح الموثقة وشهادات التوصية المكتوبة من مديري الموارد البشرية.',
        'Showcase of corporate clients and partners who trust Arkan Travel daily, featuring verified reviews and human resource testimonials.'
      ),
      highlights: [
        t('سجل الشركاء والعملاء المعتمدين', 'Certified Corporate Partners'),
        t('قصص مراجعات وتوصيات موثقة', 'Verified Professional Testimonials'),
        t('إحصائيات إتمام الرحلات بنجاح', 'Trip Completion Metrics & Stats')
      ]
    },
    {
      title: t('صفحة تواصل معنا الرسمية', 'Contact Us Page'),
      path: '/contact',
      icon: Phone,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      description: t(
        'مركز الدعم وتلقي طلبات عروض الأسعار - يحتوي على أرقام التواصل المباشرة، رابط واتساب الإدارة، ونموذج إلكتروني لطلب تسعير فوري لرحلتك.',
        'Support and Request-for-Quote hub - includes direct support phone numbers, administrative WhatsApp link, and online quotation request forms.'
      ),
      highlights: [
        t('أرقام الاتصال الهاتفي الفوري', 'Instant Direct Hotline'),
        t('واتساب الإدارة المباشر', 'Direct Administration WhatsApp'),
        t('نموذج طلب عروض أسعار رقمي', 'Digital RFP & Quote Request Form'),
        t('بريد المراسلات الرسمي للشركة', 'Official Corporate Email')
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center mb-16">
        <span className="text-xs text-gold font-bold uppercase tracking-widest bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
          {t('دليل تصفح الموقع بالكامل', 'Complete Site Navigator')}
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-950 mb-4 tracking-tight">
          {t('فهرس ودليل صفحات أركان ترافيل', 'Arkan Travel Directory Index')}
        </h1>
        <p className="font-body text-sm sm:text-base text-slate-500 max-w-[650px] mx-auto leading-relaxed">
          {t(
            'استخدم هذا الفهرس الموحد لتصفح وفحص كافة الأقسام والصفحات المكونة لموقع شركة أركان ترافيل لنقل الموظفين والشركات.',
            'Use this unified site directory map to navigate and audit all available pages and sections of the Arkan Travel corporate website.'
          )}
        </p>
      </div>

      {/* Grid of Pages */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => {
            const IconComponent = page.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-[24px] border border-slate-200/60 p-6 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
              >
                <div>
                  {/* Top line: Icon and link */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${page.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                      {page.path}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-xl text-slate-900 group-hover:text-gold transition-colors duration-200">
                    {page.title}
                  </h3>
                  <p className="font-body text-xs text-slate-500 mt-3 leading-relaxed">
                    {page.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 pt-5 border-t border-slate-100">
                    <span className="block font-display text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {t('محتويات وأقسام الصفحة:', 'Page Sections & Highlights:')}
                    </span>
                    <ul className="space-y-1.5">
                      {page.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 font-body">
                          <CheckCircle2 size={12} className="text-gold/80 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom link button */}
                <div className="mt-8">
                  <Link 
                    to={page.path}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-white font-body font-bold text-xs hover:bg-gold transition-all duration-300"
                  >
                    <span>{t('تصفح الصفحة الآن', 'Visit Page Now')}</span>
                    {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Helper Info Block */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[32px] p-8 text-white relative overflow-hidden shadow-lg border border-white/10 text-center sm:text-start">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs text-gold-light uppercase tracking-wider font-bold block">{t('التصفح اللوجستي الذكي', 'SMART LOGISTICS')}</span>
              <h4 className="font-display font-black text-xl sm:text-2xl">{t('هل تبحث عن خدمات مخصصة؟', 'Looking for specific custom solutions?')}</h4>
              <p className="font-body text-xs text-slate-300 max-w-[580px] leading-relaxed">
                {t(
                  'موقعنا متوافق بالكامل مع الهواتف الذكية والأجهزة اللوحية، ويمكنك تصفح الخدمات والتسجيل الفوري لطلب تسعير رحلاتك وعقود نقل الموظفين مباشرة.',
                  'Our platform is fully optimized for all devices. You can navigate, read documentation, and instantly request contracts and quotes for employee transit.'
                )}
              </p>
            </div>
            <Link 
              to="/contact" 
              className="bg-gold text-white font-body font-bold text-xs px-6 py-3 rounded-full hover:bg-gold-light hover:scale-105 active:scale-95 transition-all shadow-md shadow-gold/20 flex-shrink-0"
            >
              {t('طلب تسعير مباشر عقود', 'Corporate Quotation')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
