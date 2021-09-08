import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  
  menubarItems: any[];
  dockItems: any[];
  displayFinder: boolean;
  title : string;
  userComponent : boolean;


  constructor(private Router: Router){
      this.menubarItems = [];
      this.dockItems= [];
      this.displayFinder= false;
      this.title = 'ini title';
      this.userComponent = false;
  }

  ngOnInit(){
      this.onSetMenubar()
      this.onSetDocItem()
  }
  cekIsHome() {
      if (this.Router.url !== "/"){
          return false;
      }
      return true;
  }

  onSetMenubar(){
    this.menubarItems = [
        {
            label: 'Finder',
            className: 'menubar-root'
        },
        {
            label: 'File',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',
                    command: () =>{
                        this.userComponent = true;
                    }

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit'
        },
        {
            label: 'Tools',
            items: [ 
                {
                    label: 'Calculator',
                    icon: 'pi pi-fw pi-book'
                },
                {
                    label: 'Contact Us',
                    icon: 'pi pi-fw pi-phone'
                },
                {
                    label: 'License',
                    icon: 'pi pi-fw pi-credit-card',
                    command: ()=>{
                        this.Router.navigateByUrl('/license')
                    }
                },
            ]
        },
        {
            label: 'Social Media',
            items: [ 
                {
                    label: 'Facebook',
                    icon: 'pi pi-fw pi-facebook'
                },
                {
                    label: 'Twitter',
                    icon: 'pi pi-fw pi-twitter'
                },
                {
                    label: 'Youtube',
                    icon: 'pi pi-fw pi-youtube'
                },
                {
                    label: 'Github',
                    icon: 'pi pi-fw pi-github'
                },
                {
                    label: 'Amazon',
                    icon: 'pi pi-fw pi-amazon'
                },
                {
                    label: 'PayPal',
                    icon: 'pi pi-fw pi-paypal'
                }
            ]
        }
    ];
  }
  
  onSetDocItem(){
    this.dockItems = [
        {
            label: 'Finder',
            tooltipOptions: {
                tooltipLabel: "Finder",
                tooltipPosition: 'top',
                positionTop: -15,
                positionLeft: 15
            },
            icon: "assets/finder.svg",
            command: () => {
                this.displayFinder = true;
            }
        }
    ];
}

  
}



