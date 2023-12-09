import { MonoIconConfig } from './mono-icon-config';

export class MonoMenuOption {
    text: string;
    icon: MonoIconConfig;

    constructor(text?: string, icon?: MonoIconConfig) {
        this.text = text ? text : '';
        this.icon = icon ? icon : null;
    }
}
