import { Directive, ElementRef , OnInit} from "@angular/core";
@Directive({
    selector: '[background-color]',
})
export class ColorDirective{
    constructor(el: ElementRef) {
        let x = el.nativeElement.style;
        this.getColor(x);
    }

    getColor(color){
        color.backgroundColor = this.makeRandomColor();
        setTimeout(() => {
            this.getColor(color);
        }, 2000);
    }
    makeRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
