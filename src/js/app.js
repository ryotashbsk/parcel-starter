import '../scss/style.scss';
import concat from './modules/concat';

const config = {
  title: document.title,
  app: document.getElementById('app'),
  str1: 'Parcel is a web application bundler,\n',
  str2: 'differentiated by its developer experience.',
}
const sentence = concat(config.str1, config.str2);
const formattedSentence = sentence.replace(/\r?\n/g, '<br>');
const html = `
	<h1 class="title">${config.title}</h1>
	<div class="main"><p class="text">${formattedSentence}</p></div>
`;

config.app.innerHTML = html;