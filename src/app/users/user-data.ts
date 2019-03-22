import { User } from './user.model';

export const USERS: User[] = [
  {
    gender: 'female',
    name: { title: 'mrs', first: 'alyssa', last: 'graves' },
    location: {
      street: '3627 college st',
      city: 'vallejo',
      state: 'new jersey',
      postcode: 87810,
      coordinates: { latitude: '86.8076', longitude: '35.3501' },
      timezone: { offset: '-7:00', description: 'Mountain Time (US & Canada)' }
    },
    email: 'alyssa.graves@example.com',
    login: {
      uuid: '057251e9-d778-4c71-8efb-c08771f18849',
      username: 'silversnake112',
      password: 'volkswag',
      salt: 'DCHWEhH5',
      md5: 'd2b8f3473fb030bcc193bb1ca6e2a238',
      sha1: '14b62e6f6ad3c55c80ab906b2909fc808f16aba4',
      sha256: '80a26d14f9d07779aa316b67e427a1499ff0e9032e73af8ca093714dfe01b6f6'
    },
    dob: { date: '1971-03-12T03:22:15Z', age: 48 },
    registered: { date: '2009-08-26T15:18:55Z', age: 9 },
    phone: '(191)-552-5562',
    cell: '(696)-662-0868',
    id: { name: 'SSN', value: '974-44-2629' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/46.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/46.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/46.jpg'
    },
    nat: 'US'
  },
  {
    gender: 'female',
    name: { title: 'ms', first: 'daphné', last: 'lucas' },
    location: {
      street: '4778 rue barrème',
      city: 'courbevoie',
      state: 'tarn',
      postcode: 85088,
      coordinates: { latitude: '10.5081', longitude: '36.3551' },
      timezone: {
        offset: '+4:00',
        description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
      }
    },
    email: 'daphné.lucas@example.com',
    login: {
      uuid: '4aeaab41-cbde-4c66-a393-f7939c9764ed',
      username: 'bigleopard529',
      password: 'paladin',
      salt: 'g0Bwox5t',
      md5: '99d68efbcfbf81eaebd233d2c57e35be',
      sha1: 'd4389ba9b4902681dc8b4dcfa35565565d10d01b',
      sha256: '7360b14d39b668765101fb712f08f85fe2ff36efc7649379be3752a4239d7cb3'
    },
    dob: { date: '1966-01-03T10:42:34Z', age: 53 },
    registered: { date: '2015-04-24T23:53:27Z', age: 3 },
    phone: '04-17-67-89-05',
    cell: '06-77-62-84-81',
    id: { name: 'INSEE', value: '2NNaN91715189 74' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/41.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/41.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/41.jpg'
    },
    nat: 'FR'
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'victor', last: 'henderson' },
    location: {
      street: '3765 railroad st',
      city: 'carlsbad',
      state: 'iowa',
      postcode: 92069,
      coordinates: { latitude: '-69.8140', longitude: '174.6054' },
      timezone: {
        offset: '+8:00',
        description: 'Beijing, Perth, Singapore, Hong Kong'
      }
    },
    email: 'victor.henderson@example.com',
    login: {
      uuid: '6535e5a1-876c-46b2-bbbd-f09cba3e7d2f',
      username: 'heavyleopard294',
      password: 'bigjim',
      salt: 'dvCQjH0E',
      md5: 'd34e624a06b63ecb77289eab9f965dce',
      sha1: '99c008eb9a8c03b00feebc41cb4bd71714d8d105',
      sha256: '9e7f2acf963e930dbcf89cf434a2c0c0f0377dc0da3dded1407e8807d13e5616'
    },
    dob: { date: '1976-07-17T08:47:39Z', age: 42 },
    registered: { date: '2006-01-04T15:52:03Z', age: 13 },
    phone: '(672)-551-7882',
    cell: '(556)-968-1778',
    id: { name: 'SSN', value: '568-41-7536' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/5.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/5.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg'
    },
    nat: 'US'
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'mateusz', last: 'halvorsen' },
    location: {
      street: 'orreveien 5209',
      city: 'skien',
      state: 'telemark',
      postcode: '4737',
      coordinates: { latitude: '-69.2007', longitude: '73.3089' },
      timezone: {
        offset: '+3:00',
        description: 'Baghdad, Riyadh, Moscow, St. Petersburg'
      }
    },
    email: 'mateusz.halvorsen@example.com',
    login: {
      uuid: '291efc8f-3f6d-46a2-8e05-7a28f7278393',
      username: 'lazygoose187',
      password: 'laurel',
      salt: 'YWyC21IK',
      md5: '6dc143731dda05c00810129533259871',
      sha1: '0f31acbd2cd709927be23f7992f958f391520d90',
      sha256: '71a3b3f5e5d774c0bef15ae0139cabc98ce35e923af3f1995382a4e52402a72e'
    },
    dob: { date: '1957-12-08T08:24:32Z', age: 61 },
    registered: { date: '2009-10-31T12:41:23Z', age: 9 },
    phone: '56208707',
    cell: '95015905',
    id: { name: 'FN', value: '08125703489' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/68.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/68.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg'
    },
    nat: 'NO'
  },
  {
    gender: 'female',
    name: { title: 'ms', first: 'lillie', last: 'bishop' },
    location: {
      street: '669 northaven rd',
      city: 'palmdale',
      state: 'washington',
      postcode: 28629,
      coordinates: { latitude: '-80.9483', longitude: '51.2651' },
      timezone: { offset: '-10:00', description: 'Hawaii' }
    },
    email: 'lillie.bishop@example.com',
    login: {
      uuid: 'c4883cde-488b-4f9d-abcc-89d71c859d79',
      username: 'redfish375',
      password: 'goth',
      salt: '9lAM4Bd5',
      md5: 'cdfcced7690cdedf068f312406917468',
      sha1: '9f4771889a52dcee0079f18cd9b8c1adece78bbc',
      sha256: '5d3bf52f26dea5153ab8da653eb767a8159490720aeae1130ed658ec83a1e227'
    },
    dob: { date: '1968-10-20T13:41:05Z', age: 50 },
    registered: { date: '2010-12-20T06:39:51Z', age: 8 },
    phone: '(875)-128-0056',
    cell: '(052)-704-2873',
    id: { name: 'SSN', value: '522-16-8443' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/41.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/41.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/41.jpg'
    },
    nat: 'US'
  }
];
