import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы ответить на ваши вопросы и принять заказ в любое время суток
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Телефон</h3>
            <p className="text-muted-foreground mb-4">Круглосуточная линия</p>
            <a href="tel:+79782909292" className="text-primary font-semibold hover:underline">
              +7 978 290 92 92
            </a>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Адрес</h3>
            <p className="text-muted-foreground mb-4">Наш офис</p>
            <p className="text-sm">г. Севастополь<br />ул. Правды 10/8</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">Быстрая связь</p>
            <Button variant="outline" size="sm">Написать</Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Директор</h3>
            <p className="text-muted-foreground mb-4">Прямая линия</p>
            <Button variant="outline" size="sm">Написать</Button>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать уборку сейчас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;