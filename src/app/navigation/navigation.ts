export const navigation = [
  {
    id: 'applications',
    title: 'Programlar',
    translate: 'NAV.PAGES',
    type: 'group',
    icon: 'apps',

    children: [
      {
        id: 'list',
        title: 'Devices',
        icon: 'store',
        type: 'item',
        url: '/list',
      },
      {
        id: 'chart',
        title: 'Chart',
        icon: 'widgets',
        type: 'item',
        url: '/chart',
      },
    ],
  },
];
