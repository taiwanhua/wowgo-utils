# wowgo-utils

wowgo-utils is an utils package for wowgo project.

please read more...

## install

---

```
npm i wowgo-utils
```

```jsx
import { ... } from "wowgo-utils";
```

## API

---



### ThemeHandler :



#### cssTaggedTemplateMaker

```tsx
/**
 * cssTaggedTemplateMaker : 產生對應的css樣式模板
 * @param customTheme 符合或繼承自 `IcssTaggedTemplateObject` 介面的樣式物件
 * @param customTheme.consoleKey  若有此參數，則在控制台輸出所產生的css樣式模板
 * @param breakpoints 要覆寫的 Media query 斷點
 * @returns 對應的css樣式模板
 */
export declare const cssTaggedTemplateMaker: <T extends IcssTaggedTemplateObject>(customTheme: T, breakpoints?: object | undefined) => string;
```

#### themeMaker

```tsx
/**
 * themeMaker : 產生對應的css樣式模板
 * @param props 組件的 props
 * @param propsTheme 組件的 props.theme
 * @param uiTheme 組件的預設樣式物件
 * @param uiStore 符合對應套件包的 wowgoSotre，需指定其介面 U
 * @returns 所產生對應的css樣式模板
 */
export declare const themeMaker: <U>(props: any, propsTheme: ((style: IcssTaggedTemplateObject, uiStore: U, porpsFromDom: any, utils: any) => IcssTaggedTemplateObject) | undefined, uiTheme: IcssTaggedTemplateObject, uiStore: U) => string;
```

#### themeMakerWithDomKey 

```tsx
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
 */
export declare const themeMakerWithDomKey: <T extends IcssTaggedTemplateObjectWithDomKey, S extends unknown, U>(props: any, propsTheme: ((style: T, uiStore: U, porpsFromDom: any, utils: any) => T) | undefined, uiTheme: T, uiStore: U, domKey: string) => ((style: S, uiStore: U, porpsFromDom: any, utils: any) => S) | undefined;
```

#### extendStylesCSSTaggedTemplateMaker

```tsx
/**
 * extendStylesCSSTaggedTemplateMaker : 產生繼承組件對應的css樣式模板
 * @param selectorKey 繼承組件後欲進行覆寫的選擇器 key 名
 * @param customTheme 符合或繼承自 `IcssTaggedTemplateObject` 介面的樣式物件
 * @param customTheme.consoleKey  若有此參數，則在控制台輸出所產生的css樣式模板
 * @param breakpoints 要覆寫的 Media query 斷點
 * @returns 繼承組件對應的css樣式模板
 */
export declare const extendStylesCSSTaggedTemplateMaker: <T extends IcssTaggedTemplateObject>(selectorKey: string, customTheme: T, breakpoints?: object | undefined) => string;
```



#### extendStylesThemeMaker 

```tsx
/**
 * extendStylesThemeMaker : 產生繼承組件對應的css樣式模板
 * @param props 組件的 props
 * @param propsTheme 組件的 props.theme
 * @param uiTheme 組件的預設樣式物件
 * @param uiStore 符合對應套件包的 wowgoSotre，需指定其介面 U
 * @returns 所產生繼承組件對應的css樣式模板
 */
export declare const extendStylesThemeMaker: <T extends IPropsThemeReturnWithSelectorKey, U>(props: any, propsTheme: ((style: T, uiStore: U, porpsFromDom: any, utils: any) => T) | undefined, uiTheme: T, uiStore: U, selectorKey: string) => string;
```

#### extendStylesThemeMakerWithDomKey

```tsx
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
export declare const extendStylesThemeMakerWithDomKey: <T extends IPropsThemeReturnWithSelectorKey, S extends unknown, U>(props: any, propsTheme: ((style: T, uiStore: U, porpsFromDom: any, utils: any) => T) | undefined, uiTheme: T, uiStore: U, domKey: string) => ((style: S, uiStore: U, porpsFromDom: any, utils: any) => S) | undefined;
```

#### defaultGetPrefixCls

```tsx
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
export declare const defaultGetPrefixCls: (suffixCls?: string | undefined, customizePrefixCls?: string | undefined, combineCustomizePrefix?: boolean | undefined) => string;
```



### Hooks





### Utils



