
import React from 'react';
import type { CardData, CardBrand } from '../types';
import { ChipIcon } from '../constants';

interface CreditCardProps {
    data: CardData;
    isFlipped: boolean;
    brand: CardBrand;
}

const CreditCard: React.FC<CreditCardProps> = ({ data, isFlipped, brand }) => {
    const { number, holder, expiryMonth, expiryYear, cvv } = data;

    const formattedNumber = (num: string) => {
        const digitsOnly = num.replace(/\s/g, '').slice(0, 16);
        const parts = [];
        for (let i = 0; i < digitsOnly.length; i += 4) {
            parts.push(digitsOnly.slice(i, i + 4));
        }
        while (parts.length < 4) {
            const lastPart = parts[parts.length - 1] || '';
            const placeholder = '#'.repeat(4 - lastPart.length);
            parts[parts.length - 1] = lastPart + placeholder;
            if (parts.length < 4) {
                parts.push('####');
            }
        }
        return parts.join(' ');
    };

    const cardHolderText = holder || 'NOME DO TITULAR';
    const expiryText = `${expiryMonth || 'MM'}/${(expiryYear || 'AA').slice(-2)}`;

    return (
        <div className="w-full h-56 [perspective:1000px] mb-8">
            <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
                {/* Card Front */}
                <div className={`absolute w-full h-full rounded-xl shadow-2xl p-6 flex flex-col justify-between [backface-visibility:hidden] bg-gradient-to-br ${brand.color} text-white`}>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <span className="text-xs opacity-70">Banco</span>
                            <span className="text-xl font-medium tracking-wider">{brand.name}</span>
                        </div>
                        <div className="w-16 h-10">{brand.logo}</div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                       <ChipIcon />
                        <div className="font-card text-2xl tracking-widest text-center mt-2">
                            {formattedNumber(number)}
                        </div>
                    </div>
                    <div className="flex justify-between items-end font-card text-sm tracking-wider">
                        <div>
                            <p className="text-xs opacity-70 mb-1">Titular do Cartão</p>
                            <p className="uppercase">{cardHolderText}</p>
                        </div>
                        <div>
                            <p className="text-xs opacity-70 mb-1">Validade</p>
                            <p>{expiryText}</p>
                        </div>
                    </div>
                </div>

                {/* Card Back */}
                <div className={`absolute w-full h-full rounded-xl shadow-2xl p-2 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${brand.color}`}>
                    <div className="w-full h-10 bg-black mt-4"></div>
                    <div className="text-right p-4 text-white">
                        <p className="text-xs mb-1">CVV</p>
                        <div className="h-9 w-full bg-white rounded flex items-center justify-end pr-4 text-black font-card tracking-widest">
                            {cvv.replace(/./g, '*')}
                        </div>
                    </div>
                    <div className="px-4 mt-auto mb-4 self-end">
                        {brand.logo}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
