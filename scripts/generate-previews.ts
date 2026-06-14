import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define explicit path contexts for modern ESM modules in Node
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const OUTPUT_DIR: string = path.resolve(__dirname, '../public/connections');

// 1. Data Contracts
interface TargetConnection {
  name: string;
  website: string;
}

// 2. Strongly Typed Configuration Array
const connections: TargetConnection[] = [
  {
    name: 'smiti-nathan',
    website: 'https://smitinathan.com/'
  },
  {
    name: 'rebecca-deprey',
    website: 'https://rebeccamdeprey.com/'
  },
  {
    name: 'steven-taylor',
    website: 'https://ubuntufa.com/'
  }
  // Type checker will automatically catch missing or misspelled keys here
];

/**
 * Downloads a screenshot from Microlink API and writes the binary stream to disk
 */
async function downloadScreenshot(name: string, url: string): Promise<void> {
  const encodedUrl: string = encodeURIComponent(url);
  const apiUrl: string = `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&embed=screenshot.url`;
  const outputPath: string = path.join(OUTPUT_DIR, `${name}.png`);

  try {
    const response: Response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
    const buffer: Buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);
    console.log(`✓ Captured preview for ${name}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`✗ Failed to capture preview for ${name}:`, errorMessage);
  }
}

/**
 * Runtime Execution Context orchestration
 */
async function main(): Promise<void> {
  // Ensure target output folder structure safely exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Starting build-time connection screenshot capture...');

  for (const connection of connections) {
    await downloadScreenshot(connection.name, connection.website);
  }

  console.log('Screenshot synchronization complete.');
}

// Fire runtime loop
main();
