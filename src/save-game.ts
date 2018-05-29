export class SaveGame {
  private file = '';
  private output = '';
  private reader = new FileReader();

  constructor(input: File) {
    this.reader.readAsText(input);
    this.reader.onloadend = (event: Event): void => {
      this.onloadend(event);
    };
  }

  public transform(remove: string): void {
    this.output = this.file.replace(new RegExp(`<farmhand>.*<name>${remove}</name>.*</farmhand>`, 'g'), '');
  }

  public download(): Blob {
    return new Blob([this.output], { type: 'application/octet-binary' });
  }

  private onloadend(event: Event): void {
    const target = event.target as FileReader;
    if (target) {
      this.file = target.result;
    }
  }

}
