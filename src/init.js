import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'fs';
import { parse, stringify } from 'comment-json';
import { globSync } from 'glob';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function initProject(projectName) {
  // Create Vite projectName
  spawnSync(
    'yarn',
    ['create', 'vite', projectName, '--template', 'react-swc-ts'],
    { stdio: 'inherit' }
  );
  // Init git repository
  spawnSync('git', ['init'], {
    cwd: path.join(projectName),
    stdio: 'inherit',
  });
}

export function installDependencies(projectName) {
  // Install default dependencies
  spawnSync('yarn', [], {
    cwd: path.join(projectName),
    stdio: 'inherit',
  });
  // Install projectName dependencies
  spawnSync(
    'yarn',
    [
      'add',
      'react-router-dom',
      'react-redux',
      'redux-persist',
      '@reduxjs/toolkit',
      'query-string',
      'formik',
      'yup',
      'classnames',
    ],
    {
      cwd: path.join(projectName),
      stdio: 'inherit',
    }
  );
  // Install dev dependencies
  spawnSync(
    'yarn',
    ['add', '-D', '@types/node', 'sass', 'vite-plugin-svgr', 'prettier'],
    {
      cwd: path.join(projectName),
      stdio: 'inherit',
    }
  );
}

export function configFiles(projectName) {
  copyFileSync(
    path.join(__dirname, 'templates', 'vite.config.ts.template'),
    path.join(projectName, 'vite.config.ts')
  );
  copyFileSync(
    path.join(__dirname, 'templates', 'vite-env.d.ts.template'),
    path.join(projectName, 'vite-env.d.ts')
  );

  // Addd extra configuration to tsconfig.node.json
  const tsconfigNode = parse(
    readFileSync(path.join(projectName, 'tsconfig.node.json'), 'utf8'),
    null,
    false
  );
  tsconfigNode['types'] = ['vite-plugin-svgr/client'];

  writeFileSync(
    path.join(projectName, 'tsconfig.node.json'),
    stringify(tsconfigNode, null, 2)
  );

  // Add extra configuration to tsconfig.app.json
  const tsconfigApp = parse(
    readFileSync(path.join(projectName, 'tsconfig.app.json'), 'utf8'),
    null,
    false
  );

  tsconfigApp['paths'] = {
    '@/*': ['./src/*'],
  };
  tsconfigApp['include'] = ['src', 'vite-env.d.ts', 'vitest.setup.ts'];
  tsconfigApp['exclude'] = ['node_modules'];
  writeFileSync(
    path.join(projectName, 'tsconfig.app.json'),
    stringify(tsconfigApp, null, 2)
  );
}

export function addGeneralTemplates(projectName) {
  copyFileSync(
    path.join(__dirname, 'templates', '.gitignore.template'),
    path.join(projectName, '.gitignore')
  );
  copyFileSync(
    path.join(__dirname, 'templates', '.env.local.template'),
    path.join(projectName, '.env.local')
  );
}

export function createFolderStructure(projectName) {
  mkdirSync(path.join(projectName, 'src', 'components', 'common'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'components', 'layout'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'types'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'context'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'hooks'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'pages'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'redux', 'features'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'routes'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'utils'), {
    recursive: true,
  });
  mkdirSync(path.join(projectName, 'src', 'scsss', 'abstracts'), {
    recursive: true,
  });

  writeFileSync(path.join(projectName, 'src', 'components', 'index.ts'), '', {
    flag: 'w+',
  });
}

export function transformToScss(projectName) {
  try {
    const cssFiles = globSync(`${projectName}/**/*.css`);

    for (const file of cssFiles) {
      const scssFile = file.replace(/\.css$/, '.scss');
      renameSync(file, scssFile);
    }

    const projectFiles = globSync(`${projectName}/**/*.tsx`);

    for (const file of projectFiles) {
      let content = readFileSync(file, 'utf8');
      let updated = false;

      content = content.replace(/\.css/g, '.scss');
      if (updated) {
        writeFileSync(file, content);
      }
    }
  } catch (error) {
    console.error(`Failed to transform files: ${error.message}`);
  }
}
