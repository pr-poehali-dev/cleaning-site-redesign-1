import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      title: 'Главная',
      link: '/',
      description: 'Главная страница с обзором услуг и контактами',
      icon: 'Home'
    },
    {
      title: 'Услуги',
      link: '/services',
      description: 'Полный каталог клининговых услуг',
      icon: 'Sparkles',
      subsections: [
        'Генеральная уборка',
        'Поддерживающая уборка',
        'Уборка офисов',
        'Мытье окон',
        'Уборка после ремонта',
        'Химчистка мебели'
      ]
    },
    {
      title: 'Товары',
      link: '/products',
      description: 'Каталог клининговых товаров и оборудования',
      icon: 'Package',
      subsections: [
        'Моющие средства',
        'Инвентарь для уборки',
        'Расходные материалы',
        'Профессиональное оборудование'
      ]
    },
    {
      title: 'Аренда техники',
      link: '/equipment',
      description: 'Профессиональное оборудование в аренду',
      icon: 'Wrench',
      subsections: [
        'Моющие пылесосы',
        'Роторные машины',
        'Парогенераторы',
        'Поломоечные машины',
        'Аппараты высокого давления'
      ]
    },
    {
      title: 'Контакты',
      link: '/contacts',
      description: 'Контактная информация и форма обратной связи',
      icon: 'Phone',
      subsections: [
        'Телефон и адрес',
        'Режим работы',
        'Карта проезда',
        'Форма обратной связи'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Карта сайта</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Структура сайта ХочуКлининг - навигация по всем разделам и страницам
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name={section.icon as any} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <Link 
                    to={section.link}
                    className="text-xl font-semibold hover:text-primary transition-colors"
                  >
                    {section.title}
                  </Link>
                  <p className="text-muted-foreground mt-1">{section.description}</p>
                </div>
              </div>

              {section.subsections && (
                <div className="ml-16">
                  <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                    Разделы:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {section.subsections.map((subsection, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="ChevronRight" size={14} className="text-primary mr-2" />
                        {subsection}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Icon name="Globe" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Сайт компании</h3>
            <p className="text-sm text-muted-foreground">
              Официальный сайт клининговой компании ХочуКлининг в Севастополе
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">География работы</h3>
            <p className="text-sm text-muted-foreground">
              Севастополь и пригороды. Обслуживаем жилые и коммерческие объекты
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Режим работы</h3>
            <p className="text-sm text-muted-foreground">
              Круглосуточно, 7 дней в неделю. Экстренные вызовы принимаем всегда
            </p>
          </Card>
        </div>

        {/* Quick Navigation */}
        <div className="bg-primary/5 rounded-2xl p-8 mt-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Быстрая навигация</h2>
            <p className="text-muted-foreground">
              Переходите к нужному разделу одним кликом
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {siteStructure.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="inline-flex items-center space-x-2 bg-white/50 hover:bg-white/80 border border-border rounded-lg px-4 py-2 transition-colors"
              >
                <Icon name={section.icon as any} size={16} />
                <span className="text-sm font-medium">{section.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;