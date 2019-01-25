/*
  This script addresses issues within the react-native-animatable package where Erros are thrown instead of being handled gracefully.

  Issue found in version: 1.3.1

 */

const fs = require('fs');
const path = require('path');

const readDir = dir => (
  dir &&
  fs.statSync(dir).isDirectory()
    ? Array.prototype.concat(...fs.readdirSync(dir).map(f => readDir(path.join(dir, f))))
    : dir
);

const search = `${__dirname}/../../../`;
const paths = readDir(search);

const toFind = [
  {
    file: '/react-native-animatable/createAnimatableComponent.js',
    replacements: [
      {
        find: 'throw new Error(`No animation registred by the name of ${animation}`);',
        replace: 'return {};',
      },
      {
        find: 'throw new Error(\'You cannot combine animation and transition props\')',
        replace: '',
      },
      {
        find: 'this.state.animationStyle,\n' +
        '            wrapStyleTransforms(this.state.transitionStyle),',
        replace: 'this.state.animationStyle,\n' +
        '            !animation && wrapStyleTransforms(this.state.transitionStyle),',
      },
    ],
  },
  {
    file: '/react-native-animatable/createAnimation.js',
    replacements: [
      {
        find: 'throw new Error(\'Animation definitions must have at least two values.\');',
        replace: 'return {};',
      },
      {
        find: 'throw new Error(\'Missing animation keyframe, this should not happen\');',
        replace: 'continue;',
      },
    ],
  },
];

toFind.forEach(({ file, replacements = [] }) => {
  const path = paths.find(i => i.includes(file));
  if (fs.existsSync(path)) {

    console.log(`REPLACING: ${path}`);

    const contents = fs.readFileSync(path).toString();
    const newContents = replacements.reduce((o, { find, replace }) => {
      return o.replace(find, replace)
    }, contents);
    fs.writeFileSync(path, newContents);
  }
});
