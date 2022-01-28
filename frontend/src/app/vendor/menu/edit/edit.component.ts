import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StringSchemaDefinition } from 'mongoose';
import { Menu } from 'src/app/models/menu';
import { FileService } from 'src/app/service/file.service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  isError: boolean = false;
  error: any = null;
  @Input() id: any;
  @Output() viewEvent = new EventEmitter();
  menu = new Menu('', '', '', 0, 0, '', false, false, false);
  file!: File;
  imgpath!: string;

  constructor(private menuService: MenuService, private fileService: FileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.menuService.getRequest(1, this.id).subscribe({
      next: (resp: Menu) => this.menu = resp,
      error: (err: any) => console.error(err)
    });
  }

  onFormSubmit() {
    this.menuService.putRequest(this.menu).subscribe({
      next: (data) => {
        this.fileService.upload([this.file], data._id, 'menu').subscribe((d) => this.viewEvent.emit());
      },
      error: (error) => {
        this.isError = true;
        this.error = error;
      }
    });
  }

  boxClose() {
    this.isError = false;
  }

  cancelEdit() {
    this.viewEvent.emit();
  }

  fileOnChange(event: any) {
    this.file = event.target.files[0];
  }

}
