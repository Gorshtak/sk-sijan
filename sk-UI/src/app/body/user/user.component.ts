import { RasporedService } from './../../services/raspored.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


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
    console.log("raddiiiii");
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
    )
  }

}
