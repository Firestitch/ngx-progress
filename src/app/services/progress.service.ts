import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FS_PROGRESS_CONFIG } from '../progress.providers';


@Injectable()
export class FsProgressService {

  constructor(
    public dialog: MatDialog,
    @Inject(FS_PROGRESS_CONFIG) private config,
  ) {}
}
