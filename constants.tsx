
import React from 'react';
import type { CardBrand } from './types';

const VisaLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 384 121.3">
        <path fill="#fff" d="M372.3 121.3H283.5l49.9-121.3h88.8zm-225.8 0L77.3 0h90.8l29.4 82.5L227 0h80.1L248.6 121.3h-85.3zm-60.6 0L42.2 27.5C39.4 19 33.1 11.3 25.3 11.3H2.8C.9 20.6 0 30.1 0 39.9c0 43 35.8 78.4 79.8 81.4zm-79.8-51c0-10.4.9-20.6 2.8-30.2h22.5c7.8 0 14.1 7.8 16.9 16.1l14.1 53.4c-19.7-3.7-35.8-20.6-42.2-39.3z"/>
    </svg>
);

const MastercardLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 71.3 44.4">
        <path fill="#fff" d="M22.2.1C9.9.1 0 10 0 22.2s9.9 22.1 22.2 22.1 22.2-9.9 22.2-22.1S34.4.1 22.2.1zm0 37.1c-8.2 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.8 15-15 15z"/>
        <path fill="#fff" d="M49.1.1C36.8.1 26.9 10 26.9 22.2s9.9 22.1 22.2 22.1 22.2-9.9 22.2-22.1S61.3.1 49.1.1zm0 37.1c-8.2 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.8 15-15 15z"/>
        <path fill="#fff" d="M37.6 22.2c0-3.3-1-6.4-2.8-9-3.2-4.8-8.8-7.9-15.1-7.9-2.9 0-5.7.7-8.1 2-2.3 1.3-4.2 3.2-5.7 5.5.1-.1.1-.3.2-.4.6-1 1.3-1.9 2.2-2.7 2.1-1.9 4.7-2.9 7.4-2.9 5.2 0 9.8 3.2 12.1 7.8.2.5.4 1 .5 1.5.1.4.1.8.1 1.2s-.1.8-.1 1.2c-.1.5-.2 1-.4 1.5-2.3 4.6-6.9 7.8-12.1 7.8-2.7 0-5.3-1-7.4-2.9-.9-.8-1.7-1.8-2.2-2.7-.1-.2-.2-.3-.2-.4-1.5 2.3-3.4 4.2-5.7 5.5 2.4 1.3 5.2 2 8.1 2 6.3 0 11.9-3.1 15.1-7.9 1.8-2.6 2.8-5.7 2.8-9z"/>
    </svg>
);

const AmexLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
        <path fill="#fff" d="M24.2,10.1h-21c-1.5,0-2.8,1.2-2.8,2.8v22.2c0,1.5,1.2,2.8,2.8,2.8h21l21.2-13.9v-8.3L24.2,10.1z M34.9,25.2h-7.1v-2.1l7.1-1.4V25.2z M35.3,28.8l-7.5,1.5v2.1h7.5V28.8z M23.9,15.6l10.9-2.1v2.8L23.9,18V15.6z M21.1,13.5v21H7.8V13.5H21.1zM11.9,25.9h5.1v1.6h-5.1V25.9z M11.9,21.8h5.1v1.6h-5.1V21.8z M11.9,17.7h5.1v1.6h-5.1V17.7z M39.3,27.3l-2.1-0.4v4.5l2.1,0.4V27.3z"/>
    </svg>
);

const ChipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" fill="#d4af37" stroke="none" />
        <line x1="6" y1="9" x2="6" y2="15" stroke="#a98b2c" />
        <line x1="10" y1="9" x2="10" y2="15" stroke="#a98b2c" />
        <line x1="14" y1="9" x2="14" y2="15" stroke="#a98b2c" />
        <line x1="18" y1="9" x2="18" y2="15" stroke="#a98b2c" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="#a98b2c" />
    </svg>
);

export const UNKNOWN_CARD: CardBrand = {
    id: 'unknown',
    name: 'Banco',
    regex: /.*/,
    color: 'from-gray-700 to-gray-800',
    logo: <div />,
    cvvLength: 3,
};

export const CARD_BRANDS: CardBrand[] = [
    {
        id: 'visa',
        name: 'Visa',
        regex: /^4/,
        color: 'from-blue-600 to-blue-800',
        logo: <VisaLogo />,
        cvvLength: 3,
    },
    {
        id: 'mastercard',
        name: 'Mastercard',
        regex: /^5[1-5]/,
        color: 'from-orange-500 to-red-600',
        logo: <MastercardLogo />,
        cvvLength: 3,
    },
    {
        id: 'amex',
        name: 'American Express',
        regex: /^3[47]/,
        color: 'from-teal-500 to-cyan-700',
        logo: <AmexLogo />,
        cvvLength: 4,
    },
     {
        id: 'discover',
        name: 'Discover',
        regex: /^(6011|65|64[4-9]|622)/,
        color: 'from-purple-600 to-indigo-800',
        logo: <div className="text-xl font-bold italic">Discover</div>,
        cvvLength: 3,
    },
    {
        id: 'dinersclub',
        name: 'Diners Club',
        regex: /^3(?:0[0-5]|[68][0-9])/,
        color: 'from-sky-400 to-sky-600',
        logo: <div className="text-xl font-bold">Diners Club</div>,
        cvvLength: 3,
    },
    {
        id: 'jcb',
        name: 'JCB',
        regex: /^(?:2131|1800|35\d{3})/,
        color: 'from-green-500 to-green-700',
        logo: <div className="text-lg font-bold">JCB</div>,
        cvvLength: 3,
    }
];

export const GENERIC_MONTHS = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString();
    return month.length === 1 ? '0' + month : month;
});

export const GENERIC_YEARS = Array.from({ length: 10 }, (_, i) => {
    return (new Date().getFullYear() + i).toString();
});

export { ChipIcon };
