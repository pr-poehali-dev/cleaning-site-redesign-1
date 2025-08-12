import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Профессиональный клининг 
              <span className="text-primary block">для вашего дома</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Качественная уборка от команды профессионалов. 
              Используем современное оборудование и безопасные средства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать уборку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/e5fa4cd8-010a-451e-b5e4-b411ab3f40fd.jpg"
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