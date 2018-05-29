import { SaveGame } from './save-game';

let saveGame: SaveGame;
let filename: string;

const fileInput = document.getElementById('file');
if (fileInput) {
  fileInput.addEventListener('change', read);
}

const applyBtn = document.getElementById('apply');
if (applyBtn) {
  applyBtn.addEventListener('click', apply);
}

const downloadBtn = document.getElementById('download');
if (downloadBtn) {
  downloadBtn.addEventListener('click', download);
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
  const oldInput = document.getElementById('remove') as HTMLInputElement;
  const oldName = oldInput ? oldInput.value : '';

  saveGame.transform(oldName);
}

export function download(): void {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(saveGame.download());
  link.download = filename;
  link.click();
}
