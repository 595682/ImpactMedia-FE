/* eslint-disable func-names */
// eslint-disable-next-line import/no-anonymous-default-export

// https://plopjs.com/documentation/

const listFolders = require('./plop/listFolders');

const prompts = [
  {
    type: 'list',
    name: 'type',
    message: 'What should I generate?',
    choices: () => [
      {
        name: '[C] Standalone component',
        value: 'component',
      },
      {
        name: '[CG] Component group',
        value: 'complexComponent',
      },
      {
        name: '[CG1] Component to an existing group',
        value: 'complexComponentChild',
      },
      {
        name: '[M] Stateless Module',
        value: 'module',
      },
      {
        name: '[M1] Module with API',
        value: 'moduleApi',
      },
      {
        name: '[M2] Module Component',
        value: 'moduleComponent',
      },
      {
        name: '[P] Page',
        value: 'page',
      },
    ],
  },
  {
    type: 'list',
    name: 'complexComponentRootFolder',
    message: 'Which component group should I expand?',
    when: (answer) => answer.type === 'complexComponentChild',
    choices: listFolders.getComponents,
  },
  {
    type: 'list',
    name: 'moduleRootFolder',
    message: 'Which module should I expand? (With a component)',
    when: (answer) => answer.type === 'moduleComponent',
    choices: listFolders.getModules,
  },
  {
    type: 'input',
    name: 'name',
    when: (answer) => answer.type !== 'page',
    message: 'How would you like to call it? (dont worry about the casing)',
  },
  {
    type: 'input',
    name: 'name',
    when: (answer) => answer.type === 'page',
    message: 'How would you like to call the PAGE?',
  },
  {
    type: 'input',
    name: 'componentName',
    message:
      'How would you like to call the first component? (dont worry about the casing)',
    when: (answer) => answer.type === 'complexComponent',
  },
];

const actions = {
  component: [
    {
      type: 'add',
      path: 'src/common/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/component.template.hbs',
    },
  ],
  complexComponent: [
    {
      type: 'add',
      path: 'src/common/components/_{{pascalCase name}}/{{pascalCase componentName}}/index.tsx',
      templateFile: 'templates/component.template.hbs',
    },
  ],
  complexComponentChild: [
    {
      type: 'add',
      path: 'src/common/components/{{complexComponentRootFolder}}/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/component.template.hbs',
    },
  ],
  module: [
    {
      type: 'add',
      path: 'src/modules/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/module.template.hbs',
    },
  ],
  moduleApi: [
    {
      type: 'add',
      path: 'src/modules/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/module.template.hbs',
    },
    {
      type: 'add',
      path: 'src/modules/{{pascalCase name}}/components/index.tsx',
      templateFile: 'templates/component.template.hbs',
    },
    {
      type: 'add',
      path: 'src/modules/{{pascalCase name}}/api/{{pascalCase name}}API.ts',
      templateFile: 'templates/API.template.hbs',
    },
  ],
  moduleComponent: [
    {
      type: 'add',
      path: 'src/modules/{{moduleRootFolder}}/components/{{pascalCase name}}.tsx',
      templateFile: 'templates/component.template.hbs',
    },
  ],
  page: [
    {
      type: 'add',
      path: 'src/pages/{{name}}.tsx',
      templateFile: 'templates/page.template.hbs',
    },
  ],
};

module.exports = (plop) => {
  plop.setGenerator('generate', {
    description: 'Generate a new element',
    prompts,
    actions: ({ type }) => actions[type] || [],
  });
};
