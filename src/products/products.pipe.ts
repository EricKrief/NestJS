import { Injectable, PipeTransform, BadRequestException, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class ProductsPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        if (value === '3') {
            return 3000;
        }
        return value;
    }

}