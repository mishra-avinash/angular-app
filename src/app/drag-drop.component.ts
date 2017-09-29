import {Component, Output} from "@angular/core";
import {FileDropModule} from 'angular2-file-drop';

@Component ({
  selector: 'upload-file',
  templateUrl: './drag-drop.component.html',
  // directives: [ FileDropModule],
})

export class DragDropComponent{
  public fileIsOver: boolean = false;
  @Output() public options = {
    readAs: 'ArrayBuffer'
  };

  private file: File;

  public fileOver(fileIsOver: boolean): void {
    this.fileIsOver = fileIsOver;
  }

  public onFileDrop(file: File): void {
    console.log('Got file!');
  }
}
