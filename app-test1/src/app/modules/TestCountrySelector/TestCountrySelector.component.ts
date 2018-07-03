import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-county-selector',
  templateUrl: './TestCountrySelector.component.html',
})

export class TestCountrySelector {
  countrylist: any[];
  selected = {};

  ngOnInit() {
    this.selected = { "name": "Afghanistan", "code": "AF" };
    this.countrylist = [
      { "name": "Afghanistan", "code": "AF" },
      { "name": "Åland Islands", "code": "AX" },
      { "name": "Albania", "code": "AL" },
      { "name": "Algeria", "code": "DZ" },
      { "name": "American Samoa", "code": "AS" },
      { "name": "AndorrA", "code": "AD" },
      { "name": "Angola", "code": "AO" },
      { "name": "Anguilla", "code": "AI" },
      { "name": "Antarctica", "code": "AQ" },
      { "name": "Antigua and Barbuda", "code": "AG" },
      { "name": "Argentina", "code": "AR" },
      { "name": "Armenia", "code": "AM" },
      { "name": "Aruba", "code": "AW" },
      { "name": "Australia", "code": "AU" },
      { "name": "Austria", "code": "AT" },
      { "name": "Azerbaijan", "code": "AZ" },
      { "name": "Bahamas", "code": "BS" },
      { "name": "Bahrain", "code": "BH" },
      { "name": "Bangladesh", "code": "BD" },
      { "name": "Barbados", "code": "BB" }
    ]
  }
  test() {
    console.log(JSON.stringify(this.selected));
  }
}
