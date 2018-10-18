import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import {
trigger,
state,
style,
animate,
transition
} from '@angular/animations';

import { DataService } from '../data.service';

@Component({
	selector: 'app-bg',
	templateUrl: './bg.component.html',
	styleUrls: ['./bg.component.scss'],
	animations: [
		trigger('bgAnimate', [
			state('minify', style({
				width: '615px',
				height: '700px',
			    transform: 'translateX(88.12%) translateY(75%)'
			})),
			state('extend',   style({
				width: '100%',
				height: '100%',
				transform: 'translateX(0) translateY(0)'
			})),
			transition('minify => extend', animate('600ms ease-out')),
			transition('extend => minify', animate('1000ms ease-in'))
		])
	]
})

@Injectable()
export class BgComponent implements OnInit {

	effectAnimate: any = {};
	effect: string = 'extend';
	home: boolean = false;
	about: boolean = false;

	constructor(private DataService: DataService){}

	ngOnInit()
	{
		this.DataService.eventEffectAnimate.subscribe(
			event => this.setEffectAnimate(event)
		);
	}

	setEffectAnimate(visibilidade: any)
	{
		this.effectAnimate = visibilidade;
	}

	get animete()
	{
		switch (this.effectAnimate.btn) {
			case "home": 
				this.home = this.effectAnimate.status;
				this.effect = 'extend';
				break;
			case "about":
				this.about = this.effectAnimate.status;
				this.effect = 'minify';
				break;
		}
		return this.effect;
	}

}
