import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ShopRentalSectionProps {
  cartItems: number;
  setCartItems: (value: number) => void;
}

const ShopRentalSection: React.FC<ShopRentalSectionProps> = ({ cartItems, setCartItems }) => {
  const products = [
    {
      name: 'Универсальное средство Prosept',
      price: 890,
      category: 'Химия',
      image: '/public/placeholder.svg'
    },
    {
      name: 'Микрофибра профессиональная',
      price: 340,
      category: 'Инвентарь',
      image: '/public/placeholder.svg'
    },
    {
      name: 'Швабра с отжимом',
      price: 1250,
      category: 'Инвентарь',
      image: '/public/placeholder.svg'
    },
    {
      name: 'Средство для стекол',
      price: 520,
      category: 'Химия',
      image: '/public/placeholder.svg'
    }
  ];

  const equipment = [
    {
      name: 'Пылесос Karcher WD 6',
      price: 1500,
      period: 'сутки',
      description: 'Профессиональный пылесос для влажной и сухой уборки'
    },
    {
      name: 'Поломоечная машина',
      price: 2500,
      period: 'сутки',
      description: 'Машина для мытья больших площадей'
    },
    {
      name: 'Парогенератор',
      price: 1200,
      period: 'сутки',
      description: 'Для глубокой дезинфекции поверхностей'
    },
    {
      name: 'Мойка высокого давления',
      price: 1800,
      period: 'сутки',
      description: 'Для очистки фасадов и больших поверхностей'
    }
  ];

  return (
    <section id="shop" className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="shop" className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Магазин и аренда</h2>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="shop">Интернет-магазин</TabsTrigger>
              <TabsTrigger value="rental">Аренда техники</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="shop">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all">
                  <div className="aspect-square bg-secondary/30 rounded-t-lg flex items-center justify-center">
                    <Icon name="Package" size={48} className="text-muted-foreground" />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{product.price}₽</span>
                      <Button size="sm" onClick={() => setCartItems(cartItems + 1)}>
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rental" id="rental">
            <div className="grid md:grid-cols-2 gap-6">
              {equipment.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.price}₽</div>
                        <div className="text-sm text-muted-foreground">за {item.period}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Арендовать
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Info" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ShopRentalSection;