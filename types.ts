
// FIX: Import `ReactElement` to resolve the 'Cannot find namespace JSX' error.
import type { ReactElement } from 'react';

export interface CardBrand {
    id: string;
    name: string;
    regex: RegExp;
    color: string;
    logo: ReactElement;
    cvvLength: number;
}

export interface CardData {
    number: string;
    holder: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
}

export type FocusedField = 'number' | 'holder' | 'expiry' | 'cvv';