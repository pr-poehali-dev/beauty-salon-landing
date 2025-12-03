import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-border' : 'bg-white/80 backdrop-blur-sm border-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-primary">Belle Étoile</h2>
          <div className="hidden md:flex gap-8">
            {['Главная', 'О нас', 'Услуги', 'Преимущества', 'Портфолио', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('контакты')} className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </div>
      </nav>

      <section id="главная" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[65%] h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/4ba15575-3fd2-4431-b935-a34e95023e95.jpg)',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/40"></div>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-[15%] w-72 h-72 bg-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-[40%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">✨ Премиальный салон красоты</span>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-foreground leading-none">
              Ваша<br/>
              <span className="text-primary italic">красота</span> —<br/>
              наше искусство
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-xl">
              Экспертный уход, передовые технологии и атмосфера гармонии в центре города
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('контакты')}
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
              >
                Записаться онлайн
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('услуги')}
                className="text-lg px-10 py-7 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all hover:scale-105"
              >
                Наши услуги
              </Button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} className="text-primary" />
                <span>Эксперты с опытом 5+ лет</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-primary" />
                <span>Премиум косметика</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-foreground">Почему выбирают нас?</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Belle Étoile — это не просто салон, а пространство, где встречаются профессионализм и забота. 
              Мы создаем индивидуальные программы ухода и преображаем, учитывая ваши уникальные черты и пожелания. 
              Наша цель — ваш комфорт и безупречный результат.
            </p>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-32 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр премиальных услуг для вашей красоты</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: 'Scissors',
                title: 'Парикмахерские услуги',
                items: ['Стрижки и укладки', 'Окрашивание любой сложности', 'Уходовые процедуры для волос', 'Вечерние и свадебные прически'],
                color: 'from-purple-50 to-pink-50'
              },
              {
                icon: 'Sparkles',
                title: 'Косметология и уход',
                items: ['Консультация косметолога', 'Эстетическая косметология', 'Чистка лица и уходовые программы', 'Массаж лица'],
                color: 'from-orange-50 to-yellow-50'
              },
              {
                icon: 'Hand',
                title: 'Маникюр и педикюр',
                items: ['Комплексный маникюр и педикюр', 'Покрытие гель-лак', 'Укрепление и лечение ногтей', 'Дизайн любой сложности'],
                color: 'from-pink-50 to-rose-50'
              },
              {
                icon: 'Eye',
                title: 'Брови и ресницы',
                items: ['Коррекция и окрашивание бровей', 'Ламинирование бровей и ресниц', 'Наращивание ресниц', 'Перманентный макияж'],
                color: 'from-amber-50 to-orange-50'
              }
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className={`group border-0 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${service.color} hover:-translate-y-2 overflow-hidden relative`}
                style={{
                  transform: idx % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 inline-block p-4 bg-white/50 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} size={36} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-3 text-base">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-10 py-7 rounded-full transition-all hover:scale-105"
            >
              Посмотреть все услуги и цены
            </Button>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-32 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Почему мы?</h2>
            <p className="text-xl text-muted-foreground">Несколько причин доверить свою красоту нам</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Award', title: 'Мастера-эксперты', desc: 'Дипломы, постоянное обучение, стаж от 5 лет', delay: '0s' },
              { icon: 'Star', title: 'Качественная косметика', desc: 'L\'Oreal Professionnel, Keune, Christina, Babor', delay: '0.1s' },
              { icon: 'Shield', title: 'Стерильность и безопасность', desc: 'Многоэтапная обработка инструментов', delay: '0.2s' },
              { icon: 'MapPin', title: 'Удобное расположение', desc: 'Центр города, уютный интерьер', delay: '0.3s' }
            ].map((advantage, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 bg-white rounded-3xl border-2 border-transparent hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: advantage.delay }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.desc}</p>
                
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-32 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Наши работы</h2>
            <p className="text-xl text-muted-foreground">
              Результаты говорят сами за себя. Вдохновитесь примерами наших работ.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group relative">
              <img 
                src="https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/e81cda64-2518-4cb0-9daa-4e6a00d34dd4.jpg" 
                alt="Интерьер салона" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-bold">Интерьер салона</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden group relative">
              <img 
                src="https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/b1988904-0f3b-4371-a0ec-3ba0e0c56baa.jpg" 
                alt="Маникюр" 
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold">Маникюр</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden bg-accent/30 flex items-center justify-center group hover:bg-primary/10 transition-colors duration-300">
              <div className="text-center p-6">
                <Icon name="Camera" size={40} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Косметология</p>
              </div>
            </div>
            
            <div className="col-span-2 rounded-3xl overflow-hidden group relative">
              <img 
                src="https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/4ba15575-3fd2-4431-b935-a34e95023e95.jpg" 
                alt="Прическа" 
                className="w-full h-full object-cover aspect-[2/1] group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xl font-bold">Прическа и укладка</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center group hover:from-primary/20 hover:to-accent/30 transition-all duration-300">
              <div className="text-center p-6">
                <Icon name="Sparkles" size={40} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Брови</p>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center group hover:from-accent/30 hover:to-secondary/20 transition-all duration-300">
              <div className="text-center p-6">
                <Icon name="Heart" size={40} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Уход</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
            >
              <Icon name="Instagram" size={20} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-foreground">Запишитесь на прием прямо сейчас</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Оставьте свои контакты, и наш администратор свяжется с вами в течение 30 минут, 
                чтобы согласовать время и услугу.
              </p>
              <div className="bg-accent p-4 rounded-lg mb-8">
                <p className="text-primary font-semibold">
                  🎁 При первой онлайн-записи — скидка 10% на любую услугу!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hair">Парикмахерские услуги</SelectItem>
                    <SelectItem value="cosmetology">Косметология</SelectItem>
                    <SelectItem value="nails">Маникюр и педикюр</SelectItem>
                    <SelectItem value="brows">Брови и ресницы</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Комментарий (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-8 text-foreground">Ждем вас в гости</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-primary hover:underline">+7 (999) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@belleetoile.ru" className="text-primary hover:underline">hello@belleetoile.ru</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                <Icon name="Map" size={48} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Belle Étoile</h3>
              <p className="text-muted-foreground">Салон красоты. Создаем красоту с 2015 года</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Instagram" size={28} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Facebook" size={28} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Send" size={28} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Договор-оферта</a>
            </div>
            <p className="text-sm text-muted-foreground">© Belle Étoile, 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;