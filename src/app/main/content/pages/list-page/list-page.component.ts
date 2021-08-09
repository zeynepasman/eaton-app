import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'title', 'active'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('header')
  header: ElementRef;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ListService} _listService
   * @param {MatSnackBar} _snackBar
   */

  constructor(
    private _listService: ListService,
    private _snackBar: MatSnackBar
  ) {
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit() {
    this._listService.getDevices().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        this._snackBar.open(`${error}`, 'OK', {
          verticalPosition: 'bottom',
          duration: 10000,
        });
      }
    );

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
