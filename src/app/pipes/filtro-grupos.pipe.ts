import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGrupos'
})
export class FiltroGruposPipe implements PipeTransform {

	transform(value: any, arg: any): any {
		const resultGroups = [];


		if (arg === '' || arg.length < 2){
			return value;
		} 

		for (const group of value) {
			if ( group.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
				resultGroups.push(group);
			};
		};
		return resultGroups;
	}

}
