import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services';
import { IGalleryItem } from '../../types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-items-gallery',
  templateUrl: './items-gallery.component.html',
  styleUrls: ['./items-gallery.component.scss']
})
export class ItemsGalleryComponent implements OnInit {
  storeItems: Observable<IGalleryItem>;
  constructor(private inventoryService: InventoryService) {
    this.storeItems = this.inventoryService.storeItems;
  }

  ngOnInit() {
  }

}
