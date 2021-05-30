import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

	constructor(
		private http: HttpClient
	) { }

  	/*
		Obtiene todos los grupos
	*/
	getGroups() {
		return this.http.get("https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/:jose_garcia");
	}

	/*
		Obtiene un grupo
	*/
	getOneGroup(groupId: string){
		return this.http.get(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:jose_garcia/getByGroup?id=${groupId}`);
	}


}
