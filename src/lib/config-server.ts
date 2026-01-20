import fs from 'fs';
import path from 'path';
import { parse } from 'smol-toml';
import { Config } from './config-client';

export function getSiteConfig(): Config {
    const configPath = path.join(process.cwd(), 'config.toml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    return parse(fileContents) as unknown as Config;
}
