import { getPermalink } from './utils/permalinks';

export const headerDataEn = {
  links: [
    {
      text: 'Inbound Service Kit',
      links: [
        { text: 'Review Engine', href: getPermalink('/review-engine') },
        { text: 'Welcome Mat', href: getPermalink('/welcome-mat') },
        { text: 'English Hanare', href: getPermalink('/english-hanare') },
        { text: 'Grand Opening', href: getPermalink('/grand-opening') },
        { text: 'Reservation Shield', href: getPermalink('/reservation-shield') },
      ],
    },
    { text: 'Strategic Intent', href: getPermalink('/about') },
  ],
  actions: [
    { text: 'Claim Your URL', variant: 'primary', href: '/pricing' }
  ],
};

export const headerDataJp = {
  links: [
    {
      text: 'インバウンド・サービスキット',
      links: [
        { text: 'レビューエンジン', href: getPermalink('/review-engine-jp') },
        { text: 'ウェルカム・マット', href: getPermalink('/welcome-mat-jp') },
        { text: '英語専用デジタル別館', href: getPermalink('/english-hanare-jp') },
        { text: '旗艦店再構築', href: getPermalink('/grand-opening-jp') },
        { text: '予約シールド', href: getPermalink('/reservation-shield-jp') },
      ],
    },
    { text: '戦略的意図', href: getPermalink('/about-jp') },
  ],
  actions: [
    { text: 'サイトを作成する', variant: 'primary', href: '/pricing-jp' }
  ],
};

export const footerDataEn = {
  links: [
    {
      links: [
        { text: 'Inbound Service Kit', href: getPermalink('/inbound-kit') },
        { text: 'Review Engine', href: getPermalink('/review-engine') },
        { text: 'Reservation Shield', href: getPermalink('/reservation-shield') },
        { text: 'Strategic Intent', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: '© 2026. All rights reserved.',
};

export const footerDataJp = {
  links: [
    {
      links: [
        { text: 'インバウンド・サービスキット', href: getPermalink('/inbound-kit-jp') },
        { text: 'レビューエンジン', href: getPermalink('/review-engine-jp') },
        { text: '予約シールド', href: getPermalink('/reservation-shield-jp') },
        { text: '戦略的意図', href: getPermalink('/about-jp') },
        { text: 'お問い合わせ', href: getPermalink('/contact-jp') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '利用規約', href: getPermalink('/terms-jp') },
    { text: 'プライバシーポリシー', href: getPermalink('/privacy-jp') },
  ],
  footNote: '© 2026. 無断転載を禁じます。',
};

export const headerData = headerDataEn;
export const footerData = footerDataEn;
