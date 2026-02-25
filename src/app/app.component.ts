import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { ToastMessageComponent } from "./shared/components/toast-message/toast-message.component"
import { ConfirmDialogModule } from "primeng/confirmdialog"
import { ConfirmationService, MessageService } from "primeng/api"
@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [RouterOutlet, ToastMessageComponent, ConfirmDialogModule],
  providers: [ConfirmationService,MessageService]
})
export class AppComponent {
  title = "init-app"
}
