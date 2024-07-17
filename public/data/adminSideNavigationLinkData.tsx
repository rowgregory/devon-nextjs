import { faChartColumn, faContactBook, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const adminSideNavigationLinkData = (params: any) => [
  {
    linkKey: '/admin/dashboard',
    textKey: 'Dashboard',
    icon: faChartColumn,
    isActive: params === 'dashboard',
  },
  {
    linkKey: '/admin/testimonials',
    textKey: 'Testimonials',
    icon: faQuoteLeft,
    isActive: params.includes('testimonial'),
  },
  {
    linkKey: '/admin/contacts',
    textKey: 'Contacts',
    icon: faContactBook,
    isActive: params.includes('contact'),
  },
];

export default adminSideNavigationLinkData;
