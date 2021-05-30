import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

	constructor(
		private http: HttpClient
	) { }

	/*
		Obtiene todos los empleados
	*/
	getEmployees() {
		return this.http.get("https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:jose_garcia");
	}

	/*
		Agrega un nuevo empleado
	*/
	postEmployees(name: String, last_name: String, birthday: String) {
		return this.http.post("https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:jose_garcia",  {
			'name': name,
			'last_name': last_name,
			'birthday': birthday
		})
	}
}
