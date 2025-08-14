import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Equipment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(null);

  const equipment = [
    {
      id: 1,
      name: 'Моющий пылесос Karcher',
      pricePerDay: 800,
      pricePerWeek: 4500,
      description: 'Профессиональный моющий пылесос для глубокой чистки ковров и мебели',
      features: ['Мощность 1400 Вт', 'Объем бака 20 л', 'Функция сушки'],
      available: true,
      image: '/img/equipment1.jpg'
    },
    {
      id: 2,
      name: 'Роторная машина Lavor',
      pricePerDay: 1200,
      pricePerWeek: 7000,
      description: 'Роторная машина для чистки твердых покрытий и ковролина',
      features: ['Диаметр диска 43 см', 'Мощность 1500 Вт', 'Регулировка скорости'],
      available: true,
      image: '/img/equipment2.jpg'
    },
    {
      id: 3,
      name: 'Парогенератор ProSteam',
      pricePerDay: 600,
      pricePerWeek: 3500,
      description: 'Профессиональный парогенератор для дезинфекции и глубокой чистки',
      features: ['Давление 6 бар', 'Объем бойлера 3.5 л', 'Насадки в комплекте'],
      available: false,
      image: '/img/equipment3.jpg'
    },
    {
      id: 4,
      name: 'Поломоечная машина AutoScrub',
      pricePerDay: 2000,
      pricePerWeek: 12000,
      description: 'Самоходная поломоечная машина для больших площадей',
      features: ['Ширина мойки 55 см', 'Автономность 3 часа', 'Бак 70/60 л'],
      available: true,
      image: '/img/equipment4.jpg'
    },
    {
      id: 5,
      name: 'Пылесос для сухой уборки Industrial',
      pricePerDay: 500,
      pricePerWeek: 2800,
      description: 'Промышленный пылесос повышенной мощности',
      features: ['Мощность 2000 Вт', 'Объем бака 50 л', 'HEPA фильтр'],
      available: true,
      image: '/img/equipment5.jpg'
    },
    {
      id: 6,
      name: 'Аппарат высокого давления PowerWash',
      pricePerDay: 900,
      pricePerWeek: 5400,
      description: 'Мойка высокого давления для наружных работ',
      features: ['Давление 150 бар', 'Подача воды 8 л/мин', 'Шланг 10 м'],
      available: true,
      image: '/img/equipment6.jpg'
    }
  ];

  const handleRent = (equipmentId: number) => {
    setSelectedEquipment(equipmentId);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Аренда техники</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональное клининговое оборудование в аренду. 
            Выгодные условия и техническая поддержка.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Equipment List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Wrench" size={48} className="text-muted-foreground" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        {!item.available && <Badge variant="destructive">Занято</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    
                    <ul className="space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={14} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="text-lg font-bold">{item.pricePerDay} ₽/день</div>
                          <div className="text-sm text-muted-foreground">{item.pricePerWeek} ₽/неделя</div>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        disabled={!item.available}
                        onClick={() => handleRent(item.id)}
                      >
                        {item.available ? "Арендовать" : "Недоступно"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Выберите дату аренды</h3>
              
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border mb-4"
                disabled={(date) => date < new Date()}
              />
              
              {selectedEquipment && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Выбранная техника:</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {equipment.find(e => e.id === selectedEquipment)?.name}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span>Дата:</span>
                      <span>{selectedDate?.toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Стоимость:</span>
                      <span>{equipment.find(e => e.id === selectedEquipment)?.pricePerDay} ₽</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Оформить аренду
                  </Button>
                </div>
              )}
              
              <div className="border-t pt-4 mt-6">
                <h4 className="font-semibold mb-3">Условия аренды:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5" />
                    Доставка и установка включены
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5" />
                    Техническая поддержка 24/7
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5" />
                    Гарантия на оборудование
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5" />
                    Обучение персонала
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Долгосрочная аренда</h2>
              <p className="text-muted-foreground mb-6">
                Специальные условия для аренды оборудования на срок от 1 месяца. 
                Скидки до 30% и персональное обслуживание.
              </p>
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Узнать условия
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Единиц техники</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Исправность</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Скидка на месяц</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;