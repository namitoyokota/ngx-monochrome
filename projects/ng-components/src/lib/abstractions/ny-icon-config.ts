import { NyColor } from './ny-color';
import { NyIconSize } from './ny-icon-size';
import { NyIconType } from './ny-icon-type';

export class NyIconConfig {
    name: string;
    type: NyIconType;
    size: NyIconSize;
    color: NyColor;
    clickable: boolean;

    constructor(name?: string, type?: NyIconType, size?: NyIconSize, color?: NyColor, clickable?: boolean) {
        this.name = name ? name : '';
        this.type = type ? type : NyIconType.regular;
        this.size = size ? size : NyIconSize.medium;
        this.color = color ? color : NyColor.black;
        this.clickable = clickable ? clickable : false;
    }
}
