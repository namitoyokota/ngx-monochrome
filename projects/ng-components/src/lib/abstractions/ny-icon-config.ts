import { NyIconSize } from './ny-icon-size';
import { NyIconType } from './ny-icon-type';

export class NyIconConfig {
    name: string;
    type: NyIconType;
    size: NyIconSize;
    dark: boolean;
    clickable: boolean;

    constructor(name?: string, type?: NyIconType, size?: NyIconSize, dark?: boolean, clickable?: boolean) {
        this.name = name ? name : '';
        this.type = type ? type : NyIconType.regular;
        this.size = size ? size : NyIconSize.medium;
        this.dark = dark ? dark : false;
        this.clickable = clickable ? clickable : false;
    }
}
