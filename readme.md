# BR Date Helper

This is a simple Date Formater for Brazilian Date Format.

## Installing via NPM

```bash
npm install br-date-helper
```

## Using this helper in an Ionic app

```typescript
// Import the Helper on app.module.ts
import { BrDateHelper } from 'br-date-helper';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
  ],
  entryComponents: [
    // ..
  ],
  providers: [
    BrDateHelper
  ]
})
export class AppModule {}
```

Once you have imported the helper, you can use it inside your pages like this:

```typescript
// Import the Helper on your page
import { BrDateHelper } from '../../../node_modules/br-date-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  whatDayIsIt() {
    console.log(this.brDateHelper.today());
  }

}
```

## Documentation
### Methods
| Name | params | return |
| ------ | ------ | ------ |
| add | days, months, years | string |
| dateDiff | greaterDate, lesserDate | string |
| today |  | string |
| tomorrow|  | string |
| yesterday |  | string |

### Examples
```typescript
export class HomePage {

  constructor(public navCtrl: NavController, public brDateHelper: BrDateHelper) {

  }

  // Those examples was taken at 07-30-2018
  console.log(this.brDateHelper.yesterday()); //outputs: "29/07/2018"

  console.log(this.brDateHelper.today()); //outputs: "30/07/2018"

  console.log(this.brDateHelper.tomorrow()); //outputs: "31/07/2018"

  console.log(this.brDateHelper.dateDiff(this.brDateHelper.today(), "30/06/2018")); //outputs: {years: 0, months: 1, days: 1}

  console.log(this.brDateHelper.dateDiff(this.brDateHelper.today(), "22/08/1995")); //outputs: {years: 22, months: 11, days: 8}

  console.log(this.brDateHelper.add(3, 3, 1)); //outputs: "02/11/2019"

  console.log(this.brDateHelper.add(-15, 0, -1)); //outputs: "15/7/2017"
}
```