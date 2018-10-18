import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as anime from 'animejs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public elemente_left = '{';
	public elemente_rigth = '}';

	public animeShow: string;
	public animeHide: string;

	constructor()
	{

	}

	ngOnInit()
	{
		this.startStopMusic();
		$('body, html').addClass('hiddenOverflow');
		$('.bg').removeClass('about');
	}

	startStopMusic()
	{

		function volume(element, type)
		{
			var i = 10;
			if(type == 'DOWN')
			{
				let musicBG = setInterval(() => {
					$(element).prop("volume", i/10);
					i = i - 1;
					if(i == 0)
					{
						$(element)[0].pause();
						clearInterval(musicBG);
					}
				},100);
			}

			var j = 1;
			if(type == 'UP')
			{
				let musicBG = setInterval(() => {
					$(element).prop("volume", j/10);
					j = j + 1;
					if(j == 11)
					{
						$(element)[0].play();
						clearInterval(musicBG);
					}
				},100);
			}
		}

		$(document).ready(function() {
			$("html").mouseenter(function() {
				volume("#audio-bg", 'UP');
			}).mouseleave(function() {
				volume("#audio-bg", 'DOWN');
			});
		});
	}

	activeFrontBack()
	{
		$("#audio-click")[0].play();
		var els = document.querySelectorAll('.box-code .line-code span');
		this.animeShow = anime({
			targets: els,
			opacity: 1,
			delay: function(el, i, l) {
				return i * 2.3;
			}
		});
		$('.mask').addClass('active');
		$('.engineer .box-description').addClass('disable');
	}

	inativeFrontBack()
	{
		var audio = $('#audio-click')[0];
		audio.pause();
		audio.currentTime = 0

		var els = document.querySelectorAll('.box-code .line-code span');
		this.animeHide = anime({
			targets: els,
			opacity: 0,
			delay: function(el, i, l) {
				return i *  2.3;
			}
		});
		$('.mask').removeClass('active');
		$('.engineer .box-description').removeClass('disable');
	}

}
