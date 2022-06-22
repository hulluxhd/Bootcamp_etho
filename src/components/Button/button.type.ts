import React, { MouseEvent, ReactNode } from 'react';

export type Props = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
};
