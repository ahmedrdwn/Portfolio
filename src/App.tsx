import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, Globe, Briefcase, GraduationCap, Award, Code, ChevronRight, Shield } from 'lucide-react';

const translations = {
  en: {
    name: "Ahmed Mohammed Radwan",
    title: "Data Analyst & Computational Science Researcher",
    tagline: "Power BI • Python • SQL • Tableau • Machine Learning",
    location: "Ontario, Canada",
    downloadCV: "Download CV",
    emailMe: "Email Me",
    hero: {
      greeting: "Hi, I'm Ahmed",
      description: "Dynamic Data Analyst with 4+ years of experience transforming complex datasets into actionable insights. PMP & RMP certified, currently pursuing PhD in Computational Science at McMaster University."
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Real-world data analytics and AI solutions",
      items: [
        {
          title: "HR Analytics Power BI Dashboard",
          org: "Gulf Engineering House, Saudi Arabia",
          description: "End-to-end HR reporting system tracking recruitment, turnover, attendance, and performance KPIs with interactive visualizations."
        },
        {
          title: "Advanced HR Analytics Dashboard",
          org: "HR Analytics Project",
          description: "Comprehensive Power BI dashboard featuring advanced HR metrics, employee performance analytics, and workforce insights with interactive visualizations.",
          link: "https://app.powerbi.com/view?r=eyJrIjoiYjZiNDAxYTAtYWIyZC00NWExLWFkMmItMzJiYzhiMmM2M2FhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
        },
        {
          title: "Teacher Staffing Analytics",
          org: "Ministry of Education, Saudi Arabia",
          description: "Power BI dashboard analyzing teacher shortages and surpluses by subject, educational stage, and region for strategic workforce planning.",
          confidential: true
        },
        {
          title: "Customer Survey Analytics",
          org: "Bank AlJazeera, Saudi Arabia",
          description: "Comprehensive Power BI dashboard measuring customer satisfaction and service quality metrics across banking services.",
          confidential: true
        },
        {
          title: "Healthcare Center KPIs",
          org: "Primary Care Program, Khamis Mushait",
          description: "Healthcare operations dashboard tracking patient visits, vaccination rates, and preventive health screenings."
        },
        {
          title: "Fraud Detection API",
          org: "Machine Learning Project",
          description: "Production-ready fraud detection model using Random Forest, XGBoost, and Neural Networks deployed via Flask API."
        },
        {
          title: "X-ray Image Classifier",
          org: "AI Healthcare Project",
          description: "CNN-based medical image classification system using ResNet and EfficientNet architectures with Flask API deployment."
        }
      ]
    },
    experience: {
      title: "Experience & Education",
      subtitle: "Professional journey and academic achievements",
      roles: [
        {
          type: "work",
          title: "Power BI & Excel Instructor",
          org: "Professional Path Center, Riyadh",
          period: "Dec 2024 – Present",
          description: "Delivered 12+ corporate training programs to 600+ Saudi business professionals with excellent evaluations."
        },
        {
          type: "work",
          title: "Data Analyst Specialist Track Instructor",
          org: "Digital Egypt Pioneers Initiative",
          period: "Apr 2024 – Present",
          description: "Leading training sessions on Python, R, SQL, Tableau, and mentoring capstone projects in data analytics."
        },
        {
          type: "work",
          title: "Teaching Assistant",
          org: "Mansoura University, Faculty of Engineering",
          period: "2017 – Present",
          description: "Teaching Embedded Systems, Machine Learning, and Data Analysis. Supervising graduation projects and research."
        },
        {
          type: "education",
          title: "PhD in Computational Science & Engineering",
          org: "McMaster University, Ontario, Canada",
          period: "2025 – Present",
          description: "Advanced research in computational methods and data science applications."
        },
        {
          type: "education",
          title: "M.Sc. in Computers & Systems Engineering",
          org: "Mansoura University",
          period: "2021 – 2024",
          description: "Specialized in machine learning and data analytics systems."
        },
        {
          type: "education",
          title: "Diploma in Artificial Intelligence",
          org: "University of Central Lancashire, UK",
          period: "2020",
          description: "Advanced AI and deep learning methodologies."
        },
        {
          type: "education",
          title: "B.Sc. in Mechatronics Engineering",
          org: "Mansoura University",
          period: "2017",
          description: "GPA: 3.93 — Honors degree with focus on embedded systems and automation."
        }
      ]
    },
    skills: {
      title: "Skills & Certifications",
      subtitle: "Technical expertise and professional credentials",
      technical: "Technical Skills",
      certifications: "Certifications",
      techList: [
        "Power BI (ETL, DAX, Data Modeling)",
        "SQL (Wrangling, DML, Analysis)",
        "Python (Pandas, NumPy, Scikit-learn)",
        "Tableau (Interactive Analytics)",
        "R (Statistical Modeling)",
        "Machine Learning & Deep Learning",
        "Embedded Systems"
      ],
      certList: [
        "PMP (Project Management Professional) — 2025",
        "RMP (Risk Management Professional) — 2025",
        "Generative AI Professional Training — 2024",
        "Training of Trainers (ToT) — 2024",
        "MATLAB Educator Workshop — 2024",
        "Embedded Systems Training — ITI 2021",
        "IELTS — British Council (Score: 6)"
      ]
    },
    contact: {
      title: "Let's Collaborate",
      subtitle: "Open to remote and onsite opportunities",
      description: "I'm passionate about turning data into insights that drive strategic decisions. Whether you need analytics expertise, training, or collaboration on innovative projects, let's connect.",
      reachOut: "Reach Out"
    }
  },
  ar: {
    name: "أحمد محمد رضوان",
    title: "محلل بيانات وباحث في علوم الحوسبة",
    tagline: "Power BI • Python • SQL • Tableau • تعلم الآلة",
    location: "أونتاريو، كندا",
    downloadCV: "تحميل السيرة الذاتية",
    emailMe: "راسلني",
    hero: {
      greeting: "مرحباً، أنا أحمد",
      description: "محلل بيانات ديناميكي مع أكثر من 4 سنوات من الخبرة في تحويل مجموعات البيانات المعقدة إلى رؤى قابلة للتنفيذ. حاصل على شهادات PMP و RMP، وأتابع حالياً درجة الدكتوراه في علوم الحوسبة في جامعة ماكماستر."
    },
    projects: {
      title: "المشاريع المميزة",
      subtitle: "حلول تحليل البيانات والذكاء الاصطناعي في العالم الحقيقي",
      items: [
        {
          title: "لوحة معلومات تحليلات الموارد البشرية",
          org: "دار الخليج الهندسية، السعودية",
          description: "نظام تقارير شامل للموارد البشرية يتتبع التوظيف ودوران الموظفين والحضور ومؤشرات الأداء الرئيسية مع تصورات تفاعلية."
        },
        {
          title: "لوحة معلومات تحليلات الموارد البشرية المتقدمة",
          org: "مشروع تحليلات الموارد البشرية",
          description: "لوحة معلومات Power BI شاملة تتضمن مقاييس متقدمة للموارد البشرية وتحليلات أداء الموظفين ورؤى القوى العاملة مع تصورات تفاعلية.",
          link: "https://app.powerbi.com/view?r=eyJrIjoiYjZiNDAxYTAtYWIyZC00NWExLWFkMmItMzJiYzhiMmM2M2FhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
        },
        {
          title: "تحليلات توزيع المعلمين",
          org: "وزارة التعليم، السعودية",
          description: "لوحة معلومات Power BI لتحليل نقص وفائض المعلمين حسب المادة والمرحلة التعليمية والمنطقة للتخطيط الاستراتيجي للقوى العاملة.",
          confidential: true
        },
        {
          title: "تحليلات استبيانات العملاء",
          org: "بنك الجزيرة، السعودية",
          description: "لوحة معلومات شاملة لقياس رضا العملاء ومقاييس جودة الخدمة عبر الخدمات المصرفية.",
          confidential: true
        },
        {
          title: "مؤشرات أداء المراكز الصحية",
          org: "برنامج الرعاية الأولية، خميس مشيط",
          description: "لوحة معلومات للعمليات الصحية تتتبع زيارات المرضى ومعدلات التطعيم والفحوصات الصحية الوقائية."
        },
        {
          title: "واجهة برمجة تطبيقات للكشف عن الاحتيال",
          org: "مشروع تعلم الآلة",
          description: "نموذج جاهز للإنتاج للكشف عن الاحتيال باستخدام Random Forest و XGBoost والشبكات العصبية ونشره عبر Flask API."
        },
        {
          title: "مصنف صور الأشعة السينية",
          org: "مشروع الذكاء الاصطناعي الطبي",
          description: "نظام تصنيف الصور الطبية بناءً على CNN باستخدام بنيات ResNet و EfficientNet مع نشر Flask API."
        }
      ]
    },
    experience: {
      title: "الخبرات والتعليم",
      subtitle: "المسار المهني والإنجازات الأكاديمية",
      roles: [
        {
          type: "work",
          title: "مدرب Power BI و Excel",
          org: "مركز المسار المهني، الرياض",
          period: "ديسمبر 2024 – حتى الآن",
          description: "قدمت أكثر من 12 برنامج تدريبي للشركات لأكثر من 600 محترف أعمال سعودي مع تقييمات ممتازة."
        },
        {
          type: "work",
          title: "مدرب مسار أخصائي تحليل البيانات",
          org: "مبادرة رواد مصر الرقمية",
          period: "أبريل 2024 – حتى الآن",
          description: "قيادة جلسات التدريب على Python و R و SQL و Tableau وتوجيه مشاريع التخرج في تحليل البيانات."
        },
        {
          type: "work",
          title: "مساعد تدريس",
          org: "جامعة المنصورة، كلية الهندسة",
          period: "2017 – حتى الآن",
          description: "تدريس الأنظمة المدمجة وتعلم الآلة وتحليل البيانات. الإشراف على مشاريع التخرج والبحوث."
        },
        {
          type: "education",
          title: "دكتوراه في علوم الحوسبة والهندسة",
          org: "جامعة ماكماستر، أونتاريو، كندا",
          period: "2025 – حتى الآن",
          description: "بحث متقدم في الأساليب الحوسبية وتطبيقات علوم البيانات."
        },
        {
          type: "education",
          title: "ماجستير في هندسة الحاسبات والنظم",
          org: "جامعة المنصورة",
          period: "2021 – 2024",
          description: "تخصص في تعلم الآلة وأنظمة تحليل البيانات."
        },
        {
          type: "education",
          title: "دبلوم في الذكاء الاصطناعي",
          org: "جامعة سنترال لانكشاير، المملكة المتحدة",
          period: "2020",
          description: "منهجيات متقدمة في الذكاء الاصطناعي والتعلم العميق."
        },
        {
          type: "education",
          title: "بكالوريوس هندسة الميكاترونيكس",
          org: "جامعة المنصورة",
          period: "2017",
          description: "المعدل التراكمي: 3.93 — درجة مع مرتبة الشرف مع التركيز على الأنظمة المدمجة والأتمتة."
        }
      ]
    },
    skills: {
      title: "المهارات والشهادات",
      subtitle: "الخبرة التقنية والمؤهلات المهنية",
      technical: "المهارات التقنية",
      certifications: "الشهادات",
      techList: [
        "Power BI (ETL، DAX، نمذجة البيانات)",
        "SQL (معالجة البيانات، DML، التحليل)",
        "Python (Pandas، NumPy، Scikit-learn)",
        "Tableau (التحليلات التفاعلية)",
        "R (النمذجة الإحصائية)",
        "تعلم الآلة والتعلم العميق",
        "الأنظمة المدمجة"
      ],
      certList: [
        "PMP (محترف إدارة المشاريع) — 2025",
        "RMP (محترف إدارة المخاطر) — 2025",
        "التدريب المهني في الذكاء الاصطناعي التوليدي — 2024",
        "تدريب المدربين (ToT) — 2024",
        "ورشة عمل مدرب MATLAB — 2024",
        "تدريب الأنظمة المدمجة — ITI 2021",
        "IELTS — المجلس الثقافي البريطاني (النتيجة: 6)"
      ]
    },
    contact: {
      title: "لنتعاون",
      subtitle: "متاح للفرص عن بُعد وفي الموقع",
      description: "أنا شغوف بتحويل البيانات إلى رؤى تقود القرارات الاستراتيجية. سواء كنت بحاجة إلى خبرة في التحليلات أو التدريب أو التعاون في مشاريع مبتكرة، فلنتواصل.",
      reachOut: "تواصل معي"
    }
  }
};

export default function Portfolio() {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={toggleLanguage}
        className={`fixed top-6 ${isRTL ? 'left-6' : 'right-6'} z-50 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all`}
      >
        <Globe size={18} />
        <span className="font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
      </motion.button>

      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500/50">
              <img src="/profile.jpg" alt="Ahmed Radwan" className="w-full h-full object-cover object-center scale-110" style={{ objectPosition: 'center top' }} />
            </motion.div>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.hero.greeting}
            </motion.h1>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
              {t.title}
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-cyan-400 text-lg mb-6">
              {t.tagline}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              {t.hero.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/50">
                <Download size={20} />
                {t.downloadCV}
              </a>
              <a href="https://linkedin.com/in/ahmedradwan1001" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/ahmedrdwn" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                <Github size={20} />
                GitHub
              </a>
              <a href="mailto:Radwaa3@Mcmaster.ca" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                <Mail size={20} />
                {t.emailMe}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-gray-400 text-lg">{t.projects.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                whileHover={{ y: -8, scale: 1.02 }} 
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all group ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                    {project.confidential && (
                      <Shield className="text-yellow-400" size={20} title="Confidential Project" />
                    )}
                  </div>
                  <ChevronRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{project.org}</p>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
                {project.link && (
                  <div className="mt-4 text-xs text-cyan-400 opacity-70">
                    Click to view Power BI Dashboard
                  </div>
                )}
                {project.confidential && !project.link && (
                  <div className="mt-4 text-xs text-yellow-400 opacity-70 flex items-center gap-1">
                    <Shield size={12} />
                    Confidential Project - Access Restricted
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.experience.title}</h2>
            <p className="text-gray-400 text-lg">{t.experience.subtitle}</p>
          </motion.div>
          <div className="space-y-8">
            {t.experience.roles.map((role, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: isRTL ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${role.type === 'work' ? 'bg-cyan-500' : 'bg-blue-500'}`}>
                    {role.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                  </div>
                  {index < t.experience.roles.length - 1 && <div className="w-0.5 h-full bg-gray-700 mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                    <p className="text-cyan-400 mb-2">{role.org}</p>
                    <p className="text-gray-500 text-sm mb-3">{role.period}</p>
                    <p className="text-gray-400 leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.skills.title}</h2>
            <p className="text-gray-400 text-lg">{t.skills.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: isRTL ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold">{t.skills.technical}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {t.skills.techList.map((skill, index) => (
                  <motion.span key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-all">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: isRTL ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">{t.skills.certifications}</h3>
              </div>
              <div className="space-y-3">
                {t.skills.certList.map((cert, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: isRTL ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3">
                    <ChevronRight className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-cyan-400 text-xl mb-6">{t.contact.subtitle}</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{t.contact.description}</p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
              <a href="mailto:Radwaa3@Mcmaster.ca" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold">
                <Mail size={24} />
                {t.contact.reachOut}
              </a>
              <a href="https://linkedin.com/in/ahmedradwan1001" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all shadow-lg text-lg font-semibold">
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a href="https://github.com/ahmedrdwn" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all shadow-lg text-lg font-semibold">
                <Github size={24} />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 {t.name} • {t.location}</p>
        </div>
      </footer>
    </div>
  );
}