import { getPermalink } from './utils/permalinks';

export const headerDataEn = {
  links: [
    {
      text: 'Inbound Service Suite',
      links: [
        { text: 'Inbound Welcome Kit', href: getPermalink('/inbound-welcome-kit') },
        { text: 'Review Engine', href: getPermalink('/review-engine') },
        { text: 'English Hanare', href: getPermalink('/english-hanare') },
        { text: 'Grand New or Reform', href: getPermalink('/grand-opening') },
      ],
    },
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
        { text: 'グランド・ニュー / リフォーム', href: getPermalink('/grand-opening-jp') },
      ],
    },
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
        { text: 'Grand New or Reform', href: getPermalink('/grand-opening') },
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
        { text: 'グランド・ニュー / リフォーム', href: getPermalink('/grand-opening-jp') },
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
