import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Генеральная уборка',
      description: 'Полная глубокая уборка всех помещений с чисткой всех поверхностей',
      price: 'от 2500 ₽',
      features: [
        'Уборка всех комнат',
        'Мытье окон',
        'Чистка сантехники',
        'Уборка кухни',
        'Пылесос и влажная уборка'
      ],
      icon: 'Home'
    },
    {
      title: 'Поддерживающая уборка',
      description: 'Регулярная уборка для поддержания чистоты в доме или офисе',
      price: 'от 1500 ₽',
      features: [
        'Влажная уборка',
        'Пылесос',
        'Мытье полов',
        'Уборка пыли',
        'Вынос мусора'
      ],
      icon: 'RotateCcw'
    },
    {
      title: 'Уборка офисов',
      description: 'Профессиональная уборка коммерческих помещений',
      price: 'от 3000 ₽',
      features: [
        'Уборка рабочих мест',
        'Санитарная обработка',
        'Мытье стеклянных поверхностей',
        'Уход за растениями',
        'Дезинфекция'
      ],
      icon: 'Building'
    },
    {
      title: 'Мытье окон',
      description: 'Профессиональное мытье окон с обеих сторон',
      price: 'от 800 ₽',
      features: [
        'Мытье стекол',
        'Чистка рам',
        'Мытье подоконников',
        'Уборка москитных сеток',
        'Полировка стекол'
      ],
      icon: 'Square'
    },
    {
      title: 'Уборка после ремонта',
      description: 'Удаление строительной пыли и загрязнений после ремонта',
      price: 'от 4000 ₽',
      features: [
        'Удаление строительной пыли',
        'Мытье всех поверхностей',
        'Чистка напольных покрытий',
        'Уборка потолков',
        'Вынос строительного мусора'
      ],
      icon: 'Wrench'
    },
    {
      title: 'Химчистка мебели',
      description: 'Профессиональная химчистка мягкой мебели и ковров',
      price: 'от 2000 ₽',
      features: [
        'Чистка диванов',
        'Чистка кресел',
        'Химчистка ковров',
        'Удаление пятен',
        'Дезодорирование'
      ],
      icon: 'Armchair'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные клининговые услуги в Севастополе. 
            Качественная уборка любой сложности с гарантией результата.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="w-full">Заказать услугу</Button>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-muted-foreground mb-6">
              Наши специалисты помогут подобрать оптимальный пакет услуг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить: +7 978 290 92 92
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;