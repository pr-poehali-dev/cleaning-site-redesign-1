import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const CalculatorSection: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    type: '',
    service: '',
    windows: '',
    bathrooms: ''
  });

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
  );
};

export default CalculatorSection;