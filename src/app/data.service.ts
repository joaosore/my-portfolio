import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class DataService
{
	eventEffectAnimate = new EventEmitter<any>();
	private effectAnimate: any = {};

	constructor(){}

	getItensVisiveis() {
		return this.effectAnimate;
	}

	setEffectAnimate(val: any) {
		this.effectAnimate = val;
		this.eventEffectAnimate.emit(val);
	}

}
