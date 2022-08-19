export const hexToRGB = (hex, alpha) => {
    if (hex && hex.length === 7) {
        const r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if(isNaN(r) || isNaN(g) || isNaN(b)) {
            return false
        }

        if (alpha) {
            return "rgb(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    } else {
        return false
    }
}