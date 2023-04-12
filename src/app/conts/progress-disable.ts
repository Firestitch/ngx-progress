import { HttpContextToken } from "@angular/common/http"

export const FS_PROGRESS_DISABLE = new HttpContextToken<boolean>(() => false);