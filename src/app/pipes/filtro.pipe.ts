import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

	transform(value: any, arg: any): any {
		const resultEmployees = [];


		if (arg === '' || arg.length < 2){
			return value;
		} 

		for (const employee of value) {
			if (
				(employee.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) ||
				(employee.last_name.toLowerCase().indexOf(arg.toLowerCase()) > -1)
			){
				resultEmployees.push(employee);
			};
		};
		return resultEmployees;
	}

}
