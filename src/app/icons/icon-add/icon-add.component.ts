import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-icon-add',
  templateUrl: './icon-add.component.html',
  styleUrls: ['./icon-add.component.scss']
})
export class IconAddComponent implements OnInit {

  items!: MenuItem[];
  radius: number = 80;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [
      {
          icon: 'pi pi-facebook',
          url: 'https://www.facebook.com/jorgedejesus.riveraperez.1'

      },
      {
          icon: 'pi pi-instagram',
          url: 'https://www.instagram.com/jorge_de_jesus_r/?hl=es-la'

      },
      {
          icon: 'pi pi-whatsapp',
          url: 'https://api.whatsapp.com/send?phone=7621040098'

      },
      {
          icon: 'pi pi-github',
          url: 'https://github.com/JorgeR-Code'

      }

    ]
}
}
