// Edite o conteúdo e adicione os endereços oficiais neste arquivo.
// null abre um aviso; não há destinos externos fictícios.
export const content = {
  name: 'Fábio Castello',
  specialty: 'Vendas & CRM',
  role: 'Especialista em performance comercial',
  bio: 'Ajudo vendedores a vender mais e empresas a estruturar seus times comerciais.',
  signature: 'Criador do Método X.',
  photo: '/fabio.png',
  instagramUrl: 'https://www.instagram.com/fabiocastello_vx/',
  // Informe apenas dígitos: código do país + DDD + número.
  whatsappNumber: '' as string,
  vxWebsite: 'https://www.vxconsultoria.com/',
  methodXWhatsappUrl: 'https://api.whatsapp.com/send/?phone=5592981681693&text=quero+aprender+a+vender+mais&type=phone_number&app_absent=0&utm_source=ig' as string,
  destinations: {
    learn: null as string | null,
    business: null as string | null,
    courses: null as string | null,
    vx: null as string | null,
    about: null as string | null,
  },
};

// Conteúdo dos destaques enquanto os destinos externos não são definidos.
export const details = {
  courses: {
    eyebrow: 'CURSOS · MÉTODO X',
    title: 'Vender mais começa em você.',
    description: 'Conheça o Método X, curso de vendas criado por Fábio Castello.',
    points: ['Um curso para quem quer aprender a vender e desenvolver sua atuação comercial.', 'Converse com a equipe para saber mais sobre o Método X.'],
  },
  vx: {
    eyebrow: 'VX · PERFORMANCE COMERCIAL',
    title: 'Seu comercial em outro nível.',
    description: 'Implantação e treinamento comercial, reestruturação de empresas e estruturação de processos comerciais.',
    points: ['Implantação e estruturação de processos comerciais.', 'Treinamento comercial para desenvolver seu time.', 'Reestruturação da empresa com foco na operação comercial.'],
  },
  about: {
    eyebrow: 'SOBRE MIM',
    title: 'Fábio Castello',
    description: 'Acredito que vender nunca dependeu de talento, e sim de processo.',
    points: ['É essa visão que orienta meu trabalho com vendedores e empresas.', 'Na VX, ajudo empresas a organizar sua operação de vendas por meio de implantação, treinamento e estruturação de processos comerciais.', 'Também sou o criador do Método X, um curso para quem quer aprender a vender e desenvolver suas habilidades comerciais.'],
  },

};

export const whatsappMessages = {
  courses: 'Olá! Quero saber mais sobre o curso Método X, do Fábio Castello.',
  vx: 'Olá! Quero conhecer os serviços da VX: implantação, treinamento e estruturação comercial.',
  about: 'Olá, Fábio! Vim pela sua página e gostaria de conversar.',
};
