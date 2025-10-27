import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FS_PROGRESS_CONFIG } from '../progress.providers';


@Injectable()
export class FsProgressService {
  dialog = inject(MatDialog);
  private config = inject(FS_PROGRESS_CONFIG);
}
