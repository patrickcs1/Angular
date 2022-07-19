import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu-item/menu-item.model';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu : Observable<MenuItem>

  constructor(private restauranteService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restauranteService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
