import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

reviews: Observable<any>

  constructor(private restauranteService : RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
