import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BgComponent } from '../bg/bg.component';
import { DataService } from '../data.service';


import { filter } from 'rxjs/operators';

import * as $ from 'jquery';
import * as Vivus from 'Vivus';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit
{

	currentUrl: string;
	status = false;

	constructor(private router: Router, private DataService: DataService)
	{
		router.events.subscribe((_: NavigationEnd) => {
			if(_.url != undefined)
			{
				this.currentUrl = _.url;
			}
		});
	}

    ngOnInit()
    {
		this.logo();
    }
	
    logo()
	{
		new Vivus('my-svg', {
		    type: 'delayed',
		    duration: 100
		}, function(this){
			$(this.el).find('path').css('fill', '#FFF');
		})
	}

	animate($btn)
	{
		this.status = !this.status;
		this.DataService.setEffectAnimate({'btn': $btn, status: this.status});
	}

}
