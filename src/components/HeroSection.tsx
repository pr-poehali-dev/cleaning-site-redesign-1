import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              ХочуКлининг - 
              <span className="text-primary block">профессиональная уборка в Севастополе</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Качественные клининговые услуги, продажа товаров и аренда техники в Севастополе. 
              Работаем с гарантией качества и фиксированными ценами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать уборку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-1 text-primary" />
                Гарантия качества
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-1 text-primary" />
                24/7 поддержка
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={16} className="mr-1 text-primary" />
                500+ клиентов
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/764fcd49-492c-4ceb-9d25-a32276601983.jpg"
              alt="Профессиональная уборка"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;