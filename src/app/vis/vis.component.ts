import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ElementRef, Renderer2 } from '@angular/core';
import { PopoverModule, PopoverConfig, PopoverDirective } from 'ngx-bootstrap';
import { DatamanagerService } from '../service/datamanager.service';
import { ParadiseNode } from '../model/paradise-node';
import { ApiService } from '../service/api.service';
declare var vis:any;

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.css']
})

export class VisComponent implements OnInit {
  paradiseDataForm: FormGroup;
  ids:string[]=['Select','123','456'];
  filters:string[]=['No Filter','Same Address','Is Entity Of','Is Intermediary Of','Is Officer Of','Other'];
  selectedId:string='';
  selectedFilter:string='No Filter';

  @ViewChild("siteConfigNetwork", {static: false}) networkContainer: ElementRef;
  //@ViewChild("svgNetwork", {static: false}) svgNetworkContainer: ElementRef;

  public network: any;

  constructor(
    private dataManagerService:DatamanagerService,
    private formBuilder: FormBuilder,
    private apiService:ApiService
  ) { }

  ngOnInit() {
    console.log(this.ids);
  }

  ngAfterViewInit(){
    var treeData = this.getTreeData();
    this.loadVisTree(treeData);     // RENDER STANDARD NODES WITH TEXT LABEL
  }

  loadVisTree(treedata) {
    var options = {
      interaction: {
        hover: true,
      },
      manipulation: {
				enabled: true
			}
    };
    var container = this.networkContainer.nativeElement;
    this.network = new vis.Network(container, treedata, options);
    var that = this;
    this.network.on("click", params => {
      var ids = params.nodes;
      console.log('Click event:', this.dataManagerService.getNodes()[ids-1]);      
    });
  }

  getTreeData() {   
    var treeData = {
      nodes: this.dataManagerService.getNodes(),
      edges: this.dataManagerService.getEdges()
    };
    return treeData;
  }

  getSelectedId(selected){
    console.log(selected);
    this.selectedId=selected;
  }

  getSelectedFilter(selected){
    console.log(selected);
    this.selectedFilter=selected;
  }

  applyFilter(){
    console.log('In Apply Filter');
    this.dataManagerService.applyEdgeFilter(this.selectedFilter);
    var treeData = this.getTreeData();
    this.loadVisTree(treeData); 
  }

  populateGraph(){
    console.log('In Populate Graph');
    this.apiService.getAllNodeIds();
  }
//   
}

    // this.network.on("hoverNode", function (params) {          
    //   console.log('hoverNode Event:', params.nodes);
    // });
    // this.network.on("blurNode", function(params){
    //   console.log('blurNode event:', params);      
    // });

   
