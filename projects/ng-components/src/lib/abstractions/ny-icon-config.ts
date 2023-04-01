import { NyColor } from './ny-color';
import { NyIconSize } from './ny-icon-size';
import { NyIconType } from './ny-icon-type';

export class NyIconConfig {
    name?: string;
    type?: NyIconType;
    size?: NyIconSize;
    color?: NyColor;

    constructor(name?: string, type?: NyIconType, size?: NyIconSize, color?: NyColor) {
        this.name = name ? name : '';
        this.type = type ? type : NyIconType.regular;
        this.size = size ? size : NyIconSize.medium;
        this.color = color ? color : NyColor.black;
    }
}
