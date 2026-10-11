const fs = require('fs');
const path = require('path');

function searchDb(filePath, label) {
  if (!fs.existsSync(filePath)) return;
  try {
    const temp = 'temp_' + path.basename(filePath);
    fs.copyFileSync(filePath, temp);
    const buf = fs.readFileSync(temp);
    fs.unlinkSync(temp);
    const str = buf.toString('latin1');
    const matches = str.match(/https?:\/\/[a-zA-Z0-9_\-\.\/]*artstation\.com[a-zA-Z0-9_\-\.\/]*/g) || [];
    console.log(label, [...new Set(matches)]);
  } catch (e) {
    console.log(label, 'error:', e.message);
  }
}

// Check Chrome profiles
const chromeBase = 'C:\\Users\\shind\\AppData\\Local\\Google\\Chrome\\User Data';
if (fs.existsSync(chromeBase)) {
  fs.readdirSync(chromeBase).forEach(f => {
    searchDb(path.join(chromeBase, f, 'History'), `Chrome ${f}`);
  });
}

// Check Edge profiles
const edgeBase = 'C:\\Users\\shind\\AppData\\Local\\Microsoft\\Edge\\User Data';
if (fs.existsSync(edgeBase)) {
  fs.readdirSync(edgeBase).forEach(f => {
    searchDb(path.join(edgeBase, f, 'History'), `Edge ${f}`);
  });
}
