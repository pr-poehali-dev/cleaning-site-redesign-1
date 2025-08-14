import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ХочуКлининг</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Товары
            </Link>
            <Link to="/equipment" className="text-foreground hover:text-primary transition-colors">
              Аренда техники
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm text-foreground">
              <div>г. Севастополь</div>
              <div className="font-semibold">+7 978 290 92 92</div>
            </div>
            <Button>Заказать уборку</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                Услуги
              </Link>
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">
                Товары
              </Link>
              <Link to="/equipment" className="text-foreground hover:text-primary transition-colors">
                Аренда техники
              </Link>
              <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </Link>
              <div className="pt-4 border-t">
                <div className="text-sm text-foreground mb-2">
                  <div>г. Севастополь</div>
                  <div className="font-semibold">+7 978 290 92 92</div>
                </div>
                <Button className="w-full">Заказать уборку</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;