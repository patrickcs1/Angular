import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import {RestaurantService} from './restaurant.service';
import 'rxjs/add/operator/catch'


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]   

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }
}
