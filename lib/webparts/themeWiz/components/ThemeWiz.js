var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import { loadTheme, getTheme } from 'office-ui-fabric-react';
import { DefaultButton, Panel, PanelType, Slider } from 'office-ui-fabric-react';
import * as $ from 'jquery';
var ThemeWiz = (function (_super) {
    __extends(ThemeWiz, _super);
    function ThemeWiz(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.slider = null;
        _this.onRenderFooterContent = function () {
            //Format the JSON file
            var json = JSON.stringify(_this.state.newPalette);
            json = json.replace(/{/g, '{\n\t');
            json = json.replace(/}/g, '\n}');
            json = json.replace(/,"/g, ',\n\t"');
            json = 'data:text/plain;base64,' + btoa(json);
            //Format the PowerShell file
            var ps = JSON.stringify(_this.state.newPalette);
            ps = ps.replace(/:/g, ' = ');
            ps = ps.replace(/,"/g, ';\n\t"');
            ps = ps.replace(/{/g, '{\n\t');
            ps = ps.replace(/}/g, '\n}');
            ps = '@' + ps;
            ps = 'data:text/plain;base64,' + btoa(ps);
            return (React.createElement("div", null,
                React.createElement(Slider, { label: "Make panel transparent to show underlying content", min: 0, max: 1, step: 0.1, defaultValue: 1, showValue: false, componentRef: function (slider) { return _this.slider = slider; }, 
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange: function (value) {
                        var slider = $(document.activeElement);
                        slider.closest('.ms-Panel-main').css('background-color', 'rgb(255,255,255,' + value + ')');
                    } }),
                React.createElement("br", null),
                React.createElement("a", { href: json, download: 'Theme.json' }, "Download JSON file"),
                React.createElement("br", null),
                React.createElement("a", { href: ps, download: 'Theme.ps1' }, "Download PowerShell file"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(DefaultButton, { onClick: _this.onClosePanel }, "Dismiss")));
        };
        _this.onClosePanel = function () {
            _this.setState({ isPanelOpen: false });
        };
        _this.onShowPanel = function () {
            _this.setState({ isPanelOpen: true });
        };
        _this.handleClick = function (event) {
            return function () {
                _this.setState({ activePicker: event });
            };
        };
        _this.handleClose = function () {
            _this.setState({ activePicker: '' });
        };
        _this.handleChange = function (color) {
            var palette = _this.state.newPalette;
            palette[_this.state.activePicker] = color.hex;
            _this.setState({ newPalette: palette });
        };
        _this.handleChangeComplete = function (color) {
            var theme = {};
            theme.palette = _this.state.newPalette;
            loadTheme(theme);
        };
        _this.state = {
            originalPalette: null,
            newPalette: null,
            activePicker: '',
            isPanelOpen: false
        };
        return _this;
    }
    ThemeWiz.prototype.componentWillMount = function () {
        var originalTheme = getTheme(false);
        var theme = getTheme(false);
        var currentTheme = window['__themeState__'].theme;
        Object.keys(theme.palette).forEach(function (element) {
            theme.palette[element] = currentTheme[element];
        });
        this.setState({ originalPalette: originalTheme.palette, newPalette: theme.palette });
    };
    ThemeWiz.prototype.render = function () {
        var _this = this;
        var localStyles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px'
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                    left: '-125px'
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });
        var swatches = Object.keys(this.state.newPalette).map(function (key) {
            return (React.createElement("div", { className: 'ms-Grid-row' },
                React.createElement("div", { className: 'ms-Grid-col ms-md8' }, key),
                React.createElement("div", { className: 'ms-Grid-col ms-md4' },
                    React.createElement("div", { style: localStyles.swatch, key: key, onClick: _this.handleClick(key) },
                        React.createElement("div", { style: { width: '75px', height: '14px', borderRadius: '2px', backgroundColor: _this.state.newPalette[key] } })),
                    _this.state.activePicker == key ? React.createElement("div", { style: localStyles.popover },
                        React.createElement("div", { style: localStyles.cover, onClick: _this.handleClose }),
                        React.createElement(SketchPicker, { color: _this.state.newPalette[key], onChangeComplete: _this.handleChangeComplete, onChange: _this.handleChange })) : null)));
        });
        return (React.createElement("div", null,
            React.createElement(DefaultButton, { secondaryText: "Opens the Theme Wizard", onClick: this.onShowPanel, text: "Open ThemeWiz" }),
            React.createElement(Panel, { isOpen: this.state.isPanelOpen, type: PanelType.smallFixedFar, onDismiss: this.onClosePanel, headerText: "Theme Wizard", closeButtonAriaLabel: "Close", isBlocking: false, isFooterAtBottom: true, onRenderFooterContent: this.onRenderFooterContent },
                React.createElement("div", { className: 'ms-Grid' }, swatches))));
    };
    return ThemeWiz;
}(React.Component));
export default ThemeWiz;
//# sourceMappingURL=ThemeWiz.js.map