import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // @Input() public hotelSearch;
  public hotelSearch = '';

  @Output() searchQueryEvent = new EventEmitter();

  constructor(private router:Router) { }

  searchQuery = (query:any) => {
    this.searchQueryEvent.emit(query);
  }

  clearSearch = () => {
    this.hotelSearch = '';
    this.searchQueryEvent.emit(this.hotelSearch);
  }
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }
  ngOnInit(): void {
  }

}