import fs from 'fs';
import path from 'path';

export function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function fn(name) {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

export default {
  walkSync,
};
