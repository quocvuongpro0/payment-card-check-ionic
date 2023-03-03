// SVGICONS
export const maskCredits = [
  {
    mask: '0000 000000 00000',
    regex: '^3[47]\\d{0,13}',
    cardType: 'american express',
    icon: 'american_express'
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
    cardType: 'discover',
    icon: 'discover'
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
    cardType: 'mastercard',
    icon: 'mastercard'
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^(?:35\\d{0,2})\\d{0,12}',
    cardType: 'jcb',
    icon: 'jcb',
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^4\\d{0,15}',
    cardType: 'visa',
    icon: 'visa',
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^62\\d{0,14}',
    cardType: 'unionpay',
    icon: 'unionpay'
  },
  {
    mask: '0000 0000 0000 0000',
    cardType: 'unknown',
    icon: 'credit-card'
  }
];


//Global value checking

export const OK = 'ok'
export const CANCEL = 'cancel'
