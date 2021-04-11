
/**
 * 複製文字到剪貼簿
 * @param content 要複製到剪貼簿的文字
 */
export const stringCopy = (content: string) => {
    const el = document.createElement('textarea');
    el.value = content;
    //console.log(el.value)
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
