import { RasporedService } from './../../services/raspored.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  items: String[] = new Array();
  raspored;
  displayedColumns = ['predmet', 'nastavnik', 'tip', 'termin', 'ucionica', 'grupe'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  constructor(private RasporedService: RasporedService) { }

  ngOnInit() {
    this.RasporedService.getGroups().subscribe(
      response => {
        let groups = JSON.stringify(response).replace("[","").replace(new RegExp('"', 'g'),"").replace("]","");
        let groupsSplit: String[] = groups.split(",");
        groupsSplit.forEach( element => {
          element = element.trim();
          if(!this.items.includes(element))
            this.items.push(element);
        })
        console.log(this.items);
      },
      error => {

      }
    );

    this.RasporedService.getAll().subscribe(
      response => {
        console.log(response);
        this.raspored = JSON.parse(JSON.stringify(response));
        this.dataSource = new MatTableDataSource(this.raspored);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {

      }
    );
  }

  submitForm(f) {
    console.log(f.value);
    this.RasporedService.getByFilters(f.value).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  potvrdiGrupu(f) {
    let user: User = JSON.parse(sessionStorage.getItem("User"));
    user.grupa = f.value.grupa;
    this.RasporedService.updateUser(user).subscribe(
      response => {
        console.log("User updated");
      }
    )
  }

}
