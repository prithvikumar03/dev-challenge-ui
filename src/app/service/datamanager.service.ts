import { Injectable, OnInit } from '@angular/core';
import { ParadiseNode } from '../model/paradise-node';

@Injectable({
  providedIn: 'root'
})
export class DatamanagerService implements OnInit{
  
  constructor() { 
    this.filteredEdges=this.edges;
  }
 
  private nodes =[
    {id:1, label: '8043356', address: 'Node 1', entity: 'I am node 1 X',intermediary:'qw',officer:'as',other:'zx',title: 'node1'},
    {id:2, label: '6043356', address: 'Node 2', entity: 'I am node 2 X',intermediary:'we',officer:'sd',other:'xc',title: 'node2'},
    {id:3, label: '5556743', address: 'Node 3', entity: 'I am node 3 X',intermediary:'er',officer:'df',other:'cv',title: 'node3'},
    {id:4, label: '3042562', address: 'Node 4', entity: 'I am node 4 X',intermediary:'rt',officer:'fg',other:'vb',title: 'node4'},
    {id:5, label: '1023462', address: 'Node 5', entity: 'I am node 5 X',intermediary:'ty',officer:'gh',other:'bn',title: 'node5'}
  ];

  private edges = [
    {from: 1, to: 3, title: 'address'},
    {from: 1, to: 2, title: 'name'},
    {from: 2, to: 4, title: 'intermediary'},
    {from: 2, to: 5, title: 'other'}
  ];

  private filteredEdges=[];

  ngOnInit(): void {
    
  }

  getNodes():ParadiseNode[]{
    return this.nodes;
  }

  getEdges(){
    return this.filteredEdges;
  }

  updateNodes(nodeData:ParadiseNode[]){
    this.nodes=[];
    this.nodes=nodeData;
  }

  updateEdges(edgeData){
    this.edges=[];
    this.edges=edgeData;
  }

  applyEdgeFilter(filterType:string){
    this.filteredEdges=[];
    this.getEdges().forEach(element => {
      console.log('Comparing:::',filterType.toLowerCase(),element.title);
      if(filterType.toLowerCase().includes(element.title.toLowerCase())){
        this.filteredEdges.push({from:element.from,to:element.to,title:element.title});
      }
    });

  }

}
