import Contacts from 'components/pages/Contacts/Contacts';
import Docs from 'components/pages/Docs/Docs';
import Events from 'components/pages/Events/Events';
import Gallery from 'components/pages/Gallery/Gallery';
import News from 'components/pages/News/News';

export const navigationData = [
  {
    id: 1,
    name: 'Документы',
    link: '/docs',
    element: <Docs />,
  },
  {
    id: 2,
    name: 'Новости',
    link: '/news',
    element: <News />,
  },
  {
    id: 3,
    name: 'Мероприятия',
    link: '/events',
    element: <Events />,
  },
  {
    id: 4,
    name: 'Галерея',
    link: '/gallery',
    element: <Gallery />,
  },
  {
    id: 5,
    name: 'Контакты',
    link: '/contacts',
    element: <Contacts />,
  },
];
