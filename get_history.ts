import { execSync } from 'child_process';
import fs from 'fs';
try {
  const output = execSync('git log -p src/pages/app/Overview.tsx').toString();
  fs.writeFileSync('git_history.txt', output);
} catch (e) {
  fs.writeFileSync('git_history.txt', String(e));
}
