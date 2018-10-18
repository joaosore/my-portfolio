import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

// Services
import { DataService } from '../data.service';

@Component({
selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

	btn: string = 'about';
	status: boolean = true;

	constructor(private DataService: DataService) { }

	ngOnInit() {
		$('body, html').removeClass('hiddenOverflow');
		$('.bg').addClass('about');
		this.DataService.setEffectAnimate({'btn': this.btn, status: this.status});
	}

}
