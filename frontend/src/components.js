// Header Component
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              SoftCraft
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Связаться
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Главная</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Услуги</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Портфолио</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Контакты</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8Ymx1ZXwxNzU0MDM3MDgzfDA&ixlib=rb-4.1.0&q=85" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Создаем
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Цифровые{" "}
            </span>
            Решения
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Превращаем ваши идеи в мощные веб-приложения с использованием современных технологий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Начать проект
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Посмотреть работы
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">150+</div>
            <div className="text-gray-300">Проектов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">5+</div>
            <div className="text-gray-300">Лет опыта</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-gray-300">Клиентов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-300">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
export const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Веб-разработка",
      description: "Создание современных веб-приложений с использованием React, Node.js и других передовых технологий",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8Ymx1ZXwxNzU0MDM3MDgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: "📱",
      title: "Мобильные приложения",
      description: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android",
      image: "https://images.unsplash.com/photo-1593720219128-218edc93bdc0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8Ymx1ZXwxNzU0MDM3MDgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: "🎨",
      title: "UI/UX Дизайн",
      description: "Создание интуитивно понятных и привлекательных пользовательских интерфейсов",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8Ymx1ZXwxNzU0MDM3MDgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: "☁️",
      title: "Облачные решения",
      description: "Развертывание и масштабирование приложений в облачных инфраструктурах",
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlYW18ZW58MHx8fGJsdWV8MTc1NDAzNzA4OXww&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг по разработке программного обеспечения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
export const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Веб-приложение",
      description: "Современная платформа электронной коммерции с интегрированной системой платежей",
      image: "https://images.unsplash.com/photo-1528921581519-52b9d779df2b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHRlYW18ZW58MHx8fGJsdWV8MTc1NDAzNzA4OXww&ixlib=rb-4.1.0&q=85",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      category: "SaaS",
      description: "Корпоративное приложение для управления задачами и проектами",
      image: "https://images.unsplash.com/photo-1613203713329-b2e39e14c266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMHRlYW18ZW58MHx8fGJsdWV8MTc1NDAzNzA4OXww&ixlib=rb-4.1.0&q=85",
      tech: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "Finance Dashboard",
      category: "Веб-приложение",
      description: "Дашборд для отслеживания финансовых показателей и аналитики",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      tech: ["Angular", "Express", "MySQL"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Взгляните на некоторые из наших последних проектов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      company: "Tech Startup",
      text: "SoftCraft создали для нас невероятное веб-приложение. Профессиональная команда, качественный код и отличная поддержка.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Мария Иванова",
      company: "E-commerce Ltd",
      text: "Работать с SoftCraft было удовольствием. Они поняли наши потребности и превзошли все ожидания.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b8b4b8d9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Дмитрий Козлов",
      company: "Digital Agency",
      text: "Отличная команда разработчиков! Проект был выполнен в срок и с высоким качеством.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1613203713329-b2e39e14c266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMHRlYW18ZW58MHx8fGJsdWV8MTc1NDAzNzA4OXww&ixlib=rb-4.1.0&q=85" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Свяжитесь с нами и давайте обсудим ваши идеи
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Свяжитесь с нами</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">info@softcraft.dev</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold">Телефон</h4>
                  <p className="text-gray-300">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold">Офис</h4>
                  <p className="text-gray-300">Москва, Россия</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows="5"
                  placeholder="Расскажите о вашем проекте"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">SoftCraft</div>
            <p className="text-gray-400 mb-6">
              Мы создаем современные цифровые решения, которые помогают бизнесу расти и развиваться в цифровую эпоху.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span>📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span>📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span>💼</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Дизайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@softcraft.dev</li>
              <li>+7 (999) 123-45-67</li>
              <li>Москва, Россия</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SoftCraft. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

import { useState } from "react";