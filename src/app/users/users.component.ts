import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { 
    this.filteredData=this.userData;
  }

  ngOnInit() {
  }

  userData= [
    {
      id:"1",
      firstName:"Adrian",
      lastName:"Sumagang",
      occupation:"Student",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"2",
      firstName:" Jayson",
      lastName:"Custodio",
      occupation:"Student",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"3",
      firstName:"Vanessa",
      lastName:"Pasaan",
      occupation:"Teacher",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"4",
      firstName:"Richie",
      lastName:"Jimenez",
      occupation:"Staff",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"5",
      firstName:"Rolito",
      lastName:"Valles",
      occupation:"Father",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"6",
      firstName:"Karen",
      lastName:"Carabuena",
      occupation:"Cook",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"7",
      firstName:"Neson",
      lastName:"Mendes",
      occupation:"Singer",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"8",
      firstName:"Kaith",
      lastName:"C",
      occupation:"Student",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"9",
      firstName:"Alvilen",
      lastName:"Sumagang",
      occupation:"Student",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  },
  {
      id:"10",
      firstName:"Alvin",
      lastName:"Sumagang",
      occupation:"Student",
      profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
  }
  ]

  searchText:string;

  filteredData:any[];

  onSearch(){
    console.log(this.searchText);

    const searchText=this.searchText.toLowerCase();
    if(this.searchText){
      this.filteredData= this.userData.filter((user)=>{
        return user.firstName.toLowerCase().includes(searchText) ||
      user.lastName.toLowerCase().includes(searchText) ||
      user.occupation.toLowerCase().includes( searchText);
      });
    }
    else{
      this.filteredData=this.userData;
    }
  }

}
