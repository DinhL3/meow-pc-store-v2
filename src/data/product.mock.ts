import type { Product } from './product.types';

export const mockPCProducts: Product[] = [
  {
    id: 'night-kitten',
    name: 'Night Kitten',
    tags: ['Ryzen 5 7500F', 'RTX 5060 Ti', 'black'],
    price: 2099,
    currency: 'EUR',
    description:
      'This is a great starter gaming PC, as it can play the latest games well, while still let you upgrade in the future. High-quality parts inside, so you can enjoy gaming for many years to come. Comes with Windows 11 Pro.',
    components: {
      title: 'Components',
      items: [
        {
          label: 'CPU',
          value: 'AMD Ryzen 5 7500F (6 cores/ 12 threads)',
        },
        {
          label: 'GPU',
          value: 'Gigabyte GeForce RTX™ 5060 Ti GAMING OC 16G',
        },
        {
          label: 'Memory',
          value: 'Corsair Vengeance 32GB DDR5 6000 MT/s CL36',
        },
        {
          label: 'Storage',
          value: 'WD Blue SN5100 1TB NVMe SSD',
        },
        {
          label: 'Motherboard',
          value: 'Gigabyte B650M Gaming Plus WiFi (Rev 1.1)',
        },
        {
          label: 'Power Supply',
          value: 'Corsair RM650e (2025) | 80 Plus Gold',
        },
        {
          label: 'Case',
          value: 'DeepCool CH260',
        },
        {
          label: 'CPU Cooler',
          value: 'Thermalright Assassin X Refined SE ARGB',
        },
        {
          label: 'Thermal Paste',
          value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
        },
        {
          label: 'Case Fans',
          value: '3x Thermalright TL-C12C-S ARGB',
        },
        {
          label: 'Wireless',
          value: 'Wifi 6E & Bluetooth 5.3',
        },
      ],
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759533999/night-kitten-1-main_bdwzi3.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759533998/night-kitten-1-side_kuxb0t.webp',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-10-11T04:49:00Z',
    updatedAt: '2025-11-29T11:49:00Z',
  },
  {
    id: 'snow-kitten',
    name: 'Snow Kitten',
    tags: ['Ryzen 5 7500F', 'RX 9060 XT', 'white'],
    price: 1999,
    currency: 'EUR',
    description:
      'This is a great starter gaming PC, as it can play the latest games well, while still let you upgrade in the future. High-quality parts inside, so you can enjoy gaming for many years to come. Comes with Windows 11 Pro.',
    components: {
      title: 'Components',
      items: [
        {
          label: 'CPU',
          value: 'AMD Ryzen 5 7500F (6 cores/ 12 threads)',
        },
        {
          label: 'GPU',
          value: 'SAPPHIRE PURE AMD Radeon™ RX 9060 XT 16GB OC',
        },
        {
          label: 'Memory',
          value: 'Kingston Fury Beast 32GB DDR5 6000 MT/s CL36',
        },
        {
          label: 'Storage',
          value: 'WD Blue SN5100 1TB NVMe SSD',
        },
        {
          label: 'Motherboard',
          value: 'Gigabyte B650M Gaming Plus WiFi (Rev 1.1)',
        },
        {
          label: 'Power Supply',
          value: 'Phanteks AMP GH750 | 80 Plus Gold',
        },
        {
          label: 'Case',
          value: 'DeepCool CH260 WH',
        },
        {
          label: 'CPU Cooler',
          value: 'Thermalright Assassin Spirit 120 EVO White ARGB',
        },
        {
          label: 'Thermal Paste',
          value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
        },
        {
          label: 'Case Fans',
          value: '3x Thermalright TL-C12CW-S ARGB',
        },
        {
          label: 'Wireless',
          value: 'Wifi 6E & Bluetooth 5.3',
        },
      ],
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760146722/snow-kitten-1-main_zg2ujm.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760146722/snow-kitten-1-side_mc9hhb.webp',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-10-11T04:49:00Z',
    updatedAt: '2025-11-29T11:49:00Z',
  },
  {
    id: 'tempest-lynx',
    name: 'Tempest Lynx',
    tags: ['Ryzen 5 9600X', 'RTX 5070', 'white'],
    price: 2500,
    currency: 'EUR',
    description:
      'An all-white PC that looks great on your desk, and can play the latest games at max graphics. Generous storage that will let you install many large games and softwares. High-quality parts inside, so you can enjoy gaming for many years to come. Comes with Windows 11 Pro.',
    components: {
      title: 'Components',
      items: [
        {
          label: 'CPU',
          value: 'AMD Ryzen 5 9600X (6 cores/ 12 threads)',
        },
        {
          label: 'GPU',
          value: 'INNO3D GeForce RTX™ 5070 TWIN X2 12GB GDDR7',
        },
        {
          label: 'Memory',
          value: 'Crucial Pro Overclocking 32GB DDR5 6000 MHz CL36',
        },
        {
          label: 'Storage',
          value: 'WD Black SN7100 1TB NVMe SSD',
        },
        {
          label: 'Motherboard',
          value: 'MSI B850M GAMING PLUS WIFI6E',
        },
        {
          label: 'Power Supply',
          value: 'Phanteks AMP GH 750W | 80 Plus Gold',
        },
        {
          label: 'Case',
          value: "NZXT H3 Flow (PC Gamer's best m-ATX case of 2025)",
        },
        {
          label: 'CPU Cooler',
          value: 'Thermalright Assassin X 120 Refined SE White ARGB',
        },
        {
          label: 'Thermal Paste',
          value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
        },
        {
          label: 'Case Fans',
          value: '3x Thermalright TL-C12CW-S ARGB',
        },
        {
          label: 'Wireless',
          value: 'Wifi 6E & Bluetooth 5.3',
        },
      ],
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1761755496/tempest-lynx-main_uysnux.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1761755495/tempest-lynx-side_ft9qta.webp',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-10-26T16:48:00Z',
    updatedAt: '2025-10-29T18:34:00Z',
  },
];
