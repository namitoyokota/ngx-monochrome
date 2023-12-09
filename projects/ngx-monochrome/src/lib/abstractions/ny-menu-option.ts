import { NyIconConfig } from './ny-icon-config';

export class NyMenuOption {
    text: string;
    icon: NyIconConfig;

    constructor(text?: string, icon?: NyIconConfig) {
        this.text = text ? text : '';
        this.icon = icon ? icon : null;
    }
}
