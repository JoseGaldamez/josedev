export const removeHTMLWrapper = (text: string) => {
        return text.replace("```html", "").replace("```", "");
}