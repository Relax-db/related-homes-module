**how to replicate these results**
----
* **Step: 1** node server/index2.js
* **Step: 2** node speedTest.js

*  **Sample Results** <br />
```javascript
  Added house in 116 ms
  Made one house with id: 01ee4728-b9b9-4bcd-8189-fd5feb63a830
  GET Related Homes in 12 ms
  Related homes [ { id: '4c915192-0b1f-49c8-8c05-0742a7e1a2ed',
      beds: '4 beds 0 baths',
      description: 'cool house',
      location: '94070',
      photo: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      price: '1000',
      rating: '2.78 (1000)' },
    { id: '4b157c88-ce42-4c2c-b34a-f80bfe90d267',
      beds: '3 beds 2 bath',
      description: 'cool house',
      location: '94070',
      photo: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      price: '299',
      rating: '2.78 (1000)' },
    { id: '23f6deb6-52f0-476e-8b65-b037ddd95e3b',
      beds: 'Entire House - 4 beds',
      description: 'Charming Tropical Farmhouse',
      location: '94070-4128',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/na_barra.jpg',
      price: '$560.00',
      rating: '3.13 (2692)' },
    { id: '8abbd7d4-9844-4e5a-9583-530385218c7a',
      beds: 'Private Room - 3 bed(s)',
      description: 'Private Cozy Oasis',
      location: '94070-5102',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/villa_5.jpg',
      price: '$402.00',
      rating: '3.86 (5823)' },
    { id: 'eb22945b-b41b-4f21-b0c9-b47141b68c2c',
      beds: 'Entire Apartment - 6 beds',
      description: 'Magical Cozy Cabin',
      location: '94070',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/modern_tree_dwelling.jpg',
      price: '$723.00',
      rating: '3.62 (1296)' },
    { id: '9f25c896-fccd-4977-a88f-69819fe1df06',
      beds: 'Private Room - 3 bed(s)',
      description: 'Charming Lively Apartment',
      location: '94070',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/north_iceland.jpg',
      price: '$202.00',
      rating: '4.31 (6067)' },
    { id: '37350fb1-ee7b-4ba7-8508-f15a9a90ed4d',
      beds: '3 beds 2 bath',
      description: 'cool house',
      location: '94070',
      photo: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      price: '299',
      rating: '2.78 (1000)' },
    { id: 'b507c72d-6cb0-440c-8e7c-7855c9dbb261',
      beds: 'Entire Apartment - 7 beds',
      description: 'Romantic City Cottage',
      location: '94070-5752',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/tantilize.jpg',
      price: '$771.00',
      rating: '3.79 (8140)' },
    { id: '7a5ec6aa-6b24-4069-9708-265a75f506e1',
      beds: 'Entire Villa - 9 beds',
      description: 'Luxurious Desert Home',
      location: '94070-9335',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/tantilize.jpg',
      price: '$914.00',
      rating: '3.63 (3728)' },
    { id: '7c62ab91-312d-4f7d-af6f-a571384ed848',
      beds: 'Entire Apartment - 10 beds',
      description: 'Stylish Quiet Yurt',
      location: '94070-9497',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/cosmos_room.jpg',
      price: '$529.00',
      rating: '4.52 (5991)' },
    { id: '64aa71ca-5984-4741-92f5-8a22f9a9f0db',
      beds: 'Entire Villa - 2 beds',
      description: 'Incredible Spacious Ranch',
      location: '94070-8065',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/romantic_apt.jpg',
      price: '$640.00',
      rating: '3.36 (9531)' },
    { id: 'd98bda48-e191-43e8-9723-2634f66fe4dd',
      beds: 'Entire House - 5 beds',
      description: 'Beautiful Beach Pied-à-Terre',
      location: '94070-5810',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/super_cute_retro_airstream.jpg',
      price: '$107.00',
      rating: '4.23 (1536)' },
    { id: 'd104fcff-80ab-4b1b-92f4-cef319f08bf9',
      beds: 'Private Room - 3 bed(s)',
      description: 'Georgeous Forest Ecolodge',
      location: '94070-8528',
      photo: 'https://relaxly-photos.s3-us-west-1.amazonaws.com/cabane_lalegende.jpg',
      price: '$315.00',
      rating: '3.45 (3990)' } ]
  house was updated in 5 m
  house was deleted in 3 m
  go check for house at id: 01ee4728-b9b9-4bcd-8189-fd5feb63a83
  Total elapsed time for 4 chained CRUD operations 138 ms