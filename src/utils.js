export const canvas = (() => {
    const canvas = document.createElement("canvas")
    document.body.prepend(canvas)
    return canvas
})();