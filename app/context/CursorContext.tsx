'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CursorContextType {
    cursorType: 'default' | 'hover' | 'text' | 'hidden';
    setCursorType: (type: 'default' | 'hover' | 'text' | 'hidden') => void;
    cursorText: string;
    setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

export function useCursor() {
    return {
        cursorType: 'default',
        setCursorType: () => { },
        cursorText: '',
        setCursorText: () => { },
    } as CursorContextType;
}

export default CursorContext;
