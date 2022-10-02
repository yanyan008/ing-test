import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../app-service.service';
import { TvShow, TvShowSearch } from '../app.interface';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowListComponent implements OnInit {
  icon = {
    search: faMagnifyingGlass,
    rating: faStar,
  };
  search: string;
  tvShowList: TvShow[] = [];
  TvShowSearchList: TvShowSearch[] = [];

  constructor(
    private _appService: AppService,
    private _cd: ChangeDetectorRef
  ) {}

  get hasTvShowList() {
    return this.tvShowList.length > 0;
  }

  get hasTvShowSearchList() {
    return this.TvShowSearchList.length > 0;
  }

  ngOnInit(): void {
    this._getShows();
  }

  onSearch(e: KeyboardEvent) {
    const code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      if (this.search.trim() === '') {
        this._getShows();
      } else {
        this._searchShow();
      }
    }
  }

  private _searchShow() {
    this.tvShowList = [];
    this._appService
      .searchShow(this.search)
      .subscribe((res: TvShowSearch[]) => {
        console.log(res);
        this.TvShowSearchList = res;
        this._cd.markForCheck();
      });
  }

  private _getShows() {
    this.TvShowSearchList = [];
    this._appService.getShows().subscribe((res: TvShow[]) => {
      console.log(res);
      this.tvShowList = res;
      this._cd.markForCheck();
    });
  }
}
