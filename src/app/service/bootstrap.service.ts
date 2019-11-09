import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

nodes =[
    {id: 1, label: 'Node 1', title: 'I am node 1! <br> X'},
    {id: 2, label: 'Node 2', title: 'I am node 2!',officer:'Y'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
];

edges = [
    {from: 1, to: 3, title: 'hello there'},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
];

  constructor() { }
}
