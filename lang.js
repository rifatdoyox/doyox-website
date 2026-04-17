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
    footerTagline: "ধারণাকে শক্তি দেওয়া, ভবিষ্যৎ গড়া।",
    quickLinks: "দ্রুত লিঙ্ক",
    contact: "যোগাযোগ",
    newsletter: "নিউজলেটার",
    rights: "সর্বস্বত্ব সংরক্ষিত।",
    formerly: "পূর্বে ডয়োসফট নামে পরিচিত।"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[lang][key];
      else el.innerHTML = translations[lang][key];
    }
  });
  localStorage.setItem('doyox-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(localStorage.getItem('doyox-lang') || 'en');
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
});
