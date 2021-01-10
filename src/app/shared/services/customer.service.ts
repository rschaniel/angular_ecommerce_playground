import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.interface';
import { Address } from '../models/address.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  public getCustomer(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + 'customer/' + customerId);
  }

  public getCustomerAddresses(customerId: number): Observable<Address[]> {
    return this.httpClient.get<Address[]>(this.baseUrl + 'customer/' + customerId + '/addresses');
  }
}
