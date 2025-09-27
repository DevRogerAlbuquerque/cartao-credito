
import React, { useState, useMemo, useCallback } from 'react';
import CreditCard from './components/CreditCard';
import CardForm from './components/CardForm';
import { CARD_BRANDS, UNKNOWN_CARD } from './constants';
import type { CardBrand, CardData, FocusedField } from './types';

const App: React.FC = () => {
    const [cardData, setCardData] = useState<CardData>({
        number: '',
        holder: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
    });
    
    const [focusedField, setFocusedField] = useState<FocusedField | null>(null);

    const isFlipped = useMemo(() => {
        return focusedField === 'cvv';
    }, [focusedField]);

    const cardBrand: CardBrand = useMemo(() => {
        const cardNumber = cardData.number.replace(/\s/g, '');
        return CARD_BRANDS.find(brand => brand.regex.test(cardNumber)) ?? UNKNOWN_CARD;
    }, [cardData.number]);
    
    const handleCardDataChange = useCallback(<K extends keyof CardData,>(key: K, value: CardData[K]) => {
        setCardData(prev => ({ ...prev, [key]: value }));
    }, []);

    const handleFocus = useCallback((field: FocusedField | null) => {
        setFocusedField(field);
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">
                <CreditCard 
                    data={cardData} 
                    isFlipped={isFlipped}
                    brand={cardBrand}
                />
                <CardForm 
                    data={cardData}
                    onDataChange={handleCardDataChange}
                    onFocusChange={handleFocus}
                />
            </div>
             <footer className="text-center text-slate-500 mt-8 text-sm">
                <p>
                    Desenvolvido por um Engenheiro Frontend de classe mundial.
                </p>
                <p>Interface de Cartão de Crédito Interativa com React & Tailwind CSS.</p>
            </footer>
        </div>
    );
};

export default App;
