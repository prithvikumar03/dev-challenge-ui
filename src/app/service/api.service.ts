import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ParadiseNode } from '../model/paradise-node';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  public getNodeConnections(paradiseNode:ParadiseNode){
    console.log(JSON.stringify(paradiseNode));
    let temp = this.httpClient.get("/mongosteen-quicklook/rest/evaluation/"+paradiseNode.id+"/simulationUids");        
    console.log(temp);
    return temp;
  }

  public getAllNodeIds(){
    let temp = this.httpClient.get("/mongosteen-quicklook/rest/evaluation/nodeIds");        
    console.log(temp);
    return temp;
  }
}
