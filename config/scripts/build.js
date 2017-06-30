import webpack from 'webpack';
import { log } from '../utils';
import webpackConfigurationFactory from '../webpack';

/*
  Our Factory takes a config object and returns a webpack configuration
*/

const webpackConfig = webpackConfigurationFactory({});

const compiler = webpack(webpackConfig);

log({
  title: 'Starting Build',
  message: 'Starting Webpack Compiltation',
});

compiler.run((err, stats) => {
  if (err) {
    return log({
      title: 'Build Failed',
      message: err.message,
      level: 'error',
    });
  }
  log({
    title: 'Build Complete!',
    message: 'Webpack Build Completed!',
  });
  console.log(stats.toString({ colors: true }));
});
