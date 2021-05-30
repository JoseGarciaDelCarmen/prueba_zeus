import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

	constructor(
		private servGroups: GruposService,
	) { }
	

	selectedAll: boolean = true;
	employees: any =[];
	grupos: any = [];
	filterGroups = '';
	nameOfGroup: string = '';
	employeesEmpty: boolean = false;

	ngOnInit(): void {
		this.getGroups();
  	}

	deleteGroupSelected(){
		this.nameOfGroup = '';
		this.getGroups();
		this.employees = [];
	}

	selectAll() {
		for (var i = 0; i < this.employees.length; i++) {
		  	this.employees[i].selected = this.selectedAll;
		}
	}

	checkIfAllSelected() {
		this.selectedAll = this.employees.every(function(item:any) {
			return item.selected == true;
		})
	}

	printAllSelected(){
		console.clear();
		for (var i = 0; i < this.employees.length; i++) {
			if(this.employees[i].selected){
				console.log(this.employees[i].name)
			}
		}
	}

	getGroups(){
		this.servGroups.getGroups().subscribe((res: any) => {
			this.grupos = res.data.groups;
		});
	}

	getOneGroup(groupId: string){
		this.servGroups.getOneGroup(groupId).subscribe(
			(res) => {
				this.employees = (res as any).data.employees;
				this.getGroups();
				this.selectAll();
			},
			(err) => {
				if(err.error == "The specified key does not exist."){
					this.deleteGroupSelected();
					this.employeesEmpty = true;
				}
			}
		);
	}



	drop(event: CdkDragDrop<string[]>) {		
		if (event.previousContainer === event.container) {
		  	moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
								event.container.data,
								event.previousIndex,
								event.currentIndex);
			this.employeesEmpty = false;
			var groupId = event.item.element.nativeElement.innerText.replace(/\D/g,'');
			this.nameOfGroup = event.item.element.nativeElement.innerText;
			this.getOneGroup(groupId);
		}
	}

}
