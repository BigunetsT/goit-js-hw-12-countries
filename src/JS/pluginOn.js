import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');
const { notice } = require('@pnotify/core');
const { defaults } = require('@pnotify/core');
defaults.closer = false;
defaults.sticker = false;
defaults.delay = 2000;

function pluginError() {
  return error('Too many matches found. Please enter a more specific query!');
}
function pluginNotice() {
  return notice('Please enter new query!');
}
export { pluginError, pluginNotice };
