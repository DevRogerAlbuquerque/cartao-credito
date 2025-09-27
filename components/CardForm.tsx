
import React, { useCallback } from 'react';
import type { CardData, FocusedField } from '../types';
import { GENERIC_MONTHS, GENERIC_YEARS } from '../constants';

interface CardFormProps {
    data: CardData;
    onDataChange: <K extends keyof CardData>(key: K, value: CardData[K]) => void;
    onFocusChange: (field: FocusedField | null) => void;
}

const CardForm: React.FC<CardFormProps> = ({ data, onDataChange, onFocusChange }) => {

    const handleNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        // Remove non-digit characters
        let digits = value.replace(/\D/g, '');
        // Limit to 16 digits
        if (digits.length > 16) {
            digits = digits.slice(0, 16);
        }
        // Add spaces every 4 digits
        const formatted = digits.replace(/(\d{4})/g, '$1 ').trim();
        onDataChange('number', formatted);
    }, [onDataChange]);

    const handleHolderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange('holder', e.target.value);
    }, [onDataChange]);
    
    const handleMonthChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onDataChange('expiryMonth', e.target.value);
    }, [onDataChange]);
    
    const handleYearChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onDataChange('expiryYear', e.target.value);
    }, [onDataChange]);
    
    const handleCvvChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 4));
    }, [onDataChange]);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const field = e.target.name as FocusedField;
        onFocusChange(field);
    }, [onFocusChange]);

    const handleBlur = useCallback(() => {
        onFocusChange(null);
    }, [onFocusChange]);
    
    return (
        <form className="bg-slate-800 p-6 rounded-lg shadow-lg space-y-4">
            <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-400 mb-1">
                    Número do Cartão
                </label>
                <input
                    type="text"
                    id="cardNumber"
                    name="number"
                    value={data.number}
                    onChange={handleNumberChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition font-card"
                    maxLength={19}
                />
            </div>
            <div>
                <label htmlFor="cardHolder" className="block text-sm font-medium text-slate-400 mb-1">
                    Nome do Titular
                </label>
                <input
                    type="text"
                    id="cardHolder"
                    name="holder"
                    value={data.holder}
                    onChange={handleHolderChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Seu Nome Completo"
                    className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition uppercase"
                />
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="expiryMonth" className="block text-sm font-medium text-slate-400 mb-1">
                        Validade
                    </label>
                    <div className="flex gap-2">
                         <select
                            id="expiryMonth"
                            name="expiry"
                            value={data.expiryMonth}
                            onChange={handleMonthChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                        >
                            <option value="" disabled>Mês</option>
                            {GENERIC_MONTHS.map(month => <option key={month} value={month}>{month}</option>)}
                        </select>
                         <select
                            id="expiryYear"
                            name="expiry"
                            value={data.expiryYear}
                            onChange={handleYearChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                        >
                            <option value="" disabled>Ano</option>
                            {GENERIC_YEARS.map(year => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>
                </div>
                <div className="w-1/3">
                    <label htmlFor="cvv" className="block text-sm font-medium text-slate-400 mb-1">
                        CVV
                    </label>
                    <input
                        type="password"
                        id="cvv"
                        name="cvv"
                        value={data.cvv}
                        onChange={handleCvvChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition font-card"
                    />
                </div>
            </div>
        </form>
    );
};

export default CardForm;
