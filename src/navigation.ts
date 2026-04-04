import { getPermalink } from './utils/permalinks';

export const headerDataEn = {
  links: [
    {
      text: 'Inbound Service Suite',
      links: [
        { text: 'Inbound Welcome Kit', href: getPermalink('/inbound-welcome-kit') },
        { text: 'Review Engine', href: getPermalink('/review-engine') },
        { text: 'English Hanare', href: getPermalink('/english-hanare') },
        { text: 'Grand Opening', href: getPermalink('/grand-opening') },
      ],
    },
    { text: 'Order Flow', href: getPermalink('/order-flow') },
    { text: 'Community Mission', href: getPermalink('/community-mission') },
  ],
  actions: [
    { text: 'Claim Your URL', variant: 'primary', href: '/pricing' }
  ],
};

export const headerDataJp = {
  links: [
    {
      text: 'サービス一覧',
      links: [
        { text: 'インバウンド・ウェルカムキット', href: getPermalink('/inbound-welcome-kit-jp') },
        { text: 'レビューエンジン', href: getPermalink('/review-engine-jp') },
        { text: '英語専用デジタル別館', href: getPermalink('/english-hanare-jp') },
        { text: 'グランドオープン', href: getPermalink('/grand-opening-jp') },
      ],
    },
    { text: '制作の流れ', href: getPermalink('/order-flow-jp') },
    { text: '地域貢献活動', href: getPermalink('/community-mission-jp') },
  ],
  actions: [
    { text: 'サイトを作成する', variant: 'primary', href: '/pricing-jp' }
  ],
};

export const footerDataEn = {
  links: [
    {
      links: [
        { text: 'Inbound Welcome Kit', href: getPermalink('/inbound-welcome-kit') },
        { text: 'Review Engine', href: getPermalink('/review-engine') },
        { text: 'English Hanare', href: getPermalink('/english-hanare') },
        { text: 'Grand Opening', href: getPermalink('/grand-opening') },
        { text: 'Community Mission', href: getPermalink('/community-mission') },
        { text: 'Order Flow', href: getPermalink('/order-flow') },
        { text: 'FAQ', href: getPermalink('/faq') },
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
        { text: 'インバウンド・ウェルカムキット', href: getPermalink('/inbound-welcome-kit-jp') },
        { text: 'レビューエンジン', href: getPermalink('/review-engine-jp') },
        { text: '英語専用デジタル別館', href: getPermalink('/english-hanare-jp') },
        { text: 'グランドオープン', href: getPermalink('/grand-opening-jp') },
        { text: '地域貢献活動', href: getPermalink('/community-mission-jp') },
        { text: '制作の流れ', href: getPermalink('/order-flow-jp') },
        { text: 'よくあるご質問', href: getPermalink('/faq-jp') },
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
