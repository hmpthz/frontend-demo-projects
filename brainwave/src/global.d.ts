/// <reference types="vite/client" />
import type { ReactNode } from 'react';

declare global {
    interface ChildrenProps {
        children: ReactNode
    }
}