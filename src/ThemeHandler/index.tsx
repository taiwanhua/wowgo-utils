import * as _ from 'lodash';
import { cssifyObject } from 'css-in-js-utils'

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
export interface ICssObject {
    alignContent?: any;
    alignItems?: any;
    alignSelf?: any;
    alignmentBaseline?: any;
    all?: any;
    animation?: any;
    animationDelay?: any;
    animationDirection?: any;
    animationDuration?: any;
    animationFillMode?: any;
    animationIterationCount?: any;
    animationName?: any;
    animationPlayState?: any;
    animationTimingFunction?: any;
    appearance?: any;
    ascentOverride?: any;
    aspectRatio?: any;
    backdropFilter?: any;
    backfaceVisibility?: any;
    background?: any;
    backgroundAttachment?: any;
    backgroundBlendMode?: any;
    backgroundClip?: any;
    backgroundColor?: any;
    backgroundImage?: any;
    backgroundOrigin?: any;
    backgroundPosition?: any;
    backgroundPositionX?: any;
    backgroundPositionY?: any;
    backgroundRepeat?: any;
    backgroundRepeatX?: any;
    backgroundRepeatY?: any;
    backgroundSize?: any;
    baselineShift?: any;
    blockSize?: any;
    border?: any;
    borderBlock?: any;
    borderBlockColor?: any;
    borderBlockEnd?: any;
    borderBlockEndColor?: any;
    borderBlockEndStyle?: any;
    borderBlockEndWidth?: any;
    borderBlockStart?: any;
    borderBlockStartColor?: any;
    borderBlockStartStyle?: any;
    borderBlockStartWidth?: any;
    borderBlockStyle?: any;
    borderBlockWidth?: any;
    borderBottom?: any;
    borderBottomColor?: any;
    borderBottomLeftRadius?: any;
    borderBottomRightRadius?: any;
    borderBottomStyle?: any;
    borderBottomWidth?: any;
    borderCollapse?: any;
    borderColor?: any;
    borderEndEndRadius?: any;
    borderEndStartRadius?: any;
    borderImage?: any;
    borderImageOutset?: any;
    borderImageRepeat?: any;
    borderImageSlice?: any;
    borderImageSource?: any;
    borderImageWidth?: any;
    borderInline?: any;
    borderInlineColor?: any;
    borderInlineEnd?: any;
    borderInlineEndColor?: any;
    borderInlineEndStyle?: any;
    borderInlineEndWidth?: any;
    borderInlineStart?: any;
    borderInlineStartColor?: any;
    borderInlineStartStyle?: any;
    borderInlineStartWidth?: any;
    borderInlineStyle?: any;
    borderInlineWidth?: any;
    borderLeft?: any;
    borderLeftColor?: any;
    borderLeftStyle?: any;
    borderLeftWidth?: any;
    borderRadius?: any;
    borderRight?: any;
    borderRightColor?: any;
    borderRightStyle?: any;
    borderRightWidth?: any;
    borderSpacing?: any;
    borderStartEndRadius?: any;
    borderStartStartRadius?: any;
    borderStyle?: any;
    borderTop?: any;
    borderTopColor?: any;
    borderTopLeftRadius?: any;
    borderTopRightRadius?: any;
    borderTopStyle?: any;
    borderTopWidth?: any;
    borderWidth?: any;
    bottom?: any;
    boxShadow?: any;
    boxSizing?: any;
    breakAfter?: any;
    breakBefore?: any;
    breakInside?: any;
    bufferedRendering?: any;
    captionSide?: any;
    caretColor?: any;
    clear?: any;
    clip?: any;
    clipPath?: any;
    clipRule?: any;
    color?: any;
    colorInterpolation?: any;
    colorInterpolationFilters?: any;
    colorRendering?: any;
    colorScheme?: any;
    columnCount?: any;
    columnFill?: any;
    columnGap?: any;
    columnRule?: any;
    columnRuleColor?: any;
    columnRuleStyle?: any;
    columnRuleWidth?: any;
    columnSpan?: any;
    columnWidth?: any;
    columns?: any;
    contain?: any;
    containIntrinsicSize?: any;
    content?: any;
    contentVisibility?: any;
    counterIncrement?: any;
    counterReset?: any;
    counterSet?: any;
    cssFloat?: any;
    cssText?: any;
    cursor?: any;
    cx?: any;
    cy?: any;
    d?: any;
    descentOverride?: any;
    direction?: any;
    display?: any;
    dominantBaseline?: any;
    emptyCells?: any;
    fill?: any;
    fillOpacity?: any;
    fillRule?: any;
    filter?: any;
    flex?: any;
    flexBasis?: any;
    flexDirection?: any;
    flexFlow?: any;
    flexGrow?: any;
    flexShrink?: any;
    flexWrap?: any;
    float?: any;
    floodColor?: any;
    floodOpacity?: any;
    font?: any;
    fontDisplay?: any;
    fontFamily?: any;
    fontFeatureSettings?: any;
    fontKerning?: any;
    fontOpticalSizing?: any;
    fontSize?: any;
    fontStretch?: any;
    fontStyle?: any;
    fontVariant?: any;
    fontVariantCaps?: any;
    fontVariantEastAsian?: any;
    fontVariantLigatures?: any;
    fontVariantNumeric?: any;
    fontVariationSettings?: any;
    fontWeight?: any;
    forcedColorAdjust?: any;
    gap?: any;
    grid?: any;
    gridArea?: any;
    gridAutoColumns?: any;
    gridAutoFlow?: any;
    gridAutoRows?: any;
    gridColumn?: any;
    gridColumnEnd?: any;
    gridColumnGap?: any;
    gridColumnStart?: any;
    gridGap?: any;
    gridRow?: any;
    gridRowEnd?: any;
    gridRowGap?: any;
    gridRowStart?: any;
    gridTemplate?: any;
    gridTemplateAreas?: any;
    gridTemplateColumns?: any;
    gridTemplateRows?: any;
    height?: any;
    hyphens?: any;
    imageOrientation?: any;
    imageRendering?: any;
    inherits?: any;
    initialValue?: any;
    inlineSize?: any;
    inset?: any;
    insetBlock?: any;
    insetBlockEnd?: any;
    insetBlockStart?: any;
    insetInline?: any;
    insetInlineEnd?: any;
    insetInlineStart?: any;
    isolation?: any;
    justifyContent?: any;
    justifyItems?: any;
    justifySelf?: any;
    left?: any;
    length?: any;
    letterSpacing?: any;
    lightingColor?: any;
    lineBreak?: any;
    lineGapOverride?: any;
    lineHeight?: any;
    listStyle?: any;
    listStyleImage?: any;
    listStylePosition?: any;
    listStyleType?: any;
    margin?: any;
    marginBlock?: any;
    marginBlockEnd?: any;
    marginBlockStart?: any;
    marginBottom?: any;
    marginInline?: any;
    marginInlineEnd?: any;
    marginInlineStart?: any;
    marginLeft?: any;
    marginRight?: any;
    marginTop?: any;
    marker?: any;
    markerEnd?: any;
    markerMid?: any;
    markerStart?: any;
    mask?: any;
    maskType?: any;
    maxBlockSize?: any;
    maxHeight?: any;
    maxInlineSize?: any;
    maxWidth?: any;
    maxZoom?: any;
    minBlockSize?: any;
    minHeight?: any;
    minInlineSize?: any;
    minWidth?: any;
    minZoom?: any;
    mixBlendMode?: any;
    objectFit?: any;
    objectPosition?: any;
    offset?: any;
    offsetDistance?: any;
    offsetPath?: any;
    offsetRotate?: any;
    opacity?: any;
    order?: any;
    orientation?: any;
    orphans?: any;
    outline?: any;
    outlineColor?: any;
    outlineOffset?: any;
    outlineStyle?: any;
    outlineWidth?: any;
    overflow?: any;
    overflowAnchor?: any;
    overflowWrap?: any;
    overflowX?: any;
    overflowY?: any;
    overscrollBehavior?: any;
    overscrollBehaviorBlock?: any;
    overscrollBehaviorInline?: any;
    overscrollBehaviorX?: any;
    overscrollBehaviorY?: any;
    padding?: any;
    paddingBlock?: any;
    paddingBlockEnd?: any;
    paddingBlockStart?: any;
    paddingBottom?: any;
    paddingInline?: any;
    paddingInlineEnd?: any;
    paddingInlineStart?: any;
    paddingLeft?: any;
    paddingRight?: any;
    paddingTop?: any;
    page?: any;
    pageBreakAfter?: any;
    pageBreakBefore?: any;
    pageBreakInside?: any;
    pageOrientation?: any;
    paintOrder?: any;
    parentRule?: any;
    perspective?: any;
    perspectiveOrigin?: any;
    placeContent?: any;
    placeItems?: any;
    placeSelf?: any;
    pointerEvents?: any;
    position?: any;
    quotes?: any;
    r?: any;
    resize?: any;
    right?: any;
    rowGap?: any;
    rubyPosition?: any;
    rx?: any;
    ry?: any;
    scrollBehavior?: any;
    scrollMargin?: any;
    scrollMarginBlock?: any;
    scrollMarginBlockEnd?: any;
    scrollMarginBlockStart?: any;
    scrollMarginBottom?: any;
    scrollMarginInline?: any;
    scrollMarginInlineEnd?: any;
    scrollMarginInlineStart?: any;
    scrollMarginLeft?: any;
    scrollMarginRight?: any;
    scrollMarginTop?: any;
    scrollPadding?: any;
    scrollPaddingBlock?: any;
    scrollPaddingBlockEnd?: any;
    scrollPaddingBlockStart?: any;
    scrollPaddingBottom?: any;
    scrollPaddingInline?: any;
    scrollPaddingInlineEnd?: any;
    scrollPaddingInlineStart?: any;
    scrollPaddingLeft?: any;
    scrollPaddingRight?: any;
    scrollPaddingTop?: any;
    scrollSnapAlign?: any;
    scrollSnapStop?: any;
    scrollSnapType?: any;
    shapeImageThreshold?: any;
    shapeMargin?: any;
    shapeOutside?: any;
    shapeRendering?: any;
    size?: any;
    speak?: any;
    src?: any;
    stopColor?: any;
    stopOpacity?: any;
    stroke?: any;
    strokeDasharray?: any;
    strokeDashoffset?: any;
    strokeLinecap?: any;
    strokeLinejoin?: any;
    strokeMiterlimit?: any;
    strokeOpacity?: any;
    strokeWidth?: any;
    syntax?: any;
    tabSize?: any;
    tableLayout?: any;
    textAlign?: any;
    textAlignLast?: any;
    textAnchor?: any;
    textCombineUpright?: any;
    textDecoration?: any;
    textDecorationColor?: any;
    textDecorationLine?: any;
    textDecorationSkipInk?: any;
    textDecorationStyle?: any;
    textDecorationThickness?: any;
    textIndent?: any;
    textOrientation?: any;
    textOverflow?: any;
    textRendering?: any;
    textShadow?: any;
    textSizeAdjust?: any;
    textTransform?: any;
    textUnderlineOffset?: any;
    textUnderlinePosition?: any;
    top?: any;
    touchAction?: any;
    transform?: any;
    transformBox?: any;
    transformOrigin?: any;
    transformStyle?: any;
    transition?: any;
    transitionDelay?: any;
    transitionDuration?: any;
    transitionProperty?: any;
    transitionTimingFunction?: any;
    unicodeBidi?: any;
    unicodeRange?: any;
    userSelect?: any;
    userZoom?: any;
    vectorEffect?: any;
    verticalAlign?: any;
    visibility?: any;
    webkitAlignContent?: any;
    webkitAlignItems?: any;
    webkitAlignSelf?: any;
    webkitAnimation?: any;
    webkitAnimationDelay?: any;
    webkitAnimationDirection?: any;
    webkitAnimationDuration?: any;
    webkitAnimationFillMode?: any;
    webkitAnimationIterationCount?: any;
    webkitAnimationName?: any;
    webkitAnimationPlayState?: any;
    webkitAnimationTimingFunction?: any;
    webkitAppRegion?: any;
    webkitAppearance?: any;
    webkitBackfaceVisibility?: any;
    webkitBackgroundClip?: any;
    webkitBackgroundOrigin?: any;
    webkitBackgroundSize?: any;
    webkitBorderAfter?: any;
    webkitBorderAfterColor?: any;
    webkitBorderAfterStyle?: any;
    webkitBorderAfterWidth?: any;
    webkitBorderBefore?: any;
    webkitBorderBeforeColor?: any;
    webkitBorderBeforeStyle?: any;
    webkitBorderBeforeWidth?: any;
    webkitBorderBottomLeftRadius?: any;
    webkitBorderBottomRightRadius?: any;
    webkitBorderEnd?: any;
    webkitBorderEndColor?: any;
    webkitBorderEndStyle?: any;
    webkitBorderEndWidth?: any;
    webkitBorderHorizontalSpacing?: any;
    webkitBorderImage?: any;
    webkitBorderRadius?: any;
    webkitBorderStart?: any;
    webkitBorderStartColor?: any;
    webkitBorderStartStyle?: any;
    webkitBorderStartWidth?: any;
    webkitBorderTopLeftRadius?: any;
    webkitBorderTopRightRadius?: any;
    webkitBorderVerticalSpacing?: any;
    webkitBoxAlign?: any;
    webkitBoxDecorationBreak?: any;
    webkitBoxDirection?: any;
    webkitBoxFlex?: any;
    webkitBoxOrdinalGroup?: any;
    webkitBoxOrient?: any;
    webkitBoxPack?: any;
    webkitBoxReflect?: any;
    webkitBoxShadow?: any;
    webkitBoxSizing?: any;
    webkitClipPath?: any;
    webkitColumnBreakAfter?: any;
    webkitColumnBreakBefore?: any;
    webkitColumnBreakInside?: any;
    webkitColumnCount?: any;
    webkitColumnGap?: any;
    webkitColumnRule?: any;
    webkitColumnRuleColor?: any;
    webkitColumnRuleStyle?: any;
    webkitColumnRuleWidth?: any;
    webkitColumnSpan?: any;
    webkitColumnWidth?: any;
    webkitColumns?: any;
    webkitFilter?: any;
    webkitFlex?: any;
    webkitFlexBasis?: any;
    webkitFlexDirection?: any;
    webkitFlexFlow?: any;
    webkitFlexGrow?: any;
    webkitFlexShrink?: any;
    webkitFlexWrap?: any;
    webkitFontFeatureSettings?: any;
    webkitFontSmoothing?: any;
    webkitHighlight?: any;
    webkitHyphenateCharacter?: any;
    webkitJustifyContent?: any;
    webkitLineBreak?: any;
    webkitLineClamp?: any;
    webkitLocale?: any;
    webkitLogicalHeight?: any;
    webkitLogicalWidth?: any;
    webkitMarginAfter?: any;
    webkitMarginBefore?: any;
    webkitMarginEnd?: any;
    webkitMarginStart?: any;
    webkitMask?: any;
    webkitMaskBoxImage?: any;
    webkitMaskBoxImageOutset?: any;
    webkitMaskBoxImageRepeat?: any;
    webkitMaskBoxImageSlice?: any;
    webkitMaskBoxImageSource?: any;
    webkitMaskBoxImageWidth?: any;
    webkitMaskClip?: any;
    webkitMaskComposite?: any;
    webkitMaskImage?: any;
    webkitMaskOrigin?: any;
    webkitMaskPosition?: any;
    webkitMaskPositionX?: any;
    webkitMaskPositionY?: any;
    webkitMaskRepeat?: any;
    webkitMaskRepeatX?: any;
    webkitMaskRepeatY?: any;
    webkitMaskSize?: any;
    webkitMaxLogicalHeight?: any;
    webkitMaxLogicalWidth?: any;
    webkitMinLogicalHeight?: any;
    webkitMinLogicalWidth?: any;
    webkitOpacity?: any;
    webkitOrder?: any;
    webkitPaddingAfter?: any;
    webkitPaddingBefore?: any;
    webkitPaddingEnd?: any;
    webkitPaddingStart?: any;
    webkitPerspective?: any;
    webkitPerspectiveOrigin?: any;
    webkitPerspectiveOriginX?: any;
    webkitPerspectiveOriginY?: any;
    webkitPrintColorAdjust?: any;
    webkitRtlOrdering?: any;
    webkitRubyPosition?: any;
    webkitShapeImageThreshold?: any;
    webkitShapeMargin?: any;
    webkitShapeOutside?: any;
    webkitTapHighlightColor?: any;
    webkitTextCombine?: any;
    webkitTextDecorationsInEffect?: any;
    webkitTextEmphasis?: any;
    webkitTextEmphasisColor?: any;
    webkitTextEmphasisPosition?: any;
    webkitTextEmphasisStyle?: any;
    webkitTextFillColor?: any;
    webkitTextOrientation?: any;
    webkitTextSecurity?: any;
    webkitTextSizeAdjust?: any;
    webkitTextStroke?: any;
    webkitTextStrokeColor?: any;
    webkitTextStrokeWidth?: any;
    webkitTransform?: any;
    webkitTransformOrigin?: any;
    webkitTransformOriginX?: any;
    webkitTransformOriginY?: any;
    webkitTransformOriginZ?: any;
    webkitTransformStyle?: any;
    webkitTransition?: any;
    webkitTransitionDelay?: any;
    webkitTransitionDuration?: any;
    webkitTransitionProperty?: any;
    webkitTransitionTimingFunction?: any;
    webkitUserDrag?: any;
    webkitUserModify?: any;
    webkitUserSelect?: any;
    webkitWritingMode?: any;
    whiteSpace?: any;
    widows?: any;
    width?: any;
    willChange?: any;
    wordBreak?: any;
    wordSpacing?: any;
    wordWrap?: any;
    writingMode?: any;
    x?: any;
    y?: any;
    zIndex?: any;
    zoom?: any;
    [key: string]: string | number | ICssObject | (string | number | ICssObject)[];
};

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
    ${cssifyObject(customTheme?.base?.css ?? {})};
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
 * @param uiStore 符合對應套件包的 wowgoSotre
 * @returns 所產生對應的css樣式模板
 * @example
 * 
 */
export const themeMaker =
    (
        props: any,
        propsTheme: ((style: IcssTaggedTemplateObject, uiStore: object | undefined, porpsFromDom: any, utils: any) => IcssTaggedTemplateObject) | undefined,
        uiTheme: IcssTaggedTemplateObject,
        uiStore: object | undefined
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
 * @param uiStore 符合對應套件包的 wowgoSotre
 * @param domKey 包裝別的組件時，派發的 Key 值
 * @returns 所產生 themeMaker 函數內所需的 propsTheme 函數
 * @example
 * 
 */
export const themeMakerWithDomKey = <T extends IcssTaggedTemplateObjectWithDomKey, S extends any>(
    props: any,
    propsTheme: ((style: T, uiStore: object | undefined, porpsFromDom: any, utils: any) => T) | undefined,
    uiTheme: T,
    uiStore: object | undefined,
    domKey: string
)
    :
    ((style: S, uiStore: object | undefined, porpsFromDom: any, utils: any) => S) | undefined => {

    if (_.isNil(propsTheme) || _.isPlainObject(propsTheme)) {
        // 沒有 propsTheme ，即不覆寫
        return (style: S, uiStore: object | undefined, porpsFromDom: any, utils: any) => {
            return uiTheme?.[domKey] as S;
        }
    }
    else {
        let customTheme = propsTheme(uiTheme, uiStore, props, null)?.[domKey];
        return (style: S, uiStore: object | undefined, porpsFromDom: any, utils: any) => {
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
    ${cssifyObject(customTheme?.base?.css ?? {})};
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
 * @param uiStore 符合對應套件包的 wowgoSotre
 * @returns 所產生繼承組件對應的css樣式模板
 */
export const extendStylesThemeMaker = <T extends IPropsThemeReturnWithSelectorKey>(
    props: any,
    propsTheme: ((style: T, uiStore: object | undefined, porpsFromDom: any, utils: any) => T) | undefined,
    uiTheme: T,
    uiStore: object | undefined,
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
 * @param uiStore 符合對應套件包的 wowgoSotre
 * @param domKey 包裝別的組件時，派發的 Key 值
 * @returns 所產生 extendStylesThemeMaker 函數內所需的 propsTheme 函數
 */
export const extendStylesThemeMakerWithDomKey = <T extends IPropsThemeReturnWithSelectorKey, S extends any>(
    props: any,
    propsTheme: ((style: T, uiStore: object | undefined, porpsFromDom: any, utils: any) => T) | undefined,
    uiTheme: T,
    uiStore: object | undefined,
    domKey: string
)
    :
    ((style: S, uiStore: object | undefined, porpsFromDom: any, utils: any) => S) | undefined => {

    if (_.isNil(propsTheme) || _.isPlainObject(propsTheme)) {
        // 沒有 propsTheme ，即不覆寫
        return (style: S, uiStore: object | undefined, porpsFromDom: any, utils: any) => {
            return uiTheme?.[domKey] as S;
        }
    }
    else {
        let customTheme = propsTheme(uiTheme, uiStore, props, null)?.[domKey];
        return (style: S, uiStore: object | undefined, porpsFromDom: any, utils: any) => {
            return customTheme as S;
        }

    }
}



