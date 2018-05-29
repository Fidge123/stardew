export class SaveGame {
  private file = '';
  private output = '';
  private reader = new FileReader();

  constructor(input: File) {
    this.reader.readAsText(input);
    this.reader.onloadend = this.onloadend;
  }

  public transform(remove?: string, add?: string): void {
    if (remove && add) {
      this.output = this.file;
    }
  }

  public download(): string {
    return this.output;
  }

  private onloadend(event: Event): void {
    const target = event.target as FileReader;
    if (target) {
      this.file = target.result;
    }
  }

}
