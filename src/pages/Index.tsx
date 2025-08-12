import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    type: '',
    service: '',
    windows: '',
    bathrooms: ''
  });

  const services = [
    {
      title: 'Генеральная уборка',
      description: 'Полная глубокая уборка всех помещений с использованием профессиональных средств',
      price: 'от 2500₽',
      icon: 'Home'
    },
    {
      title: 'Поддерживающая уборка',
      description: 'Регулярная уборка для поддержания чистоты в доме или офисе',
      price: 'от 1800₽',
      icon: 'Calendar'
    },
    {
      title: 'Уборка после ремонта',
      description: 'Специализированная уборка помещений после строительных работ',
      price: 'от 4000₽',
      icon: 'HardHat'
    },
    {
      title: 'Мытье окон',
      description: 'Профессиональное мытье окон внутри и снаружи помещения',
      price: 'от 300₽/окно',
      icon: 'Wind'
    },
    {
      title: 'Химчистка мебели',
      description: 'Глубокая чистка диванов, кресел, матрасов и ковров',
      price: 'от 2000₽',
      icon: 'Sofa'
    },
    {
      title: 'Клининг офисов',
      description: 'Комплексная уборка офисных помещений любой площади',
      price: 'от 50₽/м²',
      icon: 'Building2'
    }
  ];

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

  const calculateCost = () => {
    const basePrice = parseInt(calculatorData.area) * 80;
    let multiplier = 1;
    
    if (calculatorData.service === 'general') multiplier = 1.5;
    if (calculatorData.service === 'after-repair') multiplier = 2;
    if (calculatorData.type === 'office') multiplier *= 0.8;
    
    const windowsPrice = parseInt(calculatorData.windows || '0') * 300;
    const bathroomsPrice = parseInt(calculatorData.bathrooms || '0') * 500;
    
    return Math.round(basePrice * multiplier + windowsPrice + bathroomsPrice);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-primary">ЧистоПро</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
                <a href="#shop" className="text-foreground hover:text-primary transition-colors">Магазин</a>
                <a href="#rental" className="text-foreground hover:text-primary transition-colors">Аренда</a>
                <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
                <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              </nav>
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

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр клининговых услуг для дома и офиса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Заказать
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="Calculator" size={16} className="mr-2" />
                      Рассчитать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте примерную стоимость уборки
              </p>
            </div>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="area">Площадь помещения (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="50"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="type">Тип помещения</Label>
                  <Select onValueChange={(value) => setCalculatorData({...calculatorData, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="house">Дом</SelectItem>
                      <SelectItem value="office">Офис</SelectItem>
                      <SelectItem value="commercial">Коммерческое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="service">Вид уборки</Label>
                  <Select onValueChange={(value) => setCalculatorData({...calculatorData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">Поддерживающая</SelectItem>
                      <SelectItem value="general">Генеральная</SelectItem>
                      <SelectItem value="after-repair">После ремонта</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="windows">Количество окон</Label>
                  <Input
                    id="windows"
                    type="number"
                    placeholder="5"
                    value={calculatorData.windows}
                    onChange={(e) => setCalculatorData({...calculatorData, windows: e.target.value})}
                  />
                </div>
              </div>
              {calculatorData.area && calculatorData.type && calculatorData.service && (
                <div className="bg-primary/5 p-6 rounded-lg text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {calculateCost().toLocaleString()}₽
                  </div>
                  <p className="text-muted-foreground">Примерная стоимость уборки</p>
                </div>
              )}
              <Button size="lg" className="w-full">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать по этой цене
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop & Rental Section */}
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

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Связаться с нами</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@chistopro.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Клининговая, 15</div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать директору
                  </Button>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Обратная связь</CardTitle>
              </CardHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших потребностях в уборке..." />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;