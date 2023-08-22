import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient){}

  cadastrarUsuario(form:any){
   
    this.http.post('http://localhost:3000/clientes', form.value, this.httpOptions).subscribe();

    setTimeout(this.refresh, 2000);
  }

  refresh(){
    location.reload();
  }
}
