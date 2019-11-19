import { writable } from 'svelte/store';

export const info = writable({
  siteName: 'Custom Computer Tools',
  byLine: 'Making the right tools for the right job.',
  address: 'http://localhost:5000',
  GitHub: 'https://raw.githubusercontent.com/raguay/raguay.github.io/master',
  parts: ['donate.html'],
  local: false,
  styles: {
    backgroundColor: '#D1BD79',
    backgroundPicture: '',
    borderColor: '#AA7942',
    divColor: '#ECDAAC',
    divBackgroundPicture: '',
    borderSize: '5px',
    borderRadius: '10px',
    textColor: 'black',
    font: '20px Times New Romand, Arial',
    headerFont: '20px Verdana, Arial',
    showSideBar: true,
    sideBarLeft: false
  }
});


