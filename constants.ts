import { Character } from './types';

export const HERO_IMAGE_URL = "https://1mi.uk/m_00.webp";

export const CHARACTERS: Character[] = [
  // Odelion Series
  {
    id: 'odelion-12',
    name: '오딜리언',
    ageDisplay: '12세',
    description: '왕립마법사단 천재 견습생',
    image: 'https://1mi.uk/a_00.webp',
    borderColorClass: 'hover:border-magi-silver',
    nameColorClass: 'text-magi-silver',
  },
  {
    id: 'odelion-15',
    name: '오딜리언',
    ageDisplay: '15세',
    description: '사춘기, 예민해진 분위기',
    image: 'https://1mi.uk/b_00.webp',
    borderColorClass: 'hover:border-magi-silver',
    nameColorClass: 'text-magi-silver',
  },
  {
    id: 'odelion-adult',
    name: '오딜리언',
    ageDisplay: '성인',
    description: '타락한 마도사 / 예비 빌런',
    image: 'https://1mi.uk/c_00.webp',
    borderColorClass: 'hover:border-magi-silver',
    nameColorClass: 'text-magi-silver',
    badge: {
      text: 'DANGER',
      colorClass: 'bg-red-900/80 text-red-200'
    }
  },
  // Alain Series
  {
    id: 'alain-12',
    name: '알레인',
    ageDisplay: '12세',
    description: '성기사 견습생',
    image: 'https://1mi.uk/d_00.webp',
    borderColorClass: 'hover:border-magi-accent',
    nameColorClass: 'text-magi-accent',
  },
  {
    id: 'alain-15',
    name: '알레인',
    ageDisplay: '15세',
    description: '단단해진 눈매, 성장기',
    image: 'https://1mi.uk/e_00.webp',
    borderColorClass: 'hover:border-magi-accent',
    nameColorClass: 'text-magi-accent',
  },
  {
    id: 'alain-adult',
    name: '알레인',
    ageDisplay: '성인',
    description: '완성된 용사',
    image: 'https://1mi.uk/f_00.webp',
    borderColorClass: 'hover:border-magi-accent',
    nameColorClass: 'text-magi-accent',
    badge: {
      text: 'HERO',
      colorClass: 'bg-yellow-900/80 text-yellow-200'
    }
  },
  // Kael Series
  {
    id: 'kael-12',
    name: '카엘',
    ageDisplay: '12세',
    description: '마법사 견습생 / 라이벌',
    image: 'https://1mi.uk/g_00.webp',
    borderColorClass: 'hover:border-red-500',
    nameColorClass: 'text-red-400',
  },
  {
    id: 'kael-15',
    name: '카엘',
    ageDisplay: '15세',
    description: '활동성을 위한 묶은 머리',
    image: 'https://1mi.uk/h_00.webp',
    borderColorClass: 'hover:border-red-500',
    nameColorClass: 'text-red-400',
  },
  {
    id: 'kael-adult',
    name: '카엘',
    ageDisplay: '성인',
    description: '마법사단 부단장',
    image: 'https://1mi.uk/i_00.webp',
    borderColorClass: 'hover:border-red-500',
    nameColorClass: 'text-red-400',
  },
  // Supporting Characters
  {
    id: 'sereno',
    name: '세레노',
    ageDisplay: '30세',
    description: '신탁관',
    quote: '"의심을 다스리는 것이 믿음입니다."',
    image: 'https://1mi.uk/s_00.webp',
    borderColorClass: 'hover:border-purple-400',
    nameColorClass: 'text-purple-300',
  },
  {
    id: 'julian',
    name: '줄리안',
    ageDisplay: '26세',
    description: '제1성기사단장',
    quote: '"빛의 가호가 함께하기를."',
    image: 'https://1mi.uk/j_00.webp',
    borderColorClass: 'hover:border-purple-400',
    nameColorClass: 'text-purple-300',
  },
  {
    id: 'ludwig',
    name: '루드비히',
    ageDisplay: '24세',
    description: '근위기사단장 (제1왕자)',
    quote: '"증명해라. 실력이 전부다."',
    image: 'https://1mi.uk/l_00.webp',
    borderColorClass: 'hover:border-purple-400',
    nameColorClass: 'text-purple-300',
  }
];