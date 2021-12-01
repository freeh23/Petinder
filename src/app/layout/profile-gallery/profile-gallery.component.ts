import {Component, OnInit} from '@angular/core';
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets : Pet[];
  selectedPet? : Pet;

  constructor(private petService: PetService) {
    this.pets = [];
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() : void {
    this.petService.getPets().subscribe(
      pets => this.pets = pets);
  }

  selectPet(pet : Pet) : void {
    this.selectedPet = pet;
}

}
