import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective{
    queryParam = input<string>();
    constructor(){
       console.log("Safe Link Directive is Active");
    }

    onConfirmLeavePage(event: MouseEvent){
        const address = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
        
        const wantsToLeave = window.confirm("Do you want to leave this page?");
        if(!wantsToLeave){
            event.preventDefault();
        }
    }
}