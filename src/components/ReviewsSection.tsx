import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Анна Петрова',
      company: 'ООО "Альфа"',
      rating: 5,
      text: 'Отличная команда! Делают генеральную уборку в нашем офисе уже полгода. Всегда качественно и в срок.',
      avatar: '👩‍💼'
    },
    {
      name: 'Михаил Сидоров',
      company: 'Частный клиент',
      rating: 5,
      text: 'Заказывал уборку после ремонта. Ребята справились на отлично, квартира стала как новая!',
      avatar: '👨‍💻'
    },
    {
      name: 'Елена Козлова',
      company: 'Кафе "Уют"',
      rating: 5,
      text: 'Регулярно пользуемся услугами ЧистоПро. Всегда чисто, аккуратно, персонал вежливый.',
      avatar: '👩‍🍳'
    },
    {
      name: 'Дмитрий Волков',
      company: 'IT-Компания',
      rating: 5,
      text: 'Арендовали технику для уборки складского помещения. Всё работало отлично, доставили вовремя.',
      avatar: '👨‍💼'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверяют нам свою чистоту
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{review.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Заказов</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Оставить отзыв
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;