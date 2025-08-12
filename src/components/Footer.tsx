import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">ЧистоПро</div>
            <p className="text-background/70">
              Профессиональные клининговые услуги для дома и бизнеса
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-background/70">
              <li>Генеральная уборка</li>
              <li>Регулярная уборка</li>
              <li>Уборка после ремонта</li>
              <li>Мытье окон</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2 text-background/70">
              <li>Интернет-магазин</li>
              <li>Аренда техники</li>
              <li>Доставка</li>
              <li>Гарантии</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-background/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@chistopro.ru</li>
              <li>Работаем 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2024 ЧистоПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;