import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app-service.service';
import { TvShow } from '../app.interface';
import { faLessThan, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvShowDetailsComponent implements OnInit {
  tvShowList: TvShow[] = [];
  id: number;
  icon = {
    back: faLessThan,
    rating: faStar,
  };
  tvShow: TvShow;
  episodes: any;

  constructor(
    private _appService: AppService,
    private _cd: ChangeDetectorRef,
    private _ar: ActivatedRoute
  ) {
    this.id = this._ar.snapshot.params['id'];
  }

  get hasDetails(): boolean {
    return this?.tvShow && Object.keys(this.tvShow).length > 0;
  }

  ngOnInit() {
    this._getShows();
  }

  getGenre(): string {
    return this.tvShow.genres.join(', ');
  }

  private _getShows() {
    this._appService.getShowDetails(this.id).subscribe((res: TvShow) => {
      console.log(res);
      this.tvShow = res;
      this._cd.markForCheck();
    });
  }
}
