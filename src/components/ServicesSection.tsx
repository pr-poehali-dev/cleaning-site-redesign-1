import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Генеральная уборка',
      description: 'Полная глубокая уборка всех помещений с использованием профессиональных средств',
      price: 'от 2500₽',
      icon: 'Home'
    },
    {
      title: 'Поддерживающая уборка',
      description: 'Регулярная уборка для поддержания чистоты в доме или офисе',
      price: 'от 1800₽',
      icon: 'Calendar'
    },
    {
      title: 'Уборка после ремонта',
      description: 'Специализированная уборка помещений после строительных работ',
      price: 'от 4000₽',
      icon: 'HardHat'
    },
    {
      title: 'Мытье окон',
      description: 'Профессиональное мытье окон внутри и снаружи помещения',
      price: 'от 300₽/окно',
      icon: 'Wind'
    },
    {
      title: 'Химчистка мебели',
      description: 'Глубокая чистка диванов, кресел, матрасов и ковров',
      price: 'от 2000₽',
      icon: 'Sofa'
    },
    {
      title: 'Клининг офисов',
      description: 'Комплексная уборка офисных помещений любой площади',
      price: 'от 50₽/м²',
      icon: 'Building2'
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground">
            Полный спектр клининговых услуг для дома и офиса
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Заказать
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;