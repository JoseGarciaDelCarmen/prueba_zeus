import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})

export class EmpleadosComponent implements OnInit {

	filterEmployees = '';
	actualPage: number = 1;
	employees: string[]=[];
	postForm1: any;

	constructor(
		private servEmployees: EmpleadosService,
		private fb1: FormBuilder
	) { }



	ngOnInit() {
		this.postForm1 = this.fb1.group({
			nombre: ['', [Validators.required, Validators.maxLength(30)]],
			apellidos: ['', [Validators.required, Validators.maxLength(30)]],
			año: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
			mes: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern("^[0-9]*$")]],
			día: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern("^[0-9]*$")]]
		});
		
		this.getEmployees()
	}

	getEmployees(){
		this.servEmployees.getEmployees().subscribe((res: any) => {
			this.employees = res.data.employees;
		});
	}

	submit() {
		if (!this.postForm1.valid) {
			return;
		}
		var name = this.postForm1.value.nombre;
		var last_name = this.postForm1.value.apellidos;
		var birthday = this.postForm1.value.año + '/' + this.postForm1.value.mes + '/' + this.postForm1.value.día;

		this.servEmployees.postEmployees(name, last_name, birthday).subscribe((res: any) => {
			if(res.success == true){
				this.getEmployees();
			}
		});
	}
}
