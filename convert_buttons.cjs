const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages/app');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/variant="neon"/g, 'variant="primary"');
  content = content.replace(/variant="outline"/g, 'variant="outline-light"');
  content = content.replace(/variant="ghost"/g, 'variant="ghost-light"');
  
  // Remove text-black from primary buttons
  content = content.replace(/variant="primary"([^>]*)text-black/g, 'variant="primary"$1');
  content = content.replace(/text-black([^>]*)variant="primary"/g, '$1variant="primary"');

  // Also remove text-white if any
  content = content.replace(/variant="primary"([^>]*)text-white/g, 'variant="primary"$1');

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  });
}

walkDir(directoryPath);

console.log('Conversion complete');
