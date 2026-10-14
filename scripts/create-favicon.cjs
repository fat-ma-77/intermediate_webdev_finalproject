'use strict';
const fs = require('fs');
const path = require('path');

// Generate a real 32-bit Windows ICO with a small interest-growth symbol.
const size = 32;
const imageBytes = 40 + size * size * 4 + size * 4;
const icon = Buffer.alloc(22 + imageBytes);
icon.writeUInt16LE(1, 2);
icon.writeUInt16LE(1, 4);
icon[6] = size;
icon[7] = size;
icon.writeUInt16LE(1, 10);
icon.writeUInt16LE(32, 12);
icon.writeUInt32LE(imageBytes, 14);
icon.writeUInt32LE(22, 18);
icon.writeUInt32LE(40, 22);
icon.writeInt32LE(size, 26);
icon.writeInt32LE(size * 2, 30);
icon.writeUInt16LE(1, 34);
icon.writeUInt16LE(32, 36);
icon.writeUInt32LE(size * size * 4, 42);
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const outside = Math.hypot(x - Math.max(6, Math.min(25, x)), y - Math.max(6, Math.min(25, y))) > 6;
    const bar = y <= 25 && ((x >= 7 && x <= 11 && y >= 19) ||
      (x >= 14 && x <= 18 && y >= 13) || (x >= 21 && x <= 25 && y >= 7));
    const color = bar ? [235, 249, 255] : [33, 58, 92];
    const offset = 62 + ((size - 1 - y) * size + x) * 4;
    icon[offset] = color[2];
    icon[offset + 1] = color[1];
    icon[offset + 2] = color[0];
    icon[offset + 3] = outside ? 0 : 255;
    if (outside) icon[62 + size * size * 4 + (size - 1 - y) * 4 + (x >> 3)] |= 1 << (7 - (x % 8));
  }
}
const target = path.resolve(__dirname, '../assets/favicon.ico');
fs.writeFileSync(target, icon);
console.log('Created assets/favicon.ico (' + icon.length + ' bytes)');
