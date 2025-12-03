import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
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

      <section id="главная" className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/4ba15575-3fd2-4431-b935-a34e95023e95.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        </div>
        <div className="container mx-auto relative z-10 animate-fade-in">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
              Ваша красота — наше искусство
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Салон красоты Belle Étoile. Экспертный уход, передовые технологии и атмосфера гармонии.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('контакты')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                Записаться онлайн
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('услуги')}
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 bg-white/80 backdrop-blur-sm"
              >
                Наши услуги
              </Button>
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

      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Scissors',
                title: 'Парикмахерские услуги',
                items: ['Стрижки и укладки', 'Окрашивание любой сложности', 'Уходовые процедуры для волос', 'Вечерние и свадебные прически']
              },
              {
                icon: 'Sparkles',
                title: 'Косметология и уход',
                items: ['Консультация косметолога', 'Эстетическая косметология', 'Чистка лица и уходовые программы', 'Массаж лица']
              },
              {
                icon: 'Hand',
                title: 'Маникюр и педикюр',
                items: ['Комплексный маникюр и педикюр', 'Покрытие гель-лак', 'Укрепление и лечение ногтей', 'Дизайн любой сложности']
              },
              {
                icon: 'Eye',
                title: 'Брови и ресницы',
                items: ['Коррекция и окрашивание бровей', 'Ламинирование бровей и ресниц', 'Наращивание ресниц', 'Перманентный макияж']
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in bg-white">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Icon name={service.icon} size={40} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Посмотреть все услуги и цены
            </Button>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Несколько причин доверить свою красоту нам</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Award', title: 'Мастера-эксперты', desc: 'Дипломы, постоянное обучение, стаж от 5 лет' },
              { icon: 'Star', title: 'Качественная косметика', desc: 'L\'Oreal Professionnel, Keune, Christina, Babor' },
              { icon: 'Shield', title: 'Стерильность и безопасность', desc: 'Многоэтапная обработка инструментов, одноразовые расходники' },
              { icon: 'MapPin', title: 'Удобное расположение', desc: 'Центр города, уютный интерьер, чай и кофе для гостей' }
            ].map((advantage, idx) => (
              <div key={idx} className="text-center animate-scale-in">
                <div className="mb-4 inline-block p-4 bg-accent rounded-full">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-foreground">Наши работы — лучшая рекомендация</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Результаты говорят сами за себя. Ознакомьтесь с примерами наших работ.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/e81cda64-2518-4cb0-9daa-4e6a00d34dd4.jpg" alt="Интерьер салона" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/b1988904-0f3b-4371-a0ec-3ba0e0c56baa.jpg" alt="Маникюр" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="https://cdn.poehali.dev/projects/baa0497b-2271-46e9-ae12-8c9c4bb5ad30/files/4ba15575-3fd2-4431-b935-a34e95023e95.jpg" alt="Результат работы" className="w-full h-full object-cover" />
            </div>
            {[4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square bg-accent/50 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <Icon name="Camera" size={48} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Instagram" size={20} className="mr-2" />
              Смотреть больше в Instagram
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