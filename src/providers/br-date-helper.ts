import { Injectable } from '@angular/core';
 
@Injectable()
export class BrDateHelper {

	constructor(){
	}

	add(days: number, months: number, years: number){
		let date = new Date();
		date = new Date(date.setDate(date.getDate() + days));
		date = new Date(date.setMonth(date.getMonth() + months));
		date = new Date(date.setFullYear(date.getFullYear() + years));
		return this.formatDate(date);
	}

	yesterday(){
		let date = new Date();
		date = new Date(date.setDate(date.getDate()-1));
		return this.formatDate(date);
	}
	
  today(){
		let date = new Date();
		return this.formatDate(date);
	}

	tomorrow(){
		let date = new Date();
		date = new Date(date.setDate(date.getDate()+1));
		return this.formatDate(date);
	}
  
  dateDiff(greaterDate: string, lesserDate: string){
		let ma = this.parseDate(greaterDate);
		let me = this.parseDate(lesserDate);

		let ret: any = {
			'years': ma.getFullYear() - me.getFullYear() > 0 ? ma.getFullYear() - me.getFullYear() : 0,
			'months': ma.getMonth() - me.getMonth() >= 0 ? ma.getMonth() - me.getMonth() : ma.getMonth() - me.getMonth() + 12,
			'days': ma.getDate() - me.getDate() >= 0 ? ma.getDate() - me.getDate() : ma.getDate() - me.getDate() + this.serializeNegativeDays(me.getMonth()+1)
		};

		if (ma.getMonth() < me.getMonth())
			ret.years -= 1;
		else if (ma.getMonth() == me.getMonth())
			if (ma.getDate() < me.getDate())
				ret.years -= 1;

		if (ma.getMonth() > me.getMonth())
			if (ma.getDate() < me.getDate())
				ret.months -= 1;

		return ret;
  }
	
	private formatDate(date: Date){
		let ret: any = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
		ret += "/";
		ret += date.getMonth()+1 >= 10 ? date.getMonth()+1 : "0"+(date.getMonth()+1);
		ret += "/";
		ret += date.getFullYear();

		return ret;
	}

	private parseDate(date: string){
		let dia = Number.parseInt(date.split("/")[0]);
		let mes = Number.parseInt(date.split("/")[1]) - 1;
		let ano = Number.parseInt(date.split("/")[2]);
		let ret: any = new Date(ano, mes, dia);

		return ret;
	}

	private serializeNegativeDays(month){
		switch(month)
		{
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				return 31;
			case 2:
				return 28;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
		}
	}
}