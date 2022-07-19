import { Restaurant } from './restaurant/restaurant.model';
import { meat_api } from "app/app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";


@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {

      return this.http.get(`${meat_api}/restaurants`).map(response => response.json()).
      catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${meat_api}/restaurants/${id}`).map(response => response.json()).
    catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${meat_api}/restaurants/${id}/reviews`).map(response => response.json()).
    catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${meat_api}/restaurants/${id}/menu`).map(response => response.json()).
    catch(ErrorHandler.handleError);
  }
  
}
