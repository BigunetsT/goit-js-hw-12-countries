import './styles.css';
import searchInputHandler from './JS/searchInputHandler';
import refs from './JS/refs';
const debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(searchInputHandler, 500));
