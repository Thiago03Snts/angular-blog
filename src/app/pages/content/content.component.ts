import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/DataFake/dataFake';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  photoCover:string = "https://www.aereo.jor.br/wp-content/uploads/2010/05/Star-Wars-The-Empire-Strikes-Back-2.jpg";
  
  contentTitle:string = " EXEMPLO DE TÍTULO ";
  //@Input()
  contentDescription:string = " EXEMPLO DE TEXTO";

  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter((article: { id: string | null; }) =>{
      return article.id == id;
    })[0]  
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
