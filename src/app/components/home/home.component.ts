import { Component } from '@angular/core';
import { FetchAddressService } from 'src/app/services/fetch-address.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  address: string = '';
  approximateAddress: string | undefined;

  constructor(private fetchAddressService: FetchAddressService){}

  getAddress(){
    this.fetchAddressService.lookupAddress(this.address).subscribe(
      (result) =>{
        this.approximateAddress = result;
      },
      (error) =>{
        this.approximateAddress = "address not found";
      }
    )
  }
}
