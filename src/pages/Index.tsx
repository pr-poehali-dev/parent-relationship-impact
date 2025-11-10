import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Психология подростков</h1>
          <div className="flex gap-6">
            {['Главная', 'Исследование', 'Результаты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['hero', 'research', 'results'][idx])}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 fade-section">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-6 text-sm px-4 py-2">Психологическое исследование 2024</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Влияние взаимоотношений с родителями на развитие личности
            <span className="text-primary"> в подростковом возрасте</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Комплексное исследование факторов, влияющих на формирование личности подростка
            через призму семейных отношений и родительского стиля воспитания
          </p>
          <Button size="lg" onClick={() => scrollToSection('research')} className="mr-4">
            Узнать больше <Icon name="ArrowDown" size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('results')}>
            Результаты исследования
          </Button>
        </div>
      </section>

      <section id="research" className="py-20 px-4 bg-card fade-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Исследование</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изучение влияния различных аспектов родительского воспитания на психологическое
              развитие подростков 12-17 лет
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <CardTitle>Цели исследования</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" size={18} className="mr-2 mt-1 text-primary" />
                    <span>Выявить связь между стилями воспитания и самооценкой подростков</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={18} className="mr-2 mt-1 text-primary" />
                    <span>Изучить влияние эмоциональной близости на социальную адаптацию</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={18} className="mr-2 mt-1 text-primary" />
                    <span>Определить факторы, способствующие гармоничному развитию</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Методология</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" size={18} className="mr-2 mt-1 text-primary" />
                    <span>Опрос 450 подростков из 15 школ разных городов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={18} className="mr-2 mt-1 text-primary" />
                    <span>Анкетирование родителей по опроснику стилей воспитания</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={18} className="mr-2 mt-1 text-primary" />
                    <span>Психологическое тестирование самооценки и тревожности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle>Ключевые аспекты исследования</CardTitle>
              <CardDescription>Факторы, которые мы анализировали</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Heart', title: 'Эмоциональная поддержка', desc: 'Уровень принятия и понимания' },
                  { icon: 'Scale', title: 'Контроль и автономия', desc: 'Баланс свободы и границ' },
                  { icon: 'MessageCircle', title: 'Коммуникация', desc: 'Качество диалога в семье' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} size={28} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="results" className="py-20 px-4 fade-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Результаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ключевые выводы и статистические данные исследования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { value: '72%', label: 'Подростков нуждаются в большей эмоциональной поддержке', color: 'bg-purple-500' },
              { value: '85%', label: 'Связь между доверием и успешной адаптацией', color: 'bg-blue-500' },
              { value: '63%', label: 'Испытывают сложности в общении с родителями', color: 'bg-pink-500' }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`text-5xl font-bold mb-3 ${stat.color.replace('bg-', 'text-')}`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Распределение стилей воспитания</CardTitle>
              <CardDescription>Данные по 450 семьям</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { style: 'Авторитетный (демократичный)', percent: 38, color: 'bg-green-500' },
                  { style: 'Авторитарный', percent: 28, color: 'bg-red-500' },
                  { style: 'Либеральный (попустительский)', percent: 22, color: 'bg-yellow-500' },
                  { style: 'Индифферентный', percent: 12, color: 'bg-gray-500' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.style}</span>
                      <span className="text-muted-foreground">{item.percent}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Влияние на самооценку</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: 'Высокая самооценка', value: 42, style: 'Авторитетный стиль' },
                    { label: 'Средняя самооценка', value: 35, style: 'Либеральный стиль' },
                    { label: 'Низкая самооценка', value: 23, style: 'Авторитарный стиль' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.style}</div>
                      </div>
                      <div className="text-2xl font-bold text-primary">{item.value}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle>Ключевые выводы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">
                      Авторитетный стиль воспитания наиболее эффективен для развития личности
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">
                      Эмоциональная близость напрямую влияет на уровень тревожности
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5" />
                    <span className="text-sm">
                      Качество коммуникации важнее количества проведенного времени
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 Психологическое исследование. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
