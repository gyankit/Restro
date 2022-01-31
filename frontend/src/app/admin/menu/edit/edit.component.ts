import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/service/menu.service';

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

  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.menuService.getRequest(true, this.id).subscribe({
      next: (resp: Menu) => this.menu = resp,
      error: (err: any) => console.error(err)
    });
  }

  onFormSubmit() {
    this.menuService.putRequest(this.menu).subscribe({
      next: () => this.viewEvent.emit(),
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

}
