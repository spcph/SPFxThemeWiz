/// <reference types="react" />
import * as React from 'react';
import { IPalette } from 'office-ui-fabric-react';
export interface IThemeWizState {
    originalPalette: IPalette;
    newPalette: IPalette;
    activePicker: string;
    isPanelOpen: boolean;
}
export default class ThemeWiz extends React.Component<{}, IThemeWizState> {
    private slider;
    constructor(props: any, state: IThemeWizState);
    componentWillMount(): void;
    render(): React.ReactElement<{}>;
    private onRenderFooterContent;
    private onClosePanel;
    private onShowPanel;
    private handleClick;
    private handleClose;
    private handleChange;
    private handleChangeComplete;
}
