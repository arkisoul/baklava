import { Injectable } from '@angular/core';

declare let jQuery: any;
declare let $: any;

@Injectable()
export class InputNumberService {

    constructor() { }

    btnClick(parent: any): void {
        let fieldName = parent.getAttribute('data-field');
        let type = parent.getAttribute('data-type');
        let input = $("input[name='"+fieldName+"']");
        let currentVal = parseInt(input.val());

        if (!isNaN(currentVal)) {
            if (type == 'minus') {
                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                    $(".btn-number[data-type='plus'][data-field='"+fieldName+"']").removeAttr('disabled');
                }
                if(parseInt(input.val()) == input.attr('min')) {
                    parent.setAttribute('disabled', true);
                }
            }
            else if (type == 'plus') {
                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                    $(".btn-number[data-type='minus'][data-field='"+fieldName+"']").removeAttr('disabled');
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    parent.setAttribute('disabled', true);
                }
            }
        } else {
            input.val(0);
        }
    }

    inpFocusIn(input: any, target: any): void {
        target.setAttribute('oldValue', input.val());
    }

    inpKeyDown(e: any): void {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
           // Allow: Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) ||
           // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
               // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
    }

    inpChange(input: any, target: any): void {
        let minValue =  parseInt(input.attr('min'));
        let maxValue =  parseInt(input.attr('max'));
        let valueCurrent = parseInt(input.val());
        let name = input.attr('name');

        console.log(minValue, maxValue, valueCurrent);

        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled');
        } else {
            alert('Sorry, the minimum value was reached');
            input.val(target.getAttribute('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled');
        } else {
            alert('Sorry, the maximum value was reached');
            input.val(target.getAttribute('oldValue'));
        }
    }
}
