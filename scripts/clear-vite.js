const fs = require("fs");
const path = require("path");

const foldersToDelete = [
  "node_modules/.vite",
  "node_modules/.turbo",
  "node_modules/.cache",
  "dist",
];

foldersToDelete.forEach((folder) => {
  const folderPath = path.resolve(__dirname, folder);

  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`🧹 Deleted: ${folder}`);
  } else {
    console.log(`✅ Skipped (not found): ${folder}`);
  }
});

console.log("🎉 Cache cleaned successfully!");
