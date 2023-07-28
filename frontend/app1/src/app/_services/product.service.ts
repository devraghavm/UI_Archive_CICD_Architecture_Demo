import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app/_models";
import { environment } from "@environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<User[]>(`${environment.app}/products`);
  }

}