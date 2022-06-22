import { ChangeEvent } from 'react';

export type Props = {
    name: string
    type:string
    placeholder:string
    onChange: (event: ChangeEvent) => void
};
