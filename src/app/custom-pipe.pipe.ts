import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(phoneNo ){

    let formatPhNo = "";
    let i = 0;

    for (; i < Math.floor(phoneNo.length) - 1; i++) {      
      if (i<=6){
        formatPhNo=formatPhNo+"*";
      }
    }
    return formatPhNo+phoneNo.substr(7,3);
  }
  
}
