import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CollectionData } from '../../interface/collections.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent implements OnChanges{
  @Input() collections: CollectionData[] = [];
  @Output() symbolSelected = new EventEmitter<string>();

  selectedSymbolControl = new FormControl<string | null>(null);

  changeSymbol(): void {
    const selectedValue = this.selectedSymbolControl.value;

    if (selectedValue) {
      this.symbolSelected.emit(selectedValue);
    } else {
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collections'] && this.collections.length > 0 && !this.selectedSymbolControl.value) {
      const defaultSymbol = 'AUD/CAD';
      const defaultInstrument = this.collections.find(i => i.symbol === defaultSymbol);

      if (defaultInstrument) {
        this.selectedSymbolControl.setValue(defaultInstrument.symbol);
      } else {
        this.selectedSymbolControl.setValue(this.collections[0].symbol);
      }
      }
  }
}
