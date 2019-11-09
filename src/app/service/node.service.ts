import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ParadiseNode } from '../model/paradise-node';

@Injectable({
  providedIn: 'root'
})
export class GetConnectionsService {

  constructor(private httpClient:HttpClient) { }

  public getNodeConnections(paradiseNode:ParadiseNode){

    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});

    let body = new HttpParams();
    body = body.set('nodeId',paradiseNode.id);
    //body = body.set('ouputPath',downloadRequest.outputPath);

    console.log(JSON.stringify(paradiseNode));
    //return this.httpClient.get("http://127.0.0.1:5000/download",JSON.stringify(paradiseNode),{headers: headers});
  }

  public getAllNodeIds(){
    
  }
}
