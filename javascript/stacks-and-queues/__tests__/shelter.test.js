'use strict';

const AnimalShelter = require('../shelter.js');

describe('Animal Shelter', () => {

  xit('should instantiate an empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.length).toEqual(0);
  })

  it('should return the first cat or dog that suits the preference', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({pref: 'cat', name: 'Petey'});
    shelter.enqueue({pref: 'dog', name: 'Sam'});
    shelter.enqueue({pref: 'dog', name: 'Tulip'});
    shelter.enqueue({pref: 'cat', name: 'Lemon Wedge'});

    const results = shelter.dequeue('dog');
    console.log('first option', results);
    expect(results.pref).toEqual('dog');
    expect(results.name).toEqual('Sam');
  })

  xit('should enqueue a new animal to the shelter', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({pref: 'cat', name: 'Petey'});
    expect(shelter.animalList.head.data.name).toEqual('Petey');
  })

  xit('should should return NULL if preference is not dog or cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({pref: 'cat', name: 'Petey'});

    const results = shelter.dequeue('bird')
    expect(results).toEqual('NULL')
  })

  xit('should return the animal that has been waiting the longest if no preference is given', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({pref: 'cat', name: 'Petey'});
    shelter.enqueue({pref: 'dog', name: 'Sam'});
    shelter.enqueue({pref: 'dog', name: 'Tulip'});
    shelter.enqueue({pref: 'cat', name: 'Lemon Wedge'});

    const results = shelter.dequeue(null);
    expect(results.name).toEqual('Petey');
  })

})