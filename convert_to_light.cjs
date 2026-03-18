const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages/app');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replacements
  content = content.replace(/bg-\[\#050505\]/g, 'bg-slate-50');
  content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-white');
  content = content.replace(/bg-\[\#111111\]\/50/g, 'bg-white');
  content = content.replace(/bg-\[\#111111\]/g, 'bg-white');
  content = content.replace(/bg-\[\#1a1a1a\]/g, 'bg-slate-100');
  
  content = content.replace(/border-white\/5/g, 'border-slate-200');
  content = content.replace(/border-white\/10/g, 'border-slate-200');
  content = content.replace(/border-white\/20/g, 'border-slate-300');
  
  content = content.replace(/text-white\/40/g, 'text-slate-400');
  content = content.replace(/text-white\/50/g, 'text-slate-500');
  content = content.replace(/text-white\/60/g, 'text-slate-500');
  content = content.replace(/text-white\/70/g, 'text-slate-600');
  content = content.replace(/text-white\/80/g, 'text-slate-700');
  content = content.replace(/text-white\/90/g, 'text-slate-800');
  content = content.replace(/text-white/g, 'text-slate-900');
  
  content = content.replace(/bg-white\/5/g, 'bg-slate-50');
  content = content.replace(/bg-white\/10/g, 'bg-slate-100');
  content = content.replace(/bg-white\/20/g, 'bg-slate-200');
  
  content = content.replace(/hover:bg-white\/5/g, 'hover:bg-slate-50');
  content = content.replace(/hover:bg-white\/10/g, 'hover:bg-slate-100');
  content = content.replace(/hover:bg-white\/20/g, 'hover:bg-slate-200');
  
  content = content.replace(/hover:text-white\/90/g, 'hover:text-slate-800');
  content = content.replace(/hover:text-white/g, 'hover:text-slate-900');
  
  content = content.replace(/divide-white\/5/g, 'divide-slate-200');
  content = content.replace(/divide-white\/10/g, 'divide-slate-200');
  
  content = content.replace(/ring-white\/10/g, 'ring-slate-200');
  content = content.replace(/ring-white\/20/g, 'ring-slate-300');

  // Also fix the neon colors if they were changed from primary colors
  content = content.replace(/text-\[\#00f3ff\]/g, 'text-indigo-600');
  content = content.replace(/text-\[\#b026ff\]/g, 'text-purple-600');
  content = content.replace(/bg-\[\#00f3ff\]/g, 'bg-indigo-600');
  content = content.replace(/bg-\[\#b026ff\]/g, 'bg-purple-600');

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
replaceInFile(path.join(__dirname, 'src/components/layout/AppShell.tsx'));

console.log('Conversion complete');
