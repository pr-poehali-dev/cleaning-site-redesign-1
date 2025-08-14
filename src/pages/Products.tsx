import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'cleaning', name: 'Моющие средства' },
    { id: 'tools', name: 'Инвентарь' },
    { id: 'materials', name: 'Расходные материалы' },
    { id: 'equipment', name: 'Оборудование' }
  ];

  const products = [
    {
      id: 1,
      name: 'Универсальное моющее средство CleanMax',
      price: 450,
      oldPrice: 520,
      category: 'cleaning',
      image: '/img/product1.jpg',
      rating: 4.8,
      reviews: 24,
      inStock: true,
      description: 'Эффективное средство для мытья всех поверхностей'
    },
    {
      id: 2,
      name: 'Профессиональная швабра ProClean',
      price: 1200,
      category: 'tools',
      image: '/img/product2.jpg',
      rating: 4.9,
      reviews: 18,
      inStock: true,
      description: 'Швабра с микрофиброй для идеальной уборки'
    },
    {
      id: 3,
      name: 'Салфетки из микрофибры (10 шт)',
      price: 800,
      category: 'materials',
      image: '/img/product3.jpg',
      rating: 4.7,
      reviews: 42,
      inStock: false,
      description: 'Качественные салфетки для деликатной уборки'
    },
    {
      id: 4,
      name: 'Средство для стекол Crystal',
      price: 320,
      category: 'cleaning',
      image: '/img/product4.jpg',
      rating: 4.6,
      reviews: 15,
      inStock: true,
      description: 'Идеальная чистота стекол без разводов'
    },
    {
      id: 5,
      name: 'Пылесос промышленный PowerVac',
      price: 15500,
      oldPrice: 18000,
      category: 'equipment',
      image: '/img/product5.jpg',
      rating: 4.9,
      reviews: 8,
      inStock: true,
      description: 'Мощный пылесос для профессиональной уборки'
    },
    {
      id: 6,
      name: 'Ведро с отжимом SpinMop',
      price: 2100,
      category: 'tools',
      image: '/img/product6.jpg',
      rating: 4.5,
      reviews: 33,
      inStock: true,
      description: 'Удобное ведро с системой отжима'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Каталог товаров</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные средства и инвентарь для уборки. 
            Качественные товары с доставкой по Севастополю.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                <Icon name="Package" size={48} className="text-muted-foreground" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">{product.price} ₽</span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice} ₽
                      </span>
                    )}
                  </div>
                  {!product.inStock && (
                    <Badge variant="destructive">Нет в наличии</Badge>
                  )}
                </div>
                
                <Button 
                  className="w-full" 
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  {product.inStock ? "В корзину" : "Под заказ"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
            <p className="text-muted-foreground">Попробуйте выбрать другую категорию</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Оптовые поставки</h2>
            <p className="text-muted-foreground mb-6">
              Предлагаем выгодные условия для клининговых компаний и организаций
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Обсудить условия
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" size={20} className="mr-2" />
                Прайс-лист
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;