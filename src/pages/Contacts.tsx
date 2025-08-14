import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы работаем 24/7 и всегда готовы помочь.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <p className="text-muted-foreground">Звоните в любое время</p>
                </div>
              </div>
              <a href="tel:+79782909292" className="text-lg font-semibold hover:text-primary transition-colors">
                +7 978 290 92 92
              </a>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Адрес</h3>
                  <p className="text-muted-foreground">Наш офис в Севастополе</p>
                </div>
              </div>
              <p className="text-lg">г. Севастополь, ул. Правды 10/8</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Режим работы</h3>
                  <p className="text-muted-foreground">Мы работаем круглосуточно</p>
                </div>
              </div>
              <p className="text-lg">24 часа / 7 дней в неделю</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" size={20} className="text-primary" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Yandex Map */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Наше расположение</h3>
              <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b0c7a6f4b0e8f9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Карта офиса ХочуКлининг"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                * Точный адрес: г. Севастополь, ул. Правды 10/8. Удобная парковка и доступ к общественному транспорту.
              </p>
            </Card>

            {/* Contact Form */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Написать нам</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="service">Интересующая услуга</Label>
                  <select className="w-full p-3 border border-input bg-background rounded-md">
                    <option value="">Выберите услугу</option>
                    <option value="general">Генеральная уборка</option>
                    <option value="regular">Поддерживающая уборка</option>
                    <option value="office">Уборка офисов</option>
                    <option value="windows">Мытье окон</option>
                    <option value="equipment">Аренда техники</option>
                    <option value="products">Покупка товаров</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваши потребности или задайте вопрос"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Нужна срочная консультация?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наши специалисты готовы ответить на ваши вопросы прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp чат
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать директору
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;