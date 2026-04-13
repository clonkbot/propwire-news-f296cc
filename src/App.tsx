import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  hot?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    category: 'BREAKING',
    title: 'FTMO Announces New Scaling Plan with 90% Profit Split',
    excerpt: 'The industry leader raises the bar again with unprecedented profit sharing terms for consistent traders reaching $2M accounts.',
    author: 'Marcus Chen',
    date: 'Dec 15, 2024',
    readTime: '4 min',
    featured: true,
    hot: true,
  },
  {
    id: 2,
    category: 'REGULATION',
    title: 'SEC Eyes Prop Firm Industry Amid Rapid Growth',
    excerpt: 'Regulatory bodies begin preliminary discussions on potential oversight frameworks for the $2B prop trading challenge market.',
    author: 'Sarah Williams',
    date: 'Dec 14, 2024',
    readTime: '6 min',
  },
  {
    id: 3,
    category: 'PAYOUT',
    title: 'The Funded Trader Processes Record $12M in Monthly Payouts',
    excerpt: 'Company achieves milestone as funded traders worldwide cash in on successful trading strategies.',
    author: 'James Liu',
    date: 'Dec 13, 2024',
    readTime: '3 min',
    hot: true,
  },
  {
    id: 4,
    category: 'ANALYSIS',
    title: 'Comparing 2024\'s Top Prop Firms: Rules, Payouts & Success Rates',
    excerpt: 'An in-depth breakdown of evaluation criteria, drawdown rules, and trader success metrics across 15 major prop firms.',
    author: 'Elena Rodriguez',
    date: 'Dec 12, 2024',
    readTime: '12 min',
  },
  {
    id: 5,
    category: 'INTERVIEW',
    title: 'From $50K Challenge to $400K Funded: A Trader\'s Journey',
    excerpt: 'Exclusive interview with Alex Thornton who scaled his prop firm account in just 8 months using price action strategies.',
    author: 'Marcus Chen',
    date: 'Dec 11, 2024',
    readTime: '8 min',
  },
  {
    id: 6,
    category: 'UPDATE',
    title: 'MyForexFunds Announces Platform Migration to MetaTrader 5',
    excerpt: 'Traders will need to transition accounts by January as the firm modernizes its technology infrastructure.',
    author: 'David Park',
    date: 'Dec 10, 2024',
    readTime: '3 min',
  },
];

const tickerNews = [
  'FTMO raises profit split to 90%',
  'Funded Next passes 10,000 active traders',
  'New instant funding option at True Forex Funds',
  'E8 Funding extends holiday promo 30% off',
  'Topstep introduces crypto pairs trading',
  'The5ers launches new $100K instant funded account',
];

function Ticker() {
  return (
    <div className="bg-[#c8ff00] text-black overflow-hidden py-2">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...tickerNews, ...tickerNews, ...tickerNews].map((news, i) => (
          <span key={i} className="mx-8 font-mono text-xs md:text-sm font-medium tracking-wide">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-3" />
            {news.toUpperCase()}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#c8ff00] rotate-45" />
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">PROP<span className="text-[#c8ff00]">WIRE</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['News', 'Analysis', 'Reviews', 'Payouts', 'Community'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-mono uppercase tracking-wider text-zinc-400 hover:text-[#c8ff00] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button className="hidden md:block px-4 py-2 border border-[#c8ff00] text-[#c8ff00] font-mono text-sm uppercase tracking-wider hover:bg-[#c8ff00] hover:text-black transition-all">
              Subscribe
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-zinc-800"
            >
              <div className="py-4 flex flex-col gap-4">
                {['News', 'Analysis', 'Reviews', 'Payouts', 'Community'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-base font-mono uppercase tracking-wider text-zinc-400 hover:text-[#c8ff00] transition-colors py-2"
                  >
                    {item}
                  </a>
                ))}
                <button className="mt-2 px-4 py-3 border border-[#c8ff00] text-[#c8ff00] font-mono text-sm uppercase tracking-wider hover:bg-[#c8ff00] hover:text-black transition-all">
                  Subscribe
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-px bg-gradient-to-br from-[#c8ff00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative border border-zinc-800 group-hover:border-[#c8ff00]/50 transition-colors p-6 md:p-10 lg:p-12 bg-zinc-900/50">
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <span className="px-3 py-1 bg-[#c8ff00] text-black font-mono text-xs font-bold tracking-wider">
            {article.category}
          </span>
          {article.hot && (
            <span className="px-3 py-1 bg-red-500 text-white font-mono text-xs font-bold tracking-wider animate-pulse">
              HOT
            </span>
          )}
          <span className="font-mono text-xs text-zinc-500">{article.date}</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 group-hover:text-[#c8ff00] transition-colors">
          {article.title}
        </h2>

        <p className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-3xl">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-mono text-sm text-[#c8ff00]">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="font-mono text-sm text-zinc-300">{article.author}</span>
          </div>
          <span className="font-mono text-xs text-zinc-500">{article.readTime} read</span>
        </div>

        <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 border-l border-t border-zinc-800 group-hover:border-[#c8ff00]/50 transition-colors flex items-center justify-center">
          <motion.span
            className="text-[#c8ff00] text-xl md:text-2xl"
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group cursor-pointer border border-zinc-800 hover:border-[#c8ff00]/50 transition-all duration-300 bg-zinc-900/30 hover:bg-zinc-900/60"
    >
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="px-2 py-0.5 border border-zinc-700 text-zinc-400 font-mono text-[10px] md:text-xs tracking-wider group-hover:border-[#c8ff00]/50 group-hover:text-[#c8ff00] transition-colors">
            {article.category}
          </span>
          {article.hot && (
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          )}
        </div>

        <h3 className="font-serif text-lg md:text-xl font-bold leading-snug mb-2 md:mb-3 group-hover:text-[#c8ff00] transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-zinc-600 font-mono text-[10px] md:text-xs">
          <span>{article.author}</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#c8ff00]/0 to-transparent group-hover:via-[#c8ff00] transition-all duration-500" />
    </motion.article>
  );
}

function Sidebar() {
  const topFirms = [
    { name: 'FTMO', change: '+2.4%', positive: true },
    { name: 'Funded Next', change: '+1.8%', positive: true },
    { name: 'The5ers', change: '+0.9%', positive: true },
    { name: 'E8 Funding', change: '-0.3%', positive: false },
    { name: 'True Forex', change: '+1.2%', positive: true },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-6 md:space-y-8"
    >
      {/* Market Pulse */}
      <div className="border border-zinc-800 p-4 md:p-6 bg-zinc-900/30">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[#c8ff00] mb-4 md:mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c8ff00] animate-pulse" />
          Firm Pulse
        </h3>

        <div className="space-y-3 md:space-y-4">
          {topFirms.map((firm, i) => (
            <div key={firm.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="font-mono text-[10px] md:text-xs text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-mono text-xs md:text-sm text-zinc-300">{firm.name}</span>
              </div>
              <span className={`font-mono text-xs md:text-sm ${firm.positive ? 'text-[#c8ff00]' : 'text-red-400'}`}>
                {firm.change}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-zinc-800">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider">Popularity Index • 24H</p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border border-[#c8ff00]/30 p-4 md:p-6 bg-[#c8ff00]/5">
        <h3 className="font-serif text-lg md:text-xl font-bold mb-2">Get Funded Faster</h3>
        <p className="text-zinc-400 text-xs md:text-sm mb-4 md:mb-6">Weekly insights on passing challenges & maximizing payouts.</p>

        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-sm font-mono placeholder-zinc-600 focus:border-[#c8ff00] focus:outline-none transition-colors mb-3"
        />

        <button className="w-full py-3 bg-[#c8ff00] text-black font-mono text-sm uppercase tracking-wider font-bold hover:bg-[#d4ff33] transition-colors">
          Subscribe
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {[
          { label: 'Active Traders', value: '2.4M+' },
          { label: 'Payouts 2024', value: '$847M' },
          { label: 'Prop Firms', value: '150+' },
          { label: 'Pass Rate', value: '~12%' },
        ].map((stat) => (
          <div key={stat.label} className="border border-zinc-800 p-3 md:p-4 text-center">
            <p className="font-mono text-lg md:text-xl font-bold text-[#c8ff00]">{stat.value}</p>
            <p className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#c8ff00] rotate-45" />
              <span className="font-serif text-lg font-bold">PROP<span className="text-[#c8ff00]">WIRE</span></span>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
              Your source for prop trading news, analysis, and community insights.
            </p>
          </div>

          {[
            { title: 'Content', links: ['News', 'Analysis', 'Reviews', 'Interviews'] },
            { title: 'Resources', links: ['Firm Directory', 'Payout Tracker', 'Challenge Calculator'] },
            { title: 'Company', links: ['About', 'Contact', 'Advertise', 'Terms'] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3 md:mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 text-xs md:text-sm hover:text-[#c8ff00] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 md:pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] md:text-xs text-zinc-600">
            © 2024 PROPWIRE. All rights reserved.
          </p>
          <p className="font-mono text-[10px] md:text-xs text-zinc-600">
            Requested by @web-user · Built by @clonkbot
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const featured = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <Ticker />
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        {/* Time Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8"
        >
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
            {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </span>
          <span className="font-mono text-xs text-[#c8ff00]">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span className="px-2 py-0.5 border border-green-500/50 text-green-400 font-mono text-[10px] uppercase tracking-wider">
            Markets Open
          </span>
        </motion.div>

        {/* Hero */}
        <div className="mb-8 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 md:mb-4"
          >
            <span className="text-zinc-600">The</span> Prop Firm <br className="hidden md:block" />
            <span className="text-[#c8ff00]">Intelligence</span> Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest"
          >
            Breaking news • Deep analysis • Verified payouts
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {featured && <FeaturedArticle article={featured} />}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {regularArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-full py-4 border border-zinc-800 hover:border-[#c8ff00] text-zinc-400 hover:text-[#c8ff00] font-mono text-sm uppercase tracking-wider transition-colors"
            >
              Load More Articles
            </motion.button>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
