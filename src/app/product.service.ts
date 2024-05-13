import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      "_id": "630e46c4da6658683db4e203",
      "price": 19,
      "picture": "./assets/images/asterix.jpg",
      "description": "Ut sit anim sit cupidatat aliquip velit exercitation. Commodo labore ex dolore cupidatat occaecat aliquip. Sint eiusmod consequat voluptate consectetur ex proident pariatur aute enim adipisicing aliquip deserunt. Et sunt in labore aute do Lorem esse ipsum velit.\r\n",
      "name": "Astérix"
    },
    {
      "_id": "630e46c4784823ec049cb0d8",
      "price": 27,
      "picture": "./assets/images/Cesar.jpg",
      "description": "Lorem mollit amet aute laborum id officia incididunt aliqua ut irure consequat mollit officia aliquip. Consectetur non nisi Lorem in ipsum minim eiusmod minim non velit sit anim velit non. Dolor dolor qui aliquip commodo exercitation est excepteur laborum fugiat sint minim occaecat. Elit aliquip officia adipisicing nulla ullamco aliqua in nisi et excepteur excepteur cillum.\r\n",
      "name": "César"
    },
    {
      "_id": "630e46c44b58f8e8926a9f1e",
      "price": 13,
      "picture": "./assets/images/idefix.jpg",
      "description": "Eu reprehenderit Lorem officia cupidatat anim adipisicing anim occaecat irure adipisicing dolor irure. Minim dolore eiusmod veniam quis anim culpa ex minim nisi. Officia enim ullamco exercitation eu enim sit.\r\n",
      "name": "Idéfix"
    },
    {
      "_id": "630e46c4d8d5b710136aa506",
      "price": 22,
      "picture": "./assets/images/obelix.jpg",
      "description": "Dolor laboris culpa mollit nisi ea consequat aute pariatur esse in. Aute ea deserunt excepteur nulla magna eiusmod dolore. Cillum occaecat id nulla velit eu nostrud aliqua et. Ullamco culpa minim cupidatat tempor ea. Voluptate aliqua ex anim labore sit. Tempor eiusmod mollit irure excepteur adipisicing do incididunt excepteur magna laborum eiusmod occaecat reprehenderit. Sit et eiusmod quis laborum minim voluptate adipisicing.\r\n",
      "name": "Obélix"
    },
  ];

  constructor() { }
}
