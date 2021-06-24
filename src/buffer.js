let toBuffer;

try {
    const Frame = require("canvas-to-buffer");
    toBuffer = canvas => {
        const frame = new Frame(canvas, {
            image: {
                types: ["png"],
            },
        });
        return frame.toBuffer();
    };
} catch {
    toBuffer = canvas => {
        return canvas.toBuffer();
    };
}

module.exports = toBuffer;