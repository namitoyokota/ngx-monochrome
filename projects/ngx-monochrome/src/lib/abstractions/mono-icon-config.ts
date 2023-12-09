import { MonoIconSize } from './mono-icon-size';
import { MonoIconType } from './mono-icon-type';

export class MonoIconConfig {
    name: string;
    type: MonoIconType;
    size: MonoIconSize;
    dark: boolean;
    clickable: boolean;

    constructor(name?: string, type?: MonoIconType, size?: MonoIconSize, dark?: boolean, clickable?: boolean) {
        this.name = name ? name : '';
        this.type = type ? type : MonoIconType.regular;
        this.size = size ? size : MonoIconSize.medium;
        this.dark = dark ? dark : false;
        this.clickable = clickable ? clickable : false;
    }
}
