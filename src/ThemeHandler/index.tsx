import * as _ from 'lodash';
import { cssifyObject } from 'css-in-js-utils'
import * as CSS from 'csstype';

/**
 * IBreakpoints Media query 斷點預設介面
 * @description IPropertyBreakpointsOfPropsThemeReturn
 */
export interface IBreakpoints {
    /** (min-width: 320px) */
    mobileS?: string;
    /** (min-width: 375px) */
    mobileM?: string;
    /** (min-width: 425px) */
    mobileL?: string;
    /** (min-width: 768px) */
    tablet?: string;
    /** (min-width: 1024px) */
    laptop?: string;
    /** (min-width: 1440px) */
    laptopL?: string;
    /** (min-width: 1920px) */
    desktop?: string;
    /** (min-width: 2560px) */
    desktopL?: string;
    [key: string]: string | undefined;
}

/**
 * 樣式物件介面
 */
export interface ICssObject extends CSS.Properties<string | number> {
    [key: string]: string | number | undefined | ICssObject | (string | number | undefined | ICssObject)[];
}


/**
 * 在沒有 Media query 斷點影響下的樣式物件介面
 * - ps 通常同一組件內不管有無斷點影響，都應該使用相同介面
 */
export interface IBase {
    css?: ICssObject;
    pseudos?: ICssObject;
    selectors?: ICssObject;
    taggedTemplate?: string;
    // disabled?: ICssObject;
    [key: string]: any;
}

/**
 * 作為 : 
 * - cssTaggedTemplateMaker 函數產生css樣式模板時繼承的泛型介面
 * - extendStylesCSSTaggedTemplateMaker 函數產生css樣式模板時繼承的泛型介面
 * - themeMaker 函數第二個參數 propsTheme 回傳值的介面
 * 
 * @description IPropsThemeReturn
 */
export interface IcssTaggedTemplateObject {
    /** 要覆寫的 Media query 斷點 */
    breakpoints?: IBreakpoints;
    /** 在沒有 Media query 斷點影響下的樣式物件 */
    base: IBase;
    /** 輸出所產生的css樣式模板 */
    consoleKey?: any;
    [key: string]: any;
}

/**
 * cssTaggedTemplateMaker : 產生對應的css樣式模板
 * @param customTheme 符合或繼承自 `IcssTaggedTemplateObject` 介面的樣式物件
 * @param customTheme.consoleKey  若有此參數，則在控制台輸出所產生的css樣式模板
 * @param breakpoints 要覆寫的 Media query 斷點
 * @returns 對應的css樣式模板
 */
export const cssTaggedTemplateMaker = <T extends IcssTaggedTemplateObject,>(customTheme: T, breakpoints?: object): string => {
    let res = "";
    res = res + `
& {
    ${cssifyObject(customTheme?.base?.css as any ?? {})};
`
    if (!_.isNil(customTheme?.base?.pseudos)) {
        _.keys(customTheme.base.pseudos).forEach(pseudo => {
            res = res + `
    ${pseudo} {
        ${cssifyObject((customTheme.base.pseudos as any)?.[pseudo] ?? {})};
    }
`
        })
    }

    if (!_.isNil(customTheme?.base?.selectors)) {
        _.keys(customTheme.base.selectors).forEach(selector => {
            res = res + `
    ${selector} {
        ${cssifyObject((customTheme.base.selectors as any)?.[selector] ?? {})};
    }
`
        })
    }

    res = res + `
}
`

    if (!_.isNil(customTheme?.base?.taggedTemplate)) {

        res = res + `
${customTheme?.base?.taggedTemplate}
`
    }

    // 有斷點
    if (!_.isNil(breakpoints)) {
        _.keys(breakpoints).forEach(breakpoint => {
            if (customTheme?.[breakpoint]) {

                res = res + `
@media ${(breakpoints as any)?.[breakpoint]} {

    & {
        ${cssifyObject(customTheme?.[breakpoint]?.css ?? {})};
`
                if (!_.isNil(customTheme?.[breakpoint]?.pseudos)) {
                    _.keys(customTheme?.[breakpoint].pseudos).forEach(pseudo => {
                        res = res + `
        ${pseudo} {
            ${cssifyObject((customTheme?.[breakpoint].pseudos as any)?.[pseudo] ?? {})};
        }
`
                    })
                }

                if (!_.isNil(customTheme?.[breakpoint]?.selectors)) {
                    _.keys(customTheme?.[breakpoint].selectors).forEach(selector => {
                        res = res + `
        ${selector} {
            ${cssifyObject((customTheme?.[breakpoint].selectors as any)?.[selector] ?? {})};
        }
`
                    })
                }
                res = res + `
    }
`

                if (!_.isNil(customTheme?.[breakpoint]?.taggedTemplate)) {

                    res = res + `
    ${customTheme?.[breakpoint]?.taggedTemplate}
`
                }

                res = res + `
}
`
            }

        })

    }

    if (customTheme?.consoleKey) {
        console.log(customTheme?.consoleKey, res)
    }

    return res;
}

/**
 * themeMaker : 產生對應的css樣式模板
 * @param props 組件的 props
 * @param propsTheme 組件的 props.theme 
 * @param uiTheme 組件的預設樣式物件
 * @param uiStore 符合對應套件包的 wowgoSotre，需指定其介面 U
 * @returns 所產生對應的css樣式模板
 * @example
 * 
 */
export const themeMaker = <U,>
    (
        props: any,
        propsTheme: ((style: IcssTaggedTemplateObject, uiStore: U, porpsFromDom: any, utils: any) => IcssTaggedTemplateObject) | undefined,
        uiTheme: IcssTaggedTemplateObject,
        uiStore: U
    )
    :
    string => {

    if (_.isNil(propsTheme) || _.isPlainObject(propsTheme)) {
        // 沒有 propsTheme ，即不覆寫
        return cssTaggedTemplateMaker<IcssTaggedTemplateObject>(uiTheme)
    }
    else {
        let customTheme = propsTheme(uiTheme, uiStore, props, null);
        return cssTaggedTemplateMaker<IcssTaggedTemplateObject>(customTheme, customTheme?.breakpoints)
    }
    // console.log("props", props)
    // console.log("uiStore", uiStore)
    // console.log("propsTheme", propsTheme)
    // console.log("uiTheme", uiTheme)
}

/**
 * 具有 DomKey 的 IcssTaggedTemplateObject 介面物件
 */
export interface IcssTaggedTemplateObjectWithDomKey {
    [key: string]: IcssTaggedTemplateObject | undefined | IcssTaggedTemplateObjectWithDomKey | (IcssTaggedTemplateObject | undefined | IcssTaggedTemplateObjectWithDomKey)[];
}

/**
 * themeMakerWithDomKey : 對於派發的 domKey，產生 themeMaker 函數內所需的 propsTheme 函數
 * - \<T extends IPropsThemeReturnWithDomKey, S extends any\>
 * - T 調用 propsTheme 使用的interface
 * - S 是 回傳的函數的回傳值使用的 interface
 * @param props 組件的 props
 * @param propsTheme 組件的 props.theme 
 * @param uiTheme 組件的預設樣式物件
 * @param uiStore 符合對應套件包的 wowgoSotre，需指定其介面 U
 * @param domKey 包裝別的組件時，派發的 Key 值
 * @returns 所產生 themeMaker 函數內所需的 propsTheme 函數
 * @example
 * 
 */
export const themeMakerWithDomKey = <T extends IcssTaggedTemplateObjectWithDomKey, S extends any, U>(
    props: any,
    propsTheme: ((style: T, uiStore: U, porpsFromDom: any, utils: any) => T) | undefined,
    uiTheme: T,
    uiStore: U,
    domKey: string
)
    :
    ((style: S, uiStore: U, porpsFromDom: any, utils: any) => S) | undefined => {

    if (_.isNil(propsTheme) || _.isPlainObject(propsTheme)) {
        // 沒有 propsTheme ，即不覆寫
        return (style: S, uiStore: U, porpsFromDom: any, utils: any) => {
            return uiTheme?.[domKey] as S;
        }
    }
    else {
        let customTheme = propsTheme(uiTheme, uiStore, props, null)?.[domKey];
        return (style: S, uiStore: U, porpsFromDom: any, utils: any) => {
            return customTheme as S;
        }

    }

}

// 以下為繼承組件後的樣式覆寫

/**
 * extendStylesCSSTaggedTemplateMaker : 產生繼承組件對應的css樣式模板
 * @param selectorKey 繼承組件後欲進行覆寫的選擇器 key 名
 * @param customTheme 符合或繼承自 `IcssTaggedTemplateObject` 介面的樣式物件
 * @param customTheme.consoleKey  若有此參數，則在控制台輸出所產生的css樣式模板
 * @param breakpoints 要覆寫的 Media query 斷點
 * @returns 繼承組件對應的css樣式模板
 */
export const extendStylesCSSTaggedTemplateMaker = <T extends IcssTaggedTemplateObject,>(selectorKey: string, customTheme: T, breakpoints?: object): string => {
    let res = "";
    res = res + `
${selectorKey} {
    ${cssifyObject(customTheme?.base?.css as any ?? {})};
`
    if (!_.isNil(customTheme?.base?.pseudos)) {
        _.keys(customTheme.base.pseudos).forEach(pseudo => {
            res = res + `
    ${pseudo} {
        ${cssifyObject((customTheme.base.pseudos as any)?.[pseudo] ?? {})};
    }
`
        })
    }

    if (!_.isNil(customTheme?.base?.selectors)) {
        _.keys(customTheme.base.selectors).forEach(selector => {
            res = res + `
    ${selector} {
        ${cssifyObject((customTheme.base.selectors as any)?.[selector] ?? {})};
    }
`
        })
    }

    if (!_.isNil(customTheme?.base?.taggedTemplate)) {

        res = res + `
    ${customTheme?.base?.taggedTemplate}
`
    }

    // 有斷點
    if (!_.isNil(breakpoints)) {
        _.keys(breakpoints).forEach(breakpoint => {
            if (customTheme?.[breakpoint]) {

                res = res + `
    @media ${(breakpoints as any)?.[breakpoint]} {

        ${cssifyObject(customTheme?.[breakpoint]?.css ?? {})};
`
                if (!_.isNil(customTheme?.[breakpoint]?.pseudos)) {
                    _.keys(customTheme?.[breakpoint].pseudos).forEach(pseudo => {
                        res = res + `
        ${pseudo} {
            ${cssifyObject((customTheme?.[breakpoint].pseudos as any)?.[pseudo] ?? {})};
        }
`
                    })
                }

                if (!_.isNil(customTheme?.[breakpoint]?.selectors)) {
                    _.keys(customTheme?.[breakpoint].selectors).forEach(selector => {
                        res = res + `
        ${selector} {
            ${cssifyObject((customTheme?.[breakpoint].selectors as any)?.[selector] ?? {})};
        }
    }
`
                    })
                }

                if (!_.isNil(customTheme?.[breakpoint]?.taggedTemplate)) {

                    res = res + `
            ${customTheme?.[breakpoint]?.taggedTemplate}
`
                }
            }

        })

    }

    res = res + `}
`
    if (customTheme?.consoleKey) {
        console.log(customTheme?.consoleKey, res)
    }

    return res;
}

/**
 * 作為 : 
 * - extendStylesThemeMaker 函數第二個參數 propsTheme 回傳值的介面
 */
export interface IPropsThemeReturnWithSelectorKey {
    [key: string]: IcssTaggedTemplateObject | undefined | IPropsThemeReturnWithSelectorKey | (IcssTaggedTemplateObject | undefined | IPropsThemeReturnWithSelectorKey)[];
}

/**
 * extendStylesThemeMaker : 產生繼承組件對應的css樣式模板
 * @param props 組件的 props
 * @param propsTheme 組件的 props.theme 
 * @param uiTheme 組件的預設樣式物件
 * @param uiStore 符合對應套件包的 wowgoSotre，需指定其介面 U
 * @returns 所產生繼承組件對應的css樣式模板
 */
export const extendStylesThemeMaker = <T extends IPropsThemeReturnWithSelectorKey, U>(
    props: any,
    propsTheme: ((style: T, uiStore: U, porpsFromDom: any, utils: any) => T) | undefined,
    uiTheme: T,
    uiStore: U,
    selectorKey: string
)
    : string => {

    if (_.isNil(propsTheme) || _.isPlainObject(propsTheme)) {
        // 沒有 propsTheme ，即不覆寫
        return extendStylesCSSTaggedTemplateMaker<IcssTaggedTemplateObject>(selectorKey, uiTheme?.[selectorKey] as IcssTaggedTemplateObject)
    }
    else {
        let customTheme = propsTheme(uiTheme, uiStore, props, null);
        return extendStylesCSSTaggedTemplateMaker<IcssTaggedTemplateObject>(selectorKey, customTheme?.[selectorKey] as IcssTaggedTemplateObject, (customTheme?.[selectorKey] as IcssTaggedTemplateObject)?.breakpoints)
    }
    // console.log("props", props)
    // console.log("uiStore", uiStore)
    // console.log("propsTheme", propsTheme)
    // console.log("uiTheme", uiTheme)
}

/**
 * extendStylesThemeMakerWithDomKey
 * - \<T extends IPropsThemeReturnWithSelectorKey, S extends any\>
 * - T 調用 propsTheme 使用的interface
 * - S 是 回傳的函數的回傳值使用的 interface
 * @param props 組件的 props
 * @param propsTheme 組件的 props.theme 
 * @param uiTheme 組件的預設樣式物件
 * @param uiStore 符合對應套件包的 wowgoSotre，需指定其介面 U
 * @param domKey 包裝別的組件時，派發的 Key 值
 * @returns 所產生 extendStylesThemeMaker 函數內所需的 propsTheme 函數
 */
export const extendStylesThemeMakerWithDomKey = <T extends IPropsThemeReturnWithSelectorKey, S extends any, U>(
    props: any,
    propsTheme: ((style: T, uiStore: U, porpsFromDom: any, utils: any) => T) | undefined,
    uiTheme: T,
    uiStore: U,
    domKey: string
)
    :
    ((style: S, uiStore: U, porpsFromDom: any, utils: any) => S) | undefined => {

    if (_.isNil(propsTheme) || _.isPlainObject(propsTheme)) {
        // 沒有 propsTheme ，即不覆寫
        return (style: S, uiStore: U, porpsFromDom: any, utils: any) => {
            return uiTheme?.[domKey] as S;
        }
    }
    else {
        let customTheme = propsTheme(uiTheme, uiStore, props, null)?.[domKey];
        return (style: S, uiStore: U, porpsFromDom: any, utils: any) => {
            return customTheme as S;
        }

    }
}


/**
 * wowgo-UI 預設包含前(或)後綴 css class的函數 
 * @param suffixCls css class 後綴
 * @param customizePrefixCls 自定義 css class 前綴
 * @param combineCustomizePrefix 是否合併自定義 css class 前綴與後綴
 * @returns 包含前綴或後綴的 css class 
 * @example
 * defaultGetPrefixCls("box") // 回傳 "wowgo-box"
 * defaultGetPrefixCls("box", "prefix") // 回傳 "prefix"
 * defaultGetPrefixCls("box", "prefix", true) // 回傳 "prefix-box"
 */
export const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string, combineCustomizePrefix?: boolean) => {
    if (customizePrefixCls) return combineCustomizePrefix ? `${customizePrefixCls}-${suffixCls}` : customizePrefixCls;

    return suffixCls ? `wowgo-${suffixCls}` : 'wowgo';
};

