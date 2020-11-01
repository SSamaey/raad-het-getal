import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatButtonModule, 
        MatInputModule,
        MatBadgeModule,
        MatCardModule,
    ],
    exports: [
        MatButtonModule, 
        MatInputModule,
        MatBadgeModule,
        MatCardModule,
    ]
})
export class MaterialModule {}