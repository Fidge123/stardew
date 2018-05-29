import { SaveGame } from './save-game';

let saveGame: SaveGame;
let filename: string;

const fileInput = document.getElementById('input');
if (fileInput) {
  fileInput.addEventListener('change', read);
}

const applyBtn = document.getElementById('apply');
if (applyBtn) {
  applyBtn.addEventListener('press', apply);
}

const downloadBtn = document.getElementById('download');
if (downloadBtn) {
  downloadBtn.addEventListener('press', download);
}

export function read(event: Event): void {
  const element = event.target as HTMLInputElement;
  if (element) {
    const files = element.files;
    if (files && files.length) {
      saveGame = new SaveGame(files[0]);
      filename = files[0].name;
    }
  }
}

export function apply(): void {
  const oldInput = document.getElementById('old') as HTMLInputElement;
  const oldName = oldInput ? oldInput.value : '';
  const newInput = document.getElementById('new') as HTMLInputElement;
  const newName = newInput ? newInput.value : '';

  saveGame.transform(oldName, newName);
}

export function download(): void {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(saveGame.download()));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
