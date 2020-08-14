// Colors naming helper: http://chir.ag/projects/name-that-color/

const rawColors = {
  // base colors
  transparent: 'transparent',
  black: '#22292f',
  white: '#ffffff',

  // theme new colors
  watercourse: '#096c59',
  'flush-orange': '#ff8300',
  'limed-spruce': '#37474f',
  java: '#22baae',
  'eastern-blue': '#189db9',
  'dodger-blue': '#1e87f0',
  'mine-shaft': '#363636',
  'jungle-green': '#2dbe67',
  'midnight-blue': '#001d60',
  sapphire: '#2d51a6',
  'san-marino': '#4b6dbb',
  'jacksons-purple': '#213f99',
  'blaze-orange': '#ff6f00',
  'vivid-tangerine': '#ff9e7e',
  cerulean: '#009fdb',
  'azure-radiance': '#0079ea',
  monza: '#e4002b',
  'mountain-meadow': '#13b092',
  'deep-teal': '#002f34',
  'dusty-gray': '#9b9b9b',
  'inch-worm': '#8fe933',
  sushi: '#8BC53F',
  pizazz: '#FF9100',
  gold: '#FFD700',
  eminence: '#5b2b82',
  'chelsea-cucumber': '#8ab25d',
  emperor: '#4f4f4f',
  alabaster: '#fcfcfc',
  'oxford-blue': '#343d51',
  'sea-buckthorn': '#F7AC30',
  genoa: '#116B5A',
  'regal-blue': '#004B6B',
  'evening-sea': '#054B3E',
  'astronaut-blue': '#014260',

  // ui-colors
  'ui-darkgray': '#3b424b',
  'ui-light-gray': '#eceff1',
  'ui-border-light-gray': '#f4f4f4',
  'ui-gray': '#6e747b',
  'error-text': '#d0021b',
  'error-bg': '#efe0e0',
  'confirm-bg': '#f7ffe9',
  'confirm-text': '#5aa700',
  supernova: '#ffcd00',
  porcelain: '#eceff1',
  mystic: '#eef1f5',
  divider: '#b6b6b6',
  mercury: '#e8e8e8',
  ada: '#f8f8f8',
  heather: '#b5bfca',
  mako: '#434D51',
  'rangoon-green': '#0F0D0B',
  'dark-slate-blue': '#15375f',
  astronaut: '#2a517f',

  // mobile custom colors
  'turtle-green': '#8ab25d',
  alto: '#D4D4D4',
  alto1: '#DEDEDE',
  alabaster1: '#fafafa',
  alabaster0: 'rgba(248,248,248,0)',
  mercury1: '#e2e2e2',
  'cape-cod': '#505151',
  monza1: '#B00020',
  azalea: '#F4BDC7',
  gainsboro: '#d8d8d8',
  alto2: '#d7d7d7',
  white10: 'rgba(255, 255, 255, 0.1)',
  white12: 'rgba(255, 255, 255, 0.12)',
  white30: 'rgba(255, 255, 255, 0.3)',
  black08: 'rgba(0, 0, 0, 0.08)',
  black10: 'rgba(0, 0, 0, 0.1)',
  black25: 'rgba(0, 0, 0, 0.25)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black87: 'rgba(0, 0, 0, 0.87)',
  black53: '#535353',
  darkBlueGrey: '#122e35',
  swamp: '#000507',
  'smalt-blue': '#527890',
  gallery: '#EBEBEB',
  redOrange: '#FF4134',
  RobinEggBlue: '#04BCD4',
  leaf: '#73a737',
  lipstick: '#dd1d34',
  lipstick25: 'rgba(221, 29, 52, 0.25)',
  scarlet: '#b00020',
  darkBlue: '#15375f',
  lightGrey: '#cccccc',
  grey: '#535353',
};

const colorMapping = {
  primaryColor: {
    default: 'white',
    AR: 'midnight-blue',
    CL: 'midnight-blue',
    CO: 'jacksons-purple',
    GL: 'azure-radiance',
    ID: 'cerulean',
    IN: 'deep-teal',
    MX: 'blaze-orange',
    NG: 'java',
    PK: 'watercourse',
    PL: 'flush-orange',
    TR: 'jungle-green',
  },
  evalStepPrimaryColor: {
    default: 'black',
    AR: 'midnight-blue',
    CL: 'midnight-blue',
    CO: 'jacksons-purple',
    GL: 'cerulean',
    ID: 'cerulean',
    IN: 'deep-teal',
    MX: 'blaze-orange',
    NG: 'java',
    PK: 'watercourse',
    PL: 'flush-orange',
    TR: 'jungle-green',
  },
  primaryColorGradient: {
    default: 'white',
    AR: 'sapphire',
    CL: 'sapphire',
    CO: 'jacksons-purple',
    GL: 'cerulean',
    ID: 'cerulean',
    IN: 'deep-teal',
    MX: 'blaze-orange',
    NG: 'java',
    PK: 'mountain-meadow',
    PL: 'flush-orange',
    TR: 'jungle-green',
  },
  secondaryColor: {
    default: 'black',
    AR: 'midnight-blue',
    CL: 'midnight-blue',
    CO: 'jacksons-purple',
    GL: 'cerulean',
    ID: 'dodger-blue',
    IN: 'deep-teal',
    MX: 'eastern-blue',
    NG: 'java',
    PK: 'watercourse',
    PL: 'flush-orange',
    TR: 'jungle-green',
  },
  colorCTA: {
    default: 'black',
    AR: 'supernova',
    CL: 'supernova',
    CO: 'supernova',
    GL: 'inch-worm',
    ID: 'sushi',
    IN: 'monza',
    MX: 'eastern-blue',
    NG: 'pizazz',
    PK: 'gold',
    PL: 'eminence',
    TR: 'jungle-green',
  },
};

const Colors = {};

Colors.raw = rawColors;

export default Colors;
