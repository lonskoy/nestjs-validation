import { Injectable, CallHandler, NestInterceptor} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'


@Injectable()
export class logerInsterseptor implements NestInterceptor {
    constructor(private readonly reflector: Reflector) {}
    public intercept (contex: ExecutionContextHost, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => ({
                status: 'sucsess',
                data: data
            })),
            catchError((error) => 
                throwError(() => ({
                    status: 'fail',
                    data: error.response || error.message || 'Internal server error'
                })),
            ), 
        );
    }
}