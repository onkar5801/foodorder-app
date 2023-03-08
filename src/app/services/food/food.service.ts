import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():foods[]{
    return[
      {
        id:1,
        name:'Veg-pizza',
        price:90,
        cookTime:'20-30',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-1.jpg',
        tags:['fastfood','pizza','lunch'],
      },
      {
        id:2,
        name:'Veg-Burger',
        price:60,
        cookTime:'15-25',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-2.jpg',
        tags:['fastfood','Burger','lunch'],
      },
      {
        id:3,
        name:'Burger-Combo',
        price:100,
        cookTime:'20-30',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-3.jpg',
        tags:['fastfood','Burger','Fries','lunch'],
      },
      {
        id:4,
        name:'Fries',
        price:50,
        cookTime:'10-20',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-4.jpg',
        tags:['fastfood','Fries','lunch'],
      },
      {
        id:5,
        name:'Veg-Soup',
        price:110,
        cookTime:'10-15',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-5.jpg',
        tags:['fastfood','soup','starter'],
      },
      {
        id:6,
        name:'Vada-Pav',
        price:40,
        cookTime:'10-20',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-6.jpg',
        tags:['fastfood','vdapav','lunch'],
      },
      {
        id:7,
        name:'Biryani',
        price:150,
        cookTime:'40-50',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-7.jpg',
        tags:['fastfood','biryani','lunch'],
      },
      {
        id:8,
        name:'sandwitch',
        price:100,
        cookTime:'20-30',
        favourite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'/assets/food-8.jpg',
        tags:['fastfood','sandwitch','lunch'],
      },
     
    ]
  }
}

