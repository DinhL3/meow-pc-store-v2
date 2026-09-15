import type { CustomBuild } from './customBuild.types';

export const customBuilds: CustomBuild[] = [
  {
    id: 'black-and-white',
    name: 'Black and white',
    tags: ['Ryzen 5 7500F', 'RX 9070'],
    description: {
      en: `I want a white and black PC with subtle RGB lights, and play Total War at 1440p.`,
      fi: 'Haluaisin valko-mustan tietokoneen, jossa on hillityt RGB-valot. Pelaan Total War -pelejä 1440p-resoluutiolla.',
    },
    image: 'https://res.cloudinary.com/dlhzbr2to/image/upload/v1764522060/white-and-black-main_bdu4v3.webp',
    createdAt: '2025-11-30T18:57:00Z',
    updatedAt: '2025-11-30T18:57:00Z',
  },
  {
    id: 'void-lynx',
    name: 'Void Lynx',
    tags: ['Ryzen 5 7500F', 'RX 9070'],
    description: {
      en: `I want a best-for-budget, black PC with RGB lights. I play CS2 casually and single player games at 1440p.`,
      fi: 'Haluaisin mahdollisimman hyvän, budjettiystävällisen mustan koneen RGB-valoilla. Pelaan CS2:ta rennosti ja yksinpelejä 1440p-resoluutiolla.',
    },
    image: 'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760649675/void-lynx-main_rsh2vb.webp',
    createdAt: '2025-11-30T19:03:00Z',
    updatedAt: '2025-11-30T19:03:00Z',
  },
  {
    id: 'north',
    name: 'North',
    tags: ['Ryzen 7 7800X3D', 'RTX 5080', 'Fractal North', 'Thermalright Peerless Assassin 140', 'Arctic P14 Pro PMW'],
    description: {
      en: `I want a 4K gaming PC with the Fractal North case for the wood front. RGB doesn't matter to me, I just want it to be cool and quiet.`,
      fi: 'Haluaisin 4K-pelikoneen Fractal North -kotelolla sen puuosan takia. RGB-valoilla ei ole väliä, kunhan kone on viileä ja hiljainen.',
    },
    image: 'https://res.cloudinary.com/dlhzbr2to/image/upload/v1764522147/north-main_q33enl.webp',
    createdAt: '2025-11-30T19:07:00Z',
    updatedAt: '2025-11-30T19:07:00Z',
  },
  {
    id: 'compact-5090',
    name: 'Compact 4K Living Room Gaming PC',
    tags: ['Ryzen 7 9800X3D', 'RTX 5090', 'Lian Li A3'],
    description: {
      en: `I want a compact, stealthy, future-proof PC that is used for living room gaming at 4K Ultra 120Hz.`,
      fi: 'Haluan kompaktin, huomaamattoman ja tulevaisuuden kestävän PC:n 4K Ultra 120 Hz -pelaamiseen olohuonekäyttöön.',
    },
    image: 'https://res.cloudinary.com/dlhzbr2to/image/upload/v1765519612/compact-5090_rgx5wf.webp',
    createdAt: '2025-12-12T08:24:00Z',
    updatedAt: '2025-12-12T08:24:00Z',
  },
];
