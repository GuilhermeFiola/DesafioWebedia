import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  isNavbarCollapsed: boolean = true;

  constructor(private renderer: Renderer2,
              private el: ElementRef) { }

  navbarToggler(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;

    const element = this.renderer.selectRootElement('.overlay');
    if(!this.isNavbarCollapsed){
      this.renderer.addClass(element, 'active');
    }else{
      this.renderer.removeClass(element, 'active');
    }
  }
}
