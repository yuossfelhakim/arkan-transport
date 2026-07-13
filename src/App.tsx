return (
  <BrowserRouter basename="/arkan-transport">
    {/* Scroll position reset utility on navigation changes */}
    <ScrollToTop />

    <div 
      className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between" 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div>
        <Navigation />

        <main>
          <Routes>
            {/* Dynamic pages routing */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/index" element={<SiteIndex />} />
            <Route path="/site-index" element={<SiteIndex />} />
            <Route path="/sitemap" element={<SiteIndex />} />
          </Routes>
        </main>
      </div>

      <Footer />

      <SupportWidget />

      {showScrollTop && (
        <button
          onClick={scrollTop}
          className={`fixed bottom-6 ${isRtl ? 'right-6 md:right-8' : 'left-6 md:left-8'} z-50 bg-gold text-white p-3.5 rounded-full shadow-xl hover:scale-110 hover:bg-gold-light active:scale-95 transition-all duration-300 cursor-pointer border border-white/10`}
          aria-label={t("الرجوع إلى الأعلى", "Back to top")}
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}
    </div>
  </BrowserRouter>
)