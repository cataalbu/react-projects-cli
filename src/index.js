#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';

import {
  addGeneralTemplates,
  configFiles,
  createFolderStructure,
  initProject,
  installDependencies,
  transformToScss,
} from './init.js';

program
  .version('1.0.0')
  .description(
    'Personal CLI tool bootstraping React projects and generating files.'
  );

program
  .command('generate-project <project-name>')
  .description(
    'Generates a new React project using Vite with Typescript by default and SWC'
  )
  .action(async (projectName) => {
    initProject(projectName);
    installDependencies(projectName);
    configFiles(projectName);
    addGeneralTemplates(projectName);
    createFolderStructure(projectName);
    await transformToScss(projectName);
  });

program
  .command('add-router')
  .description('Creates and adds a BrowserRouter from react-router-dom')
  .option('-y', 'you aggree to overrride your files')
  .option('--yes', 'you aggree to overrride your files')
  .option('--outlet', 'creates the structure with an AppLayout with an outlet')
  .option(
    '--require-auth',
    'creates router with component that requires authentication'
  )
  .action(async (options) => {
    if (!options.y && !options.yes) {
      const { confirm } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Are you sure you want to override your files?',
        },
      ]);
      if (!confirm) return;
    }
  });

program.parse(process.argv);
