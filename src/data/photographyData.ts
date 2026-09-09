import { PhotoItem, BeforeAfterItem, PhotographyPackage, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: 'Jean Nascimento Fotografia',
  owner: 'Jean Nascimento',
  specialty: 'Fotografia Feminina, Casamentos & Eventos',
  city: 'Sinop',
  state: 'MT',
  neighborhood: 'Jardim Ibirapuera',
  phone: '+55 66 99912-3456', // Formatted for display & WhatsApp
  whatsappNumber: '5566999123456',
  instagram: '@jeannascimentofotografia',
  googleMapsUrl: 'https://maps.app.goo.gl/qDek9gNSF6kQXXZG7',
  rating: 5.0,
  reviewCount: 48,
  coordinates: {
    lat: -11.8484779,
    lng: -55.5134183,
  },
  workingHours: 'Segunda a Sábado: 08:00 às 19:00 (Ensaios externos também aos Domingos no pôr do sol)',
  aboutShort:
    'Especialista em retratar a essência e a autenticidade de cada mulher e momento. Com olhar sensível e direção empática, transformo histórias e sentimentos em memórias atemporais no coração do Mato Grosso.',
};

export const PHOTOS_DATA: PhotoItem[] = [
  {
    id: 'cas-1',
    title: 'Eternidade & Promessa',
    category: 'casamento',
    categoryLabel: 'Casamento',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn1aQ6lIBLdLkHXFSQpWoA-87SsB3AlfcvclThC03TAuHanUDAUKv24sRVedAzfM3LHsMSA5pdEQXxWCJDTI7u4SdtHCtOHf2EKenSlpqUHW04QnRsePIJwBVW257qttuWC56Py6CHvPn2c=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn1aQ6lIBLdLkHXFSQpWoA-87SsB3AlfcvclThC03TAuHanUDAUKv24sRVedAzfM3LHsMSA5pdEQXxWCJDTI7u4SdtHCtOHf2EKenSlpqUHW04QnRsePIJwBVW257qttuWC56Py6CHvPn2c=w600',
    aspectRatio: 'landscape',
    location: 'Cerimônia de Casamento, Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBdXrDjcirdNnmxHkR76JiZ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWn1aQ6lIBLdLkHXFSQpWoA-87SsB3AlfcvclThC03TAuHanUDAUKv24sRVedAzfM3LHsMSA5pdEQXxWCJDTI7u4SdtHCtOHf2EKenSlpqUHW04QnRsePIJwBVW257qttuWC56Py6CHvPn2c%3Dw128-h86-k-no!7i5818!8i3879!4m7!3m6!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/1.8',
      shutter: '1/500s',
      iso: '100',
      focalLength: '35mm',
    },
    story:
      'Momento solene e emocionante da cerimônia de casamento registrado com luz natural suave e riqueza de detalhes emotivos.',
    mood: ['Casamento', 'Emoção', 'Atemporal'],
    likes: 238,
  },
  {
    id: 'vid-1',
    title: 'Cinematografia & Teaser Audiovisual',
    category: 'video',
    categoryLabel: 'Vídeo Cinema',
    isVideo: true,
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkncXDGXL_OSs5W1FW6NoJQx2mgT-8GFwkZf4BSUObqsU6Is0nMfYs4UAUPjHMeSlwVF2yttWg4Z5S6j_1FAx5biM9W--_Pn3boncVA3rLsossgK_R_jEZuIlRGZEJ64QrAYEk=w1600',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkncXDGXL_OSs5W1FW6NoJQx2mgT-8GFwkZf4BSUObqsU6Is0nMfYs4UAUPjHMeSlwVF2yttWg4Z5S6j_1FAx5biM9W--_Pn3boncVA3rLsossgK_R_jEZuIlRGZEJ64QrAYEk=w600',
    aspectRatio: 'landscape',
    location: 'Produção Audiovisual & Eventos, Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e5!3m6!1sCIHM0ogKEICAgIDukdbHPQ!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWkncXDGXL_OSs5W1FW6NoJQx2mgT-8GFwkZf4BSUObqsU6Is0nMfYs4UAUPjHMeSlwVF2yttWg4Z5S6j_1FAx5biM9W--_Pn3boncVA3rLsossgK_R_jEZuIlRGZEJ64QrAYEk%3Dw203-h114-k-no!7i1280!8i720!4m7!3m6!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7 IV 4K',
      lens: 'FE 24-70mm f/2.8 GM II',
      aperture: 'f/2.8',
      shutter: '1/120s',
      iso: '200',
      focalLength: '35mm',
    },
    story:
      'Captação cinematográfica dinâmica com movimentos fluidos, edição envolvente e color grading para documentários e reels memoráveis.',
    mood: ['Cinemático', '4K Ultra HD', 'Vídeo Teaser'],
    likes: 312,
  },
  {
    id: 'cas-2',
    title: 'Celebração do Amor & Aliança',
    category: 'casamento',
    categoryLabel: 'Casamento',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnUAZseiIr4cwVag8VFg3HRRUIaozC9gewt3rJmVCu5qojztLdkWdMtcdUnwTIkQFIl-TxcUedy_1mJIjAmTe9MVYqmm9bj8Kcx93Y3R46oM3NIV5Q7HltF1UtTAVdDEPlFoAugb_nzUdO_=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnUAZseiIr4cwVag8VFg3HRRUIaozC9gewt3rJmVCu5qojztLdkWdMtcdUnwTIkQFIl-TxcUedy_1mJIjAmTe9MVYqmm9bj8Kcx93Y3R46oM3NIV5Q7HltF1UtTAVdDEPlFoAugb_nzUdO_=w600',
    aspectRatio: 'landscape',
    location: 'Espaço de Casamento, Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhC40BbYXUpH4uf7V1_-WJhP!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnUAZseiIr4cwVag8VFg3HRRUIaozC9gewt3rJmVCu5qojztLdkWdMtcdUnwTIkQFIl-TxcUedy_1mJIjAmTe9MVYqmm9bj8Kcx93Y3R46oM3NIV5Q7HltF1UtTAVdDEPlFoAugb_nzUdO_%3Dw203-h135-k-no!7i5818!8i3879!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/1.4',
      shutter: '1/640s',
      iso: '100',
      focalLength: '50mm',
    },
    story:
      'Um dos momentos mais intensos da celebração: a cumplicidade nos olhares e o abraço selando a união do casal.',
    mood: ['Inesquecível', 'Conexão', 'Luz Quente'],
    likes: 264,
  },
  {
    id: 'ind-1',
    title: 'Autoestima & Presença Feminina',
    category: 'individual',
    categoryLabel: 'Ensaio Individual',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk06qy9lAGl2hNvfmbmYlMFHNvmdgogK3l7qe4N3lRjGU0YIPMsMRouhNftc-2jOsbQuN4TOK3D6guKRvoE0ugYNROBMh5ha4LxLGg-OvwIzcFQPF-Vj4k2Jo2w-6RtzwJOpLGvoQ=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk06qy9lAGl2hNvfmbmYlMFHNvmdgogK3l7qe4N3lRjGU0YIPMsMRouhNftc-2jOsbQuN4TOK3D6guKRvoE0ugYNROBMh5ha4LxLGg-OvwIzcFQPF-Vj4k2Jo2w-6RtzwJOpLGvoQ=w600',
    aspectRatio: 'portrait',
    location: 'Estúdio Jean Nascimento, Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDukfLoigE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWk06qy9lAGl2hNvfmbmYlMFHNvmdgogK3l7qe4N3lRjGU0YIPMsMRouhNftc-2jOsbQuN4TOK3D6guKRvoE0ugYNROBMh5ha4LxLGg-OvwIzcFQPF-Vj4k2Jo2w-6RtzwJOpLGvoQ%3Dw203-h253-k-no!7i3670!8i4587!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.8',
      shutter: '1/250s',
      iso: '100',
      focalLength: '85mm',
    },
    story:
      'Sessão individual autoral para valorizar a confiança e a beleza espontânea, com direção acolhedora e iluminação precisa.',
    mood: ['Retrato', 'Elegância', 'Autoestima'],
    likes: 289,
  },
  {
    id: 'casal-1',
    title: 'Sintonia, Abraço & Conexão',
    category: 'casal',
    categoryLabel: 'Ensaio de Casal',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMVQeSTe8aDMIXcMLTyZ3PSL9BqyvkxS1_3U7goahnvm85JyhijQr8VqF_Uq5uaYsEt6a7owpP09vmpXwN_LBOyLowakfeUIdkLH9-6lSBiQfDDzeTS9Dffcv4duf6jKzHTZEs=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMVQeSTe8aDMIXcMLTyZ3PSL9BqyvkxS1_3U7goahnvm85JyhijQr8VqF_Uq5uaYsEt6a7owpP09vmpXwN_LBOyLowakfeUIdkLH9-6lSBiQfDDzeTS9Dffcv4duf6jKzHTZEs=w600',
    aspectRatio: 'portrait',
    location: 'Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICOptj4CA!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnMVQeSTe8aDMIXcMLTyZ3PSL9BqyvkxS1_3U7goahnvm85JyhijQr8VqF_Uq5uaYsEt6a7owpP09vmpXwN_LBOyLowakfeUIdkLH9-6lSBiQfDDzeTS9Dffcv4duf6jKzHTZEs%3Dw203-h284-k-no!7i1080!8i1512!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/1.4',
      shutter: '1/400s',
      iso: '160',
      focalLength: '50mm',
    },
    story:
      'Um registro intimista de casal onde a cumplicidade e o carinho sincero prevalecem sobre poses artificiais.',
    mood: ['Romantismo', 'Cumplicidade', 'Afeto'],
    likes: 219,
  },
  {
    id: 'ind-2',
    title: 'Olhar Marcante & Personalidade',
    category: 'individual',
    categoryLabel: 'Ensaio Individual',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlqwdvkVT-zsF6dBRs5vS5nbE6FEhpfrLr7b2-ijIyy09NMRVTFQMk2rZ4t6jn9YZGA7rhCLynJKk_vGdB44GUF589YDIdl_PzCGaLi2t8c2HjvuuGykCy7v-zd4SSQoBRCTlfjXA=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlqwdvkVT-zsF6dBRs5vS5nbE6FEhpfrLr7b2-ijIyy09NMRVTFQMk2rZ4t6jn9YZGA7rhCLynJKk_vGdB44GUF589YDIdl_PzCGaLi2t8c2HjvuuGykCy7v-zd4SSQoBRCTlfjXA=w600',
    aspectRatio: 'portrait',
    location: 'Estúdio Jardim Ibirapuera, Sinop - MT',
    featured: false,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICOpujK_QE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWlqwdvkVT-zsF6dBRs5vS5nbE6FEhpfrLr7b2-ijIyy09NMRVTFQMk2rZ4t6jn9YZGA7rhCLynJKk_vGdB44GUF589YDIdl_PzCGaLi2t8c2HjvuuGykCy7v-zd4SSQoBRCTlfjXA%3Dw203-h284-k-no!7i1440!8i2016!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/2.0',
      shutter: '1/320s',
      iso: '100',
      focalLength: '85mm',
    },
    story:
      'Retrato que traduz autenticidade, poder e sensibilidade em cada ângulo, com iluminação pontual de estúdio.',
    mood: ['Expressão', 'Luz & Sombra', 'Autoral'],
    likes: 205,
  },
  {
    id: 'nat-1',
    title: 'Horizonte Dourado & Cerrado MT',
    category: 'natureza',
    categoryLabel: 'Natureza & Pôr do Sol',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmqBGEPE7KqE6MBOjzolV3IR__Ae0FQ0x4b6hmKn4PEjoVHbhCEIxmPgcMIy0AAbF1kJqWJLbxOOr_5Cn3qbL-nssQniF8vhcWl4INfTXL9VDxlRcGIFMYhTpYyl6bYudgVwXfz=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmqBGEPE7KqE6MBOjzolV3IR__Ae0FQ0x4b6hmKn4PEjoVHbhCEIxmPgcMIy0AAbF1kJqWJLbxOOr_5Cn3qbL-nssQniF8vhcWl4INfTXL9VDxlRcGIFMYhTpYyl6bYudgVwXfz=w600',
    aspectRatio: 'landscape',
    location: 'Campos & Pôr do Sol, Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDukbbiBQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmqBGEPE7KqE6MBOjzolV3IR__Ae0FQ0x4b6hmKn4PEjoVHbhCEIxmPgcMIy0AAbF1kJqWJLbxOOr_5Cn3qbL-nssQniF8vhcWl4INfTXL9VDxlRcGIFMYhTpYyl6bYudgVwXfz%3Dw203-h135-k-no!7i2048!8i1365!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 24-70mm f/2.8 GM II',
      aperture: 'f/4.0',
      shutter: '1/800s',
      iso: '50',
      focalLength: '24mm',
    },
    story:
      'A vastidão inconfundível do céu do Mato Grosso ao cair da tarde, capturada em toda a sua riqueza de matizes dourados.',
    mood: ['Golden Hour', 'Céu MT', 'Grandiosidade'],
    likes: 341,
  },
  {
    id: 'ind-3',
    title: 'Luz Natural & Sensibilidade',
    category: 'individual',
    categoryLabel: 'Ensaio Individual',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3g7JhsQB54WgeW-K_1EdOMCGlOwwZ9mE-6XajVyihBOOFKP6YU4upmQjoh0Tue05GozSjcI71s1OdYIKOuJhW9nUjM_n4jW0HchNSt9qWj3-oT_E0c89Dw4r6zZN80bg4h7ap=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3g7JhsQB54WgeW-K_1EdOMCGlOwwZ9mE-6XajVyihBOOFKP6YU4upmQjoh0Tue05GozSjcI71s1OdYIKOuJhW9nUjM_n4jW0HchNSt9qWj3-oT_E0c89Dw4r6zZN80bg4h7ap=w600',
    aspectRatio: 'portrait',
    location: 'Sinop - MT',
    featured: false,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDC1p--rwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWk3g7JhsQB54WgeW-K_1EdOMCGlOwwZ9mE-6XajVyihBOOFKP6YU4upmQjoh0Tue05GozSjcI71s1OdYIKOuJhW9nUjM_n4jW0HchNSt9qWj3-oT_E0c89Dw4r6zZN80bg4h7ap%3Dw203-h284-k-no!7i1080!8i1512!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.6',
      shutter: '1/320s',
      iso: '100',
      focalLength: '85mm',
    },
    story:
      'Um clique focado na pureza da expressão, destacando a textura natural da pele e a elegância de um momento calmo.',
    mood: ['Naturalidade', 'Suavidade', 'Retrato'],
    likes: 198,
  },
  {
    id: 'cas-3',
    title: 'A Noiva & O Vestido dos Sonhos',
    category: 'casamento',
    categoryLabel: 'Casamento',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWleiXe5AiVHdp2G1-RCsCM8OIPinf_YDQ8sDqOecbDf85XdkBW_cNyBQHWLQoss04krpv1zz0wmX2GWeEFmHibCHWbupZkItdpX-K7obUTwtXpOr8A1jOegQuDpG5qhVkmLmz5LmQ=w1800',
    thumbnailUrl:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWleiXe5AiVHdp2G1-RCsCM8OIPinf_YDQ8sDqOecbDf85XdkBW_cNyBQHWLQoss04krpv1zz0wmX2GWeEFmHibCHWbupZkItdpX-K7obUTwtXpOr8A1jOegQuDpG5qhVkmLmz5LmQ=w600',
    aspectRatio: 'portrait',
    location: 'Preparação & Cerimônia, Sinop - MT',
    featured: true,
    googleMapsUrl:
      'https://www.google.com.br/maps/place/jeannascimentofotografia/@-11.8485067,-55.513299,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICOpqia2wE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWleiXe5AiVHdp2G1-RCsCM8OIPinf_YDQ8sDqOecbDf85XdkBW_cNyBQHWLQoss04krpv1zz0wmX2GWeEFmHibCHWbupZkItdpX-K7obUTwtXpOr8A1jOegQuDpG5qhVkmLmz5LmQ%3Dw203-h304-k-no!7i3456!8i5184!4m9!3m8!1s0x93a77f885303edf3:0x79d9271b9d9f2e68!8m2!3d-11.8484779!4d-55.5134183!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11lx2cys9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D#',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.4',
      shutter: '1/400s',
      iso: '100',
      focalLength: '85mm',
    },
    story:
      'Retrato editorial vertical da noiva com seu véu e vestido impecáveis, capturando toda a nobreza e emoção do grande dia.',
    mood: ['Noiva', 'Elegância Clássica', 'Casamento'],
    likes: 356,
  },
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Colorimetria Fine Art & Pele Natural',
    category: 'Ensaio Individual',
    beforeImage:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk06qy9lAGl2hNvfmbmYlMFHNvmdgogK3l7qe4N3lRjGU0YIPMsMRouhNftc-2jOsbQuN4TOK3D6guKRvoE0ugYNROBMh5ha4LxLGg-OvwIzcFQPF-Vj4k2Jo2w-6RtzwJOpLGvoQ=w1400',
    afterImage:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk06qy9lAGl2hNvfmbmYlMFHNvmdgogK3l7qe4N3lRjGU0YIPMsMRouhNftc-2jOsbQuN4TOK3D6guKRvoE0ugYNROBMh5ha4LxLGg-OvwIzcFQPF-Vj4k2Jo2w-6RtzwJOpLGvoQ=w1400',
    description:
      'Do arquivo RAW neutro da câmera para a paleta quente e refinada de Jean Nascimento, preservando a textura viva e natural da pele sem aspecto artificial.',
    retouchHighlights: [
      'Tratamento de pele por microseparação de frequências',
      'Curva tonal cinematográfica com realces dourados',
      'Preservação 100% fiel da identidade e traços',
      'Harmonização de microtons e brilho suave nos olhos',
    ],
  },
  {
    id: 'ba-2',
    title: 'Luz Dourada do Mato Grosso & Contraste',
    category: 'Natureza & Cerrado',
    beforeImage:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmqBGEPE7KqE6MBOjzolV3IR__Ae0FQ0x4b6hmKn4PEjoVHbhCEIxmPgcMIy0AAbF1kJqWJLbxOOr_5Cn3qbL-nssQniF8vhcWl4INfTXL9VDxlRcGIFMYhTpYyl6bYudgVwXfz=w1400',
    afterImage:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmqBGEPE7KqE6MBOjzolV3IR__Ae0FQ0x4b6hmKn4PEjoVHbhCEIxmPgcMIy0AAbF1kJqWJLbxOOr_5Cn3qbL-nssQniF8vhcWl4INfTXL9VDxlRcGIFMYhTpYyl6bYudgVwXfz=w1400',
    description:
      'Recuperação minuciosa de sombras e realces no pôr do sol, conferindo a atmosfera etérea e calorosa inconfundível do céu de Sinop.',
    retouchHighlights: [
      'Acentuação da luz dourada de recorte do entardecer',
      'Gradiente atmosférico suave no horizonte',
      'Equilíbrio entre tons verdes naturais e o âmbar poente',
      'Recuperação de alcance dinâmico de 14 stops',
    ],
  },
  {
    id: 'ba-3',
    title: 'Alta Nobreza & Textura do Vestido',
    category: 'Casamento',
    beforeImage:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWleiXe5AiVHdp2G1-RCsCM8OIPinf_YDQ8sDqOecbDf85XdkBW_cNyBQHWLQoss04krpv1zz0wmX2GWeEFmHibCHWbupZkItdpX-K7obUTwtXpOr8A1jOegQuDpG5qhVkmLmz5LmQ=w1400',
    afterImage:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWleiXe5AiVHdp2G1-RCsCM8OIPinf_YDQ8sDqOecbDf85XdkBW_cNyBQHWLQoss04krpv1zz0wmX2GWeEFmHibCHWbupZkItdpX-K7obUTwtXpOr8A1jOegQuDpG5qhVkmLmz5LmQ=w1400',
    description:
      'Color grading nupcial com brancos puros e sedosos no vestido da noiva, realçando o corte, as rendas e o véu com extrema elegância.',
    retouchHighlights: [
      'Brancos perfeitos sem estouro e sem perda de renda',
      'Tons de pele quentes e aveludados',
      'Suavização óptica do fundo com bokeh orgânico',
      'Nitidez editorial nos bordados e joias',
    ],
  },
];

export const PACKAGES_DATA: PhotographyPackage[] = [
  {
    id: 'ensaio-feminino-essencial',
    name: 'Ensaio Essência',
    tagline: 'O despertar da sua melhor versão e autoestima',
    category: 'feminino',
    estimatedPrice: 'A partir de R$ 690',
    duration: '1h30 a 2h de sessão',
    deliverables: [
      'Até 2 trocas de look planejadas',
      '20 fotos em alta resolução tratadas individualmente',
      'Galeria online exclusiva para seleção',
      'Direção completa de poses passo a passo',
      'Ambiente privativo e descontraído (Estúdio ou Externa)',
    ],
    idealFor: 'Mulheres que querem registrar um momento especial, celebrar aniversário ou renovar sua imagem pessoal.',
    popular: true,
    badge: 'Mais Desejado',
  },
  {
    id: 'ensaio-feminino-premium',
    name: 'Ensaio Imperial Fine Art',
    tagline: 'A experiência completa de glamour e revista',
    category: 'feminino',
    estimatedPrice: 'A partir de R$ 1.250',
    duration: 'Até 3h30 de sessão',
    deliverables: [
      'Até 4 trocas de look (estúdio + locação externa)',
      '40 fotos com tratamento Fine Art avançado',
      'Álbum impresso de luxo 20x20 com estojo exclusivo',
      'Vídeo Teaser vertical (Reels/TikTok) em 4K',
      'Consultoria pré-ensaio de figurino e estilo',
      'Entrega digital prioritária em até 7 dias úteis',
    ],
    idealFor: 'Uma experiência inesquecível de empoderamento e memórias de alto padrão que durarão gerações.',
    popular: false,
    badge: 'Experiência VIP',
  },
  {
    id: 'casais-prewedding',
    name: 'Conexão de Amor & Casais',
    tagline: 'Histórias reais registradas com verdade e emoção',
    category: 'casamentos',
    estimatedPrice: 'A partir de R$ 890',
    duration: '2h de ensaio no pôr do sol',
    deliverables: [
      'Locação dos sonhos em Sinop e região (Chácaras/Campos/Lago)',
      '30 fotos em altíssima resolução com grading cinematográfico',
      'Direção fluida e momentos espontâneos de carinho',
      'Slideshow emocionante para ser exibido na festa',
      'Fotos liberadas em alta para impressão de quadros',
    ],
    idealFor: 'Noivos e casais apaixonados que buscam fotos autênticas e sem poses artificiais.',
    popular: false,
  },
  {
    id: 'eventos-sunset',
    name: 'Cobertura de Eventos & Festas',
    tagline: 'Cada abraço e sorriso eternizados com excelência',
    category: 'eventos',
    estimatedPrice: 'Consulte sob medida',
    duration: 'Por hora ou período integral',
    deliverables: [
      'Cobertura fotográfica jornalística e espontânea',
      'Fotos de convidados, ambientação, detalhes e pista',
      'Equipamentos redundantes e gravação em dois cartões',
      'Links com reconhecimento facial ou galeria completa',
      'Prévia rápida para redes sociais em até 24h',
    ],
    idealFor: 'Festas de 15 anos, aniversários, formaturas, casamentos e sunsets corporativos em Sinop.',
    popular: false,
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Camila Mendonça',
    roleOrEvent: 'Ensaio Feminino de 30 Anos',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 2 semanas via Google Maps',
    text: 'Eu tinha muita vergonha e nunca tinha feito um ensaio. O Jean teve uma paciência surreal, foi me dirigindo com tanta leveza que me senti uma modelo! Quando vi o resultado chorei de emoção. Super recomendo em Sinop!',
    sessionType: 'Ensaio Feminino',
  },
  {
    id: 't-2',
    clientName: 'Larissa & Vinícius',
    roleOrEvent: 'Pré-Wedding & Casamento',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 1 mês via Google Maps',
    text: 'O Jean conseguiu pegar a alma do nosso casamento. Fotos vivas, luz mágica e uma pontualidade ímpar. Nossos convidados amaram as fotos e o álbum ficou uma obra de arte na nossa sala.',
    sessionType: 'Casamento',
  },
  {
    id: 't-3',
    clientName: 'Beatriz Vasconcelos',
    roleOrEvent: 'Ensaio Corporativo & Pessoal',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 2 meses via Google Maps',
    text: 'Profissionalismo impecável! Iluminação de cinema, estúdio no Ibirapuera muito acolhedor e entrega super ágil. Minhas redes sociais ganharam outro patamar de autoridade.',
    sessionType: 'Ensaio Autoral',
  },
  {
    id: 't-4',
    clientName: 'Eduardo Martins',
    roleOrEvent: 'Evento Esportivo & Sunset',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Há 3 meses via Google Maps',
    text: 'Contratamos o Jean para a cobertura do evento e a qualidade superou todas as expectativas. Olhar rápido para os melhores momentos e agilidade incrível no envio das fotos.',
    sessionType: 'Cobertura de Evento',
  }
];

export const GEAR_DATA = [
  { name: 'Sony Alpha A7 IV & A7R V', role: 'Câmeras Principais Full-Frame 61MP / 33MP' },
  { name: 'Sony FE 85mm f/1.4 G-Master', role: 'A lente definitiva para retratos femininos e bokeh amanteigado' },
  { name: 'Sony FE 50mm f/1.2 G-Master', role: 'Nitidez extrema e luminosidade natural cinematográfica' },
  { name: 'Sony FE 35mm f/1.4 G-Master', role: 'Para narrativas dinâmicas, casamentos e ensaios ambientados' },
  { name: 'Iluminação Godox & Modificadores Paraply', role: 'Luz suave e difusa padrão internacional' }
];
