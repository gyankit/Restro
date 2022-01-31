import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { FileService } from 'src/app/service/file.service';
import { SessionService } from 'src/app/service/session.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  isError: boolean = false;
  error: any = null;
  menu = new Menu('', '', '', 0, 0, '', false, false, false);
  @Output() menuAdded = new EventEmitter();
  file!: File;

  constructor(private session: SessionService, private menuService: MenuService, private fileService: FileService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.menu.vid = this.session.uid;
    this.menuService.postRequest(this.menu).subscribe({
      next: (data: Menu) => {
        this.fileService.upload([this.file], data._id, 'menu').subscribe({
          next: (ndata) => { this.menuAdded.emit(ndata) },
          error: (error) => { this.menuAdded.emit(data) }
        });
      },
      error: (error) => {
        this.isError = true;
        this.error = error;
      }
    })
  }

  fileOnChange(event: any) {
    this.file = event.target.files[0];
  }

  boxClose() {
    this.isError = false;
  }

}
