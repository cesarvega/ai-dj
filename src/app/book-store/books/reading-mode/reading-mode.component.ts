import { Component, ViewEncapsulation } from '@angular/core';
import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

@Component({
  selector: 'reading-mode',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: './reading-mode.component.html',
  styleUrl: './reading-mode.component.scss'
})
export class ReadingModeComponent{
  title = 'angular';
  state: any = EditorState.create({ schema });
  view: EditorView | undefined; 

  constructor(){
    this.view = new EditorView(document.getElementById('editor'),
      {
        state: this.state
      }
    );
  }   
}
