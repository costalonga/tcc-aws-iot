import { Component, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-pt3-ang-amplify';
  user: CognitoUserInterface | undefined;
  authState!: AuthState;

  constructor(private ref: ChangeDetectorRef) {}

  // CHECK ISSUE: https://forum.ionicframework.com/t/aws-amplify-authenication-using-pre-built-ui-components/208433/7

  ngOnInit () {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
