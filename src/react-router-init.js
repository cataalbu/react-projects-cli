import { fileURLToPath } from 'url';
import { mkdirSync, readFileSync, write, writeFileSync } from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function addSimpleRouter() {
  const appContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'App.tsx.template'),
    'utf8'
  );
  const appRouterContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'AppRouter.tsx.template'),
    'utf8'
  );
  const routerIndexContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'index.ts.template'),
    'utf8'
  );

  const routerPathsContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'path.ts.template'),
    'utf8'
  );

  writeFileSync(path.join('src', 'App.tsx'), appContent);
  writeFileSync(path.join('src', 'routes', 'AppRouter.tsx'), appRouterContent, {
    flag: 'w+',
  });
  writeFileSync(path.join('src', 'routes', 'index.ts'), routerIndexContent, {
    flag: 'w+',
  });
  writeFileSync(path.join('src', 'routes', 'paths.ts'), routerPathsContent, {
    flag: 'w+',
  });
}

export function addRouterWithOutlet() {
  const appContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'App.tsx.template'),
    'utf8'
  );
  const appRouterContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'outlet',
      'AppRouter.tsx.template'
    ),
    'utf8'
  );

  const appLayoutContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'outlet',
      'AppLayout.tsx.template'
    ),
    'utf8'
  );

  const appLayoutStylesContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'outlet',
      'AppLayout.module.scss.template'
    ),
    'utf8'
  );

  const routerIndexContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'index.ts.template'),
    'utf8'
  );

  const routerPathsContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'path.ts.template'),
    'utf8'
  );

  writeFileSync(path.join('src', 'App.tsx'), appContent);
  writeFileSync(path.join('src', 'routes', 'AppRouter.tsx'), appRouterContent, {
    flag: 'w+',
  });
  writeFileSync(path.join('src', 'routes', 'index.ts'), routerIndexContent, {
    flag: 'w+',
  });
  writeFileSync(path.join('src', 'routes', 'paths.ts'), routerPathsContent, {
    flag: 'w+',
  });

  mkdirSync(path.join('src', 'components', 'layout', 'AppLayout'), {
    recursive: true,
  });

  writeFileSync(
    path.join('src', 'components', 'layout', 'AppLayout', 'AppLayout.tsx'),
    appLayoutContent,
    {
      flag: 'w+',
    }
  );
  writeFileSync(
    path.join(
      'src',
      'components',
      'layout',
      'AppLayout',
      'AppLayout.module.scss'
    ),
    appLayoutStylesContent,
    {
      flag: 'w+',
    }
  );
}

export function addRouterWithRequireAuth() {
  const appContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'App.tsx.template'),
    'utf8'
  );
  const appRouterContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'requireAuth',
      'AppRouter.tsx.template'
    ),
    'utf8'
  );

  const appLayoutContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'requireAuth',
      'AppLayout.tsx.template'
    ),
    'utf8'
  );

  const appLayoutStylesContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'requireAuth',
      'AppLayout.module.scss.template'
    ),
    'utf8'
  );

  const requireAuthContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'requireAuth',
      'RequireAuth.tsx.template'
    ),
    'utf8'
  );

  const redirectAuthenticatedUser = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'requireAuth',
      'RedirectAuthenticatedUser.tsx.template'
    ),
    'utf8'
  );

  const utilsIndexContent = readFileSync(
    path.join(
      __dirname,
      'templates',
      'routes',
      'requireAuth',
      'utils.index.ts.template'
    ),
    'utf8'
  );

  const routerIndexContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'index.ts.template'),
    'utf8'
  );

  const routerPathsContent = readFileSync(
    path.join(__dirname, 'templates', 'routes', 'path.ts.template'),
    'utf8'
  );

  writeFileSync(path.join('src', 'App.tsx'), appContent);
  writeFileSync(path.join('src', 'routes', 'AppRouter.tsx'), appRouterContent, {
    flag: 'w+',
  });
  writeFileSync(path.join('src', 'routes', 'index.ts'), routerIndexContent, {
    flag: 'w+',
  });
  writeFileSync(path.join('src', 'routes', 'paths.ts'), routerPathsContent, {
    flag: 'w+',
  });

  mkdirSync(path.join('src', 'components', 'layout', 'AppLayout'), {
    recursive: true,
  });

  writeFileSync(
    path.join('src', 'components', 'layout', 'AppLayout', 'AppLayout.tsx'),
    appLayoutContent,
    {
      flag: 'w+',
    }
  );
  writeFileSync(
    path.join(
      'src',
      'components',
      'layout',
      'AppLayout',
      'AppLayout.module.scss'
    ),
    appLayoutStylesContent,
    {
      flag: 'w+',
    }
  );

  mkdirSync(path.join('src', 'components', 'utils'), {
    recursive: true,
  });
  writeFileSync(
    path.join('src', 'components', 'utils', 'RequireAuth.tsx'),
    requireAuthContent,
    {
      flag: 'w+',
    }
  );
  writeFileSync(
    path.join('src', 'components', 'utils', 'RedirectAuthenticatedUser.tsx'),
    redirectAuthenticatedUser,
    {
      flag: 'w+',
    }
  );
  writeFileSync(
    path.join('src', 'components', 'utils', 'index.ts'),
    utilsIndexContent,
    {
      flag: 'w+',
    }
  );
}
