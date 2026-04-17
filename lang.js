// Language translations
const translations = {
  en: {
    badge: "Formerly Doyosoft · Rebranded 2024",
    heroTitle1: "Empowering ideas,",
    heroTitle2: "building futures",
    heroSub: "A home for dreamers. Parent innovation company from Dhaka, Bangladesh.<br>45+ team · 150+ projects · 25k+ users.",
    joinBtn: "Join & Connect",
    discoverBtn: "Discover Doyox",
    successRate: "Success Rate",
    projects: "Projects",
    growth: "Monthly Growth",
    years: "Years of innovation",
    clients: "Happy clients",
    users: "Total users",
    growthRate: "Monthly growth",
    venturesTag: "Our Ecosystem",
    venturesTitle: "Active Ventures",
    viewAllVentures: "View All Ventures",
    founderQuote: "I'm Md Rifat Al Mahmud, and when I started this journey, I only wanted to create something meaningful. Today, as Doyosoft becomes Doyox, I feel we are finally stepping into that future.",
    founderTitle: "Founder & CEO",
    footerTagline: "Empowering ideas, building futures.",
    quickLinks: "Quick Links",
    contact: "Contact",
    newsletter: "Newsletter",
    rights: "All rights reserved.",
    formerly: "Formerly Doyosoft."
  },
  bn: {
    badge: "পূর্বে ডয়োসফট · ২০২৪ সালে রিব্র্যান্ডেড",
    heroTitle1: "ধারণাকে শক্তি দেওয়া,",
    heroTitle2: "ভবিষ্যৎ গড়া",
    heroSub: "স্বপ্নদ্রষ্টাদের জন্য একটি ঠিকানা। বাংলাদেশের ঢাকার মূল উদ্ভাবনী কোম্পানি।<br>৪৫+ দল · ১৫০+ প্রকল্প · ২৫ হাজার+ ব্যবহারকারী।",
    joinBtn: "যোগ দিন ও সংযুক্ত হোন",
    discoverBtn: "ডয়ক্স আবিষ্কার করুন",
    successRate: "সাফল্যের হার",
    projects: "প্রকল্প",
    growth: "মাসিক প্রবৃদ্ধি",
    years: "উদ্ভাবনের বছর",
    clients: "সন্তুষ্ট ক্লায়েন্ট",
    users: "মোট ব্যবহারকারী",
    growthRate: "মাসিক প্রবৃদ্ধি",
    venturesTag: "আমাদের ইকোসিস্টেম",
    venturesTitle: "সক্রিয় ভেঞ্চারসমূহ",
    viewAllVentures: "সব ভেঞ্চার দেখুন",
    founderQuote: "আমি মোঃ রিফাত আল মাহমুদ, যখন এই যাত্রা শুরু করেছিলাম, আমি শুধু অর্থবহ কিছু তৈরি করতে চেয়েছিলাম। আজ, ডয়োসফট থেকে ডয়ক্স হওয়ার মধ্য দিয়ে আমি অনুভব করছি আমরা অবশেষে সেই ভবিষ্যতে পা রাখছি।",
    founderTitle: "প্রতিষ্ঠাতা ও সিইও",
    footerTagline: "ধারণাকে শক্তি দেওয়া, ভবিষ্যৎ গড়া।",
    quickLinks: "দ্রুত লিঙ্ক",
    contact: "যোগাযোগ",
    newsletter: "নিউজলেটার",
    rights: "সর্বস্বত্ব সংরক্ষিত।",
    formerly: "পূর্বে ডয়োসফট নামে পরিচিত।"
  }
};

// Function to switch language
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  localStorage.setItem('doyox-lang', lang);
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Initialize language from localStorage or default 'en'
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('doyox-lang') || 'en';
  setLanguage(savedLang);
  
  // Add click handlers to lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
