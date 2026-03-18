const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages/app');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/bg-\[\#111\]/g, 'bg-slate-50');
  content = content.replace(/rgba\(255,255,255,0\.05\)/g, 'rgba(0,0,0,0.05)');
  content = content.replace(/border-\[\#00f3ff\]\/50/g, 'border-indigo-500/50');
  content = content.replace(/ring-\[\#00f3ff\]\/50/g, 'ring-indigo-500/50');
  content = content.replace(/text-\[\#00f3ff\]/g, 'text-indigo-600');
  content = content.replace(/text-\[\#b026ff\]/g, 'text-purple-600');
  content = content.replace(/bg-\[\#00f3ff\]/g, 'bg-indigo-600');
  content = content.replace(/bg-\[\#b026ff\]/g, 'bg-purple-600');
  content = content.replace(/from-\[\#111111\]/g, 'from-slate-100');
  content = content.replace(/to-\[\#0a0a0a\]/g, 'to-slate-50');
  content = content.replace(/border-white\/10/g, 'border-slate-200');
  content = content.replace(/border-white\/5/g, 'border-slate-200');

  // Fix SVG base64
  // Old: PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=
  // New (rgba(0,0,0,0.05)): PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=
  content = content.replace(/PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI\+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=/g, 'PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=');

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
