import {
  duplex,
  tudor,
  condo,
  modern,
  victorian,
  town,
  bungalow,
  detached_duplex,
  single1,
  single2,
  contemporary,
  ranch,
} from '../assets';

export const links = [
  {
    label: 'Services ',
    path: '/services',
  },
  {
    label: 'Properties ',
    path: '/properties',
  },
  {
    label: 'Pricing ',
    path: '/pricing',
  },
  {
    label: 'About ',
    path: '/about',
  },
  {
    label: 'Contact ',
    path: '/contact',
  },
];

export const prices = [
  {
    number: '1',
    type: 'basic',
    initial: '5000',
    final: '30000',
    roi: '0.90% ROI',
    desc: 'ROI EARN IN 48HRS AFFINE SPACE',
    duration: '3 Months',
  },
  {
    number: '2',
    type: 'standard',
    initial: '40000',
    final: '60000',
    roi: '0.45% ROI',
    desc: 'ROI EARN IN 48HRS AFFINE SPACE',
    duration: '3 Months',
  },
  {
    number: '3',
    type: 'classic',
    initial: '70000',
    final: '90000',
    roi: '0.45% ROI',
    desc: 'ROI EARN IN 48HRS AFFINE SPACE',
    duration: '3 Months',
  },
  {
    number: '4',
    type: 'Premium',
    initial: '100000',
    final: 'Unlimited',
    roi: '0.50% ROI',
    desc: 'ROI EARN IN 48HRS AFFINE SPACE',
    duration: '3 Months',
  },
];

export const landedProperties = [
  {
    id: 1,
    name: 'Single family home',
    price: '£$824,000 - £$957,000 +£$14,723 (+1.7%)/sqft',
    imgUrl: single1,
    size: 'ᴥ 4 Beds ᴥ 3 Baths ᴥ 2,859/310 Sqft',
  },
  {
    id: 2,
    name: 'Detached duplex home',
    price: '£$1,839,708 - £$1,999,900 +£$20,750 (+1.7%)/sqft',
    imgUrl: detached_duplex,
    size: 'ᴥ 5 Beds ᴥ 4 Baths ᴥ 5,946 Sqft ᴥ 2.5 acre',
  },
  {
    id: 3,
    name: 'SINGLE FAMILY HOME',
    price: '£$228,400 - £$1,249,600 +£$107 (+0.28%)/sqft',
    imgUrl: single2,
    size: 'ᴥ 3 Beds ᴥ 3 Baths ᴥ 2,131Sqft',
  },
  {
    id: 4,
    name: 'Modern HOME',
    price: '£$300,000 - £$1,500,000 +£$225 (+0.40%)/sqft',
    imgUrl: modern,
    size: 'ᴥ 4 Beds ᴥ 4 Baths ᴥ 2,500Sqft',
  },

  {
    id: 5,
    name: 'CONTEMPORARY HOME',
    price: '£$350,0000 - £$2,249,600 +£$150 (+0.30%)/sqft',
    imgUrl: contemporary,
    size: 'ᴥ 5 Beds ᴥ 4 Baths ᴥ 3,131Sqft',
  },
  {
    id: 6,
    name: 'RANCH HOME',
    price: '£$500,000 - £$12,49,600 +£$150 (+0.32%)/sqft',
    imgUrl: ranch,
    size: 'ᴥ 6 Beds ᴥ 5 Baths ᴥ 3,272Sqft',
  },
];

export const moreProperties = [
  {
    id: 1,
    name: 'Detached duplex home',
    price: '£$1,839,708 - £$1,999,900 +£$20,750 (+1.7%)/sqft',
    imgUrl: duplex,
    size: 'ᴥ 5 Beds ᴥ 4 Baths ᴥ 5,946 Sqft ᴥ 2.5 acre',
  },
  {
    id: 2,
    name: 'Bungalows',
    price: '£$2,839,708 - £$20,100,000 +£$30,750 (+3.7%)/sqft',
    imgUrl: bungalow,
    size: 'ᴥ 7 Beds ᴥ 6 Baths ᴥ 2,400 Sqft ᴥ 0.5 acre',
  },
  {
    id: 3,
    name: 'Tudor Home',
    price: '£$3,839,900 - £$25,999,900 +£$40,500 (+8.7%)/sqft',
    imgUrl: tudor,
    size: 'ᴥ 7 Beds ᴥ 7 Baths ᴥ 6,946 Sqft ᴥ 5.5 acre',
  },
  {
    id: 4,
    name: 'Town HOME',
    price: '£$300,000 - £$1,500,000 +£$225 (+0.40%)/sqft',
    imgUrl: town,
    size: 'ᴥ ᴥ 8 Beds ᴥ 8 Baths ᴥ 6,946 Sqft ᴥ 5.5 acre',
  },

  {
    id: 5,
    name: 'Victorian HOME',
    price: '£$11,839,708 - £$55,999,900 +£$35,750 (+3.7%)/sqft',
    imgUrl: victorian,
    size: 'ᴥ 7 Beds ᴥ 7 Baths ᴥ 4,496 Sqft ᴥ 3.2 acre',
  },
  {
    id: 6,
    name: 'CONDOS & CO-OPS',
    price: '£$11,839,708 - £$95,999,900 +£$40,750 (+8.7%)/sqft',
    imgUrl: condo,
    size: 'ᴥ 8 Beds ᴥ 8 Baths ᴥ 6,946 Sqft ᴥ 6.5 acre',
  },
];
