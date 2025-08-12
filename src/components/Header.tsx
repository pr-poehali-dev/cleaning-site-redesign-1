import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartItems: number;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, isLoggedIn, setIsLoggedIn }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">ЧистоПро</div>
            <nav className="hidden lg:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">Магазин</a>
              <a href="#rental" className="text-foreground hover:text-primary transition-colors font-medium">Аренда</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors font-medium">Калькулятор</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
            <Button variant="ghost" className="lg:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
            {isLoggedIn ? (
              <Button variant="ghost" onClick={() => setIsLoggedIn(false)}>
                <Icon name="User" size={20} className="mr-2" />
                Профиль
              </Button>
            ) : (
              <Button onClick={() => setIsLoggedIn(true)}>Войти</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;